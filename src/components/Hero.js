import React from 'react';
import { Link } from 'react-router-dom';
import WomanImg from '../img/woman_hero.png';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex jusity-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            Novas Tendências
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            PROMOÇÃO ROUPAS FEMININAS <br/>
            <span className='font-semibold'>COLEÇÃO DE OUTONO</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary'>
            Descubra Mais!
          </Link>
        </div>
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='' />
        </div>
      </div>
    </section>
  )
};

export default Hero;
