import React from 'react'
import { RadioGroup } from "@headlessui/react"
import { Fragment, useState } from 'react'
import { Button, Input } from 'reactstrap'
import { useAnuncio } from '../../../../hooks/useAnuncio'
import { useAuth } from '../../../../hooks/useAuth'
import './Anuncio.css'
export default function Anuncio () {
  const [currentDoc, setCurrent] = useState('')

  const {handleChange, valuesForm} = useAnuncio()
  const tipoDocs = [
    {id:1, name:"Aluguel", descricao:"O aluguel seria o modelo de anúncio na qual você disponibilizará seu imovél para moradia"  },
    {id:2, name:"Temporada", descricao:"Por temporada você disponibilizará o seu imovél somente por um certo período de tempo. Ex: 7 dias "}
  ]
  return (
   <div>
     <form className='d-flex flex-column gap-1 w-100 align-items-center'>
        <div className='d-flex flex-column w-75'>
           <label>
             Titulo do anuncio
           </label>
           <Input value={valuesForm.ad_title}  name="ad_title" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
             Descrição
           </label>
           <Input value={valuesForm.ad_description}  name="ad_description" onChange={handleChange}/>
        </div>
        <div className='d-flex flex-column w-75'>
           <label>
            Valor
           </label>
           <Input value={valuesForm.ad_value}  name="ad_value" onChange={handleChange}/>
        </div>

        <div>
        <RadioGroup
          className="d-flex justify-content-center gap-4  mt-1"
          value={currentDoc}
          onChange={setCurrent}
        >
          {tipoDocs.map((item) => {
            return (
                    <RadioGroup.Option  className={({ active }) => `${active ? "radio-button-active" : "radio-button-disabled" } radio-button border rounded cursor-pointer focus:outline-none `}
                      key={item.name}
                      value={item}
                    >
                <div className="cursor-pointer">
                  <div className="justify-content-center d-flex gap-1 flex-column align-items-center">
                      <label className="text-center">{item.name}</label>
                      <span className="text-center">{item.descricao}</span>
                  </div>
                </div>
                    </RadioGroup.Option>
            )
          })}
        </RadioGroup>
        </div>
     </form>
   </div>
  )
}