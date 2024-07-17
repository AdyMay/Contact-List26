import React, { useState, useEffect } from "react";
import React from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactRow from "../ContactRow/ContactRow";

// const dummyContacts = [
//    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//  ];

function ContactList({setSelectedContactId}) {
    const [contacts, setContacts] = useState([]);
    //useState(dummyContacts);
    useEffect(() => {
        async function fetchContacts() {
            try {
                const res = await fetch(
                    "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
                );
                const json = await res.json();
                console.log(json);
                setContacts(json);
            } catch (error) {
              console.error(error);
            }
          }
          fetchContacts();
    }, []);
    console.log(contacts);
  return (
    <>
      <h2>Contact List</h2>
      <table>
        <thread>
          <tr>
            <th scope="col"> Name </th>
            <th scope="col"> Email </th>
            <th scope="col"> Phone </th>
          </tr>
        </thread>
        <tbody>
            {contacts.map((contact) => (
            <ContactRow 
            key={contact.id} 
            name={contact.name} 
            email={contact.email} 
            phone={contact.phone}
            contactId={contact.Id}
            />
        ))}
        </tbody>
      </table>
    </>
  );
}

export default ContactList;