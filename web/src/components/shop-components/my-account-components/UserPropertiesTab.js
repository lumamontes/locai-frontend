import React from 'react';
import { useQuery } from 'react-query';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { api } from './../../../services/api';
import moment from 'moment';

import {toast} from 'react-toastify'
export default function UserPropertiesTab(props) {
	const { data, isLoading, isFetching, error, refetch } = useQuery('properties_user', async () => {
		const response = await api.get(`/properties_user/${props.user_id}`);
		const data = await response.data
		return data
	});

	async function deleteImovel (id) {
		await api.delete(`properties/${id}`).then((response) => {
			toast.success("Anuncio deletado")
		})
		await refetch()
	}
	return (
		isLoading ? (
			<div className="tab-pane fade" id="ltn_tab_1_5">
				<div className="ltn__myaccount-tab-content-inner">
					<div className="justify-content-center d-flex gap-1 flex-column align-items-center">
						<Spinner animation="border" role="status" >
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</div>
				</div>
			</div>
		) : error ? (
			<div>
				Erro
			</div>
		) : (
			<div className="tab-pane fade" id="ltn_tab_1_5">
				<div className="ltn__myaccount-tab-content-inner">
					<div className="ltn__my-properties-table table-responsive">

						{data.length > 0 ?
							(
								<>
									<table className="table">
										<thead>
											<tr>
												<th scope="col text-center">Meus imóveis</th>
												<th scope="col"> {!isLoading && isFetching && <Spinner animation="border" size="sm" variant="secondary"></Spinner>}</th>
												<th scope="col">Quando foi anunciado</th>
												<th scope="col">Ações</th>
												<th scope="col">Deletar</th>
											</tr>
										</thead>
										<tbody>
											{data.map((item) => {
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
														<td className='text-center'><Link onClick={(e) => deleteImovel(item.id)} to="#"><i className="fa-solid fa-trash-can" /></Link></td>
													</tr>
												)
											})}
										</tbody>
									</table>
								</>
							)
							: (
								<div>
									Sem imóveis
								</div>
							)}

					</div>

				</div>
			</div>
		)

	)

}