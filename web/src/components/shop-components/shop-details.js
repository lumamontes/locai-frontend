import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import moment from 'moment';
import Flatpickr from "react-flatpickr";
import 'flatpickr/dist/themes/airbnb.css'
import { Portuguese } from "flatpickr/dist/l10n/pt"
import flatpickr from 'flatpickr'
import { Input } from 'reactstrap';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
flatpickr.localize(Portuguese)
export default function ShopDetails (props) {
	const [message, setMessage] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const params = useParams()
		let publicUrl = process.env.PUBLIC_URL + '/'
		let property = props.data.property[0];
		let files = props.data.files;
		async function handleBooking () {
			toast.loading('Sua visita está sendo marcada', {
				hideProgressBar:true, 
				toastId:"visita"
			})
		 try {
		await	api.post('/bookings', {
				booker_user_id:props.user.id,
				property_id:params.property_id,
				property_user_id:property.user_id,
				message_content:message,
				date_booking:moment(date[0]).format('YYYY-MM-DD'),
				time_booking:time
			})
			toast.success('Sua solicitação de visita foi enviada com sucesso', {
				hideProgressBar:true
			})
			toast.dismiss('visita')
		 } catch (error) {
			 toast.error('Algo deu errado', {
				 hideProgressBar:true
			 })
		 }
		}
		return <div className="ltn__shop-details-area pb-10">
			{props.loading ?
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12">
							<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">
								<div className="ltn__blog-meta">
									<ul>
										<li className="ltn__blog-category">
											<Link to="#">Destaque</Link>
										</li>
										<li className="ltn__blog-category">
											<Link className="bg-orange" to="#">Para Alugar</Link>
										</li>
										<li className="ltn__blog-date">
											<i className="far fa-calendar-alt" />{moment(property.created_at).format('DD/MM/YYYY')}
										</li>
										<li>
											<Link to="#"><i className="far fa-comments" />35 Comments</Link>
										</li>
									</ul>
								</div>
								<h1>{property.ad_title}</h1>
								<label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span> {property.property_neighborhood}, {property.property_city}</label>
								<h4 className="title-2">Descrição</h4>
								<p>{property.ad_description}.</p>
								<h4 className="title-2">Detalhes</h4>
								<div className="property-detail-info-list section-bg-1 clearfix mb-60">
									<ul>
										<li><label>ID:</label> <span>{property.id}</span></li>
										<li><label>Área: </label> <span>120 sqft</span></li>
										<li><label>Quartos:</label> <span> {property.room_quantity}</span></li>
										<li><label>Banheiros:</label> <span>{property.bathroom_quantity} </span></li>
										<li><label>Ano de construção:</label> <span>{property.year_constructed}</span></li>
									</ul>
									<ul>
										<li><label>Área Terreno:</label> <span> {property.land_area} </span></li>
										<li><label>Dimensões</label> <span>{property.property_area} M²</span> </li>
										<li><label>Camas:</label> <span>7</span></li>
										<li><label>Valor:</label> <span>{property.ad_value}</span></li>
										<li><label>Bairro:</label> <span>{property.property_neighborhood}</span></li>
									</ul>
								</div>
								<h4 className="title-2">Características</h4>
								<div className="property-detail-feature-list clearfix mb-45">
									<ul>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Living Room</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Garage</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Dining Area</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Bedroom</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Bathroom</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Gym Area</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Garden</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
										<li>
											<div className="property-detail-feature-list-item">
												<i className="flaticon-double-bed" />
												<div>
													<h6>Parking</h6>
													<small>20 x 16 sq feet</small>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<h4 className="title-2">Galeria</h4>
								<div className="ltn__property-details-gallery mb-30">
									<div className="row">
										<div className="col-md-6">
											 {files.length != 0 ?
												files.map((item) => {
													return <a href={item.url != null ? item.url : publicUrl + "assets/img/others/14.jpg"} data-rel="lightcase:myCollection">
														<img className="mb-30" src={item.url != null ? item.url : publicUrl + "assets/img/others/14.jpg"} alt="Image" />
													</a>
												})
												:
												<>
													<div className="col-md-6">		
														<a href={publicUrl+"assets/img/others/14.jpg"} data-rel="lightcase:myCollection">
															<img className="mb-30" src={publicUrl+"assets/img/others/14.jpg"} alt="Image" />
														</a>
														<a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
															<img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
														</a>
													</div>
													<div className="col-md-6">
														<a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
															<img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
														</a>
													</div>
												</>
											} 
										</div>
									</div>
								</div>
								<h4 className="title-2 mb-10">Comodidades</h4>
								<div className="property-details-Comodidades mb-60">
									<div className="row">
										<div className="col-lg-4 col-md-6">
											<div className="ltn__menu-widget">
												<ul>
													<li>
														<label className="checkbox-item">Air Conditioning
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Gym
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Microwave
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Piscina
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">WiFi
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="ltn__menu-widget">
												<ul>
													<li>
														<label className="checkbox-item">Barbeque
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Recreation
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Microwave
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Basketball Cout
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Fireplace
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-6">
											<div className="ltn__menu-widget">
												<ul>
													<li>
														<label className="checkbox-item">Refrigerator
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Window Coverings
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Washer
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">24x7 Security
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
													<li>
														<label className="checkbox-item">Indoor Game
															<input type="checkbox" defaultChecked="checked" />
															<span className="checkmark" />
														</label>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<h4 className="title-2">Location</h4>
								<div className="property-details-google-map mb-60">
									<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
								</div>
								
								{/* APARTMENTS PLAN AREA END */}
								<h4 className="title-2">Property Video</h4>
								<div className="ltn__video-bg-img ltn__video-popup-height-500 bg-overlay-black-50 bg-image mb-60" data-bs-bg={publicUrl + "assets/img/others/5.jpg"}>
									<a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/eWUxqVFBq74?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
										<i className="fa fa-play" />
									</a>
								</div>
								<div className="ltn__shop-details-tab-content-inner--- ltn__shop-details-tab-inner-2 ltn__product-details-review-inner mb-60">
									<h4 className="title-2">Customer Reviews</h4>
									<div className="product-ratting">
										<ul>
											<li><a href="#"><i className="fas fa-star" /></a></li>
											<li><a href="#"><i className="fas fa-star" /></a></li>
											<li><a href="#"><i className="fas fa-star" /></a></li>
											<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
											<li><a href="#"><i className="far fa-star" /></a></li>
											<li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
										</ul>
									</div>
									<hr />
									{/* comment-area */}
									<div className="ltn__comment-area mb-30">
										<div className="ltn__comment-inner">
											<ul>
												<li>
													<div className="ltn__comment-item clearfix">
														<div className="ltn__commenter-img">
															<img src={publicUrl + "assets/img/testimonial/1.jpg"} alt="Image" />
														</div>
														<div className="ltn__commenter-comment">
															<h6><a href="#">Adam Smit</a></h6>
															<div className="product-ratting">
																<ul>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
																	<li><a href="#"><i className="far fa-star" /></a></li>
																</ul>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
															<span className="ltn__comment-reply-btn">September 3, 2020</span>
														</div>
													</div>
												</li>
												<li>
													<div className="ltn__comment-item clearfix">
														<div className="ltn__commenter-img">
															<img src={publicUrl + "assets/img/testimonial/3.jpg"} alt="Image" />
														</div>
														<div className="ltn__commenter-comment">
															<h6><a href="#">Adam Smit</a></h6>
															<div className="product-ratting">
																<ul>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
																	<li><a href="#"><i className="far fa-star" /></a></li>
																</ul>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
															<span className="ltn__comment-reply-btn">September 2, 2020</span>
														</div>
													</div>
												</li>
												<li>
													<div className="ltn__comment-item clearfix">
														<div className="ltn__commenter-img">
															<img src={publicUrl + "assets/img/testimonial/2.jpg"} alt="Image" />
														</div>
														<div className="ltn__commenter-comment">
															<h6><a href="#">Adam Smit</a></h6>
															<div className="product-ratting">
																<ul>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star" /></a></li>
																	<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
																	<li><a href="#"><i className="far fa-star" /></a></li>
																</ul>
															</div>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
															<span className="ltn__comment-reply-btn">September 2, 2020</span>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
									{/* comment-reply */}
									<div className="ltn__comment-reply-area ltn__form-box mb-30">
										<form action="#">
											<h4>Add a Review</h4>
											<div className="mb-30">
												<div className="add-a-review">
													<h6>Your Ratings:</h6>
													<div className="product-ratting">
														<ul>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
														</ul>
													</div>
												</div>
											</div>
											<div className="input-item input-item-textarea ltn__custom-icon">
												<textarea placeholder="Type your comments...." defaultValue={""} />
											</div>
											<div className="input-item input-item-name ltn__custom-icon">
												<input type="text" placeholder="Type your name...." />
											</div>
											<div className="input-item input-item-email ltn__custom-icon">
												<input type="email" placeholder="Type your email...." />
											</div>
											<div className="input-item input-item-website ltn__custom-icon">
												<input type="text" name="website" placeholder="Type your website...." />
											</div>
											<label className="mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label>
											<div className="btn-wrapper">
												<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit</button>
											</div>
										</form>
									</div>
								</div>
								<h4 className="title-2">Related Properties</h4>
								<div className="row">
									{/* ltn__product-item */}
									<div className="col-xl-6 col-sm-6 col-12 go-top">
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
											<div className="product-img">
												<Link to="/shop"><img src={publicUrl + "assets/img/product-3/1.jpg"} alt="#" /></Link>
												<div className="real-estate-agent">
													<div className="agent-img">
														<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
													</div>
												</div>
											</div>
											<div className="product-info">
												<div className="product-badge">
													<ul>
														<li className="sale-badg">For Rent</li>
													</ul>
												</div>
												<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
												<div className="product-img-location">
													<ul>
														<li>
															<Link to="/shop"><i className="flaticon-pin" /> {property.property_neighborhood}, {property.property_city} </Link>
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
															<Link to="/shop" title="Compare">
																<i className="flaticon-add" />
															</Link>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-info-bottom">
												<div className="product-price">
													<span>$349,00<label>/Month</label></span>
												</div>
											</div>
										</div>
									</div>
									{/* ltn__product-item */}
									<div className="col-xl-6 col-sm-6 col-12 go-top">
										<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
											<div className="product-img">
												<Link to="/shop"><img src={publicUrl + "assets/img/product-3/2.jpg"} alt="#" /></Link>
												<div className="real-estate-agent">
													<div className="agent-img">
														<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
													</div>
												</div>
											</div>
											<div className="product-info">
												<div className="product-badge">
													<ul>
														<li className="sale-badg">For Sale</li>
													</ul>
												</div>
												<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
												<div className="product-img-location">
													<ul>
														<li>
															<Link to="/shop"><i className="flaticon-pin" /> {property.property_neighborhood}, {property.property_city} </Link>
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
															<a href="portfolio-details.html" title="Compare">
																<i className="flaticon-add" />
															</a>
														</li>
													</ul>
												</div>
											</div>
											<div className="product-info-bottom">
												<div className="product-price">
													<span>$349,00<label>/Month</label></span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
								{/* Author Widget */}
								<div className="widget ltn__author-widget">
									<div className="ltn__author-widget-inner text-center">
										<img src={props.user.profile_picture!=null? props.user.profile_picture : publicUrl + "assets/img/team/4.jpg"} alt="Image" />
										<h5>{props.user.name}</h5>
										<small>{props.user.profession}</small>
										<div className="product-ratting">
											{/* <ul>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star" /></a></li>
												<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
												<li><a href="#"><i className="far fa-star" /></a></li>
												<li className="review-total"> <a href="#"> ( 1 Reviews )</a></li>
											</ul> */}
										</div>
										<p>{props.user.biography}</p>
										{/* <div className="ltn__social-media">
											<ul>
												<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
												<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
												<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
												<li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
											</ul>
										</div> */}
									</div>
								</div>
								{/* Search Widget */}
								{/* <div className="widget ltn__search-widget">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Search Objects</h4>
									<form action="#">
										<input type="text" name="search" placeholder="Search your keyword..." />
										<button type="submit"><i className="fas fa-search" /></button>
									</form>
								</div> */}
								{/* Form Widget */}
								<div className="widget ltn__form-widget">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Marque uma visita</h4>
									<form onSubmit={(event) => event.preventDefault()} action="#">
										<textarea onChange={(e) => setMessage(e.target.value)} name="yourmessage" placeholder="Escreva uma mensagem"  /> 
										<Flatpickr 
										 options={{
											dateFormat: "d/m/Y",
										}}
										value={date}
										onChange={(date) => setDate(date) }
                      placeholder="Escolha o dia"/>
											<Input className='mb-4' onChange={(e) => setTime(e.target.value)} type='time'/>
										<button onClick={handleBooking} type="button" className="btn theme-btn-1">Marcar</button>
									</form>
								</div>
								{/* Top Rated Product Widget */}
								<div className="widget ltn__top-rated-product-widget go-top">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Top Rated Product</h4>
									<ul>
										<li>
											<div className="top-rated-product-item clearfix">
												<div className="top-rated-product-img">
													<Link to="/product-details"><img src={publicUrl + "assets/img/product/1.png"} alt="#" /></Link>
												</div>
												<div className="top-rated-product-info">
													<div className="product-ratting">
														<ul>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
														</ul>
													</div>
													<h6><Link to="/shop">Luxury House In Greenville </Link></h6>
													<div className="product-price">
														<span>$30,000.00</span>
														<del>$35,000.00</del>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="top-rated-product-item clearfix">
												<div className="top-rated-product-img">
													<Link to="/product-details"><img src={publicUrl + "assets/img/product/2.png"} alt="#" /></Link>
												</div>
												<div className="top-rated-product-info">
													<div className="product-ratting">
														<ul>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
														</ul>
													</div>
													<h6><Link to="/shop">Apartment with Subunits</Link></h6>
													<div className="product-price">
														<span>$30,000.00</span>
														<del>$35,000.00</del>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="top-rated-product-item clearfix">
												<div className="top-rated-product-img">
													<Link to="/product-details"><img src={publicUrl + "assets/img/product/3.png"} alt="#" /></Link>
												</div>
												<div className="top-rated-product-info">
													<div className="product-ratting">
														<ul>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star" /></a></li>
															<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
															<li><a href="#"><i className="far fa-star" /></a></li>
														</ul>
													</div>
													<h6><Link to="/shop">3 Rooms Manhattan</Link></h6>
													<div className="product-price">
														<span>$30,000.00</span>
														<del>$35,000.00</del>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								{/* Menu Widget (Category) */}
								<div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2---">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Top Categories</h4>
									<ul className="go-top">
										<li><Link to="/blog-grid">Apartments <span>(26)</span></Link></li>
										<li><Link to="/blog-grid">Picture Stodio <span>(30)</span></Link></li>
										<li><Link to="/blog-grid">Office  <span>(71)</span></Link></li>
										<li><Link to="/blog-grid">Luxary Vilas <span>(56)</span></Link></li>
										<li><Link to="/blog-grid">Duplex House <span>(60)</span></Link></li>
									</ul>
								</div>
								{/* Popular Product Widget */}
								<div className="widget ltn__popular-product-widget">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Properties</h4>
									<div className="row ltn__popular-product-widget-active slick-arrow-1">
										{/* ltn__product-item */}
										<div className="col-12">
											<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
												<div className="product-img go-top">
													<Link to="/shop"><img src={publicUrl + "assets/img/product-3/6.jpg"} alt="#" /></Link>
													<div className="real-estate-agent">
														<div className="agent-img">
															<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
														</div>
													</div>
												</div>
												<div className="product-info">
													<div className="product-price">
														<span>$349,00<label>/Month</label></span>
													</div>
													<h2 className="product-title"><Link to="/shop">New Apartment Nice View</Link></h2>
													<div className="product-img-location">
														<ul>
															<li>
																<Link to="/shop"><i className="flaticon-pin" /> {property.property_neighborhood}, {property.property_city} </Link>
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
											</div>
										</div>
										{/* ltn__product-item */}
										<div className="col-12">
											<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
												<div className="product-img">
													<a href="product-details.html"><img src={publicUrl + "assets/img/product-3/4.jpg"} alt="#" /></a>
													<div className="real-estate-agent">
														<div className="agent-img">
															<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
														</div>
													</div>
												</div>
												<div className="product-info">
													<div className="product-price">
														<span>$349,00<label>/Month</label></span>
													</div>
													<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
													<div className="product-img-location">
														<ul>
															<li>
																<Link to="/shop"><i className="flaticon-pin" /> {property.property_neighborhood}, {property.property_city} </Link>
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
											</div>
										</div>
										{/* ltn__product-item */}
										<div className="col-12">
											<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
												<div className="product-img">
													<a href="product-details.html"><img src={publicUrl + "assets/img/product-3/5.jpg"} alt="#" /></a>
													<div className="real-estate-agent">
														<div className="agent-img">
															<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
														</div>
													</div>
												</div>
												<div className="product-info">
													<div className="product-price">
														<span>$349,00<label>/Month</label></span>
													</div>
													<h2 className="product-title"><a href="product-details.html">New Apartment Nice View</a></h2>
													<div className="product-img-location">
														<ul>
															<li>
																<Link to="/shop"><i className="flaticon-pin" /> {property.property_neighborhood}, {property.property_city} </Link>
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
											</div>
										</div>
										{/*  */}
									</div>
								</div>
								{/* Popular Post Widget */}
								<div className="widget ltn__popular-post-widget go-top">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Leatest Blogs</h4>
									<ul>
										<li>
											<div className="popular-post-widget-item clearfix">
												<div className="popular-post-widget-img">
													<Link to="/blog-details"><img src={publicUrl + "assets/img/team/5.jpg"} alt="#" /></Link>
												</div>
												<div className="popular-post-widget-brief">
													<h6><Link to="/blog-details">Lorem ipsum dolor sit
														cing elit, sed do.</Link></h6>
													<div className="ltn__blog-meta">
														<ul>
															<li className="ltn__blog-date">
																<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="popular-post-widget-item clearfix">
												<div className="popular-post-widget-img">
													<Link to="/blog-details"><img src={publicUrl + "assets/img/team/6.jpg"} alt="#" /></Link>
												</div>
												<div className="popular-post-widget-brief">
													<h6><Link to="/blog-details">Lorem ipsum dolor sit
														cing elit, sed do.</Link></h6>
													<div className="ltn__blog-meta">
														<ul>
															<li className="ltn__blog-date">
																<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="popular-post-widget-item clearfix">
												<div className="popular-post-widget-img">
													<Link to="/blog-details"><img src={publicUrl + "assets/img/team/7.jpg"} alt="#" /></Link>
												</div>
												<div className="popular-post-widget-brief">
													<h6><Link to="/blog-details">Lorem ipsum dolor sit
														cing elit, sed do.</Link></h6>
													<div className="ltn__blog-meta">
														<ul>
															<li className="ltn__blog-date">
																<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div className="popular-post-widget-item clearfix">
												<div className="popular-post-widget-img">
													<Link to="/blog-details"><img src={publicUrl + "assets/img/team/8.jpg"} alt="#" /></Link>
												</div>
												<div className="popular-post-widget-brief">
													<h6><Link to="/blog-details">Lorem ipsum dolor sit
														cing elit, sed do.</Link></h6>
													<div className="ltn__blog-meta">
														<ul>
															<li className="ltn__blog-date">
																<a href="#"><i className="far fa-calendar-alt" />June 22, 2020</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								{/* Social Media Widget */}
								<div className="widget ltn__social-media-widget">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
									<div className="ltn__social-media-2">
										<ul>
											<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
											<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
											<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
										</ul>
									</div>
								</div>
								{/* Tagcloud Widget */}
								<div className="widget ltn__tagcloud-widget go-top">
									<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Tags</h4>
									<ul>
										<li><Link to="/blog-grid">Popular</Link></li>
										<li><Link to="/blog-grid">desgin</Link></li>
										<li><Link to="/blog-grid">ux</Link></li>
										<li><Link to="/blog-grid">usability</Link></li>
										<li><Link to="/blog-grid">develop</Link></li>
										<li><Link to="/blog-grid">icon</Link></li>
										<li><Link to="/blog-grid">Car</Link></li>
										<li><Link to="/blog-grid">Service</Link></li>
										<li><Link to="/blog-grid">Repairs</Link></li>
										<li><Link to="/blog-grid">Auto Parts</Link></li>
										<li><Link to="/blog-grid">Oil</Link></li>
										<li><Link to="/blog-grid">Dealer</Link></li>
										<li><Link to="/blog-grid">Oil Change</Link></li>
										<li><Link to="/blog-grid">Body Color</Link></li>
									</ul>
								</div>
								{/* Banner Widget */}
								<div className="widget ltn__banner-widget d-none go-top">
									<Link to="/shop"><img src={publicUrl + "assets/img/banner/2.jpg"} alt="#" /></Link>
								</div>
							</aside>
						</div>
					</div>
				</div>
				: <h1>Não encontrado</h1>}
		</div>
	
}
