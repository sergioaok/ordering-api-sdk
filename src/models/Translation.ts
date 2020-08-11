import { Model } from './Model'
import { TypeApi } from '../types'

export interface TranslationProps {
  id?: number
  key?: string
  text?: string
}

export class Translation extends Model {
  public id: number
  public key: string
  public text: string

  constructor (translation: TranslationProps = {}, api: TypeApi) {
    super(translation, api)
    this.id = translation.id
    this.key = translation.key
    this.text = translation.text
  }
}
