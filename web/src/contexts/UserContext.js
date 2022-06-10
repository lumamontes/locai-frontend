import React from 'react'
import { createContext, useState, useEffect } from "react";
import { api } from '../services/api';

export const UserContext = createContext({})

export function UserProvider(props) {
    const [UserData, setUserData] = useState([])
    const [loadingUserData, setLoadingUserData] = useState(false)
    const item = window.localStorage.getItem('user')
    const user = item != null ? (JSON.parse(item)) : null;
    useEffect(() => {
        if (user != null) {
            console.log("a")
            async function getUser() {
                const response = await api.get(`/users/${user.id}`, {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                })
                if (response.data) {
                    setUserData(response.data[0]);
                    setLoadingUserData(true)
                }
            }
            try {
                getUser();
            } catch (error) {
                console.log(error);
            }
        }

    }, []);
    function handleUserData(value) {
        setUserData(value)
    }
    return (
        <UserContext.Provider value={{ UserData, loadingUserData, handleUserData }}>
            {props.children}
        </UserContext.Provider>
    )

}
