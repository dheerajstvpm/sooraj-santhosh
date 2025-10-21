import ContactPage from "./contact/page";
import GalleryPage from "./gallery/page";
import MusicPage from "./music/page";
import ProfilePage from "./profile/page";
import VideosPage from "./videos/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Sooraj Santhosh&apos;s Portfolio
        </h1>
        <p className="mt-3 text-2xl">
          Content coming soon! Please check back later.
        </p>
        <ProfilePage />
        <MusicPage />
        <GalleryPage />
        <VideosPage />
        <ContactPage />
      </main>
    </div>
  );
}
