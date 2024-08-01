import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import Authnav from "../AuthNav/AuthNav"

export default function  AppBar() {
    return(
        <header>
            <Navigation/>
            <UserMenu/>
            <Authnav/>
        </header>
    )
}