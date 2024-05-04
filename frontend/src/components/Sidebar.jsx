import ContactCard from "./ContactCard";
import styles from "./Sidebar.module.css";

export default function Sidebar({ contacts, onContactClick }) {

    return (
        <nav className={styles.sidebar}>
            <div className={styles.corner}>
                <h2>Friends</h2>
                <input className={styles.searchbar} type="text" />
            </div>
            <div className={styles.contactList}>
                {contacts.map((contact) => (

                    <ContactCard key={contact._id} contact = {contact} onContactClick={onContactClick} />

                ))}
            </div>
        </nav>
    )
}
