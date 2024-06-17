import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center '>
        <form method='POST' action="https://getform.io/f/zaxmdoxb" className='flex flex-col max-w-[350px] md:max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Contact</p>
                <p className=' py-4'>Let's get in touch! Submit the form below or shoot me an email :)</p>
            </div>
            <input className='bg- p-2 border-2 border-black' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 border-2 border-black' type="email" placeholder='Email' name='email' />
            <textarea className='bg- p-2 border-2 border-black' name="message" rows="10" placeholder='Message'></textarea>
            <button className=' border-2 hover:bg-black hover:text-white border-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact