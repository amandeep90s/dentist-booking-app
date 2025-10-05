import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 h-16 border-border/50 border-b bg-background/80 px-6 py-2 backdrop-blur-md"
      )}
    >
      <div
        className={cn("mx-auto flex max-w-6xl items-center justify-between")}
      >
        <Link href="/" className={cn("flex items-center gap-2")}>
          <Image
            src="/logo.png"
            alt="Dentist Booking App"
            width={32}
            height={32}
            className={cn("w-11")}
          />
          <span className={cn("font-semibold text-lg")}>
            Dentist Booking App
          </span>
        </Link>

        <div className={cn("hidden items-center gap-8 md:flex")}>
          <Link
            href="#"
            className={cn(
              "text-muted-foreground text-sm hover:text-foreground"
            )}
          >
            How it Works
          </Link>
          <Link
            href="#"
            className={cn(
              "text-muted-foreground text-sm hover:text-foreground"
            )}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className={cn(
              "text-muted-foreground text-sm hover:text-foreground"
            )}
          >
            About
          </Link>
        </div>

        <div className={cn("flex items-center gap-3")}>
          <SignInButton mode="modal">
            <Button variant={"ghost"} size={"sm"}>
              Sign In
            </Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button size={"sm"}>Sign Up</Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
};
