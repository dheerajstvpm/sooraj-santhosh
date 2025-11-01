import Image from "next/image";
// import image1 from "@/public/gallery/image01.jpg";
import image2 from "@/public/gallery/image02.jpg";
import image3 from "@/public/gallery/image03.jpg";
import image4 from "@/public/gallery/image04.jpg";
// import image5 from "@/public/gallery/image05.jpg";
// import image6 from "@/public/gallery/image06.jpg";

export default function GalleryPage() {
  return (
    <div id="gallery-page" className="flex flex-wrap justify-center">
      {/* <Image src={image1} alt="Image 1" className="w-full" /> */}
      <Image src={image2} alt="Image 2" className="w-full" />
      <Image src={image3} alt="Image 3" className="w-full" />
      <Image src={image4} alt="Image 4" className="w-full" />
      {/* <Image src={image5} alt="Image 5" className="w-full" />
      <Image src={image6} alt="Image 6" className="w-full" /> */}
    </div>
  );
}
