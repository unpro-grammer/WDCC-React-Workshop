import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import { INITIAL_CONTACTS } from "./data/initial-contacts";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {

  const [contact, setContact] = useState(INITIAL_CONTACTS[0]); //create stateful value called contact

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

        <Sidebar contacts={INITIAL_CONTACTS} onContactClick={handleContactClick}/>
        {/* <h1>Hello, WDCC! 🐮💻</h1> */}
        <ContactDisplay contact={contact} />
      </div>
    </>
  );
}
