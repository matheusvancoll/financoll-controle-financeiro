import React, { createContext, useState } from 'react'

export const UserDataContext = createContext()

export function UserDataProvider(props) {
  const [UserData, setUserData] = useState({
    isLogged: false,
    user: "Matheus Vancoll",
    password: "1234"
  })

  return(
    <UserDataContext.Provider value={[UserData, setUserData]} >
      {props.children}
    </UserDataContext.Provider>
  )
}