import React from 'react'
import livingRoomCleaning from '../../assets/livingRoomCleaning.webp'
import officeCleaning from '../../assets/officeCleaning.png'
import storeCleaning from '../../assets/storeCleaning.png'
import personCleaningTable from '../../assets/personCleaningTable.webp'

function Services() {
  
  return (
    <>
      <div class='flex justify-around mt-15  not-visited:bg-white flex-wrap '>
        <h2 class=' text-4xl font-bold w-[600px] max-sm:text-2xl max-sm:mb-5 '>
          Siempre Brindamos El Mejor Servicio.
        </h2>
        <div class='w-[500px]  justify-items-end items-end '>
          <h4 class='text-xl font-semibold '>Servicio</h4>
          <p class='text-gray-700'>
            Si bien podemos personalizar su plan de limpieza para satisfacer sus
            necesidades, la mayoria de los clientes programan servicios de
            limpieza regulares:
          </p>
        </div>
      </div>

      <hr class='text-green-600 h-7 w-full my-10' />

      <section class='flex gap-3.5 mb-30 justify-around flex-wrap max-sm:mb-15'>
        <div class='w-[450px] mb-12'>
          <img
            class='rounded-2xl  '
            src={livingRoomCleaning}
            alt=''
          />
          <div>
            <h4 class='text-2xl font-[600] my-3'>Limpieza de viviendas</h4>
            <p class='mb-9 text-gray-700'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              consectetur.
            </p>
            <a
              href='#'
              class='bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition mt-10'>
              Get Start Now
            </a>
          </div>
        </div>

        <div class='w-[450px]  mb-12'>
          <img
            class='rounded-2xl '
            src={officeCleaning}
            alt=''
          />
          <h4 class='text-2xl font-[600] my-3'>Limpieza de oficinas</h4>
          <p class='mb-9 text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            consectetur,
          </p>
          <a
            href='#'
            class='bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition '>
            Get Start Now
          </a>
        </div>

        <div class='w-[450px]  mb-12'>
          <img
            class='rounded-2xl '
            src={storeCleaning}
            alt=''
          />
          <h4 class='text-2xl font-[600] my-3'>Limpieza de comercion</h4>
          <p class='mb-9 text-gray-700'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            consectetur,
          </p>
          <a
            href='#'
            class='bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition'>
            Get Start Now
          </a>
        </div>
      </section>

      <section class='flex mb-50 justify-around flex-wrap max-sm:mb-20'>
        <div class=' '>
          <p class='text-black text-lg mb-2 font-medium'>
            Soluciones de limpieza asequible
          </p>
          <h2 class=' text-4xl font-bold w-[600px]   max-sm:w-full'>
            Servicios de alta calidad y cordialidad a precios justos.
          </h2>
          <p class='text-gray-700 w-[500px] mt-6 mb-9  max-sm:w-fit'>
            Ofrecemos servicios de limpieza integrales adaptados a sus
            necesidades. Desde servicios de limpieza residencial...
          </p>
          <a
            href='#'
            class='bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition'>
            Get Start Now
          </a>
        </div>
        <div class='relative min-w-[200px]'>
          <img
            class='w-[200px] z-10 absolute -bottom-10 -left-10 rounded-3xl border-t-10 border-r-10 border-white max-sm:scale-70 max-sm:ml-7'
            src={personCleaningTable}
            alt=''
          />
          <img
            class='w-[400px] rounded-3xl  border-t-10 border-r-10 border-green-700 max-sm:scale-70 max-sm:ml-7'
            src={personCleaningTable}
            alt=''
          />
        </div>
      </section>
    </>
  )
}

export default Services
