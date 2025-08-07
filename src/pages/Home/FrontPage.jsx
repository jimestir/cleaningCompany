import frontPageOne from '../../assets/p1.jpg'
function Home() {
  return (
    <>
      
       

        <section class=''>
          <div
            className=' z-0 bg-cover my-0.5 flex align p-4 h-[600px] items-center max-sm:h-[230px] '
            style={{ backgroundImage: `url(${frontPageOne})` }}>
            <div class='bg-[#ffffffc6] ml-[100px]  h-fit p-[60px] rounded-md w-[800px] max-sm:p-3 max-sm:ml-0 max-sm:w-[280px] '>
              <p class='text-black text-lg mb-2 font-medium max-sm:text-[14px] max-sm:hidden '>
                Limpieza de calidad a un precio justo
              </p>
              <h2 class='text-5xl max-sm:text-2xl font-bold text-gray-900 leading-tight mb-6 max-sm:m-0'>
                Servicios de limpieza
                <br />
                especializados, eficientes
                <br />y minuciosos.
              </h2>
              <p class='text-gray-500 text-lg mb-8 max-sm:text-[15px] max-sm:hidden'>
                Transformamos tus espacios en lugares impecables, para que tú
                solo te preocupes por disfrutarlos.
              </p>
              <div class='flex space-x-4 max-sm:space-x-0'>
                <a
                  href='#'
                  class='bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition max-sm:scale-70 
                        max-sm:px-3  max-sm:h-fit max-sm:-ml-2 '>
                  Empezar ahora
                </a>
                <a
                  href='#'
                  class='border border-gray-700 text-gray-700 px-6 py-3 rounded hover:bg-gray-100 transition max-sm:scale-70 
                        max-sm:px-3 max-sm:-mr-2'>
                 Ver los servicios
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Home
