import ContactPage from "./contact/page";
import GalleryPage from "./gallery/page";
import ProfilePage from "./profile/page";

export default function Home() {
  return (
    <>
      <ProfilePage />
      <GalleryPage />
      <ContactPage />
    </>
  );
}
