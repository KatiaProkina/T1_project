import { createBrowserRouter } from 'react-router-dom';
import AllProducts from '../pages/AllProducts/AllProducts';
import ProductPage from '../pages/AllProducts/ProductPage';
import Catalog from '../pages/MainPage/Catalog';
import FAQ from '../pages/MainPage/FAQ';
import InformationBlock from '../pages/MainPage/InformationBlock';
import MainPage from '../pages/MainPage/MainPage';
import SelectionBlock from '../pages/MainPage/SelectionBlock';
import Team from '../pages/MainPage/Team';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/about',
        element: <InformationBlock />,
      },
      {
        path: '/selection',
        element: <SelectionBlock />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/allproducts',
        element: <AllProducts />,
      },
      {
        path: '/products/:id',
        element: <ProductPage />,
      },
    ],
  },
]);
