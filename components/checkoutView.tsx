import { useEffect, useState } from 'react';
import { recuperarPedidoFirebase } from './mainLogic'; // Ajuste o caminho conforme necessário
import styles from '../pages/styles.module.css'; // Importe o arquivo CSS

export default function CheckoutView() {
    const [pedido, setPedido] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Recupera o ID do último pedido armazenado no localStorage
        const pedidoId = localStorage.getItem('ultimoPedidoId');
        if (!pedidoId) {
            setError('Pedido não encontrado!');
            setLoading(false);
            return;
        }

        // Recupera o pedido no Firebase com o ID
        recuperarPedidoFirebase(pedidoId)
            .then((dados) => {
                if (dados) {
                    setPedido(dados);
                } else {
                    setError('Erro ao carregar os detalhes do pedido');
                }
                setLoading(false);
            })
            .catch((err) => {
                setError('Erro ao carregar os dados do pedido');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Carregando...</div>;

    if (error) return <div>{error}</div>;

    return (
        <main className={styles.checkoutView}>
            <h2 className={styles.checkoutTitle}>Resumo da Compra</h2>
            <p className={styles.checkoutText}>Confira os detalhes do seu pedido abaixo:</p>

            <div>
                <h3>Hardware Selecionado:</h3>
                <p>{pedido.hardware}</p>

                <h3>Configuração Selecionada:</h3>
                <p>{pedido.config}</p>

                <h3>Dispositivos Selecionados:</h3>
                <p>{pedido.devices}</p>

                <div className={styles.checkoutValorTotal}>
                    <span>Total: R$ {pedido.valorTotal}</span>
                </div>
            </div>

            {/* Aqui você pode adicionar outros elementos de checkout como botões, etc */}
        </main>
    );
}
