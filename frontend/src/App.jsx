import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";

export default function App() {

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState(null); //create stateful value called contact

  async function fetchContacts() {
    const response = await fetch("http://localhost:3000/api/contacts");
    const newContacts = await response.json();
    setContacts(newContacts);
  }

  useEffect(() => {
    fetchContacts(); // after component redraws itself
  }, []); // no values in empty array: prevents infinite loop after it first loads

  // let contact = {
  //   _id: "18fb9676-3c5b-4480-b8bc-4b9cc2f6ef28",
  //   name: "Darth Vader",
  //   phoneNumber: "+1 555-000-1004",
  //   funFact: "Was originally a Jedi named Anakin Skywalker.",
  //   photoUrl: "https://preview.redd.it/standing-cat-pfp-pls-v0-ovdg2gh57p4c1.jpg?auto=webp&s=98703885e0eced7caea79ebabaf0c7c7559680a2"
  // }

  function handleContactClick(c) {
    setContact(c);
  }

  return (
    <>
      <div className={styles.container}>

        <Sidebar contacts={contacts} onContactClick={handleContactClick} />
        {/* <h1>Hello, WDCC! 🐮💻</h1> */}
        {contact != null ? <ContactDisplay contact={contact} /> : undefined}
      </div>
    </>
  );
}
