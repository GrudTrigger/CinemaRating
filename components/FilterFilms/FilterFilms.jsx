"use client";
import styles from "./FilterFilms.module.css";
import {genres} from "@/components/helpers/helpers";
import {years} from "@/components/helpers/helpers";
import {ratings} from "@/components/helpers/helpers";
import Image from "next/image";

export const FilterFilms = ({ handleYearSelect, handleResetButton}) => {


    return (
        <div className={styles.container}>
            <div className={styles.filterWrapper}>
                <select className={styles.filterSelect} id="genreSelect" onChange={()=> handleYearSelect(event, 'genre')} defaultValue={'Жанры'}>
                    <option value="" disabled={true}>Выберите жанр</option>
                    {genres.map((genre,index) => {
                        return <option key={index} value={genre}>{genre}</option>
                    })}
                </select>
                <select className={styles.filterSelect} id="yearsSelect" onChange={()=> handleYearSelect(event, 'years')}>
                    <option value="" disabled={true}>Годы</option>
                    {years.map((year, index) => {
                        return <option key={index} value={year}>{year}</option>
                    })}
                </select>
                <select className={styles.filterSelect} id="ratingSelect" onChange={()=> handleYearSelect(event, 'ratings')}>
                    <option value="" disabled={true}>Рейтинг</option>
                    {ratings.map((rating, index) =>{
                        return <option key={index} value={rating}>{rating}</option>
                    })}
                </select>
            </div>
            <div className={styles.filterReset}>
                <div className={styles.filterX}><Image src={'./cancel.svg'} alt='cancel' width={18} height={18}/></div>
                <div>
                    <button onClick={handleResetButton} className={styles.filterDescr}>Сбросить фильтр</button>
                </div>
            </div>
        </div>
    )
}


