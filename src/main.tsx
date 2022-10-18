import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './style/index.less'
import { TableComp } from './components/table/TableComp';
import { ChartComp } from './components/chart/ChartComp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TableComp />}/>
          <Route path="chart" element={<ChartComp />}/>
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>
)
