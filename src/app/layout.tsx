'use client';

import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {cn} from "@/lib/utils";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      router.push(`/?search=${searchTerm}`);
    } else {
      router.push('/');
    }
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-background border-b border-border p-4">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              Movie Streamer
            </Link>
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <Input
                type="text"
                placeholder="Search for movies..."
                className="w-64 rounded-md shadow-sm pr-10"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button type="submit" className="absolute right-3 h-5 w-5 text-muted-foreground">
                <Search/>
              </button>
            </form>
          </div>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
