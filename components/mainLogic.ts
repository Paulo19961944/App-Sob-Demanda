type Hardware = "raspberry" | "arduino" | null;
type Config = "default" | "personalized" | null;
type Devices = "three" | "infinite" | null;

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

    // Seleciona o novo hardware
    hardwareSelecionado = tipo;
    if (tipo === "raspberry") {
        precoTotal += 800;
    } else if (tipo === "arduino") {
        precoTotal += 400;
    }
}

// Função para calcular o preço da configuração
export function selecionarConfig(tipo: "default" | "personalized") {
    if (configSelecionado === tipo) return; // Se a configuração já estiver selecionada, não faz nada
    // Se mudar de configuração, subtrai o valor da configuração anterior
    if (configSelecionado) {
        precoTotal -= (configSelecionado === "default" ? 3000 : 7500);
    }

    // Seleciona a nova configuração
    configSelecionado = tipo;
    if (tipo === "default") {
        precoTotal += 3000;
    } else if (tipo === "personalized") {
        precoTotal += 7500;
    }
}

// Função para calcular o preço dos dispositivos
export function selecionarDispositivos(tipo: "three" | "infinite") {
    if (devicesSelecionados === tipo) return; // Se já estiver selecionado, não faz nada
    // Se mudar de dispositivos, subtrai o valor dos dispositivos anteriores
    if (devicesSelecionados) {
        precoTotal -= (devicesSelecionados === "infinite" ? 3000 : 0);
    }

    // Seleciona os novos dispositivos
    devicesSelecionados = tipo;
    if (tipo === "infinite") {
        precoTotal += 3000;
    }
}

// Função para abrir o modal com o preço final
export function abrirModalPreco() {
    alert(`Preço aproximado: R$ ${precoTotal.toFixed(2)}`);
}

// Função para fechar o modal
export function fecharModal() {
    // Aqui, o modal deve ser fechado, mas no momento, apenas um alert é mostrado.
    console.log("Modal fechado");
}
