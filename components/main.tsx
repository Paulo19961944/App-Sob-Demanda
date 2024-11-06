"use client"; // Define como Cliente
import styles from '../pages/styles.module.css'; // Importa os Estilos

// RENDERIZA O COMPONENTE
export default function Main() {
    return (
        <main className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>Passo 1: Selecione o Hardware</h2>
            <article className={styles.hardware}>
                <button className={styles.buttons}>
                    <img src="/images/Raspberry-Icon.png" alt="Raspberry Pi" className={styles.raspberryImage} />
                    <p className={styles.hardwareText}>Raspberry Pi</p>
                </button>
                <button className={styles.buttons}>
                    <img src="/images/arduino-icon.png" alt="Arduino" className={styles.raspberryImage} />
                    <p className={styles.hardwareText}>Arduino</p>
                </button>
            </article>
            <h2 className={styles.mainTitle}>Passo 2: Escolha as Configurações</h2>
            <article className={styles.config}>
                <button className={styles.buttons}>
                    <img src="/images/Empresa_Icon.png" alt="Padrão" className={styles.raspberryImage} />
                    <p className={styles.configText}>Padrão</p>
                </button>
                <button className={styles.buttons}>
                    <img src="/images/Personalizado-Icon.png" alt="Personalizado" className={styles.raspberryImage} />
                    <p className={styles.configText}>Personalizado</p>
                </button>
            </article>
            <h2 className={styles.mainTitle}>Passo 3: Número de Dispositivos</h2>
            <article className={styles.devices}>
                <button className={styles.buttons}>
                    <img src="/images/Dispositivos-Icon.png" alt="3 Dispositivos" className={styles.raspberryImage} />
                    <p className={styles.devicesText}>3 Dispositivos</p>
                </button>
                <button className={styles.buttons}>
                    <img src="/images/Casa-Inteira-Icon.png" alt="Ilimitado" className={styles.raspberryImage} />
                    <p className={styles.devicesText}>Ilimitado</p>
                </button>
            </article>
        </main>
    );
}
