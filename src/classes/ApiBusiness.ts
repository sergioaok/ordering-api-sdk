import { ApiResponse } from './ApiResponse'
import { Ordering } from './Ordering'
import { RequestOptionsProps } from '../interfaces/RequestOptionsProps'
import { ApiBase, ApiBaseInterface } from './ApiBase'
import { Business, BusinessProps } from '../models/Business'

/**
 * Class to configs api control
 */
export class ApiBusiness extends ApiBase implements ApiBaseInterface {
  private businessId: number | string

  constructor (ordering: Ordering, businessId: number | string) {
    super(ordering)
    this.businessId = businessId
  }

  /**
   * Get a business if businessId is set else get all
   * @param {RequestOptionsProps} options Params, headers and other options
   */
  async get (options: RequestOptionsProps = {}) {
    if (this.businessId && this.conditions.length > 0) {
      throw new Error('The `where` function is not compatible with businesses(businessId). Example ordering.businesses().where(contitions).get()')
    }
    const url = '/business' + (this.businessId ? `/${this.businessId}` : '')
    const response: ApiResponse = await this.makeRequest('GET', url, undefined, Business, options)
    const { content: { error, result } } = response
    if (!error && !this.businessId) {
      this.businessId = result.id
    }
    return response
  }

  /**
   * Update a business if configId is set else create business
   * @param {BusinessProps} business Attributes to create or update business
   * @param {RequestOptionsProps} options Params, headers and other options
   */
  async save (business: BusinessProps, options: RequestOptionsProps = {}) {
    const url = '/business' + (this.businessId ? `/${this.businessId}` : '')
    const response: ApiResponse = await this.makeRequest('POST', url, business, Business, options)
    const { content: { error, result } } = response
    if (!error && !this.businessId) {
      this.businessId = result.id
    }
    return response
  }

  /**
   * Delete a business by configId
   * @param {RequestOptionsProps} options Params, headers and other options
   */
  async delete (options: RequestOptionsProps = {}) {
    if (!this.businessId) {
      throw new Error('`businessId` is require to delete. Example: ordering.businesses(businessId).delete()')
    }
    const url = `/business/${this.businessId}`
    const response: ApiResponse = await this.makeRequest('DELETE', url, undefined, null, options)
    return response
  }

  async validateCart (cart: any, options: RequestOptionsProps = {}) {
    if (!this.businessId) {
      throw new Error('`businessId` is require to validateCart. Example: ordering.businesses(businessId).validateCart(cart)')
    }
    const url = `/business/${this.businessId}/validate_cart`
    const response: ApiResponse = await this.makeRequest('GET', url, cart, undefined, options)
    return response
  }
}
