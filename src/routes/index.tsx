import { createBrowserRouter } from 'react-router-dom';
import AllProducts from '../pages/AllProducts/AllProducts';
import ProductPage from '../pages/AllProducts/ProductPage';
import Catalog from '../pages/MainPage/catalog/Catalog';
import FAQ from '../pages/MainPage/faq/FAQ';
import InformationBlock from '../pages/MainPage/informationBlock/InformationBlock';
import MainPage from '../pages/MainPage/MainPage';
import SelectionBlock from '../pages/MainPage/selection/SelectionBlock';
import Team from '../pages/MainPage/team/Team';

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
