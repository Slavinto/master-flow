"use client";

import { ReactNode, createContext, useContext } from "react";

export const DbAuthContext = createContext({});

export const useDbAuthContext = () => useContext(DbAuthContext);

const DbAuthContextProvider = ({
    children,
    dbUser,
}: {
    children: ReactNode;
    dbUser: any;
}) => {
    return (
        <DbAuthContext.Provider value={dbUser}>
            {children}
        </DbAuthContext.Provider>
    );
};

export default DbAuthContextProvider;
