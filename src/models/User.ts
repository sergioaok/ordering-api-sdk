import { Model } from './Model'
import { Address } from './Address'
import { TypeApi } from '../types'

export interface SessionProps {
  access_token?: string
  expires_in?: number
  token_type?: string
}

export class Session {
  public access_token: string
  public expires_in: number
  public token_type: string

  constructor (session: SessionProps = {}) {
    this.access_token = session.access_token
    this.expires_in = session.expires_in
    this.token_type = session.token_type
  }
}

export interface UserProps {
  id?: number
  name?: string
  middle_name?: string
  lastname?: string
  second_lastname?: string
  email?: string
  password?: string
  login_type?: number
  social_id?: string
  photo?: string
  birthdate?: string
  phone?:string
  cellphone?: string
  country_phone_code?: string
  city_id?: number
  dropdown_option_id?: number
  address?: string
  address_notes?: string
  zipcode?: string
  location?: any
  push_notifications?: boolean
  level?: number
  language_id?: number
  busy?: boolean
  available?: boolean
  map_data?: string
  enabled?: boolean
  session?: Session
  addresses?: Address[]
}

export class User extends Model {
  public id: number
  public name: string
  public middle_name: string
  public lastname: string
  public second_lastname: string
  public email: string
  public password: string
  public login_type: number
  public social_id: string
  public photo: string
  public birthdate: string
  public phone:string
  public cellphone: string
  public country_phone_code: string
  public city_id: number
  public dropdown_option_id: number
  public address: string
  public address_notes: string
  public zipcode: string
  public location: any
  public push_notifications: boolean
  public level: number
  public language_id: number
  public busy: boolean
  public available: boolean
  public map_data: string
  public enabled: boolean
  public addresses: Address[]
  public session: Session

  constructor (user: UserProps = {}, api: TypeApi) {
    super(user, api, ['session', 'addresses'])
    this.id = user.id
    this.name = user.name
    this.middle_name = user.middle_name
    this.lastname = user.lastname
    this.second_lastname = user.second_lastname
    this.email = user.email
    this.password = user.password
    this.login_type = user.login_type
    this.social_id = user.social_id
    this.photo = user.photo
    this.birthdate = user.birthdate
    this.phone = user.phone
    this.cellphone = user.cellphone
    this.country_phone_code = user.country_phone_code
    this.city_id = user.city_id
    this.dropdown_option_id = user.dropdown_option_id
    this.address = user.address
    this.address_notes = user.address_notes
    this.zipcode = user.zipcode
    this.location = user.location
    this.push_notifications = user.push_notifications
    this.level = user.level
    this.language_id = user.language_id
    this.busy = user.busy
    this.available = user.available
    this.map_data = user.map_data
    this.enabled = user.enabled
    this.addresses = user.addresses || []
    if (user.session) {
      this.session = new Session(user.session)
    }
  }

  public isAdministrator () {
    return this.level === 0
  }

  public isDriver () {
    return this.level === 4
  }

  public isBusinessOwner () {
    return this.level === 2
  }

  public isCustomer () {
    return this.level === 3
  }

  public getAccessToken () {
    return this.session?.access_token
  }
}
