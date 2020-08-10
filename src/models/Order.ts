import { Model } from './Model'
import { TypeApi } from '../types'

export interface OrderProps {
  id?: number
  paymethod_id?: number
  business_id?: number
  customer_id?: number
  delivery_type?: number
  delivery_datetime?: string
  service_fee?: number
  tax_type?: number
  tax?: number
  delivery_zone_price?: number
  offer?: number
  offer_type?: number
  offer_rate?: number
  discount?: number
  coupon?: string
  status?: number
  comment?: string
  driver_id?: number
  driver_tip?: number
  pay_data?: string
  refund_data?: string
  to_print?: boolean
  language_id?: number
  app_id?: string
  cash?: number
  delivery_zone_id?: number
  locked?: boolean
  order_group_id?: number
  logistic_status?: number
  created_at?: string
  updated_at?: string
  offer_id?: number
  business?: object
  products?: Array<object>
  customer?: object
}

export class Order extends Model {
  public id: number
  public paymethod_id: number
  public business_id: number
  public customer_id: number
  public delivery_type: number
  public delivery_datetime: string
  public service_fee: number
  public tax_type: number
  public tax: number
  public delivery_zone_price: number
  public offer: number
  public offer_type: number
  public offer_rate: number
  public discount: number
  public coupon: string
  public status: number
  public comment: string
  public driver_id: number
  public driver_tip: number
  public pay_data: string
  public refund_data: string
  public to_print: boolean
  public language_id: number
  public app_id: string
  public cash: number
  public delivery_zone_id: number
  public locked: boolean
  public order_group_id: number
  public logistic_status: number
  public created_at: string
  public updated_at: string
  public offer_id: number
  public business: object
  public products: Array<object>
  public customer: object

  constructor (order: OrderProps = {}, api: TypeApi) {
    super(order, api, ['customer', 'business'])
    this.id = order.id
    this.paymethod_id = order.paymethod_id
    this.business_id = order.business_id
    this.customer_id = order.customer_id
    this.delivery_type = order.delivery_type
    this.delivery_datetime = order.delivery_datetime
    this.service_fee = order.service_fee
    this.tax_type = order.tax_type
    this.tax = order.tax
    this.delivery_zone_price = order.delivery_zone_price
    this.offer = order.offer
    this.offer_type = order.offer_type
    this.offer_rate = order.offer_rate
    this.discount = order.discount
    this.coupon = order.coupon
    this.status = order.status
    this.comment = order.comment
    this.driver_id = order.driver_id
    this.driver_tip = order.driver_tip
    this.pay_data = order.pay_data
    this.refund_data = order.refund_data
    this.to_print = order.to_print
    this.language_id = order.language_id
    this.app_id = order.app_id
    this.cash = order.cash
    this.delivery_zone_id = order.delivery_zone_id
    this.locked = order.locked
    this.order_group_id = order.order_group_id
    this.logistic_status = order.logistic_status
    this.created_at = order.created_at
    this.updated_at = order.updated_at
    this.offer_id = order.offer_id
    this.business = order.business
    this.products = order.products
    this.customer = order.customer
  }

  get subtotal () {
    if (!this.products) {
      return 0
    }

    const subtotal = this.products.reduce((total: number, product: any) => {
      const totaloptions = product.options.reduce((totalOption: number, option: any) => {
        const totalSuboptions = option.suboptions.reduce((totalSuboption: number, suboption: any) => {
          const price = (suboption.position && suboption.position !== 'whole') ? suboption.half_price : suboption.price
          const quantity = (option.allow_suboption_quantity && suboption.quantity > 1) ? suboption.quantity : 1
          return totalSuboption + (price * quantity)
        }, 0)
        return totalOption + totalSuboptions
      }, 0)
      return total + ((product.price + totaloptions) * product.quantity)
    }, 0)

    return subtotal
  }

  get deliveryFee (): number {
    return (!this.delivery_type || this.delivery_type === 1) ? this.delivery_zone_price : 0
  }

  get serviceFee (): number {
    return this.subtotal * (this.service_fee / 100)
  }

  get totalTax (): number {
    return this.subtotal * (this.tax_type / 100)
  }

  get total () {
    return this.subtotal + this.serviceFee + this.deliveryFee + (this.tax_type === 2 ? this.totalTax : 0) - this.discount
  }
}