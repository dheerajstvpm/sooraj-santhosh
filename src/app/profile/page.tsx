import Image from "next/image";
import profileImg from "@/public/profile/sooraj-santhosh.jpg";

export default function ProfilePage() {
  return (
    <div className="min-h-[calc(100vh-124px)] bg-base-200 text-center relative">
      <Image
        src={profileImg}
        alt="Profile image"
        className="h-[calc(100vh-64px)] w-full object-cover"
        priority
      />
      <p className="absolute top-2/5 text-justify w-96 ps-10">
        Sooraj Santhosh is an Indian singer, songwriter, and composer. He
        straddles the worlds of independent music and playback singing, moving
        smoothly between the two. Santhosh is the recipient of a Kerala State
        Film Award, 2 Mirchi Music Awards, and a Kerala State Film Critics
        Award.
      </p>
    </div>
  );
}
