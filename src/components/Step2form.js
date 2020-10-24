import React from 'react';
import ReactFileReader from 'react-file-reader';
import { readString } from 'react-papaparse';

const Step2form = (props) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
    }

    var csvData = {};
    var papadata = [];
    
    
    const handleFiles = files => {
        var reader = new FileReader();
        reader.onload = () =>{
            csvData = reader.result;   
            papadata = readString(reader.result);
            saveColumns();
        }
        reader.readAsText(files[0]);
    }

    const saveColumns = () =>{        
        var KP = [];        
        var X = [];
        var Y = [];
        var Z = [];
        
        for(let i = 1; i <papadata.data.length; i++){
            KP.push(papadata.data[i][0]);
            X.push(papadata.data[i][1]);
            Y.push(papadata.data[i][2]);
            Z.push(papadata.data[i][3]);
        }

        var KP_num = KP.map((i) => Number(i));
        var X_num = X.map((i) => Number(i));
        var Y_num = Y.map((i) => Number(i));
        var Z_num = Z.map((i) => Number(i));
        
        findMaxMin(KP, X, Y, Z);
        props.savecol(KP_num, X_num, Y_num, Z_num, papadata.data);
    }

    const findMaxMin = (kp, x, y , z) => {
        var KP_num = kp.map((i) => Number(i));
        var X_num = x.map((i) => Number(i));
        var Y_num = y.map((i) => Number(i));
        var Z_num = z.map((i) => Number(i));
        
        const max_kp = Math.max(...KP_num);
        const max_x = Math.max(...X_num);
        const min_x = Math.min(...X_num);
        const max_y = Math.max(...Y_num);
        const min_y = Math.min(...Y_num);
        const max_z = Math.max(...Z_num);
        const min_z = Math.min(...Z_num);

        document.getElementById("max_x").value = max_x; 
        document.getElementById("min_x").value = min_x; 
        document.getElementById("max_y").value = max_y; 
        document.getElementById("min_y").value = min_y; 
        document.getElementById("max_z").value = max_z; 
        document.getElementById("min_z").value = min_z; 
    }

    const changepage = () =>{
        var step = "result";
        props.pageHandler(step, props.data, csvData);
    }


    return (
        <div className="container">
            <h1>Please Upload the CSV</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>Name: {props.data.name}</p>
                        <p>Description: {props.data.desc}</p>
                        <p>Client: {props.data.client}</p>
                        <p>Contractor: {props.data.contractor}</p>
                        
                    </div>
                    <div className="col-sm-6">
                        <form onSubmit={handleSubmit}>
                            {/* <div class="form-group">
                                <label for="csv">Upload CSV</label>
                                <input type="file" class="form-control-file" id="csv" name="csv" />
                            </div> */}

                            <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
                                <button className='btn btn-danger'>Upload</button>
                            </ReactFileReader>

                            <div className="form-group">
                                <label for="max_x">Max X</label>
                                <input type="text" className="form-control" id="max_x" name="max_x"/>                    
                            </div>

                            <div className="form-group">
                                <label for="min_x">Min X</label>
                                <input type="text" className="form-control" id="min_x" name="min_x"/>                    
                            </div>

                            <div className="form-group">
                                <label for="max_y">Max Y</label>
                                <input type="text" className="form-control" id="max_y" name="max_y"/>                    
                            </div>

                            <div className="form-group">
                                <label for="min_y">Min Y</label>
                                <input type="text" className="form-control" id="min_y" name="min_y"/>                    
                            </div>

                            <div className="form-group">
                                <label for="max_z">Max Z</label>
                                <input type="text" className="form-control" id="max_z" name="max_z"/>                    
                            </div>

                            <div className="form-group">
                                <label for="min_z">Min z</label>
                                <input type="text" className="form-control" id="min_z" name="min_z"/>                    
                            </div>

                            {/* <button onClick={changepage}>Something</button> */}
                            <button onClick={changepage} className="btn btn-primary">Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Step2form;
