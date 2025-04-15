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
import {useEffect} from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'Movie Streamer',
//   description: 'A platform to stream and discover movies.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  // Debounce search logic
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        router.push(`/?search=${searchTerm}`);
      } else {
        router.push('/');
      }
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timeoutId); // Clear timeout on unmount or when searchTerm changes
  }, [searchTerm, router]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="bg-background border-b border-border p-4 fixed w-full top-0 z-10">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary">
              Movie Streamer
            </Link>
            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder="Search for movies..."
                className="w-64 rounded-md shadow-sm pr-10"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Search className="absolute right-3 h-5 w-5 text-muted-foreground"/>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4 mt-20">{children}</main>
      </body>
    </html>
  );
}


    