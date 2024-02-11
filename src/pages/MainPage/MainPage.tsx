import Catalog from './Catalog';
import FAQ from './FAQ';
import Footer from './Footer';
import HeaderComponent from './HeaderComponent';
import InformationBlock from './InformationBlock';
import './MainPage.css';
import SelectionBlock from './SelectionBlock';
import Team from './Team';

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
