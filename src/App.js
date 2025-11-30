import React from 'react'
import { RoutePages } from './RoutePages'
import Increment from './components/Increment'
import { Header } from './components/Layout.js/Header'
import { Footer } from './components/Layout.js/Footer'


export const App = () => {
  return (
    <div>
      <Header />
       <RoutePages />
       <Increment />
       <Footer/>
    </div>
  )
}
