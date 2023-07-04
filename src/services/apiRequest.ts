import axios from 'axios';
import api from './api';

class RestClient {
  static getCall(url: string, token = null) {
    try {
      return api.get(url, {}).then(response => response);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('isAxiosError ===> ' + error);
        //   handleAxiosError(error);
      } else {
        console.log('isAxiosError else ===> ' + error);
        //   handleUnexpectedError(error);
      }
    }
  }
}
export default RestClient;
