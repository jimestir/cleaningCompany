import React from 'react'
import employedOne from '../../assets/employedOne.webp'
import employedTwo from '../../assets/employedTwo.webp'
import employedThree from '../../assets/employedThree.webp'

function index() {
  return (
    <section class='mx-32 mb-20'>
      <div class='flex justify-around mt-15  not-visited:bg-white flex-wrap '>
        <h2 class=' text-4xl font-bold max-w-[600px] min-w-[400px]'>
          Una limpieza eficaz requiere un equipo de limpieza de expertos
        </h2>
        <div class='max-w-[500px] min-w-[400px] justify-items-end items-end '>
          <h4 class='text-xl font-semibold '>Equipo experto</h4>
          <p class='text-gray-700'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            illo rem explicabo repellendus inventore! Amet fugiat reprehenderit
            id magni repellendus.
          </p>
        </div>
      </div>

      <hr class='text-green-600 h-7 w-full my-10' />

      <div class='flex justify-around'>
        <div class='w-[400px] rounded-4xl border-l-10 border-green-700 hover:scale-105 duration-300 ease-in'>
          <img
            src={employedOne}
            alt='Photo employed'
            class='rounded-t-4xl'
          />
          <div class='py-5 px-2'>
            <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              libero molestiae atque nobis quis reiciendis impedit temporibus.
              Id quia magni natus.
            </p>
          </div>
        </div>
        <div class='w-[400px] rounded-2xl border-y-10 border-green-700 hover:scale-105 duration-300 ease-in'>
          <img
            src={employedTwo}
            alt='Photo employed'
            class='rounded-t-4xl'
          />
          <div class='py-5 px-2'>
            <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              libero molestiae atque nobis quis reiciendis impedit temporibus.
              Id quia magni natus.
            </p>
          </div>
        </div>
        <div class='w-[400px] border-r-10 border-green-700 rounded-4xl hover:scale-105 duration-300 ease-in'>
          <img
            src={employedThree}
            alt='Photo employed'
            class='rounded-t-4xl'
          />
          <div class='py-5  px-2'>
            <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              libero molestiae atque nobis quis reiciendis impedit temporibus.
              Id quia magni natus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
