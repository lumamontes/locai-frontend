import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';
import Spinner from 'react-bootstrap/Spinner';

export default function WelcomeDashboardTab(props) {
    const { data: bookings, isLoading, error } = useQuery('bookings', async () => {
        const response = await api.get('/bookings', {
            params: {
                user_id: props.user.id
            }
        })
        const data = await response.data
        return data
    });

    console.log(bookings);
    return (
        <div className="tab-pane fade active show" id="ltn_tab_1_1">
            <div className="ltn__myaccount-tab-content-inner">
                <p>Olá <strong>{props.user.name}</strong></p>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col text-center">Minhas visitas</th>
                                <th scope="col text-center">Informações</th>
                                <th scope="col text-center">data</th>
                                <th scope="col text-center">horário</th>
                                <th scope="col">status</th>
                                <th scope="col">Ações </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading?
                                <div>
                                    <Spinner animation="border" role="status" >
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
					            </div>
                               
                                :
                                bookings.results_booker.map(item => (
                                    <tr>
                                        <td className="ltn__my-properties-img go-top">
                                            <Link to={`/imovel/${item.property_id} `} ><img src={item.ad_image} alt="Imagem de imóvel" /></Link>
                                        </td>
                                        <td>
                                            <div className="ltn__my-properties-info">
                                                <h6 className="mb-10 go-top"><Link to="/product-details">{''}</Link>{item.ad_title}</h6>
                                                <p>{item.description}</p>
                                                <p>{item.ad_value}</p>
                                                <small><i className="icon-placeholder" />{item.property_adress}, {item.property_neighborhood}, {item.property_neighborhood}</small>
                                            </div>
                                        </td>
                                        <td className='text-center'>
                                        { (item.date_booking instanceof Date) ? item.created.toLocaleDateString() : new Date(item.date_booking).toLocaleDateString('pt-br') }
                                        </td>
                                        <td className='text-center'>{item.time_booking}</td>
                                        <td className='text-center'>{item.status}</td>
                                        <td>
                                            <div className='d-flex flex-column align-items-center justify-content-space-around'>
                                                <Link to="#" title=""><i  className="fa-solid fa-trash-can" /></Link>
                                                <Link to="#" title="confirmar"><i className="fa-solid fa-circle-check" /></Link>
                                                <Link to="#" title="cancelar"><i className="fa-solid fa-ban" /></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}