import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks/useUser";
import Form from 'react-bootstrap/Form'
import './styles.css';

import axios from "axios";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

export default function SignDocument(props) {
    const { UserData } = useUser();
    const [ipValue, setIpValue] = useState('');
    const history = useHistory()
    useEffect(() => {
        const findIp = async () => {
            const response = await axios.get('https://api.ipify.org?format=json')
            setIpValue(response.data)
        }
        try {
            findIp()
        } catch (error) {
            console.log(error)
        }
    }, [])
async function handlesigned() {
    toast.loading("Assinando o contrato")
    try {
        await api.patch(`/bookings/${props.id}`, {
            signature_ip:ipValue.ip,
            signature_name: UserData.name,
            signature_cpf:UserData.national_register,
            signature_email:UserData.email,
            status_id:"4e64b2af-b649-4cd3-9c5c-b37b5839074f"
        })
        toast.success("Contrato assinado com sucesso")
        history.push("/my-account")
    } catch (error) {
        toast.error("OPS! Algo deu errado com a assinatura")
    }
}
    return (
        <div id="info-user-container">
            <Form onSubmit={e => e.preventDefault()} className="form-user">
                <Form.Label className="label">
                    Nome
                    <Form.Control size="sm" type="text" placeholder={UserData.name} readOnly />
                </Form.Label>
                <Form.Label className="label">
                    Email
                    <Form.Control type="text" placeholder={UserData.email} readOnly />
                </Form.Label>
                <Form.Label className="label">
                    CPF
                    <Form.Control type="text" placeholder={UserData.national_register} readOnly />
                </Form.Label>
                <Form.Label className="label">
                    Endereço IP
                    <Form.Control type="text" placeholder={ipValue.ip} readOnly />
                </Form.Label>
            </Form>
            <button type="button" onClick={handlesigned} className="ltn__secondary-bg text-white rounded pt-10 pb-10">Aceitar <i className="fa fa-check"></i></button>
        </div>
    )
}