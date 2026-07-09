interface Props {
  slug: string;
}

export default function ProductGallery({
  slug,
}: Props) {

  return (

    <div className="rounded-3xl bg-slate-100 p-10">

      <div className="flex h-[500px] items-center justify-center rounded-2xl border bg-white">

        <span className="text-8xl">
          🛍️
        </span>

      </div>

    </div>

  );
}