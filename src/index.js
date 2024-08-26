import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Body from './components/Body';
import { Provider } from "react-redux";
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Loader from './components/Loader';
import SettingCustomer from './pages/Content/Customer Review/SettingCustomer';
import InfomationSetingDns from './pages/Content/Information/InfomationSetingDns';
import Infomation from './pages/Content/Information/Infomation';
import Map from './pages/Content/Map/Map';
const ContactInfo = React.lazy(() => import("./pages/Content/Contact/ContactInfo"))
const LoginBanner = React.lazy(() => import("./pages/Login/LoginBanner"));
const LoginIdWeb = React.lazy(() => import("./pages/Login/LoginIdWeb"));
const Home = React.lazy(() => import("./pages/Content/HomeContent/Home"));
const Homebody = React.lazy(() => import("./pages/Content/BodyHome/Homebody"));
const Product = React.lazy(() => import("./pages/Content/Product/Product"));
const OrderManagement = React.lazy(() => import("./pages/Content/OrderManager/OrderManagement"));
const ContactAdmin = React.lazy(() => import("./pages/Content/Contact/ContactAdmin"));
const CustomerReviews = React.lazy(() => import("./pages/Content/Customer Review/CustomerReviews"));
const Member = React.lazy(() => import("./pages/Content/Member/Member"));
const ProductDetails = React.lazy(() => import("./pages/Content/Product/ProductDetails"));
const InfomationBase = React.lazy(() => import("./pages/Content/Information/InfomationBase"));
const InfomationApp = React.lazy(() => import("./pages/Content/Information/InfomationApp"));
const InfomationFooter = React.lazy(() => import("./pages/Content/Information/InfomationFooter"));
const SettingSeo = React.lazy(() => import("./pages/Content/SEOOptimization/SettingSeo"));
const SetingAllMeta = React.lazy(() => import("./pages/Content/SEOOptimization/SetingAllMeta"));
export const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<LoginBanner />} />
          <Route path='/idweb' element={<LoginIdWeb />} />
          <Route path="*" element={<Navigate to={"/home"} />}></Route>
          <Route path='/home' element={<Body />}>
            <Route path='' element={<Home />}>
              <Route path='' element={<Homebody />} />
              <Route path='/home/information' element={<InfomationBase />} />
              <Route path='/home/informationapp' element={<InfomationApp />} />
              <Route path='/home/information-settingdomain' element={<InfomationSetingDns />} />
              <Route path='/home/information-footer' element={<InfomationFooter />} />
              <Route path='/home/information-lan' element={<Infomation />} />
              <Route path='/home/settingseo' element={<SettingSeo />} />
              <Route path='/home/settingseo-meta' element={<SetingAllMeta />} />
              <Route path='/home/product' element={<Product />} />
              <Route path='/home/product-details' >
                <Route path=':id' element={<ProductDetails />} />
              </Route>
              <Route path='/home/order-management' element={<OrderManagement />} />
              <Route path='/home/contact-management' element={<ContactAdmin />} />
              <Route path='/home/contact-info' element={<ContactInfo />} />
              <Route path='/home/customer-review' element={<CustomerReviews />} />
              <Route path='/home/setting-customer' element={<SettingCustomer />} />
              <Route path='/home/member' element={<Member />} />
              <Route path='/home/maps' element={<Map />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

    </HistoryRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
