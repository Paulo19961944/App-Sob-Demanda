"use client"; // Define como Cliente
import styles from '../pages/styles.module.css'; // Exporta os Estilos

// RENDERIZA O COMPONENTE
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <small className={styles.footerText}>Copyright 2024 - PH Site Developer</small>
        </footer>
    );
}
