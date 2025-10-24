"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DarkModeToggle } from "./DarkModeToggle";

export function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          Sooraj Santhosh
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/music">Music</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/videos">Videos</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                href="/"
                onClick={() =>
                  document.activeElement &&
                  (document.activeElement as HTMLElement).blur()
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                onClick={() =>
                  document.activeElement &&
                  (document.activeElement as HTMLElement).blur()
                }
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/music"
                onClick={() =>
                  document.activeElement &&
                  (document.activeElement as HTMLElement).blur()
                }
              >
                Music
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                onClick={() =>
                  document.activeElement &&
                  (document.activeElement as HTMLElement).blur()
                }
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/videos"
                onClick={() =>
                  document.activeElement &&
                  (document.activeElement as HTMLElement).blur()
                }
              >
                Videos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() =>
                  document.activeElement &&
                  (document.activeElement as HTMLElement).blur()
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
