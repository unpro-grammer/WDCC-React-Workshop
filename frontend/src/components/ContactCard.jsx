import styles from "./ContactCard.module.css";

export default function ContactCard({contact}) {
    return (
        <div className={styles.card}>
            <img src={contact.photoUrl} alt={contact.name} />
            <h2>{contact.name}</h2>
        </div>
    )
}