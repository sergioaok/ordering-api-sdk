import { Model } from './Model'
import { TypeApi } from '../types'

export interface ConfigProps {
  id?: number
  key?: string
  value?: string
}

export class Config extends Model {
  public id: number
  public key: string
  public value: string

  constructor (config: ConfigProps = {}, api: TypeApi) {
    super(config, api)
    this.id = config.id
    this.key = config.key
    this.value = config.value
  }
}
