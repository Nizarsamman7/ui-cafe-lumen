import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="mast">
        <Link className="mark" href="/">Lumen</Link>
        <nav><Link href="/menu">Full menu</Link></nav>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Room</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/coffee">Coffee</Link>
        <Link href="/food">Food</Link>
        <Link href="/beans">Beans</Link>
        <Link href="/visit">Visit</Link>
        <Link href="/hours">Hours</Link>
        <Link href="/catering">Catering</Link>
        <Link href="/private-hire">Private hire</Link>
        <Link href="/about">About</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
