import { NavMenu } from '@/modules/core/components/molecules/NavMenu';
import MainFooter from '@/modules/core/components/molecules/MainFooter';
import BeforeFooter from './modules/core/components/molecules/BeforeFooter';
import AppRoutes from './routes.js';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div>
       <Helmet>
        <title>Alpha</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
 
      <NavMenu />
      <AppRoutes />
      <BeforeFooter />
      <MainFooter />
    </div>
  );
}

export default App;
