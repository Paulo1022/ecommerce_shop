import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const { isOpen, handleClose} = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div 
      className={`${isOpen? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-2x1 md:w-[35vw] xl:max-w-[30vw] 
        transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Carrinho ({itemAmount})
        </div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center' onClick={handleClose}>
          <IoMdArrowForward className='text-2x1' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[50vh] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className='flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span> R$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex
              justify-center items-center text-xl'
            onClick={clearCart}
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={'/'}
          className='bg-gray-200 flex p-4 justify-center items-center
            text-primary w-full font-medium'
        >
          Ver Carrinho
        </Link>
        <Link
          to={'/'}
          className='bg-primary flex p-4 justify-center items-center
            text-white w-full font-medium'
        >
          Finalizar
        </Link>
      </div>
    </div>
  )
};

export default Sidebar;
