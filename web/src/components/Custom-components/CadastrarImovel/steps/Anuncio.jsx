import React from 'react'
import { Fragment, useState } from 'react'
import { Button, Input } from 'reactstrap'
export default function Anuncio ({ stepper, type }) {

  return (
   <div>
     <form className='d-flex flex-column gap-1 w-100 align-items-center'>
        <div className='d-flex flex-column w-75'>
           <label>
             Titulo do anuncio
           </label>
           <Input/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Descrição
           </label>
           <Input/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
            Valor
           </label>
           <Input/>
        </div>
     </form>
   </div>
  )
}