import { createContext } from 'react';

const UserContext=createContext();

export function UserProvider({children}){
    const [loading, error, user] = useUser();
    return(
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    );
}