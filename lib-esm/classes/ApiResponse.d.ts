import { RequestOptionsProps } from '../interfaces/RequestOptionsProps';
import { AxiosResponse } from 'axios';
import { TypeApi } from '../types';
export declare class ApiResponse {
    private response;
    private options;
    private api;
    constructor(response: AxiosResponse, options?: RequestOptionsProps, api?: TypeApi);
    get content(): any;
    get status(): number;
}
