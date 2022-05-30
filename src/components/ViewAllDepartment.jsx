

import React, {useEffect,useState} from 'react'
import axios from 'axios'
export default function ViewAllDepartment(){

    const [departments,setDepartments]=useState([])

    useEffect(()=>
    {
        axios.get('http://localhost:8080/department/alldepartments')
        .then(response=>{
            console.log(response.data)
            setDepartments(response.data)
        })
        .catch(error=>console.log(error))
    }, [])

    

    
    return(
        <div class="container">
            <h3 className="text-info">All Departments</h3>
            <hr/>
            <table class="table table-striped">
 
                <thead >
                    <tr>
                        <th scope="col">Department ID</th>
                        <th scope="col">Department Name</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                      departments.map(department=>
                        (
                            <tr key={department.id}>
                                <td>{department.departid}</td>
                                <td>{department.departname}</td>
                                <td><button className="btn btn-warning" onClick={() => this.deleteDepartment(department.departid)}>Delete</button></td>
                                </tr>
                      ))
                    }
                    

                </tbody>
            </table>
        </div>
    )
}