import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import { ButtonShape, ButtonAppearance } from '../../types/ui';

import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: ButtonAppearance;
    shape: ButtonShape;
    text: string;
    icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({
  appearance, text, shape = 'rectangle', icon, ...props
}) => (
    <button
      {...props}
      className={classNames([styles.Button, {
        [styles.primaryButton]: appearance === 'primary',
        [styles.secondaryButton]: appearance === 'secondary',
        [styles.rectangle]: shape === 'rectangle',
        [styles.square]: shape === 'square',
        [styles.iconButton]: icon,
        [styles.iconTextButton]: icon && text,
      }])}
    >
        {icon}
        {text}
    </button>
);
