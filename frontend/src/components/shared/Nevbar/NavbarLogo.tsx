import { Heart } from "lucide-react";
import Link from "next/link";

interface NavbarLogoProps {
  href: string;
}

export default function NavbarLogo({ href }: NavbarLogoProps) {
  return (
    <Link href={href} className="group flex items-center gap-3">
      {/* Logo Icon */}
      <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
        <Heart className="size-5 fill-current" />
      </div>

      {/* Logo Text */}
      <div className="hidden leading-none sm:block">
        <div className="text-lg font-bold tracking-tight text-white">
          The Jannath
        </div>

        <div className="mt-1 text-[10px] font-semibold tracking-[0.25em] text-primary">
          FOUNDATION UK
        </div>
      </div>
    </Link>
  );
}
