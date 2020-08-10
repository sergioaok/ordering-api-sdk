interface PaginationProps {
  back_page?: string
  current_page?: number
  fisrt_page?: string
  from?: number
  last_page?: string
  next_page?: string
  page_size?: number
  to?: number
  total?: number
  total_pages?: number
}

export class Pagination {
  public back_page: string
  public current_page: number
  public fisrt_page: string
  public from: number
  public last_page: string
  public next_page: string
  public page_size: number
  public to: number
  public total: number
  public total_pages: number

  constructor (pagination: PaginationProps) {
    this.back_page = pagination.back_page
    this.current_page = pagination.current_page
    this.fisrt_page = pagination.fisrt_page
    this.from = pagination.from
    this.last_page = pagination.last_page
    this.next_page = pagination.next_page
    this.page_size = pagination.page_size
    this.to = pagination.to
    this.total = pagination.total
    this.total_pages = pagination.total_pages
  }
}