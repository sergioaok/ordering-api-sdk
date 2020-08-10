import { ApiResponse } from './ApiResponse'
import { Ordering } from './Ordering'
import { RequestOptionsProps } from '../interfaces/RequestOptionsProps'
import { ValidationField } from '../models/ValidationField'

export class ApiValidationField {
  private ordering: Ordering;
  constructor (ordering: Ordering) {
    this.ordering = ordering
  }

  async all (options: RequestOptionsProps = { CastClass: ValidationField, json: true }) {
    const response: ApiResponse = await this.ordering.get('/validationfields', options)
    return response
  }

  async get (options: RequestOptionsProps = { CastClass: ValidationField, json: true }) {
    const response: ApiResponse = await this.ordering.get('/validationfields', options)
    return response
  }
}
