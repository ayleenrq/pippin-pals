const SHOPIFY_STOREFRONT_TOKEN = '8e18edb3275957d0ad9f47d8ab8bc5d8';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'storeofelux.myshopify.com';
const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;

async function getCollections() {
  const query = `{
    collections(first: 20) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }`;

  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

getCollections();
