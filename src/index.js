import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductStore } from './contexts/ProductContext';
import { SidebarStore } from './contexts/SidebarContext';
import { CartStore } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarStore>
    <CartStore>
      <ProductStore>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductStore> 
    </CartStore>
  </SidebarStore>
);
