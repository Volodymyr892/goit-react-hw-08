import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/Homepage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import Navigation from "./Navigation/Navigation";
import AuthNav from "../components/AuthNav/AuthNav";
import LoginPage from "../pages/LoginPage/Login";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Layout from "./Layout/Layout";
fetchContacts
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";


export default function App() {
//     const dispatch = useDispatch()
//     useEffect (()=>{
//         dispatch(fetchContacts())
//    },[dispatch])
    return (
        <Layout>
                <Navigation/>
                <AuthNav/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
        </Layout>
        )
}