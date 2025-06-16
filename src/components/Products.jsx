"use client";

import Link from "next/link";
import Image from "next/image";
import { useProducts } from "../hooks/useProducts";

export default function Products() {
  const { data: products, isLoading, error } = useProducts();

  return (
    <div className="grid grid-cols-2 lg:flex lg:flex-row gap-6 w-full p-6">
      {products &&
        products.map((product) => (
          <Link
            key={product.uuid}
            href={`/${product.slug}`}
            className="block lg:flex-1"
          >
            <div className="border-2 border-brown p-4 rounded-lg h-full">
              <h3 className="text-lg lg:text-xl font-semibold mb-3">
                {product.name}
              </h3>
              {product.content?.images && product.content.images.length > 0 && (
                <div className="mb-4 h-32 lg:h-48 overflow-hidden rounded">
                  <Image
                    src={product.content.images[0].filename}
                    alt={product.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              {product.content?.description && (
                <p className="text-gray-600 mb-4 text-sm lg:text-base">
                  {product.content.description}
                </p>
              )}
              {product.content?.price && (
                <p className="text-base lg:text-lg font-bold text-gray-800">
                  ${product.content.price}
                </p>
              )}
            </div>
          </Link>
        ))}
    </div>
  );
}
