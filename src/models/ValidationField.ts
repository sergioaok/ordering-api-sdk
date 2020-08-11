import { Model } from './Model'
import { TypeApi } from '../types'

export interface ValidationFieldProps {
  id?: number
  name?: string
  code?: string
  validate?: string
  type?: string
  required?: boolean
  enabled?: boolean
}

export class ValidationField extends Model {
  public id: number
  public name: string
  public code: string
  public validate: string
  public type: string
  public required: boolean
  public enabled: boolean

  constructor (field: ValidationFieldProps = {}, api: TypeApi) {
    super(field, api)
    this.id = field.id
    this.name = field.name
    this.code = field.code
    this.validate = field.validate
    this.type = field.type
    this.required = field.required
    this.enabled = field.enabled
  }
}
