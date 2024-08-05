import { Route, Routes } from "react-router-dom";
import {lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { refreshUser } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import RestrictedRoute from "./RestrictedRoute";
import Layout from "./Layout/Layout"
import PrivateRoute from "./PrivateRoute";

const HomePage = lazy(()=> import("../pages/HomePage/Homepage"));
const ContactsPage = lazy(()=>import("../pages/ContactsPage/ContactsPage"));
const LoginPage = lazy(()=>import("../pages/LoginPage/Login"));
const RegisterPage = lazy(()=> import("../pages/RegisterPage/RegisterPage"));



export default function App() {
        const isRefreching = useSelector(selectIsRefreshing);
        const dispatch = useDispatch();
        useEffect(( )=> {
                dispatch(refreshUser())
        }, [dispatch]);
   return isRefreching ? (
        <div>Refreshing user please wait...</div>
      ) :  (
        <Layout>
                <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo={"/login"}/>}/>
                        {/* <Route path="/register" element={<RegisterPage/>}/>
                        <Route path="/login" element={<LoginPage/>}/> */}
                        <Route path="/register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo={"/contacts"}/>}/>
                        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo={"/contacts"}/>}/>
                </Routes>
        </Layout>
        )
}