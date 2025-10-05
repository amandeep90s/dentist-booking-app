import { cn } from "@/lib/utils";

export const Hero = () => {
  return (
    <section className={cn("relative h-screen flex items-center overflow-hidden pt-20")}>
      {/* GRID BG */}
      <div className={cn("absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5")}>
        <div className={cn("")}></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className={cn("")}></div>
      <div className={cn("")}></div>

      <div className={cn("")}>
        <div className={cn("")}>
          <div className={cn("")}>
            {/* Left Content */}
            <div className={cn("")}>
              <div className={cn("")}>
                {/* Badge */}
                <div className={cn("")}>
                  <div className={cn("")}>
                    <span>AI-Powered Dentail Assistant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
