import { createContext, useState } from "react";
import React from "react";
export const AnuncioContext = createContext({})

export function AnuncioProvider(props) {
  const [anuncio, setAnuncio] = useState()
  const [images, setImages] = useState()
  const [params, setParams] = useState() 
  const [valuesForm, setValuesForm] = useState({
    ad_title: "",
    ad_description: "",
    ad_value: "",
    property_adress: "",
    property_country: "Brasil",
    with_furniture: 1,
    property_city: "AP",
    property_state:"",
    property_neighborhood: "",
    room_quantity:0,
    bathroom_quantity:0,
    garage_quantity:0
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setValuesForm({
      ...valuesForm,
      [name]: value,
    })
  }

   function handleImage(image) {
     setImages(image)
   }


  function handleFilter(values) {
setParams(values)
  } 
  return (
    <AnuncioContext.Provider value={{anuncio, handleChange, valuesForm, images, handleImage, handleFilter, params}}>
      {props.children}
    </AnuncioContext.Provider>
  )
}