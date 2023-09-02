import {Films, FilmsTitle, FilterFilms} from "@/components";

export default function SeriesPage() {
    const type = 'series'

    return(
        <>
            <FilmsTitle type={type}/>
            <FilterFilms/>
            <Films/>
        </>
    )
}
