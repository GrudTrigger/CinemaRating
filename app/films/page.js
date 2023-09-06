'use client'
import {Films, FilmsTitle, FilterFilms} from "@/components";
import {KinopoiskDev, MovieQueryBuilder, SORT_TYPE, SPECIAL_VALUE} from "@openmoviedb/kinopoiskdev_client";
import {useEffect, useState} from "react";

export default function FilmsPage() {
    const kp = new KinopoiskDev('EBZZ6S8-AQ346N3-H1PCJ82-9SAZ5MY');
    const type = 'films'
    const [films, setFilms] = useState(null);

    //FILTER
    const [selectGenre, setSelectGenre] = useState('Драма');
    const [selectYears, setSelectYears] = useState('2023');
    const [selectRatings, setSelectRatings] = useState('');

    //TODO: изменить название функции || Сделать начальный показ фильмов, если стейт фильтров пустой, сделать вывод некого кино по умолчанию. При сбросе фильтра, так же должны показываться фильмы
    const handleYearSelect  = (event, typeSelect) => {
        switch (typeSelect) {
            case 'genre' :
                setSelectGenre(event.target.value.toLowerCase());
                break;
            case 'years' :
                setSelectYears(event.target.value);
                break;
            case 'ratings' :
                const target = event.target.value;
                const numberRating = target.match(/\d+/);
                setSelectRatings(numberRating[0]);
                //
                break;
            default :
                return;
        }

    }

    const handleResetButton = () => {
        setSelectGenre('');
        setSelectYears('');
        setSelectRatings('');
    }

    useEffect(() => {
        const getFilms = async () => {
            const queryBuilder = new MovieQueryBuilder();
            const query = queryBuilder.select(['id','name','rating', 'poster', 'year', 'genres.name']).filterExact('poster.url', SPECIAL_VALUE.NOT_NULL).filterExact("type", ['movie']).filterRange('year',[selectYears]).filterRange('genres.name',[selectGenre]).filterRange('rating.kp', [selectRatings, 10]).paginate(1,21).build();

            const {data} = await kp.movie.getByFilters(query);
            setFilms(data);
        }
        getFilms();
    }, [selectYears,selectGenre,selectRatings]);
    console.log(films)
    return(
        <>
            <FilmsTitle type={type}/>
            <FilterFilms handleYearSelect={handleYearSelect} handleResetButton={handleResetButton}/>
            {films && <Films films = {films}/>}
        </>
    )
}
