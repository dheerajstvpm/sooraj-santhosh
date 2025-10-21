"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          Sooraj Santhosh
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/music"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Music
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/videos"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
