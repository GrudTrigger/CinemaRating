'use client'
import { TestSlider, Topten } from "@/components";
import {KinopoiskDev, MovieQueryBuilder, SORT_TYPE, SPECIAL_VALUE} from "@openmoviedb/kinopoiskdev_client";
import {useState, useEffect} from "react";


export default function Home() {
    const kp = new KinopoiskDev('EBZZ6S8-AQ346N3-H1PCJ82-9SAZ5MY');
    const [mainSlider, setMainSlider] = useState(null);
    const [topTenFilms, setTopTenFilms] = useState(null);
    const [topTenSeries, setTopTenSeries] = useState(null);

    useEffect(() => {
        const getRelatedByQueryBuilderMovies  = async () => {
            const queryBuilder = new MovieQueryBuilder();

            const query = queryBuilder.select(['id','name','rating', 'poster', 'year']).filterRange('year', [2020,2023]).filterRange('rating.kp',[7.5, 10]).paginate(1,3).build();
            const {data} = await kp.movie.getByFilters(query);
            setMainSlider(data)
        }

        const getTopTenFilms = async () => {
            const queryBuilder = new MovieQueryBuilder();
            const query = queryBuilder.select(['id', 'name', "poster",'rating']).filterRange('rating.imdb', [9, 10]).filterExact("type", ['movie']).filterExact('poster.url', SPECIAL_VALUE.NOT_NULL).paginate(1, 10).build();
            const {data} = await kp.movie.getByFilters(query);
            setTopTenFilms(data);
        }

        const getTopTenSeries = async() => {
            const queryBuilder = new MovieQueryBuilder();
            const query = queryBuilder.select(['id', 'name', "poster",'rating', 'type']).filterRange('rating.imdb', [9, 10]).filterExact("type", ['tv-series']).filterExact('poster.url', SPECIAL_VALUE.NOT_NULL).paginate(1, 10).build();
            const {data} = await kp.movie.getByFilters(query);
            setTopTenSeries(data)
        }

        getRelatedByQueryBuilderMovies();
        getTopTenFilms();
        getTopTenSeries();

    },[])


    return (
    <>
        {mainSlider && <TestSlider data={mainSlider}/>}
        {topTenFilms && <Topten topTenFilms={topTenFilms} type={"films"}/>}
        {topTenSeries && <Topten topTenFilms={topTenSeries} type={"series"}/>}
    </>
  );
}
