import configuration from "../configuration/configuration"; 
import {axios} from 'axios';

export default class EmployeeService {
  baseUrl = configuration.baseUrl;
  addEmployee(data) {
    return axios.post(`${this.baseUrl}employee`, data);
  }
}  