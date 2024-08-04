import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/Homepage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";

import LoginPage from "../pages/LoginPage/Login";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import Layout from "./Layout/Layout";



export default function App() {
   return(
        <Layout>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Routes>
        </Layout>
        )
}