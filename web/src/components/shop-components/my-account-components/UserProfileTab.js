import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import "./UserProfileTab.css";
import { api } from '../../../services/api';

export default function UserProfileTab(props) {
	const user = props.user;
	const [imageSelected, setImageSelected] = useState("");
	const [newImageUrl, setNewImageUrl] = useState("");

	const uploadImage = async (files) => {
		const formData = new FormData();
		formData.append("file", imageSelected);
		formData.append("upload_preset", 'upload')
		const response = await Axios.post("https://api.cloudinary.com/v1_1/dr7alklmf/image/upload", formData);
		setNewImageUrl(response.data.url)
	}
	// Criar função handleForm e chamar a função uploadImage dentro dela
	// quando enviar os dados do formulario na edição do usuario com uma função handleForm, salvar a variavel newImageUrl no campo profile_picture na tabela de users

	return (
		<div className="tab-pane fade" id="ltn_tab_1_2">

			<div className="ltn__myaccount-tab-content-inner">
				<form className='d-flex flex-column gap-1 w-100'>

					<div className="author-info d-flex justify-content-center flex-column">
						<img src={user.profile_picture || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"} alt="Imagem de perfil do usuário" />
						<div>
							<input
								type="file"
								className="app_uploadInput"
								onChange={(e) => { setImageSelected(e.target.files[0]) }}
							/>
						</div>
					</div>
					<label>
						Nome <input type="text" value={user?.name} />
					</label>
							<label htmlFor="city">
								Cidade
								<input type="text" value={user?.city} />
							</label>
							<label htmlFor="city">
								Estado
								<input type="text" value={user?.state} />
							</label>
							<label htmlFor="city">
								País
								<input type="text" value={user?.country || 'Brasil'} disabled />
							</label>
						<label htmlFor="telephone">
							Celular
							<div className="footer-address-info">
								<input type="text" value={user?.telephone} />
							</div>
						</label>
						<label htmlFor="email">
							Email
							<div className="footer-address-info">
								<input type="text" value={user?.email} />
							</div>
						</label>

						<label htmlFor="birth-date">
							Data de Nascimento
							<input type='date' />
						</label>
						<label htmlFor="cpf">
							CPF
							<input type='text' />
						</label>
						<label htmlFor="profession">
							Profissão
							<input type='text' />
						</label>
					<textarea placeholder='biografia'></textarea>
					<button className="btn theme-btn-1 btn-effect-1 text-uppercase">Salvar</button>
				</form>
			</div>
		</div >
	)
}