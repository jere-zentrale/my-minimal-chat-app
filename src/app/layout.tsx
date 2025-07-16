import './globals.css';
import { Inter } from 'next/font/google'; // ✅ FIX: Inter importieren

const inter = Inter({ subsets: ['latin'] }); // ✅ FIX: Inter initialisieren

export const metadata = {
  title: 'My Minimal Chat App',
  description: 'A minimal Next.js 14 chat application.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body> {/* ✅ FIX: Inter verwenden */}
    </html>
  );
}
