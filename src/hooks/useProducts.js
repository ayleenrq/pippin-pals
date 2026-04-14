import { useEffect, useState } from 'react';
import { products as mockProducts } from '../data/mockData';
import { getShopifyProductByHandle, getShopifyProducts, isShopifyConfigured } from '../services/shopifyService';

const withFallbackFields = (product) => ({
  ...product,
  routeId: product.routeId || product.handle || String(product.id),
  source: product.source || 'mock',
});

const fallbackProducts = mockProducts.map(withFallbackFields);

export const useProducts = (collectionHandle = null) => {
  const [products, setProducts] = useState(fallbackProducts);
  const [isLoading, setIsLoading] = useState(isShopifyConfigured);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    const loadProducts = async () => {
      if (!isShopifyConfigured) {
        setIsLoading(false);
        return;
      }

      try {
        const shopifyProducts = await getShopifyProducts({ collectionHandle });

        if (isMounted) {
          if (shopifyProducts.length > 0) {
            setProducts(shopifyProducts);
          } else if (collectionHandle) {
             setProducts([]); // No products in this collection
          } else {
             setProducts(shopifyProducts);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load Shopify products.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProducts();

    return () => {
      isMounted = false;
    };
  }, [collectionHandle]);

  return { products, isLoading, error, isShopifyConfigured };
};

export const useProduct = (routeId) => {
  const decodedRouteId = decodeURIComponent(routeId || '');
  const fallbackProduct = fallbackProducts.find((product) => String(product.routeId) === decodedRouteId || String(product.id) === decodedRouteId);
  const [product, setProduct] = useState(fallbackProduct || null);
  const [isLoading, setIsLoading] = useState(Boolean(isShopifyConfigured && decodedRouteId && !fallbackProduct));
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      if (!isShopifyConfigured || !decodedRouteId || fallbackProduct) {
        setIsLoading(false);
        return;
      }

      try {
        const shopifyProduct = await getShopifyProductByHandle(decodedRouteId);
        if (isMounted) {
          setProduct(shopifyProduct);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load this product.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadProduct();

    return () => {
      isMounted = false;
    };
  }, [decodedRouteId, fallbackProduct]);

  return { product, isLoading, error };
};
