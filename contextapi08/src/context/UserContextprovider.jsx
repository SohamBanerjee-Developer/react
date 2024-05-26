import React from "react";
import UserContext from "./context";
const UserContextProvider = ({children}) => {
   const [user, setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{ user, setUser }}>//here user and setUser are combined and passed down as an object
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider