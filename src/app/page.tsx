import Link from "next/link";

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

        <div className="flex items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/contact" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Contact &rarr;</h3>
            <p className="mt-4 text-xl">
              Reach out to Sooraj Santhosh for bookings and inquiries.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
