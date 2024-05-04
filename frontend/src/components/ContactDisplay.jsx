import styles from "./ContactDisplay.module.css";

export default function ContactDisplay({ contact }) {

    // const contact = props.contact;
    // // const { contact } = props; // same thing as above: taking out an arg from smth with the same name as object. useful for multiple vars

    return (
        <main className={styles.container}>
            <img src={contact.photoUrl} alt={contact.name} />
            <h1>{contact.name}</h1>
            <h3>{contact.phoneNumber}</h3>
            <p>{contact.funFact}</p>
        </main>
    )
}