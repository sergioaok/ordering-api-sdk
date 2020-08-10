import { Language } from '../models/Language'
import { ApiResponse } from './ApiResponse'
import { Ordering } from './Ordering';
import { RequestOptionsProps } from '../interfaces/RequestOptionsProps';

export class ApiLanguage {
  private ordering: Ordering;
  constructor (ordering: Ordering) {
    this.ordering = ordering
  }

  async find (options: RequestOptionsProps = { CastClass: Language, json: true }) {
    const response: ApiResponse = await this.ordering.get('/languages', options)
    return response
  }
}
