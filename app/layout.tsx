'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import '../styles/globals.scss';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
