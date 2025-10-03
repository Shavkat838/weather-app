import Image from 'next/image'
import React from 'react'
import { bricolage } from '../layout';
import { Selectbar } from './Selectbar';

export default function Header() {
  return (
    <div className="max-w-[343px] md:max-w-[720px]  lg:max-w-[1216px] w-full flex justify-between items-center  h-[33px] md:h-[43px] lg:h-[43px] mt-[19px] md:mt-[24px]  lg:mt-[49px]">
      <div className="flex gap-[10px] items-center ">
        <Image  className='md:w-[39px] md:h-[40px]  w-[28] h-[28]' src={"./logo.svg"} alt='Logo' width={39}  height={40}/>
        <h3 className={`${bricolage.className} font-bold   text-white  text-[15px]  md:text-[22px]  lg:text-[22px] `}>Weather Now</h3>
      </div>
      <div className='w-[119px] h-[43px]'>
       < Selectbar />
      </div>
       
    </div>
  );
}
