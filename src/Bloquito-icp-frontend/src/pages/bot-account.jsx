import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { CogIcon, Edit, Wand2 } from "lucide-react";

const addBotLink = "https://discord.com/oauth2/authorize?client_id=1344382924887162950&permissions=8&integration_type=0&scope=bot"

export default function BotAccount() {
    const {user, ready} = useContext(UserContext);
    const [userServers, setUserServers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/user-guilds', {
            withCredentials: true,
          }).then(response => {
            console.log("Those are the user guilds: ", response.data)
            setUserServers([...response.data]);
          })
    }, [])

    useEffect(() => {
        console.log("Those are the user servers: ", userServers)
        console.log("user", user)
    }, [])

    if (ready && !user) {
        console.log("Redirecionando para /");
        return <Navigate to="/" replace />;
    }

    if(user && userServers){
        return (
            <div>
                <div className="border rounded-xl shadow-sm p-8">
                    <h2 className="text-sm mb-8">usuário logado:</h2>
                    <div className="w-full mx-auto flex gap-4">
                        <div className="h-full my-auto items-center">
                            {user?.image ? (
                                <div className="rounded-full">
                                    <img
                                    className="rounded-full w-16"
                                    alt="User name"
                                    src={user?.image} 
                                    />
                                </div>
                            ) : (
                                <div className="mx-auto my-auto items-center">
                                    <span className="loading loading-dots loading-lg"></span>
                                </div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-md font-semibold">{user?.name}</h3>
                            <p className="text-sm">{user?.email}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 px-4">
                    <h2 className="text-md">Meus servers</h2>
                </div>
                <div className="w-full space-y-2 mb-16 border rounded-lg shadow-sm px-6 py-4">
                    <div className="md:flex gap-x-4 mt-4 mb-8">
                        <a href="/dashboard/configbot">
                            <button className='space-x-2 mb-4 md:mb-0 btn'>
                                <span>Configurar bot</span>
                                <CogIcon />
                            </button>
                        </a>
                    </div>
                    <div>
                        {userServers.length > 0 && userServers.map(item => (
                            <div key={item?.icon} className="border-t px-2 py-1 md:flex md:gap-x-4 justify-between items-center">
                                <div className="pt-2 items-center">
                                    <h2 className="text-md text-gray-700">{item.name}</h2>
                                    <span className="text-sm text-gray-500 mt-0">{item.name}</span>
                                </div>
                                <div className="">
                                    <a href={addBotLink} target="_blank"><button className="btn">Adicionar bot ao server</button></a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}