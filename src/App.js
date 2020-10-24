import React, { useState } from 'react';

import Step1form from './components/Step1form';
import Step2form from './components/Step2form';
import Step3result from './components/Step3result';



function App() {
  var form= {};
  var csv = {};
  var kp = [];
  var x = [];
  var y = [];
  var z = [];
  var data = [];
  const [pageStat, setPageStat] = useState("step1");
  const [formData, setFormData] = useState(form);
  const [csvData, setCsvData] = useState(csv);

  const [dataKp, setDataKp] = useState(kp);
  const [dataX, setDataX] = useState(x);
  const [dataY, setDataY] = useState(y);
  const [dataZ, setDataZ] = useState(z);
  const [dataTable, setDataTable] = useState()

  const handlePage = (pageStatus, formData, csvData) => {
    setPageStat(pageStatus);
    setFormData(formData);
    setCsvData(csvData);
  }

  const storeCsvColumns = (kp_data, x_data, y_data, z_data, data,) => {
    setDataKp(kp_data);
    setDataX(x_data);
    setDataY(y_data);
    setDataZ(z_data);
    setDataTable(data);
  }
  
  const renderPage = (pagestat) => {
    if (pageStat === "step1"){
      return <Step1form pageHandler={handlePage} />;
    }else if (pageStat === "step2"){
      return <Step2form pageHandler={handlePage} data={formData} savecol={storeCsvColumns} />;
    }else if(pageStat === "result"){
      return <Step3result pageHandler={handlePage} data={formData} csv={csvData} table={dataTable} kp={dataKp} x={dataX} />;
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
