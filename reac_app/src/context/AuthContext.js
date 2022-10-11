import React ,{useState, useEffect, createContext} from "react";
import {setToken} from "../api/token";
import {useUser} from "../hooks"

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null
}) ;


export function AuthProvaider(props){
    const { children } = props;
    const [auth, setAuth] = useState(undefined);
    const {getME} = useUser();

    const login = async (token) => {
        setToken(token)
        //console.log('Context login ------>', token);
        const me =await getME(token);
        setAuth({token, me});
        console.log(me);
    }

    const valueContext = {
        auth,
        login,
        logout: () => console.log('Cerrando session'),
    }


    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
}