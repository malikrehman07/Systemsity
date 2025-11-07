import React from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.scss'
import Routes from './pages/Routes.jsx';
import { ConfigProvider } from 'antd';
function App() {

  return (
    <ConfigProvider theme={{
      token: { colorPrimary: '#01cfff', },
    }}>
      <Routes />
    </ConfigProvider>
  )
}

export default App
