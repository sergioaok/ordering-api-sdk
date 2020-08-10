interface ValidationFieldProps {
  id?: number
  name?: string
  code?: string
  validate?: string
  type?: string
  required?: boolean
  enabled?: boolean
}

export class ValidationField {
  public id: number
  public name: string
  public code: string
  public validate: string
  public type: string
  public required: boolean
  public enabled: boolean
  
  constructor ({ id, name, code, validate, type, required = false, enabled = false }: ValidationFieldProps = {}) {
    this.id = id
    this.name = name
    this.code = code
    this.validate = validate
    this.type = type
    this.required = required
    this.enabled = enabled
  }
}