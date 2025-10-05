import { SignedOut, SignUpButton } from '@clerk/nextjs';
import { CheckCircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const PricingSection = () => {
  return (
    <section
      className={cn('from-background via-muted/3 to-background relative overflow-hidden bg-gradient-to-b px-6 py-32')}
    >
      {/* Grid Background Pattern */}
      <div className={cn('absolute inset-0')}>
        <div className={cn('from-background via-muted/5 to-primary/5 absolute inset-0 bg-gradient-to-br')}>
          <div
            className={cn(
              'absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]',
              '[mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_50%,transparent_85%)] bg-[size:3rem_3rem] opacity-20'
            )}
          />
        </div>
        <div
          className={cn(
            'absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.06),transparent_70%)]'
          )}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 text-center">
          <div
            className={cn(
              'from-primary/5 to-primary/10 inline-flex items-center gap-2 bg-gradient-to-r px-4 py-2',
              'border-primary/10 mb-6 rounded-full border backdrop-blur-sm'
            )}
          >
            <span className={cn('bg-primary h-2 w-2 animate-pulse rounded-full')} />
            <span className={cn('text-primary text-sm font-medium')}>Simple Pricing</span>
          </div>

          <h2 className={cn('tracking-light mb-6 text-4xl font-bold md:text-5xl lg:text-6xl')}>
            <span className={cn('from-foreground to-foreground/70 bg-gradient-to-br bg-clip-text text-transparent')}>
              Choose your
            </span>
            <br />
            <span className={cn('from-primary to-primary/70 bg-gradient-to-br bg-clip-text text-transparent')}>
              AI dental plan
            </span>
          </h2>
          <p className={cn('text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed')}>
            Book appointments for free and upgrade for unlimited AI consultations. Perfect for ongoing dental care.
          </p>
        </div>
        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {/* Free Plan */}
          <div className={cn('group relative')}>
            <div
              className={cn(
                'from-card/90 to-card/60 border-border/50 hover:border-primary/30 relative rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-xl',
                'hover:shadow-primary/10 transition-all duration-500 hover:shadow-2xl'
              )}
            >
              <div className={cn('space-y-6')}>
                <div className={cn('space-y-3')}>
                  <h3 className={cn('text-2xl font-bold')}>Free</h3>
                  <div className={cn('flex items-end gap-1')}>
                    <span className={cn('text-4xl font-bold')}>$0</span>
                    <span className={cn('text-muted-foreground mb-1')}>/month</span>
                  </div>
                  <p className={cn('text-muted-foreground')}>Essential dental appointment booking</p>
                </div>
                <SignedOut>
                  <SignUpButton mode="modal">
                    <Button className="from-muted to-muted/80 text-foreground w-full rounded-xl bg-gradient-to-r py-3 font-semibold">
                      Get Started Free
                    </Button>
                  </SignUpButton>
                </SignedOut>

                <div className={cn('space-y-4')}>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Unlimited appointment booking</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Find dentists in your area</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Basic text chat support</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Appointment reminders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className={cn('group relative')}>
            {/* Popular Badge */}
            <div className={cn('absolute -top-7 left-1/2 z-20 -translate-x-1/2 transform')}>
              <div
                className={cn(
                  'from-primary to-primary/80 text-primary-foreground rounded-full bg-gradient-to-r px-4 py-2 text-sm font-semibold shadow-lg'
                )}
              >
                Most Popular
              </div>
            </div>
            <div
              className={cn(
                'from-card/95 to-card/70 border-primary/30 relative rounded-3xl border-2 bg-gradient-to-br p-8 backdrop-blur-xl',
                'hover:border-primary/50 hover:shadow-primary/20 scale-105 shadow-xl transition-all duration-500 hover:shadow-2xl'
              )}
            >
              <div className={cn('space-y-6')}>
                <div className={cn('space-y-3')}>
                  <h3 className={cn('text-2xl font-bold')}>AI Basic</h3>
                  <div className={cn('flex items-end gap-1')}>
                    <span
                      className={cn(
                        'from-primary to-primary/80 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent'
                      )}
                    >
                      $9
                    </span>
                    <span className={cn('text-muted-foreground mb-1')}>/month</span>
                  </div>
                  <p className={cn('text-muted-foreground')}>AI consultations + appointment booking</p>
                </div>

                <Button className="from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 text-primary-foreground w-full rounded-xl bg-gradient-to-r py-3 font-semibold shadow-lg transition-all duration-300 hover:shadow-xl">
                  Start AI Basic
                </Button>

                <div className={cn('space-y-4')}>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Everything in Free</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>10 AI voice calls per month</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>AI dental guidance & advice</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Symptom assessment</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Priority support</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Call history & recordings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className={cn('group relative')}>
            <div
              className={cn(
                'from-card/90 to-card/60 border-border/50 hover:border-primary/30 hover:shadow-primary/10 relative rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl'
              )}
            >
              <div className={cn('space-y-6')}>
                <div className={cn('space-y-3')}>
                  <h3 className={cn('text-2xl font-bold')}>AI Pro</h3>
                  <div className={cn('flex items-end gap-1')}>
                    <span className={cn('text-4xl font-bold')}>$19</span>
                    <span className={cn('text-muted-foreground mb-1')}>/month</span>
                  </div>
                  <p className={cn('text-muted-foreground')}>Unlimited AI consultations</p>
                </div>

                <Button
                  variant="outline"
                  className={cn(
                    'border-primary/20 hover:border-primary/40 hover:bg-primary/5 w-full rounded-xl border-2 py-3 font-semibold transition-all duration-300'
                  )}
                >
                  Upgrade to AI Pro
                </Button>

                <div className={cn('space-y-4')}>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Everything in AI Basic</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Unlimited AI voice calls</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Advanced AI dental analysis</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Personalized care plans</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>24/7 priority AI support</span>
                  </div>
                  <div className={cn('flex items-center gap-3')}>
                    <CheckCircleIcon className={cn('text-primary h-5 w-5 shrink-0')} />
                    <span className={cn('text-sm')}>Detailed health reports</span>
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
