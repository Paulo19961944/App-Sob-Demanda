"use client"; // Define com Cliente
import styles from '../pages/styles.module.css'; // Importa os Estilos

// RENDERIZA O COMPONENTE
export default function Title() {
    return (
        <header className={styles.headerContainer}>
            <img src="/images/Mobile-Icon.png" alt="Ícone do App" className={styles.mobileIconImage} />
            <h1>APP SOB DEMANDA</h1>
        </header>
    );
}
