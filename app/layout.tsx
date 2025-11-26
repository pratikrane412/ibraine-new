import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/ui/Providers'; // <--- Import this

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iBraine | Digital Intelligence',
  description: 'Mumbai’s leading digital-first marketing agency.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Update body classes for base Light/Dark modes */}
      <body className={`${inter.className} bg-white dark:bg-[#050505] text-zinc-900 dark:text-white antialiased transition-colors duration-300`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}