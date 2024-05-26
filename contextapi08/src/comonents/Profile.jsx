import React from "react";
import UserContext from "../context/context";
export default  function Profile() {
    const {user} = React.useContext(UserContext);
    if (!user) return <div> please login</div>
    return <div> welcome {user.username}</div>
}