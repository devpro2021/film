import React, {FC, ReactNode, useCallback, useEffect} from "react";
import {Portal} from "@shared/ui/Portal";
import classNames from "classnames";

import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}


export const Modal: FC<ModalProps> = ({className, children, isOpen, onClose}) => {

    const handleClose = useCallback(() => {
        onClose?.();
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [handleClose]);

    const handleContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return <Portal>
      <div className={classNames([styles.modal, className && styles[className], isOpen && styles.opened])}>
        <div className={classNames(styles.modal__overlay)} onClick={handleClose}>
          <div className={classNames([styles.modal__content, isOpen && styles.opened])} onClick={handleContentClick}>
            <div className={styles.modal__header} >HEADER</div>
            <div className={styles.modal__body}>{children}</div>
            <div className={styles.modal__footer} >FOOTER</div>
          </div>
        </div>
      </div>
    </Portal>
}
