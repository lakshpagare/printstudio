import Link from "next/link";
import { products } from "@/constants/products";

interface Props {
  slug: string;
}

export default function ProductInfo({
  slug,
}: Props) {

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {

    return (

      <div>

        Product Not Found

      </div>

    );

  }

  return (

    <div>

      <h1 className="text-4xl font-bold">

        {product.title}

      </h1>

      <p className="mt-6 text-slate-600">

        {product.description}

      </p>

      <div className="mt-8 flex items-center gap-4">

        <span className="text-4xl font-bold text-blue-600">

          ₹{product.price}

        </span>

        {product.originalPrice && (

          <span className="text-xl text-slate-400 line-through">

            ₹{product.originalPrice}

          </span>

        )}

      </div>

      <div className="mt-10 flex gap-4">

        <Link
          href={`/design-studio?id=${product.id}`}
          className="rounded-xl bg-blue-600 px-8 py-4 text-white"
        >
          Customize Design
        </Link>

        <button className="rounded-xl border px-8 py-4">

          Add To Cart

        </button>

      </div>

    </div>

  );
}