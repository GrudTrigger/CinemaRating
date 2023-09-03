'use client'
import {Films, FilmsTitle, FilterFilms} from "@/components";
import {KinopoiskDev, MovieQueryBuilder, SORT_TYPE, SPECIAL_VALUE} from "@openmoviedb/kinopoiskdev_client";
import {useEffect, useState} from "react";

export default function FilmsPage() {
    const kp = new KinopoiskDev('EBZZ6S8-AQ346N3-H1PCJ82-9SAZ5MY');
    const type = 'films'
    const [films, setFilms] = useState(null);

    useEffect(() => {
        const getFilms = async () => {
            const queryBuilder = new MovieQueryBuilder();
            const query = queryBuilder.select(['id','name','rating', 'poster', 'year']).filterExact('poster.url', SPECIAL_VALUE.NOT_NULL).paginate(1,21).build();

            const {data} = await kp.movie.getByFilters(query);
            setFilms(data);
        }
        getFilms();
    }, []);

    return(
        <>
            <FilmsTitle type={type}/>
            <FilterFilms/>
            {films && <Films films = {films}/>}
        </>
    )
}
