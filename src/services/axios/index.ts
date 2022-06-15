import { API } from 'config';
import { AxiosHelper } from './AxiosHelper';
import { ApiConfig } from './types';

const apiConfig: ApiConfig = {
  baseUrl: API.BASE_URL,
};

const api = new AxiosHelper(apiConfig);

export { api };
