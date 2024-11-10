import { db } from '../config/firebase';
import { doc, setDoc, serverTimestamp, getDoc } from 'firebase/firestore';

// Tipos de hardware, configuração e dispositivos
type Hardware = "raspberry" | "arduino" | null;
type Config = "default" | "personalized" | null;
type Devices = "three" | "infinite" | null;

// Estados de seleção e valor total
export let precoTotal = 0;
export let hardwareSelecionado: Hardware = null;
export let configSelecionado: Config = null;
export let devicesSelecionados: Devices = null;

// Função para calcular o preço de hardware
export function selecionarHardware(tipo: "raspberry" | "arduino") {
    if (hardwareSelecionado === tipo) return; // Se o hardware já estiver selecionado, não faz nada

    // Se mudar de hardware, subtrai o valor do hardware anterior
    if (hardwareSelecionado) {
        precoTotal -= (hardwareSelecionado === "raspberry" ? 800 : 400);
    }

    // Seleciona o novo hardware e adiciona o valor ao total
    hardwareSelecionado = tipo;
    if (tipo === "raspberry") {
        precoTotal += 800;
    } else if (tipo === "arduino") {
        precoTotal += 400;
    }

    // Retorna o novo preço
    return precoTotal;
}

// Função para calcular o preço da configuração
export function selecionarConfig(tipo: "default" | "personalized") {
    if (configSelecionado === tipo) return; // Se a configuração já estiver selecionada, não faz nada

    // Se mudar de configuração, subtrai o valor da configuração anterior
    if (configSelecionado) {
        precoTotal -= (configSelecionado === "default" ? 3000 : 7500);
    }

    // Seleciona a nova configuração e adiciona o valor ao total
    configSelecionado = tipo;
    if (tipo === "default") {
        precoTotal += 3000;
    } else if (tipo === "personalized") {
        precoTotal += 7500;
    }

    // Retorna o novo preço
    return precoTotal;
}

// Função para calcular o preço dos dispositivos
export function selecionarDispositivos(tipo: "three" | "infinite") {
    if (devicesSelecionados === tipo) return; // Se já estiver selecionado, não faz nada

    // Se mudar de dispositivos, subtrai o valor dos dispositivos anteriores
    if (devicesSelecionados) {
        precoTotal -= (devicesSelecionados === "infinite" ? 3000 : 0);
    }

    // Seleciona os novos dispositivos e adiciona o valor ao total
    devicesSelecionados = tipo;
    if (tipo === "infinite") {
        precoTotal += 3000;
    }

    // Retorna o novo preço
    return precoTotal;
}

// Função para salvar no Firebase e gerar o pedido
export async function salvarNoFirebase() {
    if (!hardwareSelecionado || !configSelecionado || !devicesSelecionados) return;

    const pedidoId = Date.now().toString();
    const pedidoRef = doc(db, 'pedidos', pedidoId);

    try {
        // Salva as seleções do pedido no Firestore
        await setDoc(pedidoRef, {
            hardware: hardwareSelecionado,
            config: configSelecionado,
            devices: devicesSelecionados,
            valorTotal: precoTotal,
            timestamp: serverTimestamp(),
            expiresAt: new Date(Date.now() + 15 * 60 * 1000) // 15 minutos
        });

        // Salva o ID do pedido no localStorage para recuperar depois
        localStorage.setItem('ultimoPedidoId', pedidoId);

    } catch (error) {
        console.error("Erro ao salvar pedido:", error);
    }
}

// Função para recuperar o preço total no frontend
export function getPrecoTotal() {
    return precoTotal;
}

// Função para recuperar os detalhes do pedido no Firebase (ex. página de checkout)
export async function recuperarPedidoFirebase(pedidoId: string) {
    const pedidoRef = doc(db, 'pedidos', pedidoId);

    try {
        // Usando o método getDoc() do Firebase SDK v9 ou superior
        const docSnap = await getDoc(pedidoRef);
        if (docSnap.exists()) {
            return docSnap.data(); // Retorna os dados do pedido
        } else {
            console.log("Pedido não encontrado!");
            return null;
        }
    } catch (error) {
        console.error("Erro ao recuperar pedido:", error);
        return null;
    }
}
