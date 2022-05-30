
import React, {Component} from "react";
import DepartmentService from "./Services/DepartmentService";
export default class Department extends Component{
    constructor(props)
    {
        super(props)

        this.state={
            departid:' ',
            departname:' ',
           
            msg:' ',
            error:' '
        }
    }

    handleDepartName=(event)=>
    {
        this.setState({
            departname:event.target.value
        })
    }
    handleDepartId=(event)=>
    {
        this.setState({
            departid:event.target.value
        })
    }
    handleFormSubmission=(event)=>
    {
        event.preventDefault();
        this.saveDepartment(this.state)
    }

    saveDepartment(department)
    {
        DepartmentService.addDepartment(department).then(response=>
            {
                console.log(response) 
                this.setState({
                        departid:' ',
                        departname:' ',
                        
                        msg:response.data,
                        error:' '
                   
                })
                
            })
            .catch(error=>console.log(error))
    }
    render(){
        return(
        <div className="container">
            <h2 className="text-info"> Department Us</h2>
            <hr/>
            <form onSubmit={this.handleFormSubmission}>
            <div className="form-group">
                    <label>DepartId</label>
                    <input onChange={this.handleDepartId} value={this.state.departid} className="form-control"/>
                </div>
                <br/>
                <div className="form-group">
                    <label>DepartName</label>
                    <input onChange={this.handleDepartName} value={this.state.departname} className="form-control"/>
                </div>
                <br/>
                
                    <button className="btn-btn-primary ">Send Enquiry</button>
                
            </form>
                 {
                 this.state.msg && <h5 className="alert alert-success">{this.state.msg}</h5>
                 }
        </div>
        )

    }
}

