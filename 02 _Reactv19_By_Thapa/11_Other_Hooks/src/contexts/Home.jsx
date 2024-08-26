import { useContext } from 'react'
import { BioContext } from './Context'

export const Home = () => {
    const {myName, myAge} = useContext(BioContext)
  return (
    <>
    <h1>Hello Home Component, My Name is {myName} and My Age is {myAge}</h1>
    </>
  )
}
