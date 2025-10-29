import { Carousel, CarouselSlide } from "@mantine/carousel";
import Image from "next/legacy/image";
import image1 from "@/public/gallery/image1.jpg";
import image2 from "@/public/gallery/image2.jpg";
import image3 from "@/public/gallery/image3.jpg";
import image4 from "@/public/gallery/image4.jpg";
import image5 from "@/public/gallery/image5.jpg";
import image6 from "@/public/gallery/image6.jpg";

export default function GalleryPage() {
  return (
    <div className="flex-1 bg-base-200 text-center flex items-center">
      {/* <div className="carousel w-full h-[600]">
        <div
          id="slide1"
          className="carousel-item relative w-full justify-center py-10"
        >
          <Image src={image1} alt="Image 1" width={500} height={500} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide6" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-full justify-center py-10"
        >
          <Image src={image2} alt="Image 2" width={500} height={500} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full justify-center py-10"
        >
          <Image src={image3} alt="Image 3" width={500} height={500} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide4"
          className="carousel-item relative w-full justify-center py-10"
        >
          <Image src={image4} alt="Image 4" width={500} height={500} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide5"
          className="carousel-item relative w-full justify-center py-10"
        >
          <Image src={image5} alt="Image 5" width={500} height={800} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide6"
          className="carousel-item relative w-full justify-center py-10"
        >
          <Image src={image6} alt="Image 6" width={500} height={800} />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div> */}
      <Carousel
        slideSize="50%"
        height={600}
        emblaOptions={{
          loop: true,
          dragFree: false,
          align: "center",
        }}
      >
        <CarouselSlide className="flex items-center">
          <Image src={image1} alt="Image 1" width={500} height={500} />
        </CarouselSlide>
        <CarouselSlide className="flex items-center">
          <Image src={image2} alt="Image 2" width={500} height={500} />
        </CarouselSlide>
        <CarouselSlide className="flex items-center">
          <Image src={image3} alt="Image 3" width={500} height={500} />
        </CarouselSlide>
        <CarouselSlide className="flex items-center">
          <Image src={image4} alt="Image 4" width={500} height={500} />
        </CarouselSlide>
        <CarouselSlide className="flex items-center">
          <Image src={image5} alt="Image 5" width={500} height={500} />
        </CarouselSlide>
        <CarouselSlide className="flex items-center">
          <Image src={image6} alt="Image 6" width={500} height={500} />
        </CarouselSlide>
      </Carousel>
    </div>
  );
}
