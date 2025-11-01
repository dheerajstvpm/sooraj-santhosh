"use client";

import * as React from "react";

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center pb-20">
      <aside>
        <a target="_blank" href="https://github.com/dheerajstvpm">
          Copyright © {new Date().getFullYear()} - All right reserved
        </a>
      </aside>
    </footer>
  );
}
