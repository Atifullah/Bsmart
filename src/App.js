
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './routes/home/home.component';
import Navigation from './components/Navigation/Navigation.component';
import Authentication from './components/SignIn/Authentication.component';
import Shop from './routes/Shop/shop.component';
import Checkout from './routes/CheckOut/checkout.component';
import { checkUserSession } from './components/Store/user/user.action';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch (checkUserSession());
   
  }, []);
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