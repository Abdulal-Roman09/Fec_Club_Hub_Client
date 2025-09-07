import React from 'react'

const Logo = () => {
  return (
    <div>
      <div className='flex gap-2 items-center'>
        <img className='w-12' src="/public/logo.png" alt="cumpusLogo" />
        <p className='text-3xl text-green-600 font-bold'>ClubHub</p>
      </div>
    </div>
  )
}

export default Logo
