import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Movie Streamer',
  description: 'A platform to stream and discover movies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-background border-b border-border p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              Movie Streamer
            </Link>
            <div className="relative flex items-center">
              <Input type="text" placeholder="Search for movies..." className="w-64 rounded-md shadow-sm pr-10"/>
              <Search className="absolute right-3 h-5 w-5 text-muted-foreground"/>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
