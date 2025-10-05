import Image from 'next/image';
import { SignedOut, SignUpButton } from '@clerk/nextjs';
import { ArrowRightIcon, ZapIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const HowItWorks = () => (
  <section className={cn('relative z-10 mx-auto max-w-7xl px-6 py-16 outline-hidden')}>
    {/* Header */}
    <div className={cn('mb-20 text-center')}>
      <div
        className={cn(
          'from-primary/5 to-primary/10 inline-flex items-center gap-2 bg-gradient-to-br px-4 py-2',
          'border-primary/10 mb-6 rounded-full border backdrop-blur-sm'
        )}
      >
        <ZapIcon className={cn('text-primary size-4')} />
        <span className={cn('text-primary text-sm font-medium')}>Simple Process</span>
      </div>

      <h2 className={cn('mg:text-5xl mb-6 text-4xl font-bold tracking-tight lg:text-6xl')}>
        <span className={cn('from-foreground to-foreground/70 bg-gradient-to-br bg-clip-text text-transparent')}>
          Three steps to
        </span>
        <br />
        <span className={cn('from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent')}>
          better dental health
        </span>
      </h2>

      <p className={cn('text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed')}>
        Our streamlined process makes dental care accessible, convenient, and stress-free for everyone
      </p>
    </div>

    {/* Steps */}
    <div className={cn('relative')}>
      {/* Connection line */}
      <div
        className={cn(
          'via-primary/30 absolute top-1/2 right-0 left-0 hidden h-px -translate-y-1/2 transform bg-gradient-to-r from-transparent to-transparent lg:block'
        )}
      />

      <div className={cn('grid gap-12 lg:grid-cols-3 lg:gap-8')}>
        {/* Step 1 */}
        <div className={cn('group relative')}>
          <div
            className={cn(
              'border-border/50 from-card/80 to-card/40 relative rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-xl',
              'hover:border-primary/30 hover:shadow-primary/10 transition-all duration-500 hover:shadow-2xl'
            )}
          >
            {/* Step Number */}
            <div
              className={cn(
                'from-primary to-primary/80 absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br',
                'text-primary-foreground text-sm font-bold shadow-lg'
              )}
            >
              1
            </div>

            {/* Icon */}
            <div
              className={cn(
                'from-primary/10 to-primary/5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br',
                'mx-auto mb-6 transition-transform duration-300 group-hover:scale-110'
              )}
            >
              <Image src="/audio.png" alt="Voice Chat" width={40} height={40} className="w-14" />
            </div>

            <h3 className={cn('mb-4 text-center text-2xl font-bold')}>Ask Questions</h3>
            <p className={cn('text-muted-foreground mb-6 text-center leading-relaxed')}>
              Chat with our AI assistant about any dental concerns. Get instant answers about symptoms, treatments, and
              oral health tips.
            </p>

            {/* Feature Pills */}
            <div className={cn('flex flex-wrap justify-center gap-2')}>
              <span className={cn('bg-primary/10 text-primary rounded-full px-3 py-1 text-xs')}>24/7 Available</span>
              <span className={cn('bg-primary/10 text-primary rounded-full px-3 py-1 text-xs')}>Instant Response</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className={cn('group relative')}>
          <div
            className={cn(
              'border-border/50 from-card/80 to-card/40 relative rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-xl',
              'hover:border-primary/30 hover:shadow-primary/10 transition-all duration-500 hover:shadow-2xl'
            )}
          >
            {/* Step Number */}
            <div
              className={cn(
                'from-primary to-primary/80 absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br',
                'text-primary-foreground text-sm font-bold shadow-lg'
              )}
            >
              2
            </div>

            {/* Icon */}
            <div
              className={cn(
                'from-primary/10 to-primary/5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br',
                'mx-auto mb-6 transition-transform duration-300 group-hover:scale-110'
              )}
            >
              <Image src="/brain.png" alt="AI Brain" width={40} height={40} className="w-14" />
            </div>

            <h3 className={cn('mb-4 text-center text-2xl font-bold')}>Get Expert Advice</h3>
            <p className={cn('text-muted-foreground mb-6 text-center leading-relaxed')}>
              Receive personalized recommendations based on thousands of dental cases. Our AI provides professional
              insights.
            </p>

            {/* Feature Pills */}
            <div className={cn('flex flex-wrap justify-center gap-2')}>
              <span className={cn('bg-primary/10 text-primary rounded-full px-3 py-1 text-xs')}>AI-Powered</span>
              <span className={cn('bg-primary/10 text-primary rounded-full px-3 py-1 text-xs')}>Personalized</span>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className={cn('group relative')}>
          <div
            className={cn(
              'border-border/50 from-card/80 to-card/40 relative rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-xl',
              'hover:border-primary/30 hover:shadow-primary/10 transition-all duration-500 hover:shadow-2xl'
            )}
          >
            {/* Step Number */}
            <div
              className={cn(
                'from-primary to-primary/80 absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br',
                'text-primary-foreground text-sm font-bold shadow-lg'
              )}
            >
              3
            </div>

            {/* Icon */}
            <div
              className={cn(
                'from-primary/10 to-primary/5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br',
                'mx-auto mb-6 transition-transform duration-300 group-hover:scale-110'
              )}
            >
              <Image src="/calendar.png" alt="Calendar" width={40} height={40} className="w-14" />
            </div>

            <h3 className={cn('mb-4 text-center text-2xl font-bold')}>Book &amp; Get Care</h3>
            <p className={cn('text-muted-foreground mb-6 text-center leading-relaxed')}>
              Schedule with verified dentists and receive comprehensive follow-up care. Track your progress seamlessly.
            </p>

            {/* Feature Pills */}
            <div className={cn('flex flex-wrap justify-center gap-2')}>
              <span className={cn('bg-primary/10 text-primary rounded-full px-3 py-1 text-xs')}>Verified Doctors</span>
              <span className={cn('bg-primary/10 text-primary rounded-full px-3 py-1 text-xs')}>Follow-up Care</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <SignedOut>
      <div className={cn('mt-16 text-center')}>
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
