import { ReactNode } from 'react';
import { ErrorBoundaryFallback } from '@app/providers/ErrorBoundary/ErrorBoundaryFallback';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorBoundary = ({ children }: { children: ReactNode }) => (
    <ReactErrorBoundary
      fallbackRender={ErrorBoundaryFallback}
    >
        {children}
    </ReactErrorBoundary>
);

export default ErrorBoundary;
