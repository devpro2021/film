import { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
    <button
      {...props}
      className={classNames([styles.Button, { [styles.primaryButton]: props.className?.includes('primary') }])}
      style={{
        width: props.style?.width || 190,
      }}
    >
        {children}
    </button>
);
