export interface PaginationMeta {
    page_per_items: number;
    last_page: number;
    total_items: number;
    current_page: number;
    next_page: number;
    prev_page: number;
}

export interface ApiResponse<T> {
    status: number;
    message: string;
    data: T[];
    metadata: PaginationMeta;
}

export interface ApiResponseNotPaginate<T> {
    status: number;
    message: string;
    data: T;
}

export interface ApiQueryParams {
  page: number;
  size: number;
}
