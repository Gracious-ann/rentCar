'use client';

import ErrorView from '@/components/Error/ErrorView';

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: Props) {
  return (
    <ErrorView
      error={error}
      reset={reset}
    />
  );
}
