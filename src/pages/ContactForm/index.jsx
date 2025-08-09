import { useState } from 'react'
import phoneCall from '../../assets/phone-call.svg'
import mail from '../../assets/mail.svg'
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setForm({
  //     name: '',
  //     email: '',
  //     message: ''
  //   })
    
    
  // }
  return (
    <>
      <h3
        class=' text-4xl font-bold w-full'
        id='contact'>
        Encuentranos
      </h3>
      <div class='flex flex-wrap w-full '>
        <section class='w-full'>
          <div class='flex mt-7 shadow-lg px-5 pb-5 rounded-2xl '>
            <div class='bg-[#00a63e] w-[50px] h-[50px] rounded-full flex justify-center mt-6 mr-3.5 '>
              <img
                class=' scale-50'
                src={phoneCall}
                alt='logo phone'
              />
            </div>
            <div>
              <h4 class='text-2xl font-semibold '>Llamanos</h4>
              <div class='flex flex-col'>
                <a
                  class='hover:text-green-700 text-gray-700 focus:text-green-700'
                  href='tel:+34690268030'>
                  +(34) 690 268 030
                </a>
                <a
                  class='hover:text-green-700 text-gray-700 focus:text-green-700'
                  href='tel:+34620550003'>
                  +(34) 620 550 003
                </a>
              </div>
            </div>
          </div>

          <div class='flex my-5 shadow-lg px-5 py-5 rounded-2xl'>
            <div class='bg-[#00a63e] w-[50px] h-[50px] rounded-full flex justify-center mr-3.5 mt-2'>
              <img
                class='scale-60'
                src={mail}
                alt='logo email'
              />
            </div>
            <div>
              <h4 class='text-2xl font-semibold'>Nuestro Mail</h4>
              <a
                href='mailto:limpiezasclarimar@gmail.com'
                class='hover:text-green-700 text-gray-700 focus:text-green-700'>
                limpiezasclamar@gmail.com
              </a>
            </div>
          </div>
        </section>
        <form
          // onSubmit={handleSubmit}
          class='flex flex-col gap-10 w-full mt-10 ma'
          action='https://formsubmit.co/limpiezasclamar@gmail.com'
          method='POST'>
          <div>
            <p class='font-semibold'>Envianos un correo para más información</p>
            <h3 class=' text-4xl font-bold w-full my-2'>
              Mantente en contacto
            </h3>
            <p class='text-gray-700 mt-6  '>
              Priorizamos responder a sus consultas con prontitud para
              garantizar que reciba la asistencia que necesita de manera
              oportuna.
            </p>
          </div>
          <div class='flex flex-col gap-10 min-sm:flex-row '>
            <div>
              <input
                class='shadow-lg shadow-balck-50/5 border-[.5px] border-gray-100 w-full h-[45px] px-3 focus:border-green-700 focus:border-2 outline-none rounded-[5px] text-gray-700 mb-10'
                type='text'
                name='name'
                placeholder='Nombre'
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                class='shadow-lg shadow-balck-50/5 border-[.5px] border-gray-100 w-full h-[45px] px-3  focus:border-green-700 focus:border-2 outline-none rounded-[5px] text-gray-700'
                type='email'
                name='email'
                placeholder='Correo electronico'
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              class='shadow-lg shadow-balck-50/5 border-[.5px] border-gray-100 w-full h-[150px] px-3  focus:border-green-700 focus:border-2 outline-none rounded-[5px] text-gray-700 resize-y field-sizing-content'
              placeholder='Mensaje'
              name='message'
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            // onClick={handleSubmit}
            type='submit'
            class='bg-green-600 text-white px-5 py-3 rounded hover:bg-green-700 transition w-fit mb-10 '>
            Enviar mensanje
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
