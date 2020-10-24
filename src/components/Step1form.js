import React from 'react';

const Step1form = (props) => {
    const handleSubmit = (event) =>{
        event.preventDefault();
    }
    const changepage = () =>{
        var name = document.getElementById('proj_name').value;
        var description = document.getElementById('proj_desc').value;
        var client = document.getElementById('client').value;
        var contractor = document.getElementById('contractor').value;

        var data = {
            'name': name,
            'desc': description,
            'client': client,
            'contractor': contractor
        }

        console.log(data);

        var step = "step2";
        props.pageHandler(step, data);
        // props.pageHandler("step2");
    }
    return (
        <div className="container">
            <h1> Please fill up the following information </h1>            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="proj_name">Project Name</label>
                    <input type="text" className="form-control" id="proj_name" name="proj_name"/>                    
                </div>

                <div className="form-group">
                    <label for="proj_desc">Project Description</label>
                    <input type="text" className="form-control" id="proj_desc" name="proj_desc"/>                    
                </div>

                <div className="form-group">
                    <label for="client">Client</label>
                    <input type="text" className="form-control" id="client" name="client"/>                    
                </div>

                <div className="form-group">
                    <label for="contractor">Contractor</label>
                    <input type="text" className="form-control" id="contractor" name="contractor"/>                    
                </div>
                {/* <button onClick={changepage}>Something</button> */}
                <button onClick={changepage} className="btn btn-primary">Next</button>
            </form>
            {/* <button onClick={changepage}>Something</button> */}
        </div>
    );
}

export default Step1form;