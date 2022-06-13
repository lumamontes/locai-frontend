import React, { Component, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAnuncio } from '../../hooks/useAnuncio'
import { api } from '../../services/api';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';

export default function ShogGridV1() {
	const stylesImg = {
		"maxHeight":"245px",
		"minHeight":"245px",
	}
	const { user } = useAuth()
	const { params, reload, handleHotReload } = useAnuncio()
	const [bairro, setBairro] = useState('')
	const [ad_value, setAd_value] = useState('')
	const [data, setData] = useState([])
	const [dataInitial, setDataInitial] = useState([])
	const [isLoading, SetisLoading] = useState(true)
	const error = false
	// const { isLoading, error } = useQuery('properties', async () => {
	// 	const response = await api.get('/properties', { params })
	// 	const data = await response.data
	// 	setDataInitial(data)
	// 	setData(data)
	// });
 useEffect(() => {
	SetisLoading(true)
	 api.get('/properties', { params }).then((response) => {
		setData(response.data)
		SetisLoading(false)
	})
 }, [reload])
	// const history = useHistory()
	async function handleValuesSearch() {
		const cidadesName = document.getElementById('cidades')
		handleFilter({
			property_city: cidadesName.value,
			property_neighborhood: capitalizeFirstLetter(bairro),
			ad_value: ad_value
		})
		handleHotReload(!reload)
		// history.push('/imoveis')
	}

	const { handleFilter } = useAnuncio()
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	function handleFavorite(property_id) {
		if (user === null) {
			toast.error('Você precisa está logado para favoritar um imóvel', {
				hideProgressBar: true
			})
		} else {
			api.post(`/user_favorites/${property_id}`, {
				user_id: user.id,
			}).then((response) => {
				toast.success('Imóvel adicionado aos favoritos', {
					hideProgressBar: true
				})
			})
		}
	}
	return (
		<div>
			<div className="ltn__product-area ltn__product-gutter mb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							{isLoading ? (
								<Spinner animation="border" role="status">
									<span className="visually-hidden">Loading...</span>
								</Spinner>
							) : error ? (
								<div>
									Erro
								</div>
							) : (
								<div className="tab-content ">
									<div className="tab-pane fade active show" id="liton_product_grid">
										<div className="ltn__product-tab-content-inner ltn__product-grid-view">
											<div className="row">
												<div className="col-lg-12">
													{/* Search Widget */}
													<div className='pt-10'>
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
																		<input type="text" onChange={(e) => setBairro(e.target.value)} placeholder='bairro' />
																	</div>
																	<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
																		<input type="number" placeholder='Valor' onChange={(e) => setAd_value(e.target.value)} />
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
													</div>
												</div>
												{/* ltn__product-item */}
												{data.length > 0 ? data.map((item) => {
													return (
														<div className="col-lg-4 col-sm-6 col-12">
															<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
																<div className="product-img">
																	<Link  style={stylesImg} to={`/imovel/${item.id}`}>    <img  src={item.ad_image != '' ? item.ad_image : "assets/img/product-3/1.jpg"} style={stylesImg} className="w-100 h-100"  alt="#" /></Link>
																</div>
																<div className="product-info">
																	<div className="product-badge">
																		<ul>
																			<li className="sale-badg">{item.category_id === "3dc72c89-8ea4-459d-92b1-ef97de24c005" ? "Temporada" : "Aluguel"}</li>
																		</ul>
																	</div>
																	<h2 className="product-title go-top"><Link to={`/imovel/${item.id}`}>{item.ad_title}</Link></h2>
																	<div className="product-img-location">
																		<ul>
																			<li className="go-top">
																				<Link to="/contact"><i className="flaticon-pin" /> {item.property_neighborhood}, {item.property_city}</Link>
																			</li>
																		</ul>
																	</div>
																	<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
																		<li><span>{item.room_quantity} </span>
																			Quartos
																		</li>
																		<li><span>{item.bathroom_quantity} </span>
																			Banheiros
																		</li>
																		<li><span>{item.garage_quantity} </span>
																			Garagens
																		</li>
																	</ul>
																	<div className="product-hover-action">
																		<ul>
																			{/* <li>
																				<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
																					<i className="flaticon-expand" />
																				</a>
																			</li> */}
																			<li className='cursor-pointer' onClick={() => handleFavorite(item.id)}>
																				<i className="flaticon-heart-1" />
																			</li>
																			{/* <li>
																				<span className="go-top">
																					<Link to={`/imovel/${item.id}`} title="Product Details">
																						<i className="flaticon-add" />
																					</Link>
																				</span>
																			</li> */}
																		</ul>
																	</div>
																</div>
																<div className="product-info-bottom">
																	<div className="product-price">
																		<span>{item.ad_value.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}<label>/{item.category_id === "3dc72c89-8ea4-459d-92b1-ef97de24c005" ? "dia" : "Mês"}</label></span>
																	</div>
																</div>
															</div>
														</div>
													)
												}) : <p>Sem imóveis</p>}
												{/* ltn__product-item */}

											</div>
										</div>
									</div>

									<div className="tab-pane fade" id="liton_product_list">
										<div className="ltn__product-tab-content-inner ltn__product-list-view">
											<div className="row">
												<div className="col-lg-12">
													{/* Search Widget */}
													<div className="ltn__search-widget mb-30">
														<form action="#">
															<input type="text" name="search" placeholder="Search your keyword..." />
															<button type="submit"><i className="fas fa-search" /></button>
														</form>
													</div>
												</div>
												{/* ltn__product-item */}
												<div className="col-lg-12">
													<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
														<div className="product-img">
															<Link to="/imovel"><img src={"assets/img/product-3/1.jpg"} alt="#" /></Link>
														</div>
														<div className="product-info">
															<div className="product-badge-price">
																<div className="product-badge">
																	<ul>
																		<li className="sale-badg">For Rent</li>
																	</ul>
																</div>
																<div className="product-price">
																	<span>$34,900<label>/Month</label></span>
																</div>
															</div>
															<h2 className="product-title go-top"><Link to="/imovel">New Apartment Nice View</Link></h2>
															<div className="product-img-location">
																<ul>
																	<li className="go-top">
																		<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
																	</li>
																</ul>
															</div>
															<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
																<li><span>3 </span>
																	Bedrooms
																</li>
																<li><span>2 </span>
																	Bathrooms
																</li>
																<li><span>3450 </span>
																	square Ft
																</li>
															</ul>
														</div>
														<div className="product-info-bottom">
															<div className="real-estate-agent">
																<div className="agent-img">
																	<Link to="/team-details"><img src={"assets/img/blog/author.jpg"} alt="#" /></Link>
																</div>
																<div className="agent-brief go-top">
																	<h6><Link to="/team-details">William Seklo</Link></h6>
																	<small>Estate Agents</small>
																</div>
															</div>
															<div className="product-hover-action">
																<ul>
																	<li>
																		<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
																			<i className="flaticon-expand" />
																		</a>
																	</li>
																	<li>
																		<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
																			<i className="flaticon-heart-1" /></a>
																	</li>
																	<li>
																		<span className="go-top">
																			<Link to="/imovel" title="Product Details">
																				<i className="flaticon-add" />
																			</Link>
																		</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												{/* ltn__product-item */}
												<div className="col-lg-12">
													<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
														<div className="product-img">
															<Link to="/imovel"><img src={"assets/img/product-3/2.jpg"} alt="#" /></Link>
														</div>
														<div className="product-info">
															<div className="product-badge-price">
																<div className="product-badge">
																	<ul>
																		<li className="sale-badg">For Rent</li>
																	</ul>
																</div>
																<div className="product-price">
																	<span>$34,900<label>/Month</label></span>
																</div>
															</div>
															<h2 className="product-title go-top"><Link to="/imovel">New Apartment Nice View</Link></h2>
															<div className="product-img-location">
																<ul>
																	<li className="go-top">
																		<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
																	</li>
																</ul>
															</div>
															<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
																<li><span>3 </span>
																	Bedrooms
																</li>
																<li><span>2 </span>
																	Bathrooms
																</li>
																<li><span>3450 </span>
																	square Ft
																</li>
															</ul>
														</div>
														<div className="product-info-bottom">
															<div className="real-estate-agent">
																<div className="agent-img">
																	<Link to="/team-details"><img src={"assets/img/blog/author.jpg"} alt="#" /></Link>
																</div>
																<div className="agent-brief go-top">
																	<h6><Link to="/team-details">William Seklo</Link></h6>
																	<small>Estate Agents</small>
																</div>
															</div>
															<div className="product-hover-action">
																<ul>
																	<li>
																		<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
																			<i className="flaticon-expand" />
																		</a>
																	</li>
																	<li>
																		<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
																			<i className="flaticon-heart-1" /></a>
																	</li>
																	<li>
																		<span className="go-top">
																			<Link to="/imovel" title="Product Details">
																				<i className="flaticon-add" />
																			</Link>
																		</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												{/* ltn__product-item */}
												<div className="col-lg-12">
													<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
														<div className="product-img">
															<Link to="/imovel"><img src={"assets/img/product-3/3.jpg"} alt="#" /></Link>
														</div>
														<div className="product-info">
															<div className="product-badge-price">
																<div className="product-badge">
																	<ul>
																		<li className="sale-badg">For Rent</li>
																	</ul>
																</div>
																<div className="product-price">
																	<span>$34,900<label>/Month</label></span>
																</div>
															</div>
															<h2 className="product-title go-top"><Link to="/imovel">New Apartment Nice View</Link></h2>
															<div className="product-img-location">
																<ul>
																	<li className="go-top">
																		<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
																	</li>
																</ul>
															</div>
															<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
																<li><span>3 </span>
																	Bedrooms
																</li>
																<li><span>2 </span>
																	Bathrooms
																</li>
																<li><span>3450 </span>
																	square Ft
																</li>
															</ul>
														</div>
														<div className="product-info-bottom">
															<div className="real-estate-agent">
																<div className="agent-img">
																	<Link to="/team-details"><img src={"assets/img/blog/author.jpg"} alt="#" /></Link>
																</div>
																<div className="agent-brief go-top">
																	<h6><Link to="/team-details">William Seklo</Link></h6>
																	<small>Estate Agents</small>
																</div>
															</div>
															<div className="product-hover-action">
																<ul>
																	<li>
																		<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
																			<i className="flaticon-expand" />
																		</a>
																	</li>
																	<li>
																		<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
																			<i className="flaticon-heart-1" /></a>
																	</li>
																	<li>
																		<span className="go-top">
																			<Link to="/imovel" title="Product Details">
																				<i className="flaticon-add" />
																			</Link>
																		</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												{/* ltn__product-item */}
												<div className="col-lg-12">
													<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
														<div className="product-img">
															<Link to="/imovel"><img src={"assets/img/product-3/4.jpg"} alt="#" /></Link>
														</div>
														<div className="product-info">
															<div className="product-badge-price">
																<div className="product-badge">
																	<ul>
																		<li className="sale-badg">For Rent</li>
																	</ul>
																</div>
																<div className="product-price">
																	<span>$34,900<label>/Month</label></span>
																</div>
															</div>
															<h2 className="product-title go-top"><Link to="/imovel">New Apartment Nice View</Link></h2>
															<div className="product-img-location">
																<ul>
																	<li className="go-top">
																		<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
																	</li>
																</ul>
															</div>
															<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
																<li><span>3 </span>
																	Bedrooms
																</li>
																<li><span>2 </span>
																	Bathrooms
																</li>
																<li><span>3450 </span>
																	square Ft
																</li>
															</ul>
														</div>
														<div className="product-info-bottom">
															<div className="real-estate-agent">
																<div className="agent-img">
																	<Link to="/team-details"><img src={"assets/img/blog/author.jpg"} alt="#" /></Link>
																</div>
																<div className="agent-brief go-top">
																	<h6><Link to="/team-details">William Seklo</Link></h6>
																	<small>Estate Agents</small>
																</div>
															</div>
															<div className="product-hover-action">
																<ul>
																	<li>
																		<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
																			<i className="flaticon-expand" />
																		</a>
																	</li>
																	<li>
																		<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
																			<i className="flaticon-heart-1" /></a>
																	</li>
																	<li>
																		<span className="go-top">
																			<Link to="/imovel" title="Product Details">
																				<i className="flaticon-add" />
																			</Link>
																		</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												{/* ltn__product-item */}
												<div className="col-lg-12">
													<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5">
														<div className="product-img">
															<Link to="/imovel"><img src={"assets/img/product-3/5.jpg"} alt="#" /></Link>
														</div>
														<div className="product-info">
															<div className="product-badge-price">
																<div className="product-badge">
																	<ul>
																		<li className="sale-badg">For Rent</li>
																	</ul>
																</div>
																<div className="product-price">
																	<span>$34,900<label>/Month</label></span>
																</div>
															</div>
															<h2 className="product-title go-top"><Link to="/imovel">New Apartment Nice View</Link></h2>
															<div className="product-img-location">
																<ul>
																	<li className="go-top">
																		<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
																	</li>
																</ul>
															</div>
															<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
																<li><span>3 </span>
																	Bedrooms
																</li>
																<li><span>2 </span>
																	Bathrooms
																</li>
																<li><span>3450 </span>
																	square Ft
																</li>
															</ul>
														</div>
														<div className="product-info-bottom">
															<div className="real-estate-agent">
																<div className="agent-img">
																	<Link to="/team-details"><img src={"assets/img/blog/author.jpg"} alt="#" /></Link>
																</div>
																<div className="agent-brief go-top">
																	<h6><Link to="/team-details">William Seklo</Link></h6>
																	<small>Estate Agents</small>
																</div>
															</div>
															<div className="product-hover-action">
																<ul>
																	<li>
																		<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
																			<i className="flaticon-expand" />
																		</a>
																	</li>
																	<li>
																		<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
																			<i className="flaticon-heart-1" /></a>
																	</li>
																	<li>
																		<span className="go-top">
																			<Link to="/imovel" title="Product Details">
																				<i className="flaticon-add" />
																			</Link>
																		</span>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
												{/*  */}
											</div>
										</div>
									</div>
								</div>
							)}
							{/* <div className="ltn__pagination-area text-center">
								<div className="ltn__pagination">
									<ul>
										<li><a href="#"><i className="fas fa-angle-double-left" /></a></li>
										<li><a href="#">1</a></li>
										<li className="active"><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">...</a></li>
										<li><a href="#">10</a></li>
										<li><a href="#"><i className="fas fa-angle-double-right" /></a></li>
									</ul>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>

			<div className="ltn__modal-area ltn__quick-view-modal-area">
				<div className="modal fade" id="quick_view_modal" tabIndex={-1}>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">×</span>
									{/* <i class="fas fa-times"></i> */}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>


		</div>

	)
}
