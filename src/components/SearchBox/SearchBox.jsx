import { useDispatch, useSelector } from "react-redux"
import { selectNameFilter } from "../../redux/filters/selectors"
import { changeFilter }  from "../../redux/filters/slice"
import css from "./SerachBox.module.css"

export default function SearchBox() {
    const dicpatch = useDispatch()
    const filter = useSelector(selectNameFilter)
    return(
        <div className={css.form}>
        <p>Find contacts by name</p>
        <input type="text" 
        value={filter}
        onChange={(event) => dicpatch(changeFilter(event.target.value))}/>
        </div>
    )
}