import React, { useRef, useState } from "react"
import { Col, Container, Row } from "reactstrap"
import ReactWizard from "react-bootstrap-wizard";
import Anuncio from "./steps/Anuncio";
import InfoImovel from "./steps/InfoImovel";
import Endereco from "./steps/EnderecoImovel";
import './CadastrarImovel.css'
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/useAuth";
import { useAnuncio } from "../../../hooks/useAnuncio";
import * as yup from 'yup'
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const FirstStep = React.forwardRef((props, ref) => {
  const [randomState, setRandomState] = React.useState(
    "1. This is a random state for first step."
  );
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
    state: {
      randomState,
    },
  }));
  return <Anuncio />;
});

const SecondStep = React.forwardRef((props, ref) => {
  const [randomState, setRandomState] = React.useState(
    "2. This is a random state for second step."
  );
  const isValidated = () => {
    // do some validations
    // decide if you will
    return true;
    // or you will
    // return false;
  };
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    state: {
      randomState,
    },
  }));
  return <InfoImovel />;
});

const ThirdStep = React.forwardRef((props, ref) => {
  const [randomState, setRandomState] = React.useState(
    "3. This is a random state for third step."
  );
  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
    state: {
      randomState,
    },
  }));
  return <Endereco />;
});

const steps = [
  // this step hasn't got a isValidated() function, so it will be considered to be true
  { stepName: "Informações sobre o anuncio", component: FirstStep },
  // this step will be validated to false
  { stepName: "Informação sobre o endereço", component: ThirdStep },
  // this step will never be reachable because of the seconds isValidated() steps function that will always return false
  { stepName: "Informações sobre o imóvel", component: SecondStep },
]
export default function CadastrarImovelForm() {
  const { user } = useAuth()
  const { valuesForm, images, with_furnitureState } = useAnuncio()
  const history = useHistory()
  const finishButtonClick = async () => {
    toast.loading('Fazendo o seu anúncio. Aguarde', {
      toastId:"1"
    })
    try {
      const schema = yup.object({
        ad_title: yup.string().required('O Titulo para o anúncio é obrigatório'),
        ad_description: yup.string().required('A descrição do anúncio para o anúncio é obrigatória'),
        ad_value: yup.string().required('O valor para o anúncio é obrigatório'),
        property_adress: yup.string().required('O Endereço é obrigatório'),
        property_city: yup.string().required('A cidade é obrigatória'),
        property_state:yup.string().required('O Estado é obrigatório'),
        property_neighborhood: yup.string().required('O Bairro é obrigatório'),
        room_quantity:yup.string().required('A quantidade de quartos é obrigatória'),
        bathroom_quantity:yup.string().required('A quantidade de banheiros é obrigatória'),
        garage_quantity:yup.string().required('A quantidade de garagem é obrigatória')
      })
      await schema.validate(valuesForm, {
        abortEarly:false
      })
      const formData = new FormData()
      formData.append('with_furniture', with_furnitureState)
      formData.append('beds_quantity', 0)
      formData.append('user_id', user.id)
      Object.keys(valuesForm).forEach(key => formData.append(key, valuesForm[key]))
        for (let index = 0; index < images.length; index++) {
          const element = images[index];
          formData.append('files', element)
        }
      await api.post('/properties', formData, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }) ;
      history.push('/imoveis')
      toast.dismiss('1')
    } catch (error) {
      if (error instanceof yup.ValidationError) {
				const errorMessages = {};
	
				error.inner.forEach((error) => {
					errorMessages[error.path] = error.message;
				});
				for (const key in errorMessages) {
					if (Object.hasOwnProperty.call(errorMessages, key)) {
						const element = errorMessages[key];
						toast.error(element, {
							hideProgressBar:true
						})
					}
				}
			}
    }
  }

  return (
    <div>
      <ReactWizard
        steps={steps}
        navSteps
        title="Anunciar um imóvel"
        // description="This will help you split a complicated flow or a complicated form in multiple steps."
        headerTextCenter
        validate={false}
        finishButtonClick={finishButtonClick}
        previousButtonText="Voltar"
        nextButtonText="Avançar"
        finishButtonText="Anunciar"
        previousButtonClasses="theme-btn-1"
        nextButtonClasses="theme-btn-1"
        finishButtonClasses="theme-btn-1"
        progressbar={false}
      />
    </div>
  )
}