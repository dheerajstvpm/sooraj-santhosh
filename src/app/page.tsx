import ContactPage from "./contact/page";
import GalleryPage from "./gallery/page";
import MusicPage from "./music/page";
import ProfilePage from "./profile/page";
import VideosPage from "./videos/page";

export default function Home() {
  return (
    <>
      <ProfilePage />
      <MusicPage />
      <GalleryPage />
      <VideosPage />
      <ContactPage />
    </>
  );
}
