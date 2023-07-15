'use client'
import Navbar from '@/app/component/Navbar';
import Image from 'next/image'
import React from 'react'
import { ListCardJumbotron, ListCardReview } from './data/ListCardData';
import CardJumbotron from './component/CardJumbotron';
import Example1 from './assets/icon/example-1.png'
import Example2 from './assets/icon/example-2.png'
import CardReview from './component/CardReview';

export default function Home() {

  return (
    <div >
      <Navbar />
      <div className=' h-screen mx-auto p-2 flex justify-center items-center'>
        <div>
          <h1 className='mb-10 text-center fw-normal' style={{ fontSize: '68px' }}>
            <span className='text-[#57CC99]'>Simple way</span> <br />
            <span className='text-[#22577]'>to manage</span> <span className='text-[#57CC99]'>personal finance</span>
          </h1>
          <div className='grid gap-4 grid-cols-4'>
            {ListCardJumbotron.map((item) => (
              <>
                <CardJumbotron id={item.id} img={item.img} title={item.title} />
              </>
            ))}
          </div>
        </div>
      </div>

      <div className='container px-40 h-screen flex mx-auto p-2 items-center justify-center'>
        <div>
          <div className='grid gap-2 grid-cols-2 justify-start items-center mb-3'>
            <div className='flex justify-start'>
              <Image src={Example1} alt="Example1" className='rounded-lg' />
            </div>
            <div>
              <h3 className='text-4xl'><span className='text-[#22577]' >Simple</span> <span className='text-[#57CC99]'>money tracker</span></h3>
              <p>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift</p>
            </div>
          </div>

          <div className='grid gap-2 grid-cols-2 justify-start items-center'>
            <div className='text-end'>
              <h3 className='text-4xl'><span className='text-[#22577]' >Painless</span> <span className='text-[#57CC99]'>budgeting</span></h3>
              <p>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
            </div>
            <div className='flex justify-end'>
              <Image src={Example2} alt="Example2" className='rounded-lg' />
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen flex justify-center items-center mx-auto px-40'>
        <div>
          <h1 className='text-center text-4xl text-[#22577A]'>See what others have to say</h1>
          <div className='mt-5 grid gap-2 grid-cols-3'>
            {ListCardReview.map((item) => (
              <>
                <CardReview id={item.id} user={item.user} review={item.review} />
              </>
            ))}
          </div>
        </div>
      </div>

      <div className='py-3 shadow-2xl'>
        <div className='text-center'>
          &copy; 2023 Hilal Dev. All rights reserved
        </div>
      </div>
    </div>
  )
}
