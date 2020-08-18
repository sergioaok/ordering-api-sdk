import { ApiResponse } from './ApiResponse'
import { ApiLanguage } from './ApiLanguage'
import { RequestOptionsProps } from '../interfaces/RequestOptionsProps'
import { ApiSystem } from './ApiSystem'
import { ApiUser } from './ApiUser'
import { ApiValidationField } from './ApiValidationField'
import { ApiOrder } from './ApiOrder'
import { ApiBusiness } from './ApiBusiness'

import axios, { AxiosRequestConfig } from 'axios'
import { ApiConfig } from './ApiConfig'
import { ApiTranslation } from './ApiTranslation'
import { ApiPage } from './ApiPage'
import { ApiCountry } from './ApiCountry'

interface SettingProps {
  url?: string
  version?: string
  project?: string
  language?: string
  accessToken?: string
  apiKey?: string
}

export class Ordering {
  private url: string
  private version: string
  private project: string
  private language: string
  private accessToken: string
  private apiKey: string
  constructor ({ url = 'https://apiv4.ordering.co', version = 'v400', project = 'demo', language = 'en', accessToken = null, apiKey = null }: SettingProps = {}) {
    this.url = url
    this.version = version
    this.project = project
    this.language = language
    this.accessToken = accessToken
    this.apiKey = apiKey
  }

  get root () {
    return `${this.url}/${this.version}/${this.language}/${this.project}`
  }

  get systemRoot () {
    return `${this.url}/${this.version}`
  }

  setAccessToken (accessToken: string) {
    this.accessToken = accessToken
    return this
  }

  setApiKey (apiKey: string) {
    this.apiKey = apiKey
    return this
  }

  users (userId: number = null) {
    return new ApiUser(this, userId)
  }

  orders (orderId: number = null) {
    return new ApiOrder(this, orderId)
  }

  configs (configId: number = null) {
    return new ApiConfig(this, configId)
  }

  businesses (businessId: number | string) {
    return new ApiBusiness(this, businessId)
  }

  validationFields (fieldId: number) {
    return new ApiValidationField(this, fieldId)
  }

  languages (languageId: number) {
    return new ApiLanguage(this, languageId)
  }

  translations (translationId: number) {
    return new ApiTranslation(this, translationId)
  }

  pages (pageId: number) {
    return new ApiPage(this, pageId)
  }

  countries (countryId: number) {
    return new ApiCountry(this, countryId)
  }

  system () {
    return new ApiSystem(this)
  }

  getRequestProps (options: RequestOptionsProps): [string, AxiosRequestConfig] {
    const root: string = options.system ? this.systemRoot : this.root
    const query: any = options.query || {}
    if (Object.keys(query).length > 0) {
      for (const key in query) {
        query[key] = typeof query[key] === 'object' ? JSON.stringify(query[key]) : query[key]
      }
    }
    /**
     * Parse params from options and select attributes
     */
    let params: string [] = options.query?.params?.split(',') || []
    params = params.concat(options.attributes || [])
    if (params.length > 0) {
      query.params = params.join(',')
    }
    /**
     * Parse conditions to filter api data
     */
    if (options.conditions?.length > 0) {
      query.where = typeof options.conditions === 'object' ? JSON.stringify(options.conditions) : options.conditions
    }
    /**
     * Parse conditions to filter api data
     */
    if (options.mode) {
      query.mode = options.mode
    }
    /**
     * Parse headers from options and default
     */
    const headers: any = {}
    if (this.accessToken && !this.apiKey) {
      headers.Authorization = `Bearer ${this.accessToken}`
    }
    if (this.apiKey) {
      headers['X-Api-Key'] = this.apiKey
    }
    /**
     * Create Axios Option Request
     */
    const axiosOptions: AxiosRequestConfig = {
      validateStatus: status => status < 500,
      params: query || {},
      headers: Object.assign(headers, options.headers || {})
    }

    return [root, axiosOptions]
  }

  async get (path: string, options: RequestOptionsProps = { CastClass: null, json: true, system: false }) {
    const [root, axiosOptions] = this.getRequestProps(options)

    const response = await axios.get(root + path, axiosOptions)
    return new ApiResponse(response, options, options.api)
  }

  async post (path: string, data: any = {}, options: RequestOptionsProps = { CastClass: null, json: true, system: false }) {
    const [root, axiosOptions] = this.getRequestProps(options)

    if (options.json) {
      for (const key in data) {
        if (typeof data[key] === 'object') {
          data[key] = JSON.stringify(data[key])
        }
      }
    }

    const response = await axios.post(root + path, data, axiosOptions)
    return new ApiResponse(response, options, options.api)
  }

  async put (path: string, data: any = {}, options: RequestOptionsProps = { CastClass: null, json: true, system: false }) {
    const [root, axiosOptions] = this.getRequestProps(options)

    if (options.json) {
      for (const key in data) {
        if (typeof data[key] === 'object') {
          data[key] = JSON.stringify(data[key])
        }
      }
    }

    const response = await axios.put(root + path, data, axiosOptions)
    return new ApiResponse(response, options, options.api)
  }

  async delete (path: string, options: RequestOptionsProps = { CastClass: null, json: true, system: false }) {
    const [root, axiosOptions] = this.getRequestProps(options)

    const response = await axios.delete(root + path, axiosOptions)
    return new ApiResponse(response, options, options.api)
  }
}
