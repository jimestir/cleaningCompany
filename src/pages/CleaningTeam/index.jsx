import React, { useRef, useState } from 'react'
import employedOne from '../../assets/employedOne.jpg'
import employedTwo from '../../assets/employedTwo.jpg'
import employedThree from '../../assets/employedThree.jpg'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'

function Index() {
  const sliderRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalSlides = 3

  const updateSlider = (index) => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`
    }
  }

  const goNext = () => {
    if (currentIndex < totalSlides - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      updateSlider(newIndex)
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      updateSlider(newIndex)
    }
  }

  return (
    <section>
      <div class='flex justify-around mt-15  not-visited:bg-white flex-wrap '>
        <h2 class=' text-4xl font-bold w-[600px] max-sm:w-full mb-7'>
          Una limpieza eficaz requiere un equipo de limpieza de expertos
        </h2>
        <div class='w-[400px] justify-items-end items-end max-sm:w-full  '>
          <h4 class='text-xl font-semibold mb-2'>Equipo experto</h4>
          <p class='text-gray-700'>
            Detrás de cada servicio de limpieza que ofrecemos hay un equipo
            formado por profesionales con experiencia, responsables y
            comprometidos con la excelencia. Nuestros trabajadores no solo
            limpian: cuidan, detallan y se aseguran de que cada espacio quede
            perfecto.
          </p>
        </div>
      </div>

      <hr class='text-green-600 h-7 w-full my-10' />

      <div class='flex justify-around flex-wrap max-sm:hidden'>
        <div class='w-[400px] rounded-4xl border-l-10 border-green-700 hover:scale-105 duration-300 ease-in max-sm:mb-10'>
          <img
            src={employedOne}
            alt='Photo employed'
            class='rounded-t-4xl'
          />
          <div class='py-5 px-2'>
            <h5 class='text-2xl mb-4 font-semibold'>Carlos Ramírez</h5>
            <h6>Especialista en oficinas y locales comerciales</h6>
            <p>
              Carlos es meticuloso, puntual y siempre atento a los detalles. Su
              experiencia en limpieza de espacios de trabajo lo convierte en el
              aliado perfecto para mantener tu oficina o negocio impecable y con
              un ambiente saludable.
            </p>
          </div>
        </div>
        <div class='w-[400px] rounded-2xl border-y-10 border-green-700 hover:scale-105 duration-300 ease-in  max-sm:mb-10'>
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
        <div class='w-[400px] border-r-10 border-green-700 rounded-4xl hover:scale-105 duration-300 ease-in  max-sm:mb-10'>
          <img
            src={employedThree}
            alt='Photo employed'
            class='rounded-t-4xl'
          />
          <div class='py-5  px-2'>
            <h5 class='text-2xl mb-4 font-semibold'>Carlos Ramírez</h5>
            // !!
            <p>
              Responsable, puntual y perfeccionista. Se especializa en mantener
              oficinas y comercios en perfecto estado. Clientes satisfechos
              garantizan su eficacia y compromiso.
            </p>
          </div>
        </div>
      </div>

      <div class='relative w-full max-w-xl overflow-hidden rounded-lg  min-sm:hidden mb-20'>
        <div
          ref={sliderRef}
          class='flex transition-transform duration-500 ease-in-out'>
          <div class='rounded-4xl border-y-10 border-green-700 w-full flex-shrink-0'>
            <img
              src={employedOne}
              alt='Photo employed'
              class='rounded-t-4xl px-2'
            />
            <div class='py-5 px-2'>
             <div class='px-2'>
                <h5 class='text-2xl  font-semibold'>Carlos Ramírez</h5>
                <p class='my-3'>⭐⭐⭐⭐⭐</p>
                <p class='text-gray-700'>
                  Responsable, puntual y perfeccionista. Se especializa en
                  mantener oficinas y comercios en perfecto estado. Clientes
                  satisfechos garantizan su eficacia y compromiso.
                </p>
             </div>
            </div>
          </div>

          <div class='rounded-4xl border-y-10 border-green-700 w-full flex-shrink-0'>
            <img
              src={employedTwo}
              alt='Photo employed'
              class='rounded-t-4xl'
            />
            <div class='py-5 px-2'>
              <h5 class='text-2xl font-semibold'>Laura Torres</h5>
              <p class='my-3'>⭐⭐⭐⭐⭐</p>
              <p class='text-gray-700'>
                Atenta, cuidadosa y dedicada. Ideal para limpiezas en hogares y
                espacios sensibles. Su trabajo es detallado, con enfoque en la
                comodidad y el orden.
              </p>
            </div>
          </div>

          <div class='rounded-4xl border-y-10 border-green-700 w-full flex-shrink-0'>
            <img
              src={employedThree}
              alt='Photo employed'
              class='rounded-t-4xl'
            />
            <div class='py-5  px-2'>
              <h5 class='text-2xl font-semibold'>Andrés Gómez</h5>
              <p class='my-3'>⭐⭐⭐⭐⭐</p>
              <p class='text-gray-700'>
                Eficiente, rápido y resolutivo. Experto en limpiezas exigentes
                como post-obras o naves industriales. Utiliza métodos y
                productos específicos para cada tarea.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={goPrev}
          class='absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#ffffffa8] bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition'>
          <img
            src={arrowLeft}
            alt='arrow left'
          />
        </button>
        <button
          onClick={goNext}
          class='absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#ffffffa8] bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition'>
          <img
            src={arrowRight}
            alt='arrow right'
          />
        </button>
      </div>
    </section>
  )
}

export default Index
