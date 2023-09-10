import styles from './InfoFilm.module.css';
import Image from "next/image";
import {formatTime} from "@/components/helpers/helpers";

export const InfoFilm = ({film}) => {
    console.log(film)
    const trailer = film.videos.trailers[0].url;
    const srcImage = film.poster.url;
    const title = film.name
    const timeFilm = formatTime(film.movieLength)

    return (
        <div className={styles.container}>
            <div className={styles.wrapperFilm}>
                <div className={styles.poster}>
                    <div>
                        <Image src={srcImage} alt={'Постер'} width={719} height={404} />
                    </div>
                </div>
                <div>
                    <h1 className={styles.titleFilm}>{title}</h1>
                    <div className={styles.paramsFilm}>
                        <div className={styles.paramsList}>
                            <div className={styles.params}>{film.year}</div>
                            <div className={styles.params}>{timeFilm}</div>
                            <div className={styles.params}>{film.ageRating}+</div>
                        </div>
                        <div className={styles.paramsList}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div>
                            <div className={styles.ratingFilm}></div>
                            <div className={styles.actorsFilm}></div>
                        </div>
                        <div>
                            <p className={styles.descrFilm}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
