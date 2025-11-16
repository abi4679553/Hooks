import React from 'react'
import { RoutePages } from './RoutePages'
import { Header } from './components/Layout.js/Header'
import { Footer } from './components/Layout.js/Footer'


export const App = () => {
  return (
    <div>
      <Header />
       <RoutePages />
       <Footer/>
    </div>
  )
}
