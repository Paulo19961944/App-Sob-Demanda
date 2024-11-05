"use client"
import styles from '../app/styles.module.css'

export default function Title(){
    return(
        <header className={styles.headerContainer}>
            <img src="./Mobile-Icon.png" alt="" className={styles.mobileIconImage}/>
            <h1>APP SOB DEMANDA</h1>
        </header>
    );
}