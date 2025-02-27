import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function BotAccount() {
    const {user} = useContext(UserContext);

    if(user){
        return (
            <h1>The user context exists.</h1>
        );
    }

    return (
        <h1>No user context detected.</h1>
    )
}