import React from 'react';


import { useAuth } from '../../hooks/useAuth';
import EditUserFormTab from './my-account-components/EditUserForm';
import AdressUserTab from './my-account-components/AdressUserTab';
import UserDashboardSideBar from './my-account-components/DashboardSideBar';
import UserProfileTab from './my-account-components/UserProfileTab';
import ChangePasswordTab from './my-account-components/ChangePasswordTab';
import UserPropertiesTab from './my-account-components/UserPropertiesTab';
import WelcomeDashboardTab from './my-account-components/WelcomeDashboardTab';
import { useUser } from "../../hooks/useUser";

export default function MyAccount() {

	const { user } = useAuth();
	const { UserData } = useUser()
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

											<UserProfileTab user={UserData}/>

											<AdressUserTab />

											<EditUserFormTab />

											<UserPropertiesTab user_id={user.id} token={user.token} />

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