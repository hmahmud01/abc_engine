import React from 'react';
import { Line } from 'react-chartjs-2';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Step3result = (props) => {
    console.log("type", typeof(props.csv));
    const changepage = () =>{
        var step = "step1";
        var form= {}
        var csv = {}
        props.pageHandler(step, form, csv);        
    }

    const printPage = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            });
    }

    const generateTable = () => {
        var table = document.createElement('table');
        var tableBody = document.createElement('tbody');

        var tabledata = props.table;
        tabledata.forEach(function(rowdata){
            var row = document.createElement('tr');

            rowdata.forEach(function(cellData){
                var cell = document.createElement('td');
                cell.appendChild(document.createTextNode(cellData));
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
        table.appendChild(tableBody);        
        document.body.appendChild(table);
        
    }
    console.log("kp", props.kp);
    const data = {
        labels: props.kp,
        datasets: [
          {
            label: 'X',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: props.x
          }
        ]
      };


    return (
        <div className="container" >
            <h1>Result</h1>
            <button onClick={changepage} className="btn btn-primary">Restart App</button>
            <button onClick={printPage} className="btn btn-warning">Print Page</button>
            <div className="row" id="divToPrint">
                <div className="col-md-3">
                    <h3>Basic Information</h3>
                    <p>Name: {props.data.name}</p>
                    <p>Description: {props.data.desc}</p>
                    <p>Client: {props.data.client}</p>
                    <p>Contractor: {props.data.contractor}</p>
                </div>
                <div className="col-md-9">
                    <Line data={data} />
                    <div id="tablespace">
                        {generateTable()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step3result;