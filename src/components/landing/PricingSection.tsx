import { cn } from '@/lib/utils';

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
        </div>
        {/* Pricing Cards */}
      </div>
    </section>
  );
};
