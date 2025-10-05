import Image from 'next/image';
import { CalendarIcon, MicIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <section
      className={cn('from-muted/10 via-background to-muted/5 relative overflow-hidden bg-gradient-to-br px-6 py-20')}
    >
      {/* Subtle Background Pattern */}
      <div
        className={cn(
          'absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]'
        )}
      />

      <div className={cn('relative z-10 mx-auto max-w-6xl')}>
        <div className={cn('grid items-center gap-12 lg:grid-cols-2')}>
          {/* Left Content */}
          <div className={cn('space-y-6')}>
            <div className={cn('space-y-4')}>
              <div
                className={cn(
                  'border-primary/10 from-primary/5 to-primary/10 inline-flex items-center gap-2 rounded-full border bg-gradient-to-br px-3 py-1'
                )}
              >
                <div className={cn('bg-primary h-2 w-2 animate-pulse rounded-full')} />
                <span className={cn('text-primary text-xs font-medium')}>Ready When You Are</span>
              </div>

              <h2 className={cn('text-3xl leading-tight font-bold md:text-4xl')}>
                <span
                  className={cn('from-foreground to-foreground/70 bg-gradient-to-br bg-clip-text text-transparent')}
                >
                  Your dental health
                </span>
                <br />
                <span className={cn('from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent')}>
                  journey starts here
                </span>
              </h2>

              <p className={cn('text-muted-foreground text-lg leading-relaxed')}>
                Join 1,200+ patients who trust our AI for instant guidance and personalized care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={cn('flex flex-col gap-3 pt-2 sm:flex-row')}>
              <Button
                size={'lg'}
                className={cn(
                  'from-primary to-primary/90 hover:from-primary/90 hover:to-primary/85 bg-gradient-to-br px-6 py-3 font-semibold',
                  'rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl'
                )}
              >
                <MicIcon className="mr-2 h-4 w-4" />
                Start free chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  'border-primary/20 hover:border-primary/40 hover:bg-primary/5 rounded-xl border px-6 py-3 font-semibold transition-all duration-300'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book appointment
              </Button>
            </div>
          </div>
          {/* Right Content */}
          <div className={cn('relative flex justify-center lg:justify-end')}>
            <div className={cn('relative')}>
              {/* Floating Badge */}
              <div
                className={cn(
                  'absolute -top-4 left-4 z-10 rounded-full bg-gradient-to-r from-green-500/90 to-emerald-500/90 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm'
                )}
              >
                <div className={cn('flex items-center gap-1')}>
                  <div className={cn('h-1.5 w-1.5 animate-pulse rounded-full bg-white')}></div>
                  Available 24/7
                </div>
              </div>

              {/* Main Image */}
              <div className={cn('relative')}>
                {/* Subtle glow */}
                <div
                  className={cn(
                    'from-primary/10 absolute inset-0 scale-110 rounded-2xl bg-gradient-to-br to-transparent blur-xl'
                  )}
                />

                <Image
                  src="/cta.png"
                  alt="DentWise AI Assistant"
                  width={300}
                  height={300}
                  className={cn(
                    'relative h-auto w-80 drop-shadow-xl transition-transform duration-500 hover:scale-105'
                  )}
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div
                className={cn(
                  'from-primary/10 to-primary/5 absolute -right-2 -bottom-2 h-16 w-16 rounded-full bg-gradient-to-br blur-lg'
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
