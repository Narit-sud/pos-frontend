export interface ApiResponse {
    success: boolean
    message: string
}
export interface ApiDataResponse<T> extends ApiResponse {
    data: T
}

export interface ApiErrorResponse<T> extends ApiResponse {
    error: T
}
