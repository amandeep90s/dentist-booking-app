import { cn } from "@/lib/utils";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
import { CalendarIcon, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export const Hero = () => {
  return (
    <section className={cn("relative flex h-screen items-center overflow-hidden pt-20 pb-10")}>
      {/* GRID BG */}
      <div className={cn("absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5")}>
        <div
          className={cn(
            "absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)]",
            "bg-[size:4rem_4rem] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
          )}
        />
      </div>

      {/* GRADIENT ORBS */}
      <div
        className={cn(
          "absolute top-20 left-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl"
        )}
      />
      <div
        className={cn(
          "absolute right-1/4 bottom-20 h-96 w-96 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 blur-3xl"
        )}
      />

      <div className={cn("relative z-10 w-full px-6")}>
        <div className={cn("mx-auto max-w-7xl")}>
          <div className={cn("grid items-center gap-16 lg:grid-cols-2")}>
            {/* Left Content */}
            <div className={cn("space-y-10")}>
              <div className={cn("space-y-6")}>
                {/* Badge */}
                <div
                  className={cn(
                    "inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-2",
                    "rounded-full border border-primary/20 backdrop-blur-sm"
                  )}
                >
                  <div className={cn("h-2 w-2 animate-pulse rounded-full bg-primary")} />
                  <span className={cn("font-medium text-primary text-sm")}>AI-Powered Dental Assistant</span>
                </div>

                {/* Main Heading */}
                <h1 className={cn("font-bold text-5xl tracking-tight md:text-6xl lg:text-7xl")}>
                  <span
                    className={cn(
                      "bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                    )}
                  >
                    Your dental
                  </span>
                  <br />
                  <span className={cn("bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent")}>
                    questions
                  </span>
                  <br />
                  <span
                    className={cn(
                      "bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent"
                    )}
                  >
                    answered instantly
                  </span>
                </h1>

                {/* Subtitle */}
                <p className={cn("max-w-xl font-medium text-lg text-muted-foreground leading-relaxed")}>
                  Chat with our AI dental assistant for instant advice, book smart appointments, and get personalized
                  care recommendations. Available 24/7.
                </p>
              </div>

              {/* CTA Buttons */}
              <SignedOut>
                <div className={cn("flex flex-col gap-4 sm:flex-row")}>
                  <SignUpButton mode="modal">
                    <Button size={"lg"}>
                      <MicIcon className={cn("mr-2 size-5")} />
                      Try voice agent
                    </Button>
                  </SignUpButton>

                  <SignUpButton mode="modal">
                    <Button size={"lg"} variant={"outline"}>
                      <CalendarIcon className="mr-2 size-5" />
                      Book appointment
                    </Button>
                  </SignUpButton>
                </div>
              </SignedOut>

              {/* User Testimonials */}
              <div className={cn("pt-8")}>
                <div className={cn("flex items-center gap-6")}>
                  {/* User Avatars */}
                  <div className={cn("-space-x-3 flex")}>
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                      alt="Jessica Davis"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                      alt="Sam Miller"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                      alt="Anna Lopez"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                      alt="Mike Rodriguez"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                      alt="Katie Lee"
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover ring-4 ring-background"
                    />
                  </div>

                  {/* Rating and stats */}
                  <div className={cn("space-y-1")}>
                    <div className={cn("flex items-center gap-2")}>
                      <div className={cn("flex items-center gap-1")}>
                        {[1, 2, 3, 4, 5].map((item) => (
                          <StarIcon key={item} className={cn("h-4 w-4 fill-amber-400 text-amber-400")} />
                        ))}
                      </div>
                      <span className="font-bold text-foreground text-sm">4.9/5</span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Trusted by <span className="font-semibold text-foreground">1,200+ patients</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className={cn("relative lg:pl-8")}>
              {/* GRADIENT ORBS */}
              <div className="-top-4 -left-4 absolute h-24 w-24 rotate-45 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 blur-xl"></div>
              <div className="-bottom-6 -right-6 absolute h-32 w-32 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 blur-2xl"></div>

              <Image
                src="/hero.png"
                alt="Dentist Hero Image"
                width={600}
                height={600}
                className={cn("h-auto w-full")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
