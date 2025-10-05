import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={cn("border-t bg-muted/30 px-6 py-12")}>
      <div className={cn("mx-auto max-w-6xl")}>
        <div className={cn("grid gap-8 md:grid-cols-4")}>
          <div className={cn("space-y-4")}>
            <div className={cn("flex items-center gap-2")}>
              <Image src={"/logo.png"} alt="Dentist Booking App" width={32} height={32} className={cn("h-8 w-8")} />
              <span className={cn("font-semibold text-lg")}>Dentist Booking App</span>
            </div>
            <p className={cn("text-muted-foreground text-sm")}>AI-powered dental assistance that actually helps.</p>
          </div>

          <div>
            <h4 className={cn("mb-3 font-medium")}>Product</h4>
            <ul className={cn("space-y-2 text-muted-foreground text-sm")}>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={cn("mb-3 font-medium")}>Support</h4>
            <ul className={cn("space-y-2 text-muted-foreground text-sm")}>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  Help center
                </Link>
              </li>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  Status
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={cn("mb-3 font-medium")}>Legal</h4>
            <ul className={cn("space-y-2 text-muted-foreground text-sm")}>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className={cn("hover:text-foreground")}>
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={cn("mt-8 border-t pt-8 text-center text-muted-foreground text-sm")}>
          <p>
            &copy; {new Date().getFullYear()} Dentist Booking App. Built for real people with real dental questions.
          </p>
        </div>
      </div>
    </footer>
  );
};
