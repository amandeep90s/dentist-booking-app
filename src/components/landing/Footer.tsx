import { cn } from "@/lib/utils";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={cn("px-6 py-12 border-t bg-muted/30")}>
      <div className={cn("max-w-6xl mx-auto")}>
        <div className={cn("grid md:grid-cols-4 gap-8")}>
          <div className={cn("space-y-4")}>
            <div className={cn("flex items-center gap-2")}>
              <Image src={"/logo.png"} alt="Dentist Booking App" width={32} height={32} className={cn("w-8 h-8")} />
              <span className={cn("font-semibold text-lg")}>Dentist Booking App</span>
            </div>
            <p className={cn("text-sm text-muted-foreground")}>AI-powered dental assistance that actually helps.</p>
          </div>

          <div>
            <h4 className={cn("font-medium mb-3")}>Product</h4>
            <ul className={cn("space-y-2 text-sm text-muted-foreground")}>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={cn("font-medium mb-3")}>Support</h4>
            <ul className={cn("space-y-2 text-sm text-muted-foreground")}>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  Help center
                </a>
              </li>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className={cn("font-medium mb-3")}>Legal</h4>
            <ul className={cn("space-y-2 text-sm text-muted-foreground")}>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className={cn("hover:text-foreground")}>
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={cn("border-t mt-8 pt-8 text-center text-sm text-muted-foreground")}>
          <p>
            &copy; {new Date().getFullYear()} Dentist Booking App. Built for real people with real dental questions.
          </p>
        </div>
      </div>
    </footer>
  );
};
