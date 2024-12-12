import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectUser } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"

export default function UserMenu() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser);
    // console.log("🚀 ~ UserMenu ~ user:", user)
    return(
        <div className={css.wrapper}>
            <p className={css.username}>Welcome, {user.name} </p>
            <button className={css.button} type="button" onClick={()=>{dispatch(logout())}}>Logout</button>
        </div>
    )
}