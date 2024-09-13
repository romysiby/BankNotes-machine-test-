import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'
import React, { useState } from 'react'
import { useFetchData } from './hooks/useFetchData'

export const Context = React.createContext({})

function App() {
  const { data, isError, isLoading } = useFetchData('https://fakestoreapi.com/products')
  const [category, setCategory] = useState('')
  const [ratings, setRatings] = useState([])
  const [cartData, setCartData] = useState({
    count: 0,
    amount: 0
  })
  
  return (
    <>
      <Context.Provider value={{data, isError, isLoading, category, setCategory, ratings, setRatings, cartData, setCartData}}>
        <Header />
        <Body />
        <Footer />
      </Context.Provider>
    </>
  )
}

export default App
