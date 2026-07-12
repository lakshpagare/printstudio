import Image from "next/image";
import { assets } from "@/constants/assets";

export default function HeroImage() {
  return (
    <div className="relative h-[350px] overflow-hidden rounded-3xl shadow-2xl md:h-[450px] lg:h-[550px]">
      <Image
       src={assets.banners.hero}
        alt="PrintStudio Hero Banner"
        fill
        priority
        className="object-cover"
        sizes="(max-width:768px) 100vw, 50vw"
      />
    </div>
  );
}