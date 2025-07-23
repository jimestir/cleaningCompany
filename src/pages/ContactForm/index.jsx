import React from 'react'

function index() {
  return (
    <>
      <section>
        <h3>Encuentranos</h3>
        <div>
          <img
            src=''
            alt='logo phone'
          />
          <div>
            <h4>Llamanos</h4>
            <div>+(34) 690 268 030</div>
            <div>+(34) 620 550 003</div>
          </div>
        </div>

        <div>
            <img src="" alt="logo email" />
            <div>
                <h4>Nuestro Email</h4>
                <div>limpiezasclamar@gmail.com</div>
            </div>
        </div>
      </section>
      <form
        action='https://formsubmit.co/your@email.com'
        method='POST'>
        <input type='text' />
        <input type='email' />
        <input type='text' />
        <input type='number' />
      </form>
    </>
  )
}

export default index
