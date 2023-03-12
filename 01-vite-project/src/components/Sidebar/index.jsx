import styles from './Sidebar.module.css';

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"/>

            <div className={styles.profile}>
                <strong>Leonardo Barbosa</strong>
                <span>Web Developer</span>
            </div>
            <footer className={styles.footer}>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}