import styles from './Films.module.css';
import Image from "next/image";
import Link from "next/link";

export const Films = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperFilms}>
                <div className={styles.film}>
                    <Link className={styles.linkFilm} href={'/'}>
                        <Image className={styles.filmImage} src={'/Беспринципные.jpg'} alt='Беспринципные' width={153} height={235}/>
                        <p className={styles.filmTitle}>Беспринципные</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}


