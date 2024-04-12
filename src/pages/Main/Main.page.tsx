import { PageLayout } from '@shared/ui/PageLayout';

import styles from './styles.module.scss';

function MainPage() {
  return (
      <PageLayout>
          <div className={styles.MainPage}>
              content main page
          </div>
      </PageLayout>

  );
}

export default MainPage;
