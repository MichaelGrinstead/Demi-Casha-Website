"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useProduct } from "../../hooks/useProduct";

export default function ProductPage({ params }) {
  const { data: product, isLoading, error } = useProduct(params.slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="text-brown text-xl mt-24 text-center">
            Loading product...
          </div>
        </div>
      </main>
    );
  }

  if (error || !product) {
    notFound();
  }

  const nextImage = () => {
    if (product.content?.images && product.content.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === product.content.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (product.content?.images && product.content.images.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? product.content.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 mt-12 text-brown">
            {product.name}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative group">
              {product.content?.images && product.content.images.length > 0 && (
                <>
                  <div className="w-full h-96 overflow-hidden rounded-lg">
                    <Image
                      src={product.content.images[currentImageIndex].filename}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {product.content.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
                      >
                        <IoChevronBack size={20} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow-lg hover:shadow-xl transition-all opacity-0 group-hover:opacity-100"
                      >
                        <IoChevronForward size={20} />
                      </button>
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {product.content.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-white scale-125"
                                : "bg-white bg-opacity-60 hover:bg-opacity-80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              )}
            </div>

            <div>
              {product.content?.description && (
                <p className="text-lg text-gray-700 mb-6">
                  {product.content.description}
                </p>
              )}

              {product.content?.price && (
                <p className="text-3xl font-bold text-gray-800 mb-6">
                  ${product.content.price}
                </p>
              )}

              <button className="bg-brown text-white px-8 py-3 rounded-lg hover:bg-opacity-80 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
