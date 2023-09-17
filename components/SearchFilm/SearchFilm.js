import Image from "next/image";
import styles from './SearchFilm.module.css';
import Link from "next/link";

export const SearchFilm = ({searchFilm}) => {
    const films = searchFilm.docs
    console.log(films)
    return (
        <ul className={styles.wrapperSearch}>
            {films.map((film, index) => {
                return(
                    <li key={index} className={styles.wrapperFilm}>
                        <Image src={film.poster.url} alt={'poster film'} width={45} height={50}></Image>
                        <Link className={styles.linkFilm} href={`/films/${film.id}`}>
                            <div className={styles.title}>{film.name}</div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
