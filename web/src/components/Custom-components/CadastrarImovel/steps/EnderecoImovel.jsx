import React from 'react'
import { Fragment, useState } from 'react'
import { Button, Input } from 'reactstrap'
export default function Endereco ({ stepper, type }) {

  return (
   <div>
     <form className='d-flex flex-column gap-1 w-100 align-items-center'>
        <div className='d-flex flex-column w-75'>
           <label>
             Endereço
           </label>
           <Input/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Estado
           </label>
           <Input/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
            Cidade
           </label>
           <Input/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
            País
           </label>
           <Input/>
        </div>
     </form>
   </div>
  )
}