import { FC } from "react";
import { Button } from "@shared/ui/Button";

import styles from "./ErrorBoundaryFallback.module.scss";

export interface ErrorBoundaryFallbackProps {
  error: Error;
}
export const ErrorBoundaryFallback: FC<ErrorBoundaryFallbackProps> = ({
  error,
}) => {
  const onResetBoundary = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={styles.errorWrapper}>
      <p className={styles.bgText}>ERROR</p>
      <div className={styles.error}>
        <p className={styles.errorMainText}>Непредвиденная ошибка</p>
        <pre className={styles.errorMessage}>{error.message}</pre>
        <Button className="primary" type="button" onClick={onResetBoundary}>
          Обновить
        </Button>
      </div>
    </div>
  );
};
