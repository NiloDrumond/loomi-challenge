import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  ApiConfig,
  GetParams,
  HttpResponse,
  PostParams,
  UnknownObject,
} from './types';

class AxiosHelper {
  token: string | null;

  baseUrl: string;

  public instance: AxiosInstance;

  constructor(con: ApiConfig) {
    this.baseUrl = con.baseUrl;
    this.token = null;
    this.instance = axios.create();
  }

  private prepareConfig() {
    const header = this.token ? { Authorization: this.token } : undefined;
    const config = {
      headers: header,
    };
    return config;
  }

  public setToken(token: string): void {
    this.token = token;
  }

  public clearToken(): void {
    this.token = null;
  }

  public createInterceptor(
    onResponse?: (
      response: AxiosResponse<UnknownObject>,
    ) => AxiosResponse<UnknownObject>,
    onReject?: (error: UnknownObject) => UnknownObject,
  ): number {
    const id = this.instance.interceptors.response.use(onResponse, onReject);
    return id;
  }

  public removeInterceptor(id: number) {
    this.instance.interceptors.response.eject(id);
  }

  private getUrl(paramUrl: string): string {
    let url = '';
    if (paramUrl.includes('http')) url = paramUrl;
    else url = `${this.baseUrl}${paramUrl}`;
    return url;
  }

  public async get<T = UnknownObject>(
    params: GetParams,
  ): Promise<HttpResponse<T>> {
    const url = this.getUrl(params.url);
    const configs = {
      ...this.prepareConfig(),
    };

    const response = await this.instance.get(url, configs);

    return {
      statusCode: response.status,
      body: response.data,
    };
  }

  public async post<T = UnknownObject>(
    params: PostParams,
  ): Promise<HttpResponse<T | undefined>> {
    const url = this.getUrl(params.url);

    try {
      const response = await this.instance.post(
        url,
        params.body,
        this.prepareConfig(),
      );

      return {
        statusCode: response.status,
        body: response.data,
      };
    } catch (err) {
      return {
        statusCode: 404,
        body: undefined,
      };
    }
  }

  public async patch(params: PostParams): Promise<HttpResponse<UnknownObject>> {
    const url = this.getUrl(params.url);

    const response = await this.instance.patch(
      url,
      params.body,
      this.prepareConfig(),
    );

    return {
      statusCode: response.status,
      body: response.data,
    };
  }

  public async delete(
    params: PostParams,
  ): Promise<HttpResponse<UnknownObject>> {
    const url = this.getUrl(params.url);

    const response = await this.instance.delete(url, {
      data: params.body,
      ...this.prepareConfig(),
    });

    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}

export default AxiosHelper;
