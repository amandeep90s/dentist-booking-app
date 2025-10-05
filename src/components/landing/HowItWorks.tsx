import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const HowItWorks = () => (
  <section className={cn("relative z-10 mx-auto max-w-7xl px-6 py-16 outline-hidden")}>
    {/* Header */}
    <div className={cn("mb-20 text-center")}>
      <div
        className={cn(
          "inline-flex items-center gap-2 bg-gradient-to-br from-primary/5 to-primary/10 px-4 py-2",
          "mb-6 rounded-full border border-primary/10 backdrop-blur-sm",
        )}
      >
        <ZapIcon className={cn("size-4 text-primary")} />
        <span className={cn("font-medium text-primary text-sm")}>Simple Process</span>
      </div>

      <h2 className={cn("mb-6 font-bold mg:text-5xl text-4xl tracking-tight lg:text-6xl")}>
        <span className={cn("bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent")}>
          Three steps to
        </span>
        <br />
        <span className={cn("bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent")}>
          better dental health
        </span>
      </h2>

      <p className={cn("mx-auto max-w-3xl text-muted-foreground text-xl leading-relaxed")}>
        Our streamlined process makes dental care accessible, convenient, and stress-free for everyone
      </p>
    </div>

    {/* Steps */}
    <div className={cn("relative")}>
      {/* Connection line */}
      <div
        className={cn(
          "-translate-y-1/2 absolute top-1/2 right-0 left-0 hidden h-px transform bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block",
        )}
      />

      <div className={cn("grid gap-12 lg:grid-cols-3 lg:gap-8")}>
        {/* Step 1 */}
        <div className={cn("group relative")}>
          <div
            className={cn(
              "relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 backdrop-blur-xl",
              "transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
            )}
          >
            {/* Step Number */}
            <div
              className={cn(
                "-top-4 absolute left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80",
                "font-bold text-primary-foreground text-sm shadow-lg",
              )}
            >
              1
            </div>

            {/* Icon */}
            <div
              className={cn(
                "flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5",
                "mx-auto mb-6 transition-transform duration-300 group-hover:scale-110",
              )}
            >
              <Image src="/audio.png" alt="Voice Chat" width={40} height={40} className="w-14" />
            </div>

            <h3 className={cn("mb-4 text-center font-bold text-2xl")}>Ask Questions</h3>
            <p className={cn("mb-6 text-center text-muted-foreground leading-relaxed")}>
              Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and
              oral health tips.
            </p>

            {/* Feature Pills */}
            <div className={cn("flex flex-wrap justify-center gap-2")}>
              <span className={cn("rounded-full bg-primary/10 px-3 py-1 text-primary text-xs")}>24/7 Available</span>
              <span className={cn("rounded-full bg-primary/10 px-3 py-1 text-primary text-xs")}>Instant Response</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={cn("group relative")}>
          <div
            className={cn(
              "relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 backdrop-blur-xl",
              "transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
            )}
          >
            {/* Step Number */}
            <div
              className={cn(
                "-top-4 absolute left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80",
                "font-bold text-primary-foreground text-sm shadow-lg",
              )}
            >
              2
            </div>

            {/* Icon */}
            <div
              className={cn(
                "flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5",
                "mx-auto mb-6 transition-transform duration-300 group-hover:scale-110",
              )}
            >
              <Image src="/brain.png" alt="AI Brain" width={40} height={40} className="w-14" />
            </div>

            <h3 className={cn("mb-4 text-center font-bold text-2xl")}>Get Expert Advice</h3>
            <p className={cn("mb-6 text-center text-muted-foreground leading-relaxed")}>
              Receive personalized recommendations based on thousands of dental cases. Our AI provides professional
              insights.
            </p>

            {/* Feature Pills */}
            <div className={cn("flex flex-wrap justify-center gap-2")}>
              <span className={cn("rounded-full bg-primary/10 px-3 py-1 text-primary text-xs")}>AI-Powered</span>
              <span className={cn("rounded-full bg-primary/10 px-3 py-1 text-primary text-xs")}>Personalized</span>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className={cn("group relative")}>
          <div
            className={cn(
              "relative rounded-3xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 p-8 backdrop-blur-xl",
              "transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
            )}
          >
            {/* Step Number */}
            <div
              className={cn(
                "-top-4 absolute left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80",
                "font-bold text-primary-foreground text-sm shadow-lg",
              )}
            >
              3
            </div>

            {/* Icon */}
            <div
              className={cn(
                "flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5",
                "mx-auto mb-6 transition-transform duration-300 group-hover:scale-110",
              )}
            >
              <Image src="/calendar.png" alt="Calendar" width={40} height={40} className="w-14" />
            </div>

            <h3 className={cn("mb-4 text-center font-bold text-2xl")}>Book &amp; Get Care</h3>
            <p className={cn("mb-6 text-center text-muted-foreground leading-relaxed")}>
              Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.
            </p>

            {/* Feature Pills */}
            <div className={cn("flex flex-wrap justify-center gap-2")}>
              <span className={cn("rounded-full bg-primary/10 px-3 py-1 text-primary text-xs")}>Verified Doctors</span>
              <span className={cn("rounded-full bg-primary/10 px-3 py-1 text-primary text-xs")}>Follow-up Care</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <SignedOut>
      <div className={cn("mt-16 text-center")}>
        <SignUpButton mode="modal">
          <Button size="lg">
            <ArrowRightIcon className="mr-2 size-5" />
            Get started now
          </Button>
        </SignUpButton>
      </div>
    </SignedOut>
  </section>
);
