"use client"; // Define como Cliente
import styles from '../pages/styles.module.css'; // Importa os Estilos
import { useRouter } from 'next/router';
import { useState } from "react";
import { 
    selecionarHardware, 
    selecionarConfig, 
    selecionarDispositivos, 
    precoTotal,
    salvarNoFirebase
} from './mainLogic'; // Importa as funções do TypeScript

export default function Main() {
    const router = useRouter();
    const handleNavigate = () => {
        if (hardware && config && devices) {
            salvarNoFirebase(); // Salva no Firebase antes de redirecionar
            router.push('/checkout'); // Vai para a página de checkout
        } else {
            alert('Por favor, selecione todas as opções antes de continuar.');
        }
    };
    

    // Estados para armazenar os botões selecionados
    const [hardware, setHardware] = useState<"raspberry" | "arduino" | null>(null);
    const [config, setConfig] = useState<"default" | "personalized" | null>(null);
    const [devices, setDevices] = useState<"three" | "infinite" | null>(null);

    // Função para selecionar hardware
    const handleSelectHardware = (type: "raspberry" | "arduino") => {
        setHardware(type);
        selecionarHardware(type); // Atualiza o preço no TypeScript
    };

    // Função para selecionar configurações
    const handleSelectConfig = (type: "default" | "personalized") => {
        setConfig(type);
        selecionarConfig(type); // Atualiza o preço no TypeScript
    };

    // Função para selecionar dispositivos
    const handleSelectDevices = (type: "three" | "infinite") => {
        setDevices(type);
        selecionarDispositivos(type); // Atualiza o preço no TypeScript
    };

    return (
        <main className={styles.mainContainer}>
            <h2 className={styles.mainTitle}>Passo 1: Selecione o Hardware</h2>
            <article className={styles.hardware}>
                <button 
                    className={`${styles.buttonRaspberryPi} ${hardware === "raspberry" ? styles.selected : ""}`} 
                    onClick={() => handleSelectHardware("raspberry")}
                >
                    <img src="/images/Raspberry-Icon.png" alt="Raspberry Pi" className={styles.raspberryImage} />
                    <p className={styles.hardwareText}>Raspberry Pi</p>
                </button>
                <button 
                    className={`${styles.buttonArduino} ${hardware === "arduino" ? styles.selected : ""}`} 
                    onClick={() => handleSelectHardware("arduino")}
                >
                    <img src="/images/arduino-icon.png" alt="Arduino" className={styles.arduinoImage} />
                    <p className={styles.hardwareText}>Arduino</p>
                </button>
            </article>
            <h2 className={styles.mainTitle}>Passo 2: Escolha as Configurações</h2>
            <article className={styles.config}>
                <button 
                    className={`${styles.buttonDefault} ${config === "default" ? styles.selected : ""}`} 
                    onClick={() => handleSelectConfig("default")}
                >
                    <img src="/images/Empresa_Icon.png" alt="Padrão" className={styles.defaultImage} />
                    <p className={styles.configText}>Padrão</p>
                </button>
                <button 
                    className={`${styles.buttonPersonalized} ${config === "personalized" ? styles.selected : ""}`} 
                    onClick={() => handleSelectConfig("personalized")}
                >
                    <img src="/images/Personalizado-Icon.png" alt="Personalizado" className={styles.personalizedImage} />
                    <p className={styles.configText}>Personalizado</p>
                </button>
            </article>
            <h2 className={styles.mainTitle}>Passo 3: Número de Dispositivos</h2>
            <article className={styles.devices}>
                <button 
                    className={`${styles.buttonDevices} ${devices === "three" ? styles.selected : ""}`} 
                    onClick={() => handleSelectDevices("three")}
                >
                    <img src="/images/Dispositivos-Icon.png" alt="3 Dispositivos" className={styles.devicesImage} />
                    <p className={styles.devicesText}>3 Dispositivos</p>
                </button>
                <button 
                    className={`${styles.buttonInfinityDevices} ${devices === "infinite" ? styles.selected : ""}`} 
                    onClick={() => handleSelectDevices("infinite")}
                >
                    <img src="/images/Casa-Inteira-Icon.png" alt="Ilimitado" className={styles.infinityDevicesImage} />
                    <p className={styles.devicesText}>Ilimitado</p>
                </button>
            </article>
            <button onClick={handleNavigate} className={styles.finalizarButton}>Ver Preço Aproximado</button>
        </main>
    );
}
