import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto flex flex-col gap-y-1'>
        <p className='text-white'>
          Copyright &copy;
        </p>
        <p className='text-white'>
          Desenvolvido por Paulo Igor Torres.
        </p>
        <p className='text-white'>
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
};

export default Footer;
