import Image from 'next/image';
import { MessageCircleIcon, MessageSquareIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export const WhatToAsk = () => {
  return (
    <section className={cn('from-background to-muted/20 relative overflow-hidden bg-gradient-to-b px-6 pt-16 pb-32')}>
      <div className={cn('relative z-10 mx-auto max-w-7xl')}>
        {/* Header */}
        <div className={cn('mb-20 text-center')}>
          <div
            className={cn(
              'from-primary/5 to-primary/10 border-primary/10 mb-6 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r',
              'px-4 py-2 backdrop-blur-sm'
            )}
          >
            <MessageCircleIcon className={cn('text-primary h-4 w-4')} />
            <span className="text-primary text-sm font-medium">AI-Powered Conversations</span>
          </div>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="from-foreground to-foreground/70 bg-gradient-to-br bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed">
            From simple questions to complex concerns, our AI delivers expert-level guidance trained on thousands of
            real dental cases
          </p>
        </div>

        <div className={cn('grid items-start gap-16 lg:grid-cols-2')}>
          {/* Left Column */}
          <div className={cn('space-y-8')}>
            <div className={cn('space-y-6')}>
              <h3 className={cn('mb-8 text-2xl font-bold')}>Common questions our AI answers:</h3>
              {/* Chat Bubble 1 */}
              <div className={cn('group relative')}>
                <div
                  className={cn(
                    'from-card/90 to-card/60 border-border/50 hover:border-primary/30 hover:shadow-primary/10 rounded-3xl border bg-gradient-to-br',
                    'p-6 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div className="from-primary/20 to-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br">
                      <MessageCircleIcon className="text-primary h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-primary/5 border-primary/10 rounded-2xl border p-4">
                        <p className="text-primary font-semibold">&quot;My tooth hurts when I bite down&quot;</p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Get immediate advice on pain management, possible causes, and when to see a dentist urgently
                        </p>
                        <div className="mt-3 flex gap-2">
                          <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">
                            Instant Response
                          </span>
                          <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">Pain Relief</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Chat Bubble 2 */}
              <div className="group relative">
                <div className="from-card/90 to-card/60 border-border/50 hover:border-primary/30 hover:shadow-primary/10 rounded-3xl border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="from-primary/20 to-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br">
                      <MessageSquareIcon className="text-primary h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-primary/5 border-primary/10 rounded-2xl border p-4">
                        <p className="text-primary font-semibold">&quot;How much does teeth whitening cost?&quot;</p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Compare treatment options, pricing ranges, and find the best whitening solution for your
                          budget
                        </p>
                        <div className="mt-3 flex gap-2">
                          <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">
                            Cost Analysis
                          </span>
                          <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">
                            Treatment Options
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Chat Bubble 3 */}
              <div className="group relative">
                <div className="from-card/90 to-card/60 border-border/50 hover:border-primary/30 hover:shadow-primary/10 rounded-3xl border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
                  <div className="flex items-start gap-4">
                    <div className="from-primary/20 to-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br">
                      <MessageSquareIcon className="text-primary h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="bg-primary/5 border-primary/10 rounded-2xl border p-4">
                        <p className="text-primary font-semibold">&quot;When should I replace my filling?&quot;</p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Learn about filling lifespan, warning signs of wear, and replacement timing guidance
                        </p>
                        <div className="mt-3 flex gap-2">
                          <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">
                            Preventive Care
                          </span>
                          <span className="bg-primary/10 text-primary rounded-full px-2 py-1 text-xs">Maintenance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div
            className={cn(
              'from-card/90 to-card/60 border-border/50 hover:border-primary/30 rounded-3xl border bg-gradient-to-br p-8 backdrop-blur-xl',
              'transition-all duration-500'
            )}
          >
            <div className={cn('flex h-full items-center justify-center')}>
              <Image
                src="/confused.png"
                alt="AI Assistant"
                width={500}
                height={500}
                className={cn('h-auto w-full max-w-lg object-contain')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
