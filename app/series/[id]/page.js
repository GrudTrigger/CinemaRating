'use client'
import {KinopoiskDev, MovieQueryBuilder, SORT_TYPE, SPECIAL_VALUE} from "@openmoviedb/kinopoiskdev_client";
import {useEffect, useState} from "react";
import {InfoFilm} from "@/components";


export default function SeriesIdPage({params}){
    const kp = new KinopoiskDev('EBZZ6S8-AQ346N3-H1PCJ82-9SAZ5MY');

    const [film, setFilm] = useState(null);

    useEffect(() => {
        const getSeriesById = async() => {
            const {data} = await kp.movie.getById(params.id)
            if(data) {
                setFilm(data)
            }
        }
        getSeriesById()

    }, []);


    return(
        <>
            {film && <InfoFilm film={film}/>}
        </>
    )
}

