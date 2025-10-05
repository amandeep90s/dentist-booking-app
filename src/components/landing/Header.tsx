import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <nav
      className={cn(
        'border-border/50 bg-background/80 fixed top-0 right-0 left-0 z-50 h-16 border-b px-6 py-2 backdrop-blur-md'
      )}
    >
      <div className={cn('mx-auto flex max-w-6xl items-center justify-between')}>
        <Link href="/" className={cn('flex items-center gap-2')}>
          <Image src="/logo.png" alt="Dentist Booking App" width={32} height={32} className={cn('w-11')} />
          <span className={cn('text-lg font-semibold')}>Dentist Booking App</span>
        </Link>

        <div className={cn('hidden items-center gap-8 md:flex')}>
          <Link href="#" className={cn('text-muted-foreground hover:text-foreground text-sm')}>
            How it Works
          </Link>
          <Link href="#" className={cn('text-muted-foreground hover:text-foreground text-sm')}>
            Pricing
          </Link>
          <Link href="#" className={cn('text-muted-foreground hover:text-foreground text-sm')}>
            About
          </Link>
        </div>

        <div className={cn('flex items-center gap-3')}>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant={'ghost'} size={'sm'}>
                Sign In
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size={'sm'}>Sign Up</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
