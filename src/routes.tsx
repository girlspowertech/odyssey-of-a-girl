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
    path: '/*',
    element: <div> 404 </div>
  }
] as RouteObject[];
