import clsx from 'clsx';

import css from './Button.module.css';

interface Props {
  children: React.ReactNode;

  onClick?: () => void;

  disabled?: boolean;

  type?: 'button' | 'submit';

  variant?: 'primary' | 'secondary' | 'tertiary';
}

export default function Button({
  children,
  onClick,
  disabled,
  type = 'button',
  variant = 'primary',
}: Props) {
  return (
    <button
      type={type}
      className={clsx(css.button, css[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
