import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/useAuth';
import * as yup from 'yup'
import { toast } from 'react-toastify';
export default function Register() {
	const history = useHistory();
	const { handleLogin, user } = useAuth()
	const [erroNome, setErroNome] = useState(false)
	const [valuesForm, setValuesForm] = useState({
		name: "",
		email: "",
		telephone: "",
		city: "",
		state: "",
		cpf:"",
		password: "",
		passwordConfirmation: ""
	})
	function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;   
    //strCPF  = RetiraCaracteresInvalidos(strCPF,11);
    if (strCPF == "00000000000")
	return false;
    for (let i =1; i<=9; i++)
	Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) )
	return false;
	Soma = 0;
    for (let i = 1; i <= 10; i++)
       Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
    if ((Resto == 10) || (Resto == 11)) 
	Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) )
        return false;
    return true;
}
	async function handleRegister() {
		try {
			const schema = yup.object({
				name: yup.string().required('O campo nome é obrigatório e não pode está em branco').min(5, 'Seu nome deve ter no mínimo 5 caracteres'),
				email: yup.string().email("O email não é válido").required("O campo email é obrigatório e não pode está em branco"),
				cpf:yup.number().required("O campo CPF é obrigatório e não pode está em branco"),
				password: yup.string().required('O campo senha é obrigatório e não pode está em branco').min(8, 'Sua senha deve ter no mínimo 8 caracteres'),
				passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
			})
			await schema.validate(valuesForm, {
				abortEarly: false
			})
			if (!TestaCPF(valuesForm.cpf)) {
				return toast.error("CPF inválido")
			}

			const response = await api.post("/users", {
				...valuesForm
				// birth_date: moment(date).format('YYYY-MM-DD')
			});
			if (response.status !== 500) {
				if (response.data.error) {
					if (response.data.code === 'user.email_already_exists') {
						toast(response.data.message, {
							hideProgressBar: true
						})
					}
				} else {

					const responseLogin = await api.post('/login', {
						email: response.data.email,
						password: response.data.password
					});
					await handleLogin(responseLogin.data);
					history.push('my-account')
				}

			}
		} catch (error) {
			if (error instanceof yup.ValidationError) {
				const errorMessages = {};

				error.inner.forEach((error) => {
					errorMessages[error.path] = error.message;
				});
				for (const key in errorMessages) {
					if (Object.hasOwnProperty.call(errorMessages, key)) {
						const element = errorMessages[key];
						toast(element, {
							hideProgressBar: true
						})
					}
				}
			}
		}

	}
	const handleChange = (e) => {
		const { name, value } = e.target
		setValuesForm({
			...valuesForm,
			[name]: value,
		})
	}

const onBlurInputs = () => {
	const regexForNumbers  = /[0-9]/
	if (regexForNumbers.test(valuesForm.name)) {
			setErroNome(true)
			const nomeInput = document.getElementsByName("name")
			nomeInput[0].focus()
	} else {
		setErroNome(false)
	}
}
	return (
		<div className="ltn__login-area pb-50">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title-area text-center">
							<h1 className="section-title">Cadastre <br />Sua Conta</h1>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 offset-lg-3">
						<div className="account-login-inner">
							<form onSubmit={(e) => e.preventDefault()} className="ltn__form-box contact-form-box">
								<input type="text" onBlur={onBlurInputs} name="name" placeholder="Nome" value={valuesForm.name} onChange={handleChange} autoComplete='username'/>
								{erroNome && <small>O nome deve ter apenas letras</small>}
								<input type="text" name="email" placeholder="Email*" value={valuesForm.email} onChange={handleChange} autoComplete='email' />
								<input type="text" min="0" maxLength={11} name="cpf" placeholder="CPF* (Somente números)" value={valuesForm.cpf} onChange={handleChange} autoComplete='cpf' />
								<input type="password" name="password" placeholder="Senha*" value={valuesForm.password} onChange={handleChange} autoComplete='new-password' />
								<input type="password" name="passwordConfirmation" placeholder="Confirme Senha*" value={valuesForm.passwordConfirmation} onChange={handleChange} autoComplete='new-password' />
								<div className="btn-wrapper">
									<button className="theme-btn-1 btn reverse-color btn-block" onClick={handleRegister}>CRIAR CONTA</button>
								</div>
								<div className="go-to-btn mt-50 go-top">
									<Link to="/login">Você ja tem uma conta?</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}