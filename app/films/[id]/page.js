"use client";
import {
  KinopoiskDev,
  MovieQueryBuilder,
  SORT_TYPE,
  SPECIAL_VALUE,
} from "@openmoviedb/kinopoiskdev_client";
import { useEffect, useState } from "react";
import { InfoFilm } from "@/components";

export default function FilmIdPage({ params }) {
  const kp = new KinopoiskDev(process.env.NEXT_PUBLIC_API_KEY);

  const [film, setFilm] = useState(null);

  useEffect(() => {
    const getFilmById = async () => {
      const { data } = await kp.movie.getById(params.id);
      if (data) {
        setFilm(data);
      }
    };
    getFilmById();
  }, []);

  return <>{film && <InfoFilm film={film} />}</>;
}
