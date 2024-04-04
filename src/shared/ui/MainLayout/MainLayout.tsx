import styles from './styles.module.scss';
import {ReactNode} from "react";


export const MainLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className={styles.MainLayout}>
            {children}
        </div>
    );
};
