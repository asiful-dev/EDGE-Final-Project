import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import Gifs from './components/Gifs/Gifs.jsx'
import JokeCategories from './components/JokeCategories/JokeCategories.jsx'
import JokeCard from './components/JokeCard/JokeCard.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/favourites',
    element:<h2>Favourites</h2>
  },
  {
    path:'/randomjoke',
    element:<JokeCard/>
  },
  {
    path:'/categories',
    element:<JokeCategories/>
  },
  
  {
    path:'/gifs',
    element:<Gifs/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
