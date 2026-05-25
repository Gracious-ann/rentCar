'use client';

import Button from '@/components/Button/Button';
import css from './ErrorView.module.css';

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorView = ({ error, reset }: Props) => {
  return (
    <div className={css.overlay}>
      <div className={css.card}>
        <div className={css.icon}>⚠️</div>

        <h2 className={css.title}>Сталась помилка</h2>

        <p className={css.message}>{error.message || 'Щось пішло не так'}</p>

        <div className={css.actions}>
          <Button onClick={reset}>Спробувати знову</Button>

          <Button onClick={() => (window.location.href = '/')}>
            На головну
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorView;
