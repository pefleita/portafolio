"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`font-display font-medium text-sm tracking-wide no-underline cursor-pointer transition-colors ${
        isActive ? "text-text" : "text-text-muted"
      } hover:text-text`}
    >
      {children}
    </Link>
  );
}
