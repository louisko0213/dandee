import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import theme from './theme';
import './styles/custom.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Customer from './pages/Customer';
import Work from './pages/Work';
import Account from './pages/Account';
import Service from './pages/Service';
import Turnover from './pages/Turnover';
import Consumption from './pages/Consumption';
import AddCustomer from './pages/AddCustomer';

function App() {
  return (<>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Customer />} />
            <Route path="/addCustomer" element={<AddCustomer />} />
            <Route path="/work" element={<Work />} />
            <Route path="/consumption" element={<Consumption />} />
            <Route path="/service" element={<Service />} />
            <Route path="/turnover" element={<Turnover />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </>);
}

export default App;
