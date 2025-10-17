import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <div className="my-8">
        <Image
          src="/images/sooraj-santhosh.jpg"
          alt="Sooraj Santhosh"
          width={250}
          height={250}
          className="rounded-full mx-auto"
        />
      </div>
      <h1 className="text-4xl font-bold">Sooraj Santhosh</h1>
      <p className="text-xl mt-2">Professional Singer</p>
    </div>
  );
}
