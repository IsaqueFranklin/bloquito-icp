import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/user-session', {
        withCredentials: true,
      }).then(response => {
        console.log("This is the req response: ", response.data.user);
        setUser(response.data.user);
    })
  }, []);

  // Para debugar, use outro useEffect para observar as mudanças no user
  useEffect(() => {
    console.log("User state atualizado:", user);
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}