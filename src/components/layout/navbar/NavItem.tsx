import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export default function NavItem({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}
