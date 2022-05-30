import axios from 'axios'

const DEPARMENT_API_BASE_URL="http://localhost:8088/department/";
 class DepartmentService
{
   url="http://localhost:8088/department/save"
   addDepartment(department)
  {
      return axios.post(this.url,department)
  }

 getDepartment(departid){
   return axios.get(DEPARMENT_API_BASE_URL+'/'+departid);
 }
  
}
 
export default new  DepartmentService