import { RouteObject } from 'react-router-dom';
import Home from '@/pages/home';
import Game from '@/pages/game';


export default [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/game',
    element: <Game />,
  },
  {
    path: '/about',
    element:
    <div className='flex mt-32 items-center justify-center text-[150px] text-green50'> TODO </div>
  },
  {
    path: '/*',
    element: <div className='flex mt-32 items-center justify-center text-[150px] text-green50'> 404 </div>
  }
] as RouteObject[];
