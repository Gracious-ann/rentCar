'use client';

import Button from '@/components/Button/Button';

type Props = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: Props) => {
  return (
    <div className='container'>
      <div className='fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-neutral-950 px-4'>
        <div className='max-w-md w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-8 text-center'>
          <div className='text-5xl mb-4'>⚠️</div>

          <h2 className='text-2xl font-semibold mb-2'>Сталась помилка</h2>

          <p className='text-sm text-gray-500 mb-6'>
            {error.message || 'Щось пішло не так'}
          </p>

          <div className='flex gap-3'>
            <Button
              onClick={reset}
              // className='flex-1 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition'
            >
              Спробувати знову
            </Button>

            <Button
              onClick={() => (window.location.href = '/')}
              //   className='flex-1 py-2 rounded-xl border hover:bg-gray-100 dark:hover:bg-neutral-800 transition'
            >
              На головну
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
