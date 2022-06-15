export type UnknownObject = Record<string, unknown>;

export type ApiConfig = {
  baseUrl: string;
};

export type HttpResponse<T> = {
  statusCode: number;
  body: T;
};

export type GetParams = {
  url: string;
  timeout?: number;
};

export type PostParams = {
  url: string;
  timeout?: number;
  body?: UnknownObject;
  data?: UnknownObject;
};
