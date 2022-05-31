import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import "./UserProfileTab.css";
import moment from 'moment';
import { api } from '../../../services/api';
import {useAuth} from '../../../hooks/useAuth'
import {toast} from 'react-toastify'
import Flatpickr from "react-flatpickr"
import { Portuguese } from "flatpickr/dist/l10n/pt"
import flatpickr from 'flatpickr'
flatpickr.localize(Portuguese)
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
	const [profile_picture, setProfile_picture] = useState("")
	const [cpf, setCpf] = useState("")
	const [reload, setReload] = useState(false)
	useEffect(() => {
		api.get(`/users/${user.id}`).then((response) => {
			const data = response.data
			console.log(data[0])
			setNome(data[0].name)
			setCidade(data[0].city)
			setEstado(data[0].state)
			setCelular(data[0].telephone)
			setEmail(data[0].email)
			setDataNascimento(data[0].birth_date.split("T0")[0].split("-").reverse().join("/"))
			setBiografia(data[0].biography)
			setProfile_picture(data[0].profile_picture)
			setCpf(data[0].cpf)
			setLoading(true)
		})
	}, [reload])
	// const uploadImage = async (files) => {
	
	// 	setNewImageUrl(response.data.url)
	// }
	// Criar função handleForm e chamar a função uploadImage dentro dela
	// quando enviar os dados do formulario na edição do usuario com uma função handleForm, salvar a variavel newImageUrl no campo profile_picture na tabela de users
async function handleForm () {
	toast.loading("Editando seu perfil", {
		toastId:"edição"
	})
	let response = profile_picture
	if (typeof (imageSelected) === 'object') {
		const formData = new FormData();
		formData.append("file", imageSelected);
		formData.append("upload_preset", 'upload')
		response = await Axios.post("https://api.cloudinary.com/v1_1/dr7alklmf/image/upload", formData);
	}
	await api.put(`/users/${user.id}`, {
		name:nome,
		city:cidade,
		state:Estado,
		email:email,
		birth_date:typeof (dataNascimento) === "string" ? dataNascimento : moment(dataNascimento[0]).format(),
		biography:biografia,
		profile_picture:response !== profile_picture ? response.data.secure_url : profile_picture,
		cpf:cpf,
		telephone:celular
	}).then((response) => {
		setReload(!reload)
		toast.success("Perfil editado com sucesso")
		toast.dismiss("edição")
	})
}

	return (
		loading && <div className="tab-pane fade" id="ltn_tab_1_2">

		<div className="ltn__myaccount-tab-content-inner">
			<form onSubmit={(e) => e.preventDefault()} className='d-flex flex-column gap-1 w-100'>

				<div className="author-info d-flex justify-content-center flex-column">
					<img src={profile_picture}/>
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
						<Flatpickr
									options={{
										dateFormat: "d/m/Y",
									}}
									value={dataNascimento}
									onChange={(date) => setDataNascimento(date)}
									placeholder="Escolha o dia" />
					</label>
					<label htmlFor="cpf">
						CPF
						<input type='text' value={cpf} onChange={(e) => setCpf(e.target.value)} />
					</label>
				<textarea placeholder='biografia'></textarea>
				<button type='button' onClick={handleForm} className="btn theme-btn-1 btn-effect-1 text-uppercase">Salvar</button>
			</form>
		</div>
	</div >
	)
}