import React, { useEffect, useState } from "react";
import { useUser } from "../../../hooks/useUser";
import Form from 'react-bootstrap/Form'
import './styles.css';

import axios from "axios";

export default function SignDocument() {


    const { UserData } = useUser();
    const [ipValue, setIpValue] = useState('');
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

    return (
        <div id="info-user-container">
            <Form className="form-user">
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
            <button >Aceitar <i className="fa fa-check"></i></button>
        </div>
    )
}