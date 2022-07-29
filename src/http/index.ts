import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8000';

class HttpClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: BASE_URL,
    });
  }

  async get<T>(url: string) {
    const response: AxiosResponse<T> = await this.httpClient.get(url);
    return response.data;
  }

  post<T>(url: string, data: T) {
    return this.httpClient.post(url, data);
  }

  delete(url: string) {
    return this.httpClient.delete(url);
  }
}

const httpClient = new HttpClient();

export default httpClient;
