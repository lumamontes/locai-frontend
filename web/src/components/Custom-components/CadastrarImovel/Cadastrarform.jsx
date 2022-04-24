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
  const { valuesForm, images } = useAnuncio()
  const finishButtonClick = async () => {
    const formData = new FormData()
    formData.append('user_id', user.id)
    Object.keys(valuesForm).forEach(key => formData.append(key, valuesForm[key]))
    for (let index = 0; index < images.length; index++) {
      const element = images[index];

      formData.append('files', element)
    }
    await api.post('/properties', formData).then((response) => {
      console.log(response.data)
    })

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