import { createContext, useState } from "react";
import React from "react";
export const AnuncioContext = createContext({})

export function AnuncioProvider(props) {
  const [anuncio, setAnuncio] = useState()
  const [images, setImages] = useState('')
  const [params, setParams] = useState('')
  const [reload, setReload] = useState(false)
  const [valuesForm, setValuesForm] = useState({
    ad_title: "",
    ad_description: "",
    ad_value: "",
    property_adress: "",
    property_country: "Brasil",
    with_furniture: 1,
    property_city: "",
    property_state: "",
    property_neighborhood: "",
    room_quantity: 0,
    bathroom_quantity: 0,
    garage_quantity: 0
  })

  const [with_furnitureState, setwith_furniture] = useState(false)
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

  function handleWithFurnite(value) {
    setwith_furniture(value)
  }

  function handleFilter(values) {
    setParams(values)
  }
  function handleHotReload(value) {
    setReload(value)
  }
  return (
    <AnuncioContext.Provider value={{ anuncio, with_furnitureState, handleChange, valuesForm, images, handleImage, handleFilter, params, handleWithFurnite, handleHotReload, reload }}>
      {props.children}
    </AnuncioContext.Provider>
  )
}