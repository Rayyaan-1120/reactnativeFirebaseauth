import { StyleSheet, Text, View } from 'react-native'
import React,{createContext,useState} from 'react'

export const User = React.createContext()

const UserContext = ({children}) => {

    const [user,setuser] = useState(null)

  return (
    <User.Provider value={{user,setuser}}>
      {children}
    </User.Provider>
  )
}

export default UserContext
