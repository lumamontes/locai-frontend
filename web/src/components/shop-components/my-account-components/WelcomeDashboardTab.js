import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useUser } from '../../../hooks/useUser';
import { api } from '../../../services/api';

export default function WelcomeDashboardTab(props) {
    const {UserData} = useUser()
    const { data, isLoading, error } = useQuery('bookings', async () => {
		const response = await api.get('/bookings', {
            params:{
                property_user_id:UserData.id
            }
        })
		const data = await response.data
		return data
	});
    return (
        <div className="tab-pane fade active show" id="ltn_tab_1_1">
            <div className="ltn__myaccount-tab-content-inner">
                <p>Olá <strong>{props.user.name}</strong></p>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col text-center">Minhas visitas</th>
                                <th scope="col">Mensagem</th>
                                <th scope="col">Confirmar visita</th>
                                <th scope="col">Cancelar </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ltn__my-properties-img go-top">
                                    <Link to="/product-details"><img src={''} alt="#" /></Link>
                                </td>
                                <td>
                                    <div className="ltn__my-properties-info">
                                        <h6 className="mb-10 go-top"><Link to="/product-details">{''}</Link></h6>
                                        <small><i className="icon-placeholder" />{'item.property_adress'}</small>
                                    </div>
                                </td>
                                <td className='text-center'>{''}</td>
                                <td><Link to={`/editar/${'item.id'}`}>Editar</Link></td>
                                <td className='text-center'><Link to="#"><i className="fa-solid fa-trash-can" /></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}