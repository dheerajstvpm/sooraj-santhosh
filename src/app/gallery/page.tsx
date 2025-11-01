import Image from "next/image";
import image1 from "@/public/gallery/image1.jpg";
import image2 from "@/public/gallery/image2.jpg";
import image3 from "@/public/gallery/image3.jpg";
import image4 from "@/public/gallery/image4.jpg";
import image5 from "@/public/gallery/image5.jpg";
import image6 from "@/public/gallery/image6.jpg";

export default function GalleryPage() {
  return (
    <div id="gallery-page" className="flex flex-wrap justify-center md:p-20">
      <Image src={image1} alt="Image 1" width={450} />
      <Image src={image2} alt="Image 2" width={450} />
      <Image src={image3} alt="Image 3" width={450} />
      <Image src={image4} alt="Image 4" width={450} />
      <Image src={image5} alt="Image 5" width={450} />
      <Image src={image6} alt="Image 6" width={450} />
    </div>
  );
}
