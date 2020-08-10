import { Model } from './Model'
import { TypeApi } from '../types'

export interface BusinessProps {
  id?: number
  name?: string
  email?: string
  slug?: string
  schedule?: any
  description?: string
  about?: string
  logo?: string
  header?: string
  phone?: string
  cellphone?: string
  owner_id?: number
  city_id?: number
  address?: string
  address_notes?: string
  zipcode?: string
  location?: any
  featured?: boolean
  timezone?: string
  currency?: string
  food?: boolean
  alcohol?: boolean
  groceries?: boolean
  laundry?: boolean
  use_printer?: boolean
  printer_id?: number
  minimum?: number
  delivery_price?: number
  always_deliver?: boolean
  tax_type?: number
  tax?: number
  delivery_time?: string
  pickup_time?: string
  service_fee?: number
  fixed_usage_fee?: number
  percentage_usage_fee?: number
  enabled?: boolean
}

export class Business extends Model {
  id?: number
  name?: string
  email?: string
  slug?: string
  schedule?: any
  description?: string
  about?: string
  logo?: string
  header?: string
  phone?: string
  cellphone?: string
  owner_id?: number
  city_id?: number
  address?: string
  address_notes?: string
  zipcode?: string
  location?: any
  featured?: boolean
  timezone?: string
  currency?: string
  food?: boolean
  alcohol?: boolean
  groceries?: boolean
  laundry?: boolean
  use_printer?: boolean
  printer_id?: number
  minimum?: number
  delivery_price?: number
  always_deliver?: boolean
  tax_type?: number
  tax?: number
  delivery_time?: string
  pickup_time?: string
  service_fee?: number
  fixed_usage_fee?: number
  percentage_usage_fee?: number
  enabled?: boolean

  constructor (business: BusinessProps = {}, api: TypeApi) {
    super(business, api, [])
    this.id = business.id
    this.name = business.name
    this.email = business.email
    this.slug = business.slug
    this.schedule = business.schedule
    this.description = business.description
    this.about = business.about
    this.logo = business.logo
    this.header = business.header
    this.phone = business.phone
    this.cellphone = business.cellphone
    this.owner_id = business.owner_id
    this.city_id = business.city_id
    this.address = business.address
    this.address_notes = business.address_notes
    this.zipcode = business.zipcode
    this.location = business.location
    this.featured = business.featured
    this.timezone = business.timezone
    this.currency = business.currency
    this.food = business.food
    this.alcohol = business.alcohol
    this.groceries = business.groceries
    this.laundry = business.laundry
    this.use_printer = business.use_printer
    this.printer_id = business.printer_id
    this.minimum = business.minimum
    this.delivery_price = business.delivery_price
    this.always_deliver = business.always_deliver
    this.tax_type = business.tax_type
    this.tax = business.tax
    this.delivery_time = business.delivery_time
    this.pickup_time = business.pickup_time
    this.service_fee = business.service_fee
    this.fixed_usage_fee = business.fixed_usage_fee
    this.percentage_usage_fee = business.percentage_usage_fee
    this.enabled = business.enabled
  }
}
