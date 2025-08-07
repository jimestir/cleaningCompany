import logo from '../../assets/logo.webp'

function Header() {
  return (
    <header class='flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-20 shadow-lg max-sm:px-0'>
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
  )
}

export default Header
