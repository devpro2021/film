import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './styles.module.scss';

function MainPage() {
  return (
      <div className={styles.MainPage}>
          <div className={styles.main}>
              <div style={{ width: '100%' }}>
                  <Carousel className={styles.MainCarousel} showThumbs={false}>
                      <div>
                          <img
                            alt=""
                            src="https://blog.explorersclub.com.br/wp-content/uploads/2021/05/ExplorersClub_blog06.jpg"
                          />
                          <p className="legend">Legend 1</p>
                      </div>
                      <div>
                          <img
                            alt=""
                            src="https://ic.pics.livejournal.com/lilasbleu/4426714/1467353/1467353_original.jpg"
                          />
                          <p className="legend">Legend 2</p>
                      </div>
                      <div>
                          <img
                            alt=""
                            src="https://blog.explorersclub.com.br/wp-content/uploads/2021/05/ExplorersClub_blog06.jpg"
                          />
                          <p className="legend">Legend 3</p>
                      </div>
                  </Carousel>
              </div>

          </div>
          <div className={styles.aside}>aside block</div>

      </div>
  );
}

export default MainPage;
