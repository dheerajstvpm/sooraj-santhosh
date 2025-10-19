import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Sooraj Santhosh
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/music" className="hover:text-gray-300">
              Music
            </Link>
          </li>
          <li>
            <Link href="/videos" className="hover:text-gray-300">
              Videos
            </Link>
          </li>
          <li>
            <Link href="/tour" className="hover:text-gray-300">
              Tour
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;