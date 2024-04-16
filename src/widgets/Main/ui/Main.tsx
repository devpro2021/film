import { ReactNode } from "react";

import styles from "./styles.module.scss";

export function Main({ children }: { children: ReactNode }) {
  return <div className={styles.Main}>{children}</div>;
}
