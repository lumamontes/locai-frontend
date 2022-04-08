import React from 'react'
import { createContext, useState, useEffect } from "react";
import { api } from '../services/api';

export const UserContext = createContext({})

export function UserProvider(props) {
    const [UserData, setUserData] = useState({})
    const [loadingUserData, setLoadingUserData] = useState(false)
    const item = window.localStorage.getItem('user')
    const user = item != null ? (JSON.parse(item)) : null;
    useEffect( async ()  => {
        try {
            const response = await api.get(`/users/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
            if(response.data){
                setUserData(response.data[0]);
                setLoadingUserData(true)
            }
        } catch (err) {
            console.log(err)
        }
    }, []);

    return (
        <UserContext.Provider value={{ UserData, loadingUserData }}>
            {props.children}
        </UserContext.Provider>
    )

}
