// import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import PageTitle from "../../components/PageTitle/PageTitle";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect } from "react";

export default function ContactsPage() {
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(fetchContacts())
   },[dispatch])
    return (
        <div>
            <PageTitle>Your Contacts</PageTitle>
            <ContactForm/>
            <SearchBox/>
            <ContactList/>
        </div>
    )
    
}