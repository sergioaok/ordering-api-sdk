import { ApiResponse } from './ApiResponse';
import { ApiLanguage } from './ApiLanguage';
import { RequestOptionsProps } from '../interfaces/RequestOptionsProps';
import { ApiSystem } from './ApiSystem';
import { ApiUser } from './ApiUser';
import { ApiValidationField } from './ApiValidationField';
import { ApiOrder } from './ApiOrder';
import { ApiBusiness } from './ApiBusiness';
import { AxiosRequestConfig } from 'axios';
import { ApiConfig } from './ApiConfig';
import { ApiTranslation } from './ApiTranslation';
interface SettingProps {
    url?: string;
    version?: string;
    project?: string;
    language?: string;
    accessToken?: string;
    apiKey?: string;
}
export declare class Ordering {
    private url;
    private version;
    private project;
    private language;
    private accessToken;
    private apiKey;
    constructor({ url, version, project, language, accessToken, apiKey }?: SettingProps);
    get root(): string;
    get systemRoot(): string;
    setAccessToken(accessToken: string): this;
    setApiKey(apiKey: string): this;
    users(userId?: number): ApiUser;
    orders(orderId?: number): ApiOrder;
    configs(configId?: number): ApiConfig;
    businesses(businessId: number | string): ApiBusiness;
    validationFields(fieldId: number): ApiValidationField;
    languages(languageId: number): ApiLanguage;
    translations(translationId: number): ApiTranslation;
    system(): ApiSystem;
    getRequestProps(options: RequestOptionsProps): [string, AxiosRequestConfig];
    get(path: string, options?: RequestOptionsProps): Promise<ApiResponse>;
    post(path: string, data?: any, options?: RequestOptionsProps): Promise<ApiResponse>;
    put(path: string, data?: any, options?: RequestOptionsProps): Promise<ApiResponse>;
    delete(path: string, options?: RequestOptionsProps): Promise<ApiResponse>;
}
export {};
