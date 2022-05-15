import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useAuth } from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/api';
import EditUserFormTab from './my-account-components/EditUserForm';
import AdressUserTab from './my-account-components/AdressUserTab';
import UserDashboardSideBar from './my-account-components/DashboardSideBar';
import UserProfileTab from './my-account-components/UserProfileTab';
import ChangePasswordTab from './my-account-components/ChangePasswordTab';
import UserPropertiesTab from './my-account-components/UserPropertiesTab';
import WelcomeDashboardTab from './my-account-components/WelcomeDashboardTab';
import moment from 'moment';

export default function MyAccount() {

	const { user } = useAuth()
	// async function fetchData() {
	// 	if (user !== null) {
	// 		try {
	// 			const response = await api.get(`/users/${user.id}`, {
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`
	// 				}
	// 			})
	// 			setFullUser(response.data);
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}
	// }
	// async function fetchProperties() {
	// 	if (user !== null) {
	// 		try {
	// 			const response = await api.get(`/properties_user/${user.id}`, {
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`
	// 				}
	// 			})
	// 			setProperties(response.data)
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	}
	// }
	// useEffect(() => {
	// 	fetchData()
	// 	fetchProperties()
	// }, [])

	return (

		<div className="liton__wishlist-area pb-70">

			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* PRODUCT TAB AREA START */}
						<div className="ltn__product-tab-area">
							<div className="container">
								<div className="row">
									<UserDashboardSideBar />
									<div className="col-lg-8">
										<div className="tab-content">
											<WelcomeDashboardTab user={user}/>

											<UserProfileTab />

											<AdressUserTab />

											<EditUserFormTab />

											<UserPropertiesTab />

											<ChangePasswordTab />

										</div>
									</div>
								</div>
							</div>
						</div>
						{/* PRODUCT TAB AREA END */}
					</div>
				</div>
			</div>
		</div>
	)
} 