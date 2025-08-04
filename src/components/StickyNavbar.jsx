"use client";

export default function StickyNavbar() {
  return (
    <nav className="header-animation fixed top-0 hidden lg:flex flex-row justify-center items-center gap-6 text-white w-full h-10 bg-brown  z-50">
      <a href="/#Home">HOME</a>
      <a href="/#Tour">TOUR</a>
      <a href="/#Bio">BIO</a>
      <a href="/#Videos">VIDEOS</a>
      <a href="/#Merch">MERCH</a>
      <a href="/#Listen">LISTEN</a>
      <a href="/#Contact">CONTACT</a>
    </nav>
  );
}
