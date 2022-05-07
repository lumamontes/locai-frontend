import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import moment from 'moment';
export default function MyAccount() {

	const { user } = useAuth()
	const [fullUser, setFullUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [properties, setProperties] = useState([])
	const [userName, SetUserName] = useState('')
	const [email, setEmail] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState('')
	async function fetchData() {
		if (user !== null) {
			try {
				const response = await api.get(`/users/${user.id}`, {
					headers: {
						Authorization: `Bearer ${user.token}`
					}
				})
				setFullUser(response.data);
				SetUserName(response.data[0].name)
				setEmail(response.data[0].email)
				setCity(response.data[0].city)
				setState(response.data[0].state)
				setLoading(true);
			} catch (err) {
				console.log(err)
			}
		}
	}
async function fetchProperties () {
	if (user !== null) {
		try {
			const response = await api.get(`/properties_user/${user.id}`, {
				headers: {
					Authorization: `Bearer ${user.token}`
				}
			})
			setProperties(response.data)
		} catch (error) {
			console.log(error)
		}
	}
}
	useEffect(() => {
		fetchData()
		fetchProperties()
	}, [])

	return (

		user !== null && loading ? <div className="liton__wishlist-area pb-70">

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* PRODUCT TAB AREA START */}
						<div className="ltn__product-tab-area">
							<div className="container">
								<div className="row">
									<div className="col-lg-4">
										<div className="ltn__tab-menu-list mb-50">
											<div className="nav">
												<a className="active show" data-bs-toggle="tab" href="#ltn_tab_1_1">Dashboard <i className="fas fa-home" /></a>
												<a data-bs-toggle="tab" href="#ltn_tab_1_2">Perfil <i className="fas fa-user" /></a>
												<a data-bs-toggle="tab" href="#ltn_tab_1_3">Endereço <i className="fas fa-map-marker-alt" /></a>
												<a data-bs-toggle="tab" href="#ltn_tab_1_4">Detalhes da Conta <i className="fas fa-user" /></a>
												<a data-bs-toggle="tab" href="#ltn_tab_1_5">Meus imóveis<i className="fa-solid fa-list" /></a>
												{/* <a data-bs-toggle="tab" href="#ltn_tab_1_6">Imóveis Favoritos <i className="fa-solid fa-heart" /></a> */}
												<a data-bs-toggle="tab" href="#ltn_tab_1_7">Anunciar Imóvel <i className="fa-solid fa-map-location-dot" /></a>
												<a data-bs-toggle="tab" href="#ltn_tab_1_8">Payments <i className="fa-solid fa-money-check-dollar" /></a>
												<a data-bs-toggle="tab" href="#ltn_tab_1_9">Change Password <i className="fa-solid fa-lock" /></a>
												<a href="login.html">Sair <i className="fas fa-sign-out-alt" /></a>
											</div>
										</div>
									</div>
									<div className="col-lg-8">
										<div className="tab-content">
											<div className="tab-pane fade active show" id="ltn_tab_1_1">
												<div className="ltn__myaccount-tab-content-inner">
													<p>Olá <strong>{user.name}</strong></p>
													<p>From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping and billing addresses</span>, and <span>edit your password and account details</span>.</p>
												</div>
											</div>
											<div className="tab-pane fade" id="ltn_tab_1_2">
												<div className="ltn__myaccount-tab-content-inner">
													{/* comment-area */}
													<div className="ltn__comment-area mb-50">
														<div className="ltn-author-introducing clearfix">
															<div className="author-img">
																<img src={"assets/img/blog/author.jpg"} alt="Author Image" />
															</div>
															<div className="author-info">
																<h6>{user.user_type_id == 1 ? 'Locatário' : (user.user_type_id == 2 ? 'Anunciante' : 'Corretor')}</h6>
																<h2>{user.name}</h2>
																<div className="footer-address">
																	<ul>
																		<li>
																			<div className="footer-address-icon">
																				<i className="icon-placeholder" />
																			</div>
																			<div className="footer-address-info">
																				<p>{fullUser[0].city}, {fullUser[0].state}, Brasil</p>
																			</div>
																		</li>
																		<li>
																			<div className="footer-address-icon">
																				<i className="icon-call" />
																			</div>
																			<div className="footer-address-info">
																				<p><a href="tel:+0123-456789">+{fullUser[0].telephone}</a></p>
																			</div>
																		</li>
																		<li>
																			<div className="footer-address-icon">
																				<i className="icon-mail" />
																			</div>
																			<div className="footer-address-info">
																				<p><a href="mailto:example@example.com">{fullUser[0].email}</a></p>
																			</div>
																		</li>
																	</ul>
																</div>
															</div>
														</div>
														
													</div>
												</div>
											</div>
											<div className="tab-pane fade" id="ltn_tab_1_3">
												<div className="ltn__myaccount-tab-content-inner">
													<p>The following addresses will be used on the checkout page by default.</p>
													<div className="row">
														<div className="col-md-6 col-12 learts-mb-30">
															<h4>Billing Address <small><Link to="#">edit</Link></small></h4>
															<address>
																<p><strong>Alex Tuntuni</strong></p>
																<p>1355 Market St, Suite 900 <br />
																	San Francisco, CA 94103</p>
																<p>Mobile: (123) 456-7890</p>
															</address>
														</div>
														<div className="col-md-6 col-12 learts-mb-30">
															<h4>Shipping Address <small><Link to="#">edit</Link></small></h4>
															<address>
																<p><strong>Alex Tuntuni</strong></p>
																<p>1355 Market St, Suite 900 <br />
																	San Francisco, CA 94103</p>
																<p>Mobile: (123) 456-7890</p>
															</address>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane fade" id="ltn_tab_1_4">
												<div className="ltn__myaccount-tab-content-inner">
													<p>The following addresses will be used on the checkout page by default.</p>
													<div className="ltn__form-box">
														<form action="#">
															<div className="row">
																<div className="col-md-6">
																	<label>Nome:</label>
																	<input type="text" name="ltn__name" onChange={(e) => SetUserName(e.target.value)} value={userName} />
																</div>
																<div className="col-md-6">
																	<label>Email:</label>
																	<input type="email" name="ltn__lastname"  onChange={(e) => setEmail(e.target.value)} value={email} placeholder="example@example.com" />
																</div>
															</div>
															<div className="row ">
																<div className="col-md-6">
																	<label>Cidade</label>
																	<input type="text" onChange={(e) => setCity(e.target.value)} name="ltn__name" value={city} />
																</div>
																<div className="col-md-6">
																	<label>Estado:</label>
																	<input type="email" name="ltn__lastname" onChange={(e) => setState(e.target.value)} value={state} placeholder="example@example.com" />
																</div>
															</div>
															<fieldset>
																<legend>Password change</legend>
																<div className="row">
																	<div className="col-md-12">
																		<label>Current password (leave blank to leave unchanged):</label>
																		<input type="password" name="ltn__name" />
																		<label>New password (leave blank to leave unchanged):</label>
																		<input type="password" name="ltn__lastname" />
																		<label>Confirm new password:</label>
																		<input type="password" name="ltn__lastname" />
																	</div>
																</div>
															</fieldset>
															<div className="btn-wrapper">
																<button type="submit" className="btn theme-btn-1 btn-effect-1 text-uppercase">Save Changes</button>
															</div>
														</form>
													</div>
												</div>
											</div>
											<div className="tab-pane fade" id="ltn_tab_1_5">
												<div className="ltn__myaccount-tab-content-inner">
													<div className="ltn__my-properties-table table-responsive">
														<table className="table">
															<thead>
																<tr>
																<th scope="col text-center">Meus imóveis</th>
																	<th scope="col" />
																	<th scope="col">Quando foi anunciado</th>
																	<th scope="col">Ações</th>
																	<th scope="col">Deletar</th>
																</tr>
															</thead>
															<tbody>
																{properties.map((item) => {
																	return (
																		<tr>
																		<td className="ltn__my-properties-img go-top">
																			<Link to="/product-details"><img src={item.ad_image} alt="#" /></Link>
																		</td>
																		<td>
																			<div className="ltn__my-properties-info">
																				<h6 className="mb-10 go-top"><Link to="/product-details">{item.ad_title}</Link></h6>
																				<small><i className="icon-placeholder" />{item.property_adress}</small>
																			</div>
																		</td>
																		<td className='text-center'>{moment(item.created_at).format('DD/MM/YYYY')}</td>
																		<td><Link to={`/editar/${item.id}`}>Editar</Link></td>
																		<td className='text-center'><Link tp="#"><i className="fa-solid fa-trash-can" /></Link></td>
																	</tr>
																	)
																})}
															</tbody>
														</table>
													</div>
													{/* <div className="ltn__pagination-area text-center">
														<div className="ltn__pagination">
															<ul>
																<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
																<li><Link to="#">1</Link></li>
																<li className="active"><Link to="#">2</Link></li>
																<li><Link to="#">3</Link></li>
																<li><Link to="#">...</Link></li>
																<li><Link to="#">10</Link></li>
																<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
															</ul>
														</div>
													</div> */}
												</div>
											</div>
											<div className="tab-pane fade" id="ltn_tab_1_6">
												<div className="ltn__myaccount-tab-content-inner">
													<div className="ltn__my-properties-table table-responsive">
														<table className="table">
															<thead>
																<tr>
																	<th scope="col">Top Property</th>
																	<th scope="col" />
																	<th scope="col">Date Added</th>
																	<th scope="col">Actions</th>
																	<th scope="col">Delete</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td className="ltn__my-properties-img go-top">
																		<Link to="/product-details"><img src={"assets/img/product-3/2.jpg"} alt="#" /></Link>
																	</td>
																	<td>
																		<div className="ltn__my-properties-info">
																			<h6 className="mb-10 go-top"><Link to="/product-details">New Apartment Nice View</Link></h6>
																			<small><i className="icon-placeholder" /> Brooklyn, New York, United States</small>
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
																		</div>
																	</td>
																	<td>Feb 22, 2022</td>
																	<td><Link to="#">Edit</Link></td>
																	<td><Link tp="#"><i className="fa-solid fa-trash-can" /></Link></td>
																</tr>
																<tr>
																	<td className="ltn__my-properties-img go-top">
																		<Link to="/product-details"><img src={"assets/img/product-3/3.jpg"} alt="#" /></Link>
																	</td>
																	<td>
																		<div className="ltn__my-properties-info">
																			<h6 className="mb-10 go-top"><Link to="/product-details">New Apartment Nice View</Link></h6>
																			<small><i className="icon-placeholder" /> Brooklyn, New York, United States</small>
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
																		</div>
																	</td>
																	<td>Feb 22, 2022</td>
																	<td><Link to="#">Edit</Link></td>
																	<td><Link tp="#"><i className="fa-solid fa-trash-can" /></Link></td>
																</tr>
																<tr>
																	<td className="ltn__my-properties-img go-top">
																		<Link to="/product-details"><img src={"assets/img/product-3/7.jpg"} alt="#" /></Link>
																	</td>
																	<td>
																		<div className="ltn__my-properties-info">
																			<h6 className="mb-10 go-top"><Link to="/product-details">New Apartment Nice View</Link></h6>
																			<small><i className="icon-placeholder" /> Brooklyn, New York, United States</small>
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
																		</div>
																	</td>
																	<td>Feb 22, 2022</td>
																	<td><Link to="#">Edit</Link></td>
																	<td><Link tp="#"><i className="fa-solid fa-trash-can" /></Link></td>
																</tr>
															</tbody>
														</table>
													</div>
													<div className="ltn__pagination-area text-center">
														<div className="ltn__pagination">
															<ul>
																<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
																<li><Link to="#">1</Link></li>
																<li className="active"><Link to="#">2</Link></li>
																<li><Link to="#">3</Link></li>
																<li><Link to="#">...</Link></li>
																<li><Link to="#">10</Link></li>
																<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
															</ul>
														</div>
													</div>
												</div>
											</div>
									
											<div className="tab-pane fade" id="ltn_tab_1_8">
												<div className="ltn__myaccount-tab-content-inner">
													<div className="row">
														<div className="col-lg-12">
															<div className="ltn__checkout-inner">
																<div className="ltn__checkout-single-content ltn__returning-customer-wrap">
																	<h5>Returning customer? <a className="ltn__secondary-color" href="#ltn__returning-customer-login" data-toggle="collapse">Click here to login</a></h5>
																	<div id="ltn__returning-customer-login" className="collapse ltn__checkout-single-content-info">
																		<div className="ltn_coupon-code-form ltn__form-box">
																			<p>Please login your accont.</p>
																			<form action="#">
																				<div className="row">
																					<div className="col-md-6">
																						<div className="input-item input-item-name ltn__custom-icon">
																							<input type="text" name="ltn__name" placeholder="Enter your name" />
																						</div>
																					</div>
																					<div className="col-md-6">
																						<div className="input-item input-item-email ltn__custom-icon">
																							<input type="email" name="ltn__email" placeholder="Enter email address" />
																						</div>
																					</div>
																				</div>
																				<button className="btn theme-btn-1 btn-effect-1 text-uppercase">Login</button>
																				<label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Remember me</label>
																				<p className="mt-30"><a href="register.html">Lost your password?</a></p>
																			</form>
																		</div>
																	</div>
																</div>
																<div className="ltn__checkout-single-content ltn__coupon-code-wrap">
																	<h5>Have a coupon? <a className="ltn__secondary-color" href="#ltn__coupon-code" data-toggle="collapse">Click here to enter your code</a></h5>
																	<div id="ltn__coupon-code" className="collapse ltn__checkout-single-content-info">
																		<div className="ltn__coupon-code-form">
																			<p>If you have a coupon code, please apply it below.</p>
																			<form action="#">
																				<input type="text" name="coupon-code" placeholder="Coupon code" />
																				<button className="btn theme-btn-2 btn-effect-2 text-uppercase">Apply Coupon</button>
																			</form>
																		</div>
																	</div>
																</div>
																<div className="ltn__checkout-single-content mt-50">
																	<h4 className="title-2">Billing Details</h4>
																	<div className="ltn__checkout-single-content-info">
																		<form action="#">
																			<h6>Personal Information</h6>
																			<div className="row">
																				<div className="col-md-6">
																					<div className="input-item input-item-name ltn__custom-icon">
																						<input type="text" name="ltn__name" placeholder="First name" />
																					</div>
																				</div>
																				<div className="col-md-6">
																					<div className="input-item input-item-name ltn__custom-icon">
																						<input type="text" name="ltn__lastname" placeholder="Last name" />
																					</div>
																				</div>
																				<div className="col-md-6">
																					<div className="input-item input-item-email ltn__custom-icon">
																						<input type="email" name="ltn__email" placeholder="email address" />
																					</div>
																				</div>
																				<div className="col-md-6">
																					<div className="input-item input-item-phone ltn__custom-icon">
																						<input type="text" name="ltn__phone" placeholder="phone number" />
																					</div>
																				</div>
																				<div className="col-md-6">
																					<div className="input-item input-item-website ltn__custom-icon">
																						<input type="text" name="ltn__company" placeholder="Company name (optional)" />
																					</div>
																				</div>
																				<div className="col-md-6">
																					<div className="input-item input-item-website ltn__custom-icon">
																						<input type="text" name="ltn__phone" placeholder="Company address (optional)" />
																					</div>
																				</div>
																			</div>
																			<div className="row">
																				<div className="col-lg-4 col-md-6">
																					<h6>Country</h6>
																					<div className="input-item">
																						<select className="nice-select">
																							<option>Select Country</option>
																							<option>Australia</option>
																							<option>Canada</option>
																							<option>China</option>
																							<option>Morocco</option>
																							<option>Saudi Arabia</option>
																							<option>United Kingdom (UK)</option>
																							<option>United States (US)</option>
																						</select>
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<h6>Address</h6>
																					<div className="row">
																						<div className="col-md-6">
																							<div className="input-item">
																								<input type="text" placeholder="House number and street name" />
																							</div>
																						</div>
																						<div className="col-md-6">
																							<div className="input-item">
																								<input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-4 col-md-6">
																					<h6>Town / City</h6>
																					<div className="input-item">
																						<input type="text" placeholder="City" />
																					</div>
																				</div>
																				<div className="col-lg-4 col-md-6">
																					<h6>State </h6>
																					<div className="input-item">
																						<input type="text" placeholder="State" />
																					</div>
																				</div>
																				<div className="col-lg-4 col-md-6">
																					<h6>Zip</h6>
																					<div className="input-item">
																						<input type="text" placeholder="Zip" />
																					</div>
																				</div>
																			</div>
																			<p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Create an account?</label></p>
																			<h6>Order Notes (optional)</h6>
																			<div className="input-item input-item-textarea ltn__custom-icon">
																				<textarea name="ltn__message" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
																			</div>
																		</form>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="ltn__checkout-payment-method mt-50">
																<h4 className="title-2">Payment Method</h4>
																<div id="checkout_accordion_1">
																	{/* card */}
																	<div className="card">
																		<h5 className="collapsed ltn__card-title" data-toggle="collapse" data-target="#faq-item-2-1" aria-expanded="false">
																			Check payments
																		</h5>
																		<div id="faq-item-2-1" className="collapse" data-parent="#checkout_accordion_1">
																			<div className="card-body">
																				<p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
																			</div>
																		</div>
																	</div>
																	{/* card */}
																	<div className="card">
																		<h5 className="ltn__card-title" data-toggle="collapse" data-target="#faq-item-2-2" aria-expanded="true">
																			Cash on delivery
																		</h5>
																		<div id="faq-item-2-2" className="collapse show" data-parent="#checkout_accordion_1">
																			<div className="card-body">
																				<p>Pay with cash upon delivery.</p>
																			</div>
																		</div>
																	</div>
																	{/* card */}
																	<div className="card">
																		<h5 className="collapsed ltn__card-title" data-toggle="collapse" data-target="#faq-item-2-3" aria-expanded="false">
																			PayPal <img src={"assets/img/icons/payment-3.png"} alt="#" />
																		</h5>
																		<div id="faq-item-2-3" className="collapse" data-parent="#checkout_accordion_1">
																			<div className="card-body">
																				<p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
																			</div>
																		</div>
																	</div>
																</div>
																<div className="ltn__payment-note mt-30 mb-30">
																	<p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
																</div>
																<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Place order</button>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="shoping-cart-total mt-50">
																<h4 className="title-2">Cart Totals</h4>
																<table className="table">
																	<tbody>
																		<tr>
																			<td>3 Rooms Manhattan <strong>× 2</strong></td>
																			<td>$298.00</td>
																		</tr>
																		<tr>
																			<td>OE Replica Wheels <strong>× 2</strong></td>
																			<td>$170.00</td>
																		</tr>
																		<tr>
																			<td>Wheel Bearing Retainer <strong>× 2</strong></td>
																			<td>$150.00</td>
																		</tr>
																		<tr>
																			<td>Shipping and Handing</td>
																			<td>$15.00</td>
																		</tr>
																		<tr>
																			<td>Vat</td>
																			<td>$00.00</td>
																		</tr>
																		<tr>
																			<td><strong>Order Total</strong></td>
																			<td><strong>$633.00</strong></td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="tab-pane fade" id="ltn_tab_1_9">
												<div className="ltn__myaccount-tab-content-inner">
													<div className="account-login-inner">
														<form action="#" className="ltn__form-box contact-form-box">
															<h5 className="mb-30">Change Password</h5>
															<input type="password" name="password" placeholder="Current Password*" />
															<input type="password" name="password" placeholder="New Password*" />
															<input type="password" name="password" placeholder="Confirm New Password*" />
															<div className="btn-wrapper mt-0">
																<button className="theme-btn-1 btn btn-block" type="submit">Save Changes</button>
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
						{/* PRODUCT TAB AREA END */}
					</div>
				</div>
			</div>
		</div> : null
	)
} 