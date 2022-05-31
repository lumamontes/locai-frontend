import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../../hooks/useAuth';
import { api } from '../../../services/api';

export default function ChangePasswordTab(props) {
    const {user} = useAuth()
    const [newPassword, setNewPassword] = useState("")
    const [confirmed, setConfirmed] = useState("")
    const [error, setError] = useState(false)
    const onBlurValidation = () => {
        if (newPassword !== confirmed) {
            setError(true)
        } else {
            setError(false)
        }
    }

    function handleChangePassword () {
        if (newPassword.length === 0 && newPassword.length === 0) {
            toast.error("Você precisa preencher esse campo")
        } else {
            toast.loading("Alterando senha", {
                toastId:"password"
            })
            api.put(`/users/password/${user.id}`, {
                newPassword:newPassword,
                passwordConfirmed:confirmed
            }).then((response) => {
            toast.dismiss("password")
            toast.success("Senha alterada com sucesso")
            })
        }
    }

    return (
        <div className="tab-pane fade" id="ltn_tab_1_9">
        <div className="ltn__myaccount-tab-content-inner">
            <div className="account-login-inner">
                <form onSubmit={(e) => e.preventDefault()} action="#" className="ltn__form-box contact-form-box">
                    <h5 className="mb-30">Mudar a senha</h5>
                    <input type="password" name="password" onChange={(e) => setNewPassword(e.target.value)} placeholder="Nova senha*" />
                    <input type="password" name="password" onKeyUp={onBlurValidation} onChange={(e) => setConfirmed(e.target.value)} placeholder="Confirme a senha*" />
                    {error && <small>As senhas devem ser iguais</small>}
                    <div className="btn-wrapper mt-0">
                        <button onClick={handleChangePassword} disabled={error} className="theme-btn-1 btn btn-block" type="submit">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}