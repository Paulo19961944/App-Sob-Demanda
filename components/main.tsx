"use client"
import styles from '../app/styles.module.css';

export default function Main() {
    return (
        <main className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>Passo 1: Selecione o Hardware</h2>
            <article className={styles.hardware}>
                <button className={styles.buttons}>
                    <img src="./Raspberry-Icon.png" alt="Raspberry Pi" className={styles.raspberryImage} />
                    <p className={styles.hardwareText}>Raspberry Pi</p>
                </button>
                <button className={styles.buttons}>
                    <img src="./arduino-icon.png" alt="Raspberry Pi" className={styles.raspberryImage} />
                    <p className={styles.hardwareText}>Arduino</p>
                </button>
            </article>
        </main>
    )
}