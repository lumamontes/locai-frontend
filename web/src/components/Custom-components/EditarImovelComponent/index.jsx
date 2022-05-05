import React, { useEffect, useState } from "react"
import { useDropzone } from "react-dropzone"
import { useAnuncio } from "../../../hooks/useAnuncio";
export default function EditarImovelComponent() {
  const [files, setFiles] = useState([]);
  const { handleChange, valuesForm, handleImage } = useAnuncio()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg,image/png',
    maxFiles: 5,
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })))
    },
    onDropAccepted: (acceptedFiles) => handleImage(acceptedFiles)
  })
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
   <div className="d-flex flex-column align-items-center">
      <div className=" w-50">
<div className="ltn__myaccount-tab-content-inner">
  <h6>Titulo do anúncio</h6>
  <div className="row">
    <div className="col-md-12">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="titulo" />
      </div>
      <h6>Descrição do anúncio</h6>
      <div className="input-item input-item-textarea ltn__custom-icon">
        <textarea name="ltn__message" placeholder="Descrição" defaultValue={""} />
      </div>
    </div>
  </div>
  <h6>Preço do anúncio</h6>
  <div className="row">
    <div >
      <div className="input-item  input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Somente números" />
      </div>
    </div>
    {/* <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="After Price Label (ex: /month)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Before Price Label (ex: from)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Yearly Tax Rate" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Homeowners Association Fee(monthly)" />
      </div>
    </div> */}
  </div>
  <h6>Categoria</h6>
  <div className="row">
    <div className="">
      <div className="input-item">
        <select className="nice-select">
          <option>None</option>
          <option>Apartments</option>
          <option>Condos</option>
          <option>Duplexes</option>
          <option>Houses</option>
          <option>Industrial</option>
          <option>Land</option>
          <option>Offices</option>
          <option>Retail</option>
          <option>Villas</option>
        </select>
      </div>
    </div>
    {/* <div className="col-lg-4 col-md-6">
      <div className="input-item">
        <select className="nice-select">
          <option>None</option>
          <option>Rentals</option>
          <option>Sales</option>
        </select>
      </div>
    </div>
    <div className="col-lg-4 col-md-6">
      <div className="input-item">
        <select className="nice-select">
          <option>no status</option>
          <option>Active</option>
          <option>hot offer</option>
          <option>new offer</option>
          <option>open house</option>
          <option>sold</option>
        </select>
      </div>
    </div> */}
  </div>
  <h6>Media</h6>
  <div className="border d-flex justify-content-center pt-5 pb-5 mb-2">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <h4>Solte as imagens ou clique aqui</h4>
          </div>
        </div>
  {/* <h6>Video Option</h6> */}
  {/* <div className="row">
    <div className="col-md-6">
      <div className="input-item">
        <select className="nice-select">
          <option>Video from</option>
          <option>vimeo</option>
          <option>youtube</option>
        </select>
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Embed Video ID" />
      </div>
    </div>
  </div> */}
  <h6>Virtual Tour</h6>
  {/* <div className="input-item input-item-textarea ltn__custom-icon">
    <textarea name="ltn__message" placeholder="Virtual Tour:" defaultValue={""} />
  </div> */}
  <h6>Informações de endereço</h6>
  <div className="row">
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="*Endereço" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="País" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Estado" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Cidade" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Bairro" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="CEP" />
      </div>
    </div>
    {/* <div className="col-lg-12">
      <div className="property-details-google-map mb-60">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
      </div>
    </div> */}
    {/* <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Latitude (for Google Maps)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Longitude (for Google Maps)" />
      </div>
    </div>
    <div className="col-md-6">
      <label className="checkbox-item">Enable Google Street View
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Google Street View - Camera Angle (value from 0 to 360)" />
      </div>
    </div> */}
  </div>
  <h6>Detalhe do imóvel</h6>
  <div className="row">
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Quartos" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Lot Size in ft2 (*only numbers)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Rooms (*only numbers)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Bedrooms (*only numbers)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Bathrooms (*only numbers)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Custom ID (*text)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Garages (*text)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Year Built (*numeric)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Garage Size (*text)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Available from (*date)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Basement (*text)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Extra Details (*text)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Roofing (*text)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Exterior Material (*text)" />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item">
        <select className="nice-select">
          <option>Structure Type</option>
          <option>Not Available</option>
          <option>Brick</option>
          <option>Wood</option>
          <option>Cement</option>
        </select>
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item">
        <select className="nice-select">
          <option>Floors No</option>
          <option>Not Available</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <textarea name="ltn__message" placeholder="Owner/Agent notes (*not visible on front end)" defaultValue={""} />
      </div>
    </div>
  </div>
  <h6>Select Energy Class</h6>
  <div className="row">
    <div className="col-md-6">
      <div className="input-item">
        <select className="nice-select">
          <option>Select Energy Class (EU regulation)</option>
          <option>A+</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
        </select>
      </div>
    </div>
    <div className="col-md-6">
      <div className="input-item input-item-textarea ltn__custom-icon">
        <input type="text" name="ltn__name" placeholder="Energy Index in kWh/m2a" />
      </div>
    </div>
  </div>
  <h6>Comodidades and Features</h6>
  <h6>Interior Details</h6>
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Equipped Kitchen
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Gym
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Laundry
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Media Room
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
  </div>
  <h6 className="mt-20">Outdoor Details</h6>
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Back yard
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Basketball court
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Front yard
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Garage Attached
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Hot Bath
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Pool
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
  </div>
  <h6 className="mt-20">Utilities</h6>
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Central Air
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Electricity
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Heating
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Natural Gas
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Ventilation
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Water
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
  </div>
  <h6 className="mt-20">Other Features</h6>
  <div className="row">
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Chair Accessible
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Elevator
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Fireplace
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Smoke detectors
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">Washer and dryer
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
    <div className="col-lg-4 col-md-6">
      <label className="checkbox-item">WiFi
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    </div>
  </div>
  <div className="alert alert-warning d-none" role="alert">
    Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.
  </div>
  <div className="btn-wrapper text-center--- mt-30">
    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit Property</button>
  </div>
</div>
</div>
   </div>
  )
}