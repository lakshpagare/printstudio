"use client";

import { useState } from "react";
import Image from "next/image";

import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductGallery({
  product,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <div className="flex flex-col-reverse gap-6 md:flex-row">
      {/* Thumbnails */}

      <div className="flex gap-3 md:flex-col">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image
                ? "border-blue-600"
                : "border-slate-200"
            }`}
          >
            <Image
              src={image}
              alt={`${product.title}-${index}`}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}

      <div className="relative flex-1 overflow-hidden rounded-3xl border bg-white">
        <div className="relative aspect-square w-full">
          <Image
            src={selectedImage}
            alt={product.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            priority
            className="object-contain p-8 transition duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}