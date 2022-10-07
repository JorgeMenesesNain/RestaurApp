import React ,{useState, useEffect, createContext} from "react";

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null
}) ;


export function AuthProvaider(props){
    const { children } = props;

    const valueContext = {
        auth: null,
        login: () => console.log('realizando login'),
        logout: () => console.log('Cerrando session'),
    }


    return (
        <AuthContext.Provider value={valueContext}>
            {children}
        </AuthContext.Provider>
    );
}