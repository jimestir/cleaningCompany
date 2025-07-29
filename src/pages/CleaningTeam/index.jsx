import React, { useRef, useState } from 'react'
import employedOne from '../../assets/employedOne.webp'
import employedTwo from '../../assets/employedTwo.webp'
import employedThree from '../../assets/employedThree.webp'
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';

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
          <h2 class=' text-4xl font-bold w-[600px] '>
            Una limpieza eficaz requiere un equipo de limpieza de expertos
          </h2>
          <div class='w-[400px] justify-items-end items-end '>
            <h4 class='text-xl font-semibold '>Equipo experto</h4>
            <p class='text-gray-700'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique illo rem explicabo repellendus inventore! Amet fugiat
              reprehenderit id magni repellendus.
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
              <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                libero molestiae atque nobis quis reiciendis impedit temporibus.
                Id quia magni natus.
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
              <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                libero molestiae atque nobis quis reiciendis impedit temporibus.
                Id quia magni natus.
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
                class='rounded-t-4xl'
              />
              <div class='py-5 px-2'>
                <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  libero molestiae atque nobis quis reiciendis impedit
                  temporibus. Id quia magni natus.
                </p>
              </div>
            </div>

            <div class='rounded-4xl border-y-10 border-green-700 w-full flex-shrink-0'>
              <img
                src={employedTwo}
                alt='Photo employed'
                class='rounded-t-4xl'
              />
              <div class='py-5 px-2'>
                <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  libero molestiae atque nobis quis reiciendis impedit
                  temporibus. Id quia magni natus.
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
                <h5 class='text-2xl mb-4 font-semibold'>Name employed</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  libero molestiae atque nobis quis reiciendis impedit
                  temporibus. Id quia magni natus.
                </p>
              </div>
            </div>

            {/* <img
              src='https://picsum.photos/id/1016/800/400'
              class='w-full flex-shrink-0'
            />
            <img
              src='https://picsum.photos/id/1018/800/400'
              class='w-full flex-shrink-0'
            /> */}
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
