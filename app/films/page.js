import {Films, FilmsTitle, FilterFilms} from "@/components";

export default function FilmsPage() {
    const type = 'films'
    return(
        <>
            <FilmsTitle type={type}/>
            <FilterFilms/>
            <Films/>
        </>
    )
}
