import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/user-session', {
        withCredentials: true,
      }).then(response => {
        if(response.data.user){
          console.log("this is the user data: ", response.data.user)
          setUser(response.data.user);
        } else {
          console.log("this is the user data: ")
          setUser(null);
        }
        
        setReady(true)
    })
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}