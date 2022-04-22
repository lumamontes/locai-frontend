import React from 'react';
import { useState} from 'react'
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useAnuncio } from '../../hooks/useAnuncio';
import { useHistory } from 'react-router-dom';

export default function SearchForm() {
	const [bairro, setBairro] = useState('') 
	const [ad_value, setAd_value] = useState('')
	const {handleFilter} = useAnuncio()
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const history = useHistory()
  function handleValuesSearch() {
		const cidadesName = document.getElementById('cidades')
		handleFilter({
			property_city:cidadesName.value,
			property_neighborhood: capitalizeFirstLetter(bairro),
			ad_value:ad_value
		})
		history.push('/imoveis')
	}
	return (
		<div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__car-dealer-form-tab">
			          <div className="ltn__tab-menu  text-uppercase d-none">
			            <div className="nav">
			              <a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-car" />Find A Car</a>
			              <a data-bs-toggle="tab" href="#ltn__form_tab_1_2" ><i className="far fa-user" />Get a Dealer</a>
			            </div>
			          </div>
			          <div className="tab-content bg-white box-shadow-1 position-relative pb-10">
			            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
			              <div className="car-dealer-form-inner">
			                <form onSubmit={e => e.preventDefault()} action="#" className="ltn__car-dealer-form-box row">
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
			                    <select className="nice-select" id='cidades'>
														<option value=''>Cidade</option>
			                      <option value='Macapá'> Macapá</option>
			                      <option value='Santana'>Santana</option>
			                      <option value='Laranjal do Jari'>Laranjal do Jari</option>
			                      <option value="Mazagão">Mazagão</option>
			                      <option value='Porto Grande'> Porto Grande</option>
			                      <option value="Tartarugalzinho">Tartarugalzinho</option>
			                      <option value='Pedra Branca do Amapari'>Pedra Branca do Amapari</option>
			                      <option value='Vitória do Jari'> Vitória do Jari</option>
			                      <option value='Calçoene'>Calçoene</option>
			                      <option value='Amapá'>Amapá</option>
			                      <option value='Ferreira Gomes'>Ferreira Gomes</option>
			                      <option value="Cutias">Cutias</option>
			                      <option value="Itaubal"> Itaubal</option>
			                      <option value='Serra do Navio'> Serra do Navio</option>
			                      <option value='Pracuuba'>Pracuuba</option>
			                    </select>
			                  </div> 
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
			                    <input type="text" onChange={(e) => setBairro(e.target.value)} placeholder='bairro'/> 
			                  </div> 
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
			                    <input type="text" placeholder='Valor' onChange={(e) => setAd_value(e.target.value)}/> 
			                  </div> 
			                  {/* <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
			                    <select className="nice-select">
			                      <option>Valor</option>
			                      <option>Apartment</option>
			                      <option>Co-op</option>
			                      <option>Condo</option>
			                      <option>Single Family Home</option>
			                    </select>
			                  </div> */}
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
			                    <div className="btn-wrapper text-center mt-0 go-top">
			                      {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
			                      <button onClick={handleValuesSearch} className="btn theme-btn-1 btn-effect-1 text-uppercase">PROCURAR</button>
			                    </div>
			                  </div>
			                </form>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="ltn__form_tab_1_2">
			              <div className="car-dealer-form-inner">
			                <form action="#" className="ltn__car-dealer-form-box row">
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
			                    <select className="nice-select">
			                      <option>Cidade</option>
			                      <option>chicago</option>
			                      <option>London</option>
			                      <option>Los Angeles</option>
			                      <option>New York</option>
			                      <option>New Jersey</option>
			                    </select>
			                  </div> 
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
			                    <select className="nice-select">
			                      <option>Bairro</option>
			                      <option>Open house</option>
			                      <option>Rent</option>
			                      <option>Sale</option>
			                      <option>Sold</option>
			                    </select>
			                  </div> 
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
			                    <select className="nice-select">
			                      <option>Valor</option>
			                      <option>Apartment</option>
			                      <option>Co-op</option>
			                      <option>Condo</option>
			                      <option>Single Family Home</option>
			                    </select>
			                  </div>
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
			                    <div className="btn-wrapper text-center mt-0 go-top">
			                      {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
			                      <Link to="/go-top" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Properties</Link>
			                    </div>
			                  </div>
			                </form>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
	)
}
