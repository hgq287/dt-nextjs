import '../styles/globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';

import HeaderBar from '@/components/layout/HeaderBar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <HeaderBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}