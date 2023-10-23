"use client";
import { Films, FilmsTitle, FilterFilms } from "../../components";
import {
  KinopoiskDev,
  MovieQueryBuilder,
  SORT_TYPE,
  SPECIAL_VALUE,
} from "@openmoviedb/kinopoiskdev_client";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

export default function FilmsPage() {
  const kp = new KinopoiskDev(process.env.NEXT_PUBLIC_API_KEY);
  const type = "films";
  const [films, setFilms] = useState(null);
  const [firstDisplay, setFirstDisplay] = useState(true);

  const [selectGenre, setSelectGenre] = useState("драма");
  const [selectYears, setSelectYears] = useState("2023");
  const [selectRatings, setSelectRatings] = useState("");
  const [buttonPress, setButtonPress] = useState(false);

  const [isLoading, setIsLoading] = useState()


  const handleYearSelect = (event, typeSelect) => {
    switch (typeSelect) {
      case "genre":
        setSelectGenre(event.target.value.toLowerCase());
        setFirstDisplay(false);
        break;
      case "years":
        setSelectYears(event.target.value);
        setFirstDisplay(false);
        break;
      case "ratings":
        const target = event.target.value;
        const numberRating = target.match(/\d+/);
        setSelectRatings(numberRating[0]);
        setFirstDisplay(false);
        break;
      default:
        return;
    }
  };

  const handleResetButton = () => {
    setButtonPress((prevState) => !prevState);
    setFirstDisplay(true);
  };

  useEffect(() => {
    if (firstDisplay) {
      const randomFilms = async () => {
        setIsLoading(false)
        const queryBuilder = new MovieQueryBuilder();
        const query = queryBuilder
          .select([
            "id",
            "name",
            "rating",
            "poster",
            "year",
            "genres.name",
            "type",
          ])
          .filterExact("poster.url", SPECIAL_VALUE.NOT_NULL)
          .filterExact("type", ["movie"])
          .paginate(1, 21)
          .build();

        const { data } = await kp.movie.getByFilters(query);
        setIsLoading(true)
        setFilms(data);
      };
      randomFilms();
    } else {
      const getFilms = async () => {
        setIsLoading(false)
        const queryBuilder = new MovieQueryBuilder();
        const query = queryBuilder
          .selectField([
            "id",
            "name",
            "rating",
            "poster",
            "year",
            "genres.name",
            "type",
          ])
          .filterExact("poster.url", SPECIAL_VALUE.NOT_NULL)
          .filterExact("type", ["movie"])
          .filterRange("year", [selectYears])
          .filterRange("genres.name", [selectGenre])
          .filterRange("rating.imdb", [selectRatings, 10])
          .paginate(1, 21)
          .build();

        const { data } = await kp.movie.getByFilters(query);
        setIsLoading(true)
        setFilms((prevFilms) => (prevFilms ? [...prevFilms, ...data] : data));
      };
      getFilms();
    }
  }, [selectYears, selectGenre, selectRatings, buttonPress, firstDisplay]);
  return (
    <div style={{flexGrow: '1'}}>
      <FilmsTitle type={type} />
      <FilterFilms
        handleYearSelect={handleYearSelect}
        handleResetButton={handleResetButton}
      />
      {!isLoading ? (
        <ReactLoading
          type={"spinningBubbles"}
          color={"#ea003d"}
          height={"5%"}
          width={"5%"}
          className="loading-ring"
        />
      ) : films && <Films films={films}/>}
    </div>
  );
}
