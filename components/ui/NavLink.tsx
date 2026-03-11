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
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 500,
        fontSize: "0.88rem",
        color: isActive ? "var(--text)" : "var(--text-muted)",
        textDecoration: "none",
        letterSpacing: "0.02em",
        transition: "color 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) =>
        ((e.target as HTMLElement).style.color = "var(--text)")
      }
      onMouseLeave={(e) =>
        ((e.target as HTMLElement).style.color = isActive ? "var(--text)" : "var(--text-muted)")
      }
    >
      {children}
    </Link>
  );
}
