import Catalog from './catalog/Catalog';
import FAQ from './faq/FAQ';
import Footer from './footer/Footer';
import HeaderComponent from './header/HeaderComponent';
import InformationBlock from './informationBlock/InformationBlock';
import './MainPage.css';
import SelectionBlock from './selection/SelectionBlock';
import Team from './team/Team';

const MainPage = () => {
  return (
    <div className="main">
      <HeaderComponent />
      <Catalog />
      <InformationBlock />
      <SelectionBlock />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
};

export default MainPage;
