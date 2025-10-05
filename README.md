# Dentist Booking App

A modern web application for booking dental appointments with advanced features including AI voice agents, subscription management, and comprehensive admin dashboards.

## Features

🏠 **Modern Landing Page** with gradients & images  
🔐 **Authentication** via Clerk (Google, GitHub, Email & Password)  
🔑 **Email Verification** (6-digit code)  
📅 **Appointment Booking System**  
🦷 **3-Step Booking Flow** (Dentist → Service & Time → Confirm)  
📩 **Email Notifications** for Bookings (Resend)  
📊 **Admin Dashboard** for Managing Appointments  
🗣️ **AI Voice Agent** powered by Vapi (Pro Plans only)  
💳 **Subscription Payments** with Clerk (Free + 2 Paid Plans)  
🧾 **Automatic Invoices** via Email  
💸 **Smart Subscription Upgrades** (pay only the difference)  
📂 **PostgreSQL** for Data Persistence  
🎨 **Styling** with Tailwind CSS + Shadcn  
⚡ **Data Fetching** with TanStack Query  
🤖 **CodeRabbit** for PR Optimizations  
🧑‍💻 **Git & GitHub Workflow** (branches, PRs, merges)  
🚀 **Deployment** on Sevalla (free-tier friendly)

## Tech Stack

- **Framework:** Next.js
- **Authentication:** Clerk
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS + Shadcn UI
- **Data Fetching:** TanStack Query
- **Email:** Resend
- **AI Voice:** Vapi
- **Deployment:** Sevalla
- **Code Quality:** CodeRabbit

## Getting Started

### Prerequisites

- Node.js 18+
- Bun (recommended)
- PostgreSQL database
- Clerk account
- Resend account (for emails)
- Vapi account (for AI voice agent)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/amandeep90s/dentist-booking-app.git
cd dentist-booking-app
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:
   Create a `.env.local` file with the following variables:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database
DATABASE_URL=your_postgresql_connection_string

# Resend
RESEND_API_KEY=your_resend_api_key

# Vapi (optional, for Pro plans)
VAPI_API_KEY=your_vapi_api_key
```

4. Run database migrations (if applicable):

```bash
# Add your migration command here
```

5. Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Scripts

- `bun dev` - Start the development server
- `bun build` - Build the application for production
- `bun start` - Start the production server
- `bun lint` - Run linting checks
- `bun lint:fix` - Run linting checks and fix issues
- `bun format` - Format code using Biome
- `bun format:check` - Check code formatting
- `bun organize-imports` - Organize and sort imports
- `bun check-imports` - Check import organization

## Code Quality & Import Sorting

This project uses [Biome](https://biomejs.dev/) for code formatting, linting, and import organization. Import sorting is automatically configured with the following priority:

1. **Built-in modules** (Node.js modules)
2. **External packages** (React, Next.js, third-party libraries)
3. **Internal modules** (Your application code with `@/` alias)

### Import Organization Rules

```tsx
// ✅ Good - Properly organized imports
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInButton } from '@clerk/nextjs';
import { SomeThirdPartyLib } from 'some-library';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
```

### Automatic Import Sorting

- **On Save**: Imports are automatically organized when you save files (configured in `.vscode/settings.json`)
- **Manual**: Run `bun organize-imports` to organize imports across all files
- **CI/CD**: Import organization is checked in the build process

### VSCode Setup

Install the recommended extensions:

- **Biome** (`biomejs.biome`) - Primary formatter and linter
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) - Tailwind support

The workspace is pre-configured to use Biome for formatting and import organization.

## Deployment

This application is deployed on Sevalla, which is free-tier friendly. Follow Sevalla's deployment documentation to deploy your Next.js application.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
