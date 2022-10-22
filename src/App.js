import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Item from './Pages/Item';
import { Routes, Route, Link } from "react-router-dom";
import { BackTop, Divider } from 'antd';
import Footer from './Containers/Footer';
import New from './Containers/New';
import Buttom from './Components/Button';
import {
    UpOutlined,
} from '@ant-design/icons';
import DrawerMap from './Containers/DrawerMap';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClick = (e) => {
    setOpen(!open);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item" element={<Item/>} />
      </Routes>
      <New
        title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        action={'Become a host'}
        background={require('./Assets/images/carousel (2).jpeg')}
      />
      <Divider />
      <Footer/>
      <BackTop>
        <div className='backtop'>
          <UpOutlined />
        </div>
      </BackTop>
      <div className='buttom-map'>
        <DrawerMap open={open} onCancel={handleClick}>
          <Buttom primary onClick={handleClick}>
            Mapa
          </Buttom>
        </DrawerMap>
      </div>
    </div>
  );
}

export default App;