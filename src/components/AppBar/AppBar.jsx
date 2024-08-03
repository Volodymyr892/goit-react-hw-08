import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import Authnav from "../AuthNav/AuthNav"
import css from "./AppBar.module.css"

export default function  AppBar() {
    return(
        <header  className={css.header}>
            <Navigation/>
            <UserMenu/>
            <Authnav/>
        </header>
    )
}