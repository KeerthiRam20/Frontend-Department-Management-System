import axios from "axios"


class DeleteDepartmentService {

    
    deletedepartment( departid)
    {
        return axios.delete("http://localhost:8088/department/"+departid)

    }
}
  
export default new DeleteDepartmentService()