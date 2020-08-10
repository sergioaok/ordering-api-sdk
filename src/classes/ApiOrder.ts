import { ApiResponse } from './ApiResponse'
import { Ordering } from './Ordering'
import { RequestOptionsProps } from '../interfaces/RequestOptionsProps'
import { Order, OrderProps } from '../models/Order'
import { ApiBase, ApiBaseInterface } from './ApiBase'

/**
 * Class to orders api control
 */
export class ApiOrder extends ApiBase implements ApiBaseInterface {
  private orderId: number

  constructor (ordering: Ordering, orderId: number) {
    super(ordering)
    this.orderId = orderId
  }

  /**
   * Get an order if orderId is set else get all
   * @param {RequestOptionsProps} options Params, headers and other options
   */
  async get (options: RequestOptionsProps = {}) {
    if (this.orderId && this.conditions.length > 0) {
      throw new Error('The `where` function is not compatible with orders(orderId). Example ordering.orders().where(contitions).get()')
    }
    const url = '/orders' + (this.orderId ? `/${this.orderId}` : '')
    const response: ApiResponse = await this.makeRequest('GET', url, undefined, Order, options)
    return response
  }

  /**
   * Update an order if orderId is set else create order
   * @param {OrderProps} order Attributes to create or update order
   * @param {RequestOptionsProps} options Params, headers and other options
   */
  async save (order: OrderProps, options: RequestOptionsProps = {}) {
    const url = '/orders' + (this.orderId ? `/${this.orderId}` : '')
    const response: ApiResponse = await this.makeRequest(this.orderId ? 'PUT' : 'POST', url, order, Order, options)
    const { content: { error, result } } = response
    if (!error && !this.orderId) {
      this.orderId = result.id
    }
    return response
  }

  /**
   * Delete an order by orderId
   * @param {RequestOptionsProps} options Params, headers and other options
   */
  async delete (options: RequestOptionsProps = {}) {
    if (!this.orderId) {
      throw new Error('`orderId` is require to delete. Example: ordering.orders(orderId).delete()')
    }
    const url = `/orders/${this.orderId}`
    const response: ApiResponse = await this.makeRequest('DELETE', url, undefined, Order, options)
    return response
  }
}
