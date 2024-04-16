import { FC, ReactNode } from "react";

import styles from "@pages/Main/styles.module.scss";

interface PageLayoutProps {
  children: ReactNode;
}
export const PageLayout: FC<PageLayoutProps> = ({ children }) => (
  <div className={styles.PageLayout}>
    <main className={styles.PageMain}>{children}</main>
  </div>
);
