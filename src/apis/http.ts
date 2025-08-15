import axios from 'axios'
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios'

export interface BaseResponse<T = unknown> {
  code: number
  data: T
  message: string
}

export class HttpError extends Error {
  constructor(
    public readonly code: number | string,
    message: string,
    public readonly rawError?: AxiosError,
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

export interface RequestConfig<D = unknown> extends AxiosRequestConfig<D> {
  silent?: boolean
}

class Http {
  private service: AxiosInstance

  constructor() {
    this.service = axios.create({
      timeout: 1000,
    })

    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        config.baseURL = 'http://localhost:8888/'
        return config
      },
      (error: AxiosError) => Promise.reject(error),
    )

    this.service.interceptors.response.use(
      <T>(response: AxiosResponse<BaseResponse<T>>) => {
        const { data, config } = response

        // if (data.code !== 200 && !(config as RequestConfig).silent) {
        //   throw new HttpError(data.code, data.message || 'Request failed')
        // }

        return data.data
      },
      (error: AxiosError) => {
        const config = error.config as RequestConfig | undefined

        if (!config?.silent) {
          const message = this.handleHttpError(error)
          console.error(message)
        }

        return Promise.reject(
          new HttpError(error.response?.status.toString() || 'UNKNOWN', error.message, error),
        )
      },
    )
  }

  private handleHttpError(error: AxiosError): string {
    if (error.response) {
      const status = error.response.status
      const errorMap: Record<number, string> = {
        400: 'Request parameter error',
        401: 'Authentication failure',
        403: 'Access denied',
        404: 'Resource does not exist',
        500: 'Server error',
        503: 'Service unavailable',
      }
      return errorMap[status] || `Unknown error（code：${status}）`
    }
    return error.request ? 'Network connection failure' : 'Request failed to send'
  }

  public request<T = unknown, D = unknown>(config: RequestConfig<D>): Promise<T> {
    return this.service.request(config)
  }

  public get<T = unknown, D = unknown>(url: string, config?: RequestConfig<D>): Promise<T> {
    return this.service.get(url, config)
  }

  public post<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: RequestConfig<D>,
  ): Promise<T> {
    return this.service.post(url, data, config)
  }

  public put<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: RequestConfig<D>,
  ): Promise<T> {
    return this.service.put(url, data, config)
  }

  public delete<T = unknown, D = unknown>(url: string, config?: RequestConfig<D>): Promise<T> {
    return this.service.delete(url, config)
  }
}

export const http = new Http()
