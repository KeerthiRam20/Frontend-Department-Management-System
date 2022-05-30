import axios from "axios"


class ViewDepartmentService {

    
    viewsingledepartment( departid)
    {
        return axios.get(`http://localhost:8088/department/${departid}`)

    }
}
  
export default new ViewDepartmentService()