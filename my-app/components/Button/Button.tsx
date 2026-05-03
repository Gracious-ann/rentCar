import css from './Button.module.css';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({ children, onClick, disabled }: Props) {
  return (
    <button
      className={css.button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
