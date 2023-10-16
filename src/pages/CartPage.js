import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio. <Link to="/">Continue comprando</Link>.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-thumbnail" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Preço: R${item.price}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Resumo do Pedido</h3>
            <p>Total: R${totalPrice.toFixed(2)}</p>
            <Link to="/checkout">Finalizar Compra</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
