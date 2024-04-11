import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function ProviderStack({ children }: {children: ReactNode}) {
  return (
      <BrowserRouter>
          {children}
      </BrowserRouter>
  );
}
