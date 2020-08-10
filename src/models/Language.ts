interface LanguageProps {
  id?: number
  name?: string
  code?: string
  default?: boolean
  enabled?: boolean
  rtl?: boolean
}

export class Language {
  public id: number
  public name: string
  public code: string
  public default: boolean
  public enabled: boolean
  public rtl: boolean
  
  // Use name 'language' because has 'default' attribute and is a javascript keyword
  constructor (language: LanguageProps = {}) {
    this.id = language.id
    this.name = language.name
    this.code = language.code
    this.default = language.default ?? false
    this.enabled = language.enabled
    this.rtl = language.rtl
  }
}