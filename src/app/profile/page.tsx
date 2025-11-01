import Image from "next/image";
import profileImg from "@/public/profile/sooraj-santhosh.jpg";

export default function ProfilePage() {
  return (
    <div id="profile-page" className="text-center relative">
      <Image
        src={profileImg}
        alt="Profile image"
        className="h-[calc(100vh-64px)] w-full object-cover"
        priority
      />
      <div className="absolute top-0 h-[calc(100vh-64px)] w-full flex items-center md:w-1/2 px-10 md:ps-20">
        <p className="text-justify">
          Sooraj Santhosh is an Indian singer, songwriter, and composer. He
          straddles the worlds of independent music and playback singing, moving
          smoothly between the two. Santhosh is the recipient of a Kerala State
          Film Award, 2 Mirchi Music Awards, and a Kerala State Film Critics
          Award. He has sung around 300 songs in 8 languages.Santhosh released
          his independent solo EP, The Gypsy Sun, in 2020. It&apos;s a
          multi-genre, multi-lingual album that consists of 5 songs. Santhosh
          was the lead singer and has composed and performed with Masala Coffee
          until 2019, when he decided to dedicate more time to his own creative
          endeavors. Now he performs with his own band, Sooraj Santhosh Live.
        </p>
      </div>
    </div>
  );
}
