import { ApiResponse } from './ApiResponse';
import { Ordering } from './Ordering';
import { RequestOptionsProps } from '../interfaces/RequestOptionsProps';
import { OrderProps } from '../models/Order';
import { ApiBase, ApiBaseInterface } from './ApiBase';
/**
 * Class to orders api control
 */
export declare class ApiOrder extends ApiBase implements ApiBaseInterface {
    private orderId;
    constructor(ordering: Ordering, orderId: number);
    /**
     * Replace current modelId
     * @param id ID to replace current api modelId
     */
    setModelId(id: number): void;
    /**
     * Get an order if orderId is set else get all
     * @param {RequestOptionsProps} options Params, headers and other options
     */
    get(options?: RequestOptionsProps): Promise<ApiResponse>;
    /**
     * Update an order if orderId is set else create order
     * @param {OrderProps} order Attributes to create or update order
     * @param {RequestOptionsProps} options Params, headers and other options
     */
    save(order: OrderProps, options?: RequestOptionsProps): Promise<ApiResponse>;
    /**
     * Delete an order by orderId
     * @param {RequestOptionsProps} options Params, headers and other options
     */
    delete(options?: RequestOptionsProps): Promise<ApiResponse>;
}
