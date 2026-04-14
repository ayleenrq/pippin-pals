import { toast } from "sonner";

const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'storeofelux.myshopify.com';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
const SHOPIFY_STOREFRONT_TOKEN = '8e18edb3275957d0ad9f47d8ab8bc5d8';

export const isShopifyConfigured = true;

const formatMoney = (amount, currencyCode) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode || 'USD',
  }).format(Number(amount || 0));

export async function storefrontApiRequest(query, variables = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status === 402) {
    toast.error("Shopify: Payment required", {
      description: "Shopify API access requires an active billing plan. Visit https://admin.shopify.com to upgrade.",
    });
    return;
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e) => e.message).join(', ')}`);
  }

  return data.data;
}

const normalizeProduct = (product) => {
  const variant = product.variants?.edges?.[0]?.node;
  const price = product.priceRange?.minVariantPrice || variant?.price;

  return {
    id: product.id,
    shopifyProductId: product.id,
    handle: product.handle,
    routeId: product.handle,
    name: product.title,
    price: price ? formatMoney(price.amount, price.currencyCode) : '',
    img: product.images?.edges?.[0]?.node?.url || '',
    description: product.description || '',
    variantId: variant?.id,
    availableForSale: product.availableForSale ?? true,
    source: 'shopify',
  };
};

export const STOREFRONT_PRODUCTS_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
        }
      }
    }
  }
`;

export const STOREFRONT_PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      title
      description
      handle
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }
      variants(first: 20) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      options {
        name
        values
      }
    }
  }
`;

export const getShopifyCollections = async () => {
  const data = await storefrontApiRequest(`
    query GetCollections {
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
          }
        }
      }
    }
  `);
  return data.collections.edges.map(({ node }) => node);
};

export const getShopifyProducts = async ({ first = 12, collectionHandle = null } = {}) => {
  let query = STOREFRONT_PRODUCTS_QUERY;
  let variables = { first };

  if (collectionHandle) {
    query = `
      query GetProductsFromCollection($first: Int!, $handle: String!) {
        collection(handle: $handle) {
          products(first: $first) {
            edges {
              node {
                id
                title
                description
                handle
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                images(first: 5) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      title
                      price {
                        amount
                        currencyCode
                      }
                      availableForSale
                      selectedOptions {
                        name
                        value
                      }
                    }
                  }
                }
                options {
                  name
                  values
                }
              }
            }
          }
        }
      }
    `;
    variables = { first, handle: collectionHandle };
  }

  const data = await storefrontApiRequest(query, variables);
  
  if (collectionHandle) {
    return data.collection?.products.edges.map(({ node }) => normalizeProduct(node)) || [];
  }
  
  return data.products.edges.map(({ node }) => normalizeProduct(node));
};

export const getShopifyProductByHandle = async (handle) => {
  const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
  return data.product ? normalizeProduct(data.product) : null;
};

export const createShopifyCheckout = async ({ variantId, quantity = 1 }) => {
  const data = await storefrontApiRequest(`
    mutation CartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `, {
    input: {
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  });

  const error = data.cartCreate.userErrors?.[0];
  if (error) {
    throw new Error(error.message);
  }

  return data.cartCreate.cart;
};

