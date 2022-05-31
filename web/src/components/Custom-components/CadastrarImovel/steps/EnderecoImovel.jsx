import React from 'react'
import { Fragment, useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Input } from 'reactstrap'
import { useAnuncio } from '../../../../hooks/useAnuncio'
export default function Endereco () {
   const {handleChange, valuesForm} = useAnuncio()
   const [errorCep, setErrorCep] = useState(false)
   const formatCep = (e) => {
      const RegexForLetters = /[A-Za-z]/
      if (RegexForLetters.test(e.target.value)) {
         setErrorCep(true)
      } else {
         setErrorCep(false)
         let value =  e.target.value
         value = value.replace(/\D/g,"")
         value = value.replace(/(\d{5})(\d)/, '$1-$2')
         value = value.replace(/(-\d{3})\d+?$/, '$1')
         e.target.value = value
         
         return e
      }
   }

   const onBLurCep = () => {
      if (errorCep) {
        const input = document.querySelector(".cep")
        input.focus()
      }
   }

   async function validateOnblur(e, nome) {
      if (e.target.value.length === 0) {
        toast.error(`o campo ${nome} é obrigatório`, {
          toastId:"input"
        })
        e.target.focus()
      }
    }
   
return (
   <div>
     <form className='d-flex flex-column gap-1 w-100 align-items-center'>
        <div className='d-flex flex-column w-75'>
           <label>
             CEP
           </label >
           <Input max={10} name="cep" onChange={handleChange}  className="cep" onBlur={onBLurCep} placeholder="Ex: 68901-255" onKeyPress={formatCep}  />
           {errorCep && <small>Digite somente números no CEP</small>}
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Endereço
           </label >
           <Input value={valuesForm.property_adress} onBlur={(e) => validateOnblur(e, "Endereço")} placeholder="Ex: Avenida Henrique Galucio, 2800" name="property_adress" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Bairro
           </label>
           <Input value={valuesForm.property_neighborhood}  onBlur={(e) => validateOnblur(e,"Bairro")} placeholder="Ex: Santa Rita" name="property_neighborhood" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Estado
           </label>
           <Input value={valuesForm.property_state} onBlur={(e) => validateOnblur(e, "Estado")} placeholder="Ex: Amapá"  name="property_state" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
            Cidade
           </label>
           <Input value={valuesForm.property_city} onBlur={(e) => validateOnblur(e, "Cidade")} placeholder="Ex: Macapá" name="property_city" onChange={handleChange}/>
        </div>
     </form>
   </div>
  )
}