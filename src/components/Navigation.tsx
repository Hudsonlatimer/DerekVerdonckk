"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            className="text-base sm:text-xl font-medium tracking-wide text-white"
            onClick={() => setOpen(false)}
          >
            DEREK VERDONCK
          </Link>

          {/* Desktop links */}
          <div className="hidden sm:flex items-baseline gap-1">
            <Link href="#cv" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
              CV & Credits
            </Link>
            <a
              href="https://www.imdb.com/name/nm2447901/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              IMDb
            </a>
            <a
              href="mailto:derek.verdonck@gmail.com"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors border border-white/20 hover:border-white/50 ml-2"
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <div className="sm:hidden bg-black/95 border-t border-white/10 px-4 py-4 flex flex-col gap-1">
          <Link
            href="#cv"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white py-3 text-sm font-medium border-b border-white/5"
          >
            CV & Credits
          </Link>
          <a
            href="https://www.imdb.com/name/nm2447901/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white py-3 text-sm font-medium border-b border-white/5"
          >
            IMDb ↗
          </a>
          <a
            href="mailto:derek.verdonck@gmail.com"
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-white py-3 text-sm font-medium"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
