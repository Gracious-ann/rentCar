'use client';

import { useEffect, useRef, useState } from 'react';
import css from './BrandSelect.module.css';
import { FiChevronDown } from 'react-icons/fi';

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];

  value: string;
  onChange: (value: string) => void;

  label: string;
  placeholder: string;
}

const BrandSelect = ({
  options,
  value,
  onChange,
  label,
  placeholder,
}: Props) => {
  const [open, setOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div
      className={css.custom_select}
      ref={selectRef}
    >
      <span className={css.select_label}>{label}</span>

      <div
        className={css.select_header}
        onClick={() => setOpen(prev => !prev)}
      >
        <span>{selectedOption?.label || placeholder}</span>

        <FiChevronDown className={`${css.arrow} ${open ? css.open : ''}`} />
      </div>

      {open && (
        <div className={css.select_dropdown}>
          {options.map(option => (
            <div
              key={option.value}
              className={css.select_option}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandSelect;
