import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import "./UserProfileTab.css";
import { api } from '../../../services/api';
import {useAuth} from '../../../hooks/useAuth'
export default function UserProfileTab(props) {
	// const user = props.user;
	const [imageSelected, setImageSelected] = useState("");
	const [newImageUrl, setNewImageUrl] = useState("");
	const { user } = useAuth()
	const [nome, setNome] = useState("")
	const [cidade, setCidade] = useState("")
	const [Estado, setEstado] = useState("")
	const [celular, setCelular] = useState("")
	const [email, setEmail] = useState("")
	const [dataNascimento, setDataNascimento] = useState("")
	const [biografia, setBiografia] = useState("")
	const [loading, setLoading] = useState(false)
	const [profile_picture, setProfile_picture] = useState(false)
	useEffect(() => {
		api.get(`/users/${user.id}`).then((response) => {
			const data = response.data
			console.log(data[0])
			setNome(data[0].name)
			setCidade(data[0].city)
			setEstado(data[0].state)
			setCelular(data[0].telephone)
			setEmail(data[0].email)
			setDataNascimento(data[0].birth_date)
			setBiografia(data[0].biography)
			setProfile_picture(data[0].profile_picture)
			setLoading(true)
		})
	}, [])
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
		loading && <div className="tab-pane fade" id="ltn_tab_1_2">

		<div className="ltn__myaccount-tab-content-inner">
			<form className='d-flex flex-column gap-1 w-100'>

				<div className="author-info d-flex justify-content-center flex-column">
					<img src={profile_picture || "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"} alt="Imagem de perfil do usuário" />
					<div>
						<input
							type="file"
							className="app_uploadInput"
							onChange={(e) => { setImageSelected(e.target.files[0]) }}
						/>
					</div>
				</div>
				<label>
					Nome <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} />
				</label>
						<label htmlFor="city">
							Cidade
							<input type="text" onChange={(e) => setCidade(e.target.value)} value={cidade} />
						</label>
						<label htmlFor="city">
							Estado
							<input type="text" onChange={(e) => setEstado(e.target.value)} value={Estado} />
						</label>
						
					<label htmlFor="telephone">
						Celular
						<div className="footer-address-info">
							<input type="text" value={celular} onChange={(e) => setEstado(e.target.value)}/>
						</div>
					</label>
					<label htmlFor="email">
						Email
						<div className="footer-address-info">
							<input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
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
				<textarea placeholder='biografia'></textarea>
				<button className="btn theme-btn-1 btn-effect-1 text-uppercase">Salvar</button>
			</form>
		</div>
	</div >
	)
}