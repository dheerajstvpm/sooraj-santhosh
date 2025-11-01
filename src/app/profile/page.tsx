import Image from "next/image";
import profileImg from "@/public/profile/sooraj-santhosh.jpg";

export default function ProfilePage() {
  return (
    <div
      id="profile-page"
      className="flex flex-col justify-center items-center p-10 md:p-20 gap-10"
    >
      <h1 className="text-5xl font-bold text-center">Sooraj Santhosh</h1>
      <Image
        src={profileImg}
        alt="Profile image"
        className="object-cover rounded-full"
        priority
      />
      <div className="w-full flex items-center">
        <p className="text-justify">
          Sooraj Santhosh is a singer, songwriter, and composer with decades of
          experience performing in India and abroad. Known for his versatility,
          his music blends Indian classic, ethnic sounds with contemporary and
          global influences. The warm reception of &apos;The Gypsy Sun&apos;,
          his independent multilingual album of five songs, reflects this
          musical fluidity. Apart from being an independent artist with a
          distinctive vision and sensibility, and a theatre musician who brings
          layered auditory dimensions to performances, Sooraj is also a well
          loved playback singer. He has worked with nearly all major composers
          in the South Indian film industry, recording over 300 tracks, and
          received the Kerala State Award for &apos;Best Playback Singer&apos;
          in 2016. His music reaches over five million monthly listeners across
          major streaming platforms
        </p>
      </div>
    </div>
  );
}
