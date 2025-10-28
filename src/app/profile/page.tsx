import Image from "next/image";
import profileImg from "@/public/profile/sooraj-santhosh.jpg";
// bg-[url(/sooraj-santhosh/profile/sooraj-santhosh.jpg)] bg-auto bg-no-repeat
export default function ProfilePage() {
  return (
    <div className="flex-1 bg-base-200 text-center relative">
      <Image
        src={profileImg}
        alt="Profile image"
        className="w-full"
        objectFit="cover"
      />
      <p className="absolute top-1/2 left-10">Content will be updated soon.</p>
    </div>
  );
}
