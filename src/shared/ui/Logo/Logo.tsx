import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export function Logo() {
  return (
      <Link className={styles.Logo} to="/">
          <div>ФИЛЬМ</div>
          <div className={styles.Logo_primary}>ОАЗИС</div>
      </Link>
  );
}
