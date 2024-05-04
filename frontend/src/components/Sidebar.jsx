import ContactCard from "./ContactCard";
import styles from "./Sidebar.module.css";

export default function Sidebar({ contacts }) {

    return (
        <nav className={styles.sidebar}>
            <div className={styles.corner}>
                <h2>Friends</h2>
                <input className={styles.sidebar} type="text" />
            </div>
            <div className={styles.contactList}>
                {contacts.map((contact) => (

                    <ContactCard contact = {contact} />

                ))}
            </div>
        </nav>
    )
}
