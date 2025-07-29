import frontPageOne from '../../assets/p2.png'
import logo from '../../assets/logo.webp'
function Home() {
  return (
    <>
      <body class='font-sans text-gray-800  '>
        {/* <!-- Navbar --> */}
        <header class='flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-20 shadow-b-green-700 max-sm:px-2'>
          <div class='flex items-center space-x-2'>
            <img
              src={logo}
              class='w-20 h-20 -my-4 max-sm:scale-70 max-sm:-mx-2 '
              alt='Logo'
            />
            <div>
              <h1 class='font-bold text-lg text-green-600'>
                Limpiezas<span class='text-gray-900'>Clamar</span>
              </h1>
              <p class='text-sm text-gray-700 -mt-1'>Compañía de limpieza</p>
            </div>
          </div>

          <nav class='hidden ms:flex space-x-6 text-sm font-medium'>
            <a
              href='#'
              class='text-green-600'>
              Inicio
            </a>
            <a href='#'>Sobre nosotros</a>
            <a href='#'>Servicios</a>
            <a href='#'>Blog</a>
            <a href='#'>Contacto</a>
          </nav>

          <a
            href='#'
            class='bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition max-sm:scale-80 '>
            Obtener servicio
          </a>
        </header>

        <section class=''>
          <div
            className=' z-0 bg-cover my-0.5 flex align p-4 h-[600px] items-center max-sm:h-[230px] '
            style={{ backgroundImage: `url(${frontPageOne})` }}>
            {/* <!-- Text content --> */}
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
                  Get Start Now
                </a>
                <a
                  href='#'
                  class='border border-gray-700 text-gray-700 px-6 py-3 rounded hover:bg-gray-100 transition max-sm:scale-70 
                        max-sm:px-3 max-sm:-mr-2'>
                  View all Services
                </a>
              </div>
            </div>

            {/* <!-- Image --> */}
            {/* <picture class='z-0'>
              <img
                src={portada}
                alt='Equipo de limpieza'
                class='rounded-xl shadow-md'
              />
            </picture> */}
          </div>
        </section>
      </body>
    </>
  )
}

export default Home
