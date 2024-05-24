/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { AnnotationSetting } from '../models';
// @ts-ignore
import { AnnotationSettingList } from '../models';
/**
 * V1alpha1AnnotationSettingApi - axios parameter creator
 * @export
 */
export const V1alpha1AnnotationSettingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create v1alpha1/AnnotationSetting
         * @param {AnnotationSetting} [annotationSetting] Fresh annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createV1alpha1AnnotationSetting: async (annotationSetting?: AnnotationSetting, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/annotationsettings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(annotationSetting, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete v1alpha1/AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteV1alpha1AnnotationSetting: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteV1alpha1AnnotationSetting', 'name', name)
            const localVarPath = `/api/v1alpha1/annotationsettings/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get v1alpha1/AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1alpha1AnnotationSetting: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getV1alpha1AnnotationSetting', 'name', name)
            const localVarPath = `/api/v1alpha1/annotationsettings/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List v1alpha1/AnnotationSetting
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listV1alpha1AnnotationSetting: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1alpha1/annotationsettings`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
                localVarQueryParameter['sort'] = sort;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update v1alpha1/AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {AnnotationSetting} [annotationSetting] Updated annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateV1alpha1AnnotationSetting: async (name: string, annotationSetting?: AnnotationSetting, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateV1alpha1AnnotationSetting', 'name', name)
            const localVarPath = `/api/v1alpha1/annotationsettings/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(annotationSetting, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * V1alpha1AnnotationSettingApi - functional programming interface
 * @export
 */
export const V1alpha1AnnotationSettingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = V1alpha1AnnotationSettingApiAxiosParamCreator(configuration)
    return {
        /**
         * Create v1alpha1/AnnotationSetting
         * @param {AnnotationSetting} [annotationSetting] Fresh annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createV1alpha1AnnotationSetting(annotationSetting?: AnnotationSetting, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createV1alpha1AnnotationSetting(annotationSetting, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1AnnotationSettingApi.createV1alpha1AnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete v1alpha1/AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteV1alpha1AnnotationSetting(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteV1alpha1AnnotationSetting(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1AnnotationSettingApi.deleteV1alpha1AnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get v1alpha1/AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getV1alpha1AnnotationSetting(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getV1alpha1AnnotationSetting(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1AnnotationSettingApi.getV1alpha1AnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List v1alpha1/AnnotationSetting
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listV1alpha1AnnotationSetting(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSettingList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listV1alpha1AnnotationSetting(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1AnnotationSettingApi.listV1alpha1AnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update v1alpha1/AnnotationSetting
         * @param {string} name Name of annotationsetting
         * @param {AnnotationSetting} [annotationSetting] Updated annotationsetting
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateV1alpha1AnnotationSetting(name: string, annotationSetting?: AnnotationSetting, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnnotationSetting>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateV1alpha1AnnotationSetting(name, annotationSetting, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['V1alpha1AnnotationSettingApi.updateV1alpha1AnnotationSetting']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * V1alpha1AnnotationSettingApi - factory interface
 * @export
 */
export const V1alpha1AnnotationSettingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = V1alpha1AnnotationSettingApiFp(configuration)
    return {
        /**
         * Create v1alpha1/AnnotationSetting
         * @param {V1alpha1AnnotationSettingApiCreateV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiCreateV1alpha1AnnotationSettingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSetting> {
            return localVarFp.createV1alpha1AnnotationSetting(requestParameters.annotationSetting, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete v1alpha1/AnnotationSetting
         * @param {V1alpha1AnnotationSettingApiDeleteV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiDeleteV1alpha1AnnotationSettingRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteV1alpha1AnnotationSetting(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get v1alpha1/AnnotationSetting
         * @param {V1alpha1AnnotationSettingApiGetV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiGetV1alpha1AnnotationSettingRequest, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSetting> {
            return localVarFp.getV1alpha1AnnotationSetting(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List v1alpha1/AnnotationSetting
         * @param {V1alpha1AnnotationSettingApiListV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiListV1alpha1AnnotationSettingRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSettingList> {
            return localVarFp.listV1alpha1AnnotationSetting(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Update v1alpha1/AnnotationSetting
         * @param {V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSettingRequest, options?: RawAxiosRequestConfig): AxiosPromise<AnnotationSetting> {
            return localVarFp.updateV1alpha1AnnotationSetting(requestParameters.name, requestParameters.annotationSetting, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createV1alpha1AnnotationSetting operation in V1alpha1AnnotationSettingApi.
 * @export
 * @interface V1alpha1AnnotationSettingApiCreateV1alpha1AnnotationSettingRequest
 */
export interface V1alpha1AnnotationSettingApiCreateV1alpha1AnnotationSettingRequest {
    /**
     * Fresh annotationsetting
     * @type {AnnotationSetting}
     * @memberof V1alpha1AnnotationSettingApiCreateV1alpha1AnnotationSetting
     */
    readonly annotationSetting?: AnnotationSetting
}

/**
 * Request parameters for deleteV1alpha1AnnotationSetting operation in V1alpha1AnnotationSettingApi.
 * @export
 * @interface V1alpha1AnnotationSettingApiDeleteV1alpha1AnnotationSettingRequest
 */
export interface V1alpha1AnnotationSettingApiDeleteV1alpha1AnnotationSettingRequest {
    /**
     * Name of annotationsetting
     * @type {string}
     * @memberof V1alpha1AnnotationSettingApiDeleteV1alpha1AnnotationSetting
     */
    readonly name: string
}

/**
 * Request parameters for getV1alpha1AnnotationSetting operation in V1alpha1AnnotationSettingApi.
 * @export
 * @interface V1alpha1AnnotationSettingApiGetV1alpha1AnnotationSettingRequest
 */
export interface V1alpha1AnnotationSettingApiGetV1alpha1AnnotationSettingRequest {
    /**
     * Name of annotationsetting
     * @type {string}
     * @memberof V1alpha1AnnotationSettingApiGetV1alpha1AnnotationSetting
     */
    readonly name: string
}

/**
 * Request parameters for listV1alpha1AnnotationSetting operation in V1alpha1AnnotationSettingApi.
 * @export
 * @interface V1alpha1AnnotationSettingApiListV1alpha1AnnotationSettingRequest
 */
export interface V1alpha1AnnotationSettingApiListV1alpha1AnnotationSettingRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof V1alpha1AnnotationSettingApiListV1alpha1AnnotationSetting
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof V1alpha1AnnotationSettingApiListV1alpha1AnnotationSetting
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof V1alpha1AnnotationSettingApiListV1alpha1AnnotationSetting
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof V1alpha1AnnotationSettingApiListV1alpha1AnnotationSetting
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof V1alpha1AnnotationSettingApiListV1alpha1AnnotationSetting
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for updateV1alpha1AnnotationSetting operation in V1alpha1AnnotationSettingApi.
 * @export
 * @interface V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSettingRequest
 */
export interface V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSettingRequest {
    /**
     * Name of annotationsetting
     * @type {string}
     * @memberof V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSetting
     */
    readonly name: string

    /**
     * Updated annotationsetting
     * @type {AnnotationSetting}
     * @memberof V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSetting
     */
    readonly annotationSetting?: AnnotationSetting
}

/**
 * V1alpha1AnnotationSettingApi - object-oriented interface
 * @export
 * @class V1alpha1AnnotationSettingApi
 * @extends {BaseAPI}
 */
export class V1alpha1AnnotationSettingApi extends BaseAPI {
    /**
     * Create v1alpha1/AnnotationSetting
     * @param {V1alpha1AnnotationSettingApiCreateV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1AnnotationSettingApi
     */
    public createV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiCreateV1alpha1AnnotationSettingRequest = {}, options?: RawAxiosRequestConfig) {
        return V1alpha1AnnotationSettingApiFp(this.configuration).createV1alpha1AnnotationSetting(requestParameters.annotationSetting, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete v1alpha1/AnnotationSetting
     * @param {V1alpha1AnnotationSettingApiDeleteV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1AnnotationSettingApi
     */
    public deleteV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiDeleteV1alpha1AnnotationSettingRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1AnnotationSettingApiFp(this.configuration).deleteV1alpha1AnnotationSetting(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get v1alpha1/AnnotationSetting
     * @param {V1alpha1AnnotationSettingApiGetV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1AnnotationSettingApi
     */
    public getV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiGetV1alpha1AnnotationSettingRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1AnnotationSettingApiFp(this.configuration).getV1alpha1AnnotationSetting(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List v1alpha1/AnnotationSetting
     * @param {V1alpha1AnnotationSettingApiListV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1AnnotationSettingApi
     */
    public listV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiListV1alpha1AnnotationSettingRequest = {}, options?: RawAxiosRequestConfig) {
        return V1alpha1AnnotationSettingApiFp(this.configuration).listV1alpha1AnnotationSetting(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update v1alpha1/AnnotationSetting
     * @param {V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSettingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V1alpha1AnnotationSettingApi
     */
    public updateV1alpha1AnnotationSetting(requestParameters: V1alpha1AnnotationSettingApiUpdateV1alpha1AnnotationSettingRequest, options?: RawAxiosRequestConfig) {
        return V1alpha1AnnotationSettingApiFp(this.configuration).updateV1alpha1AnnotationSetting(requestParameters.name, requestParameters.annotationSetting, options).then((request) => request(this.axios, this.basePath));
    }
}

