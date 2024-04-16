import { ReactNode } from "react";

import styles from "./styles.module.scss";

export function MainLayout({ children }: { children: ReactNode }) {
  return <div className={styles.MainLayout}>{children}</div>;
}
