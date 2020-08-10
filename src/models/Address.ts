import { Model } from './Model'
import { TypeApi } from '../types'

export interface AddressProps {
  id?: number
  user_id?: number
  name?: string
  middle_name?: string
  lastname?: string
  second_lastname?: string
  address?: string
  address_notes?: string
  internal_number?: string
  phone?: string
  cellphone?: string
  zipcode?: string
  location?: object
  tag?: string
  map_data?: object
  default?: boolean
}

export class Address extends Model {
  public id: number
  public user_id: number
  public name: string
  public middle_name: string
  public lastname: string
  public second_lastname: string
  public address: string
  public address_notes: string
  public internal_number: string
  public phone: string
  public cellphone: string
  public zipcode: string
  public location: object
  public tag: string
  public map_data: object
  public default: boolean

  // Use name 'address' because has 'default' attribute and is a javascript keyword
  constructor (address: AddressProps = {}, api: TypeApi) {
    super(address, api, [])
    this.id = address.id
    this.user_id = address.user_id
    this.name = address.name
    this.middle_name = address.middle_name
    this.lastname = address.lastname
    this.second_lastname = address.second_lastname
    this.address = address.address
    this.address_notes = address.address_notes
    this.internal_number = address.internal_number
    this.phone = address.phone
    this.cellphone = address.cellphone
    this.zipcode = address.zipcode
    this.location = address.location
    this.tag = address.tag
    this.map_data = address.map_data
    this.default = address.default
  }
}