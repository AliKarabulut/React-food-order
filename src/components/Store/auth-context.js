import React from "react";

const AuthContext = React.createContext({

    isLoggedIn:false,
    onLogout: ()=>{}

})

export const AuthcontextProvider = (props) =>{
    return <AuthContext.Provider>{props.children}</AuthContext.Provider>
}



export default AuthContext