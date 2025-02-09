import { Component, ReactNode } from 'react';

import { ERROR } from '@config';
import { Logger } from '@utils';

type ErrorBoundaryProps = {
  children?: ReactNode;
  className?: string;
};

type ErrorBoundaryState = {
  hasError: boolean;
  message: string;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error) {
    Logger.warn(`${ERROR.ERROR_BOUNDARY}: ${error.message}`);
  }

  render() {
    const { children, className } = this.props;
    const { hasError, message } = this.state;

    return !hasError ? (
      children
    ) : (
      <div
        className={`flex h-screen w-full flex-1 items-center justify-center ${className}`}
      >
        <div className="flex flex-col items-center justify-center gap-4 rounded-sm border-3 border-red-500 p-10">
          <p className="text-2xl font-bold text-black">
            Oops! Something went wrong...
          </p>
          <p className="">{message}</p>
          <p className="">Reload the page</p>
        </div>
      </div>
    );
  }
}

export default ErrorBoundary;
