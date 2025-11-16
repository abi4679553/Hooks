import React from 'react'
import { Route , Routes} from 'react-router-dom'
import { HomeScreen } from './components/publicpages/HomeScreen'
import { AboutScreen } from './components/publicpages/AboutScreen'

export const RoutePages = () => {
  return (
    <div>
        <Routes>
            <Route path='/' Component={HomeScreen}/>
            <Route path='/about' Component={AboutScreen}/>
        </Routes>
    </div>
  )
}
