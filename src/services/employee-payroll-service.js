import configuration from "../configuration/configuration"; 
import AxiosService from "../services/axios-service.js";
export default class EmployeeService {
  baseUrl = configuration.baseUrl;
  tokenRequired = false;
  httpOptions = null;
  addEmployee(data) {
    return AxiosService.postService(`${this.baseUrl}/sql/create`, data);
  }
  getAllEmployee() {
    return AxiosService.getService(`${this.baseUrl}/sql`);
  }
  getEmployee(id) {
    return AxiosService.getService(`${this.baseUrl}/sql/${id}`);
  }
  updateEmployee(id,data) {
    return AxiosService.putService(`${this.baseUrl}/sql/update/${id}`, data);
  }
  deleteEmployee(id) {
    return AxiosService.deleteService(`${this.baseUrl}/sql/delete/${id}`);
  }
}  