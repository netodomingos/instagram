import React from 'react'
import './index.css'

export default function CardLogin({ profile, name }) {
  return (
    <div className='CardLogin'>
      <img 
        src='https://picsum.photos/200'
        className='logo'
      />
      <img 
        src={profile}
        className='profilePicture'
      />
      <button 
        type="button"
        className='button'
      >
        Continuar como <strong>{name}</strong>
      </button>
      <a 
        href="http://"
        className='link'
      >
        Remover conta
      </a>
    </div>
  )
}
