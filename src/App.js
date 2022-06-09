import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './components/Navigation/Navigation.component';
import Authentication from './components/SignIn/Authentication.component';
import Shop from './routes/Shop/shop.component';
import Checkout from './routes/CheckOut/checkout.component';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;