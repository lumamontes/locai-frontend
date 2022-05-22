import React from 'react'
import { Fragment, useState } from 'react'
import { Button, Input } from 'reactstrap'
import { useAnuncio } from '../../../../hooks/useAnuncio'
export default function Endereco () {
   const {handleChange, valuesForm} = useAnuncio()
  return (
   <div>
     <form className='d-flex flex-column gap-1 w-100 align-items-center'>
        <div className='d-flex flex-column w-75'>
           <label>
             CEP
           </label >
           <Input   />
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Endereço
           </label >
           <Input value={valuesForm.property_adress}  name="property_adress" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Bairro
           </label>
           <Input value={valuesForm.property_neighborhood}  name="property_neighborhood" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Estado
           </label>
           <Input value={valuesForm.property_state}  name="property_state" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
            Cidade
           </label>
           <Input value={valuesForm.property_city}  name="property_city" onChange={handleChange}/>
        </div>
     </form>
   </div>
  )
}