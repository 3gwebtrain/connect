import type { FormEvent } from 'react';
import type { InputProps } from '../../../interfaces/interface';
import styles from './input-text.module.css';

export const Input = ({
  alt = 'default',
  placeHolder = 'default',
  aria = 'default',
  callback = () => {},
  children,
}: InputProps): React.ReactElement => {
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    callback(e);
  };
  return (
    <div className={styles.headerSearch}>
      <span>{children ?? ''}</span>
      <input
        onInput={(e) => handleInput(e)}
        alt={alt}
        placeholder={placeHolder}
        aria-label={aria}
        type="text"
      />
    </div>
  );
};
