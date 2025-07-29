import React from 'react'
import phoneCall from '../../assets/phone-call.svg'
import mail from '../../assets/mail.svg'
function index() {
  return (
    <>
      <h3 class=' text-4xl font-bold max-w-[600px] min-w-[400px]'>
        Encuentranos
      </h3>
      <div class='flex flex-wrap w-full '>
        <section class='w-full'>
          <div class='flex my-10 shadow-lg px-5 py-5 rounded-2xl '>
            <div class='bg-[#00a63e] w-[50px] h-[50px] rounded-full flex justify-center mt-8 mr-3.5 '>
              <img
                class=' scale-50'
                src={phoneCall}
                alt='logo phone'
              />
            </div>
            <div>
              <h4 class='text-2xl font-semibold '>Llamanos</h4>
              <div>+(34) 690 268 030</div>
              <div>+(34) 620 550 003</div>
            </div>
          </div>

          <div class='flex my-10 shadow-lg px-5 py-5 rounded-2xl'>
            <div class='bg-[#00a63e] w-[50px] h-[50px] rounded-full flex justify-center mr-3.5'>
              <img
                class='scale-60'
                src={mail}
                alt='logo email'
              />
            </div>
            <div>
              <h4 class='text-2xl font-semibold'>Nuestro Mail</h4>
              <div>limpiezasclamar@gmail.com</div>
            </div>
          </div>
        </section>
        <form
          class='flex flex-col gap-10 w-full'
          action='https://formsubmit.co/your@email.com'
          method='POST'>
         <div>
            <p>Envianos un correo para más información</p>
            <h3 class=' text-4xl font-bold max-w-[600px] min-w-[400px]'>
              Mantente en contacto
            </h3>
            <p>
              Priorizamos responder a sus consultas con prontitud para garantizar
              que reciba la asistencia que necesita de manera oportuna.
            </p>
         </div>
          <input
            class='shadow-lg shadow-balck-50/5 border-[.5px] border-gray-100 w-[400px] h-[45px] px-3  '
            type='text'
            content='Nombre'
            placeholder='Nombre'
          />
          <input
            class='shadow-lg shadow-balck-50/5 border-[.5px] border-gray-100 w-[400px] h-[45px] px-3'
            type='email'
            placeholder='Correo electronico'
          />
          <input
            class='shadow-lg shadow-balck-50/5 border-[.5px] border-gray-100 w-[400px] h-[45px] px-3'
            type='text'
            placeholder='Mensaje'
          />
        
          <button
            onClick=''
            class='bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition w-fit '>
            Enviar mensanje
          </button>
        </form>
      </div>
    </>
  )
}

export default index
