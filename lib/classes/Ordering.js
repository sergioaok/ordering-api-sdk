var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { ApiResponse } from './ApiResponse';
import { ApiLanguage } from './ApiLanguage';
import { ApiSystem } from './ApiSystem';
import { ApiUser } from './ApiUser';
import { ApiValidationField } from './ApiValidationField';
import { ApiOrder } from './ApiOrder';
import { ApiBusiness } from './ApiBusiness';
import { ApiConfig } from './ApiConfig';
import { ApiTranslation } from './ApiTranslation';
import { ApiPage } from './ApiPage';
import { ApiCountry } from './ApiCountry';
import { ApiOrderOption } from './ApiOrderOption';
import { ApiCart } from './ApiCart';
import { ApiPaymentCards } from './ApiPaymentCards';
var Ordering = /** @class */ (function () {
    function Ordering(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.url, url = _c === void 0 ? 'https://apiv4.ordering.co' : _c, _d = _b.version, version = _d === void 0 ? 'v400' : _d, _e = _b.project, project = _e === void 0 ? 'demo' : _e, _f = _b.language, language = _f === void 0 ? 'en' : _f, _g = _b.accessToken, accessToken = _g === void 0 ? null : _g, _h = _b.apiKey, apiKey = _h === void 0 ? null : _h, _j = _b.appId, appId = _j === void 0 ? null : _j;
        this.url = url;
        this.version = version;
        this.project = project;
        this.language = language;
        this.accessToken = accessToken;
        this.apiKey = apiKey;
        this.appId = appId;
    }
    Object.defineProperty(Ordering.prototype, "root", {
        get: function () {
            return this.url + "/" + this.version + "/" + this.language + "/" + this.project;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ordering.prototype, "systemRoot", {
        get: function () {
            return this.url + "/" + this.version;
        },
        enumerable: false,
        configurable: true
    });
    Ordering.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    Ordering.prototype.setApiKey = function (apiKey) {
        this.apiKey = apiKey;
        return this;
    };
    Ordering.prototype.setAppId = function (appId) {
        this.appId = appId;
        return this;
    };
    Ordering.prototype.setUrl = function (url) {
        this.url = url;
        return this;
    };
    Ordering.prototype.setProject = function (project) {
        this.project = project;
        return this;
    };
    Ordering.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    Ordering.prototype.setLanguage = function (language) {
        this.language = language;
        return this;
    };
    Ordering.prototype.users = function (userId) {
        if (userId === void 0) { userId = null; }
        return new ApiUser(this, userId);
    };
    Ordering.prototype.orders = function (orderId) {
        if (orderId === void 0) { orderId = null; }
        return new ApiOrder(this, orderId);
    };
    Ordering.prototype.configs = function (configId) {
        if (configId === void 0) { configId = null; }
        return new ApiConfig(this, configId);
    };
    Ordering.prototype.businesses = function (businessId) {
        return new ApiBusiness(this, businessId);
    };
    Ordering.prototype.validationFields = function (fieldId) {
        return new ApiValidationField(this, fieldId);
    };
    Ordering.prototype.languages = function (languageId) {
        return new ApiLanguage(this, languageId);
    };
    Ordering.prototype.translations = function (translationId) {
        return new ApiTranslation(this, translationId);
    };
    Ordering.prototype.pages = function (pageId) {
        return new ApiPage(this, pageId);
    };
    Ordering.prototype.countries = function (countryId) {
        return new ApiCountry(this, countryId);
    };
    Ordering.prototype.orderOptions = function (orderOptionId) {
        return new ApiOrderOption(this, orderOptionId);
    };
    Ordering.prototype.carts = function (cartId) {
        return new ApiCart(this, cartId);
    };
    Ordering.prototype.paymentCards = function (bussinessId, userId, cardId) {
        return new ApiPaymentCards(this, bussinessId, userId, cardId);
    };
    Ordering.prototype.system = function () {
        return new ApiSystem(this);
    };
    Ordering.prototype.getRequestProps = function (options) {
        var _a;
        var root = options.system ? this.systemRoot : this.root;
        var query = options.query, mode = options.mode, conditions = options.conditions, headers = options.headers, otherOptions = __rest(options
        /**
         * Parse query
         */
        , ["query", "mode", "conditions", "headers"]);
        /**
         * Parse query
         */
        var _query = query || {};
        if (_query && Object.keys(_query).length > 0) {
            for (var key in _query) {
                _query[key] = typeof _query[key] === 'object' ? JSON.stringify(_query[key]) : _query[key];
            }
        }
        /**
         * Parse params from options and select attributes
         */
        var params = ((_a = _query === null || _query === void 0 ? void 0 : _query.params) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
        params = params.concat(options.attributes || []);
        if (params.length > 0) {
            _query.params = params.join(',');
        }
        /**
         * Parse conditions to filter api data
         */
        if (conditions) {
            _query.where = typeof conditions === 'object' ? JSON.stringify(conditions) : conditions;
        }
        /**
         * Parse conditions to filter api data
         */
        if (mode) {
            _query.mode = options.mode;
        }
        /**
         * Parse headers from options and default
         */
        var authHeaders = {};
        if (this.accessToken && !this.apiKey) {
            authHeaders.Authorization = "Bearer " + this.accessToken;
        }
        if (this.apiKey) {
            authHeaders['X-Api-Key'] = this.apiKey;
        }
        if (this.appId) {
            authHeaders['X-APP-X'] = this.appId;
        }
        /**
         * Create Option Request
         */
        var _options = __assign(__assign({}, otherOptions), { 
            // validateStatus: status => status < 500,
            params: _query || {}, headers: Object.assign(authHeaders, headers || {}) });
        return [root, _options];
    };
    Ordering.prototype.makeRequest = function (method, url, data, options) {
        var promise = new Promise(function (resolve, reject) {
            var xhr = new window.XMLHttpRequest();
            /**
             * Parse query to request
             */
            var query = Object.entries(options.params || {}).map(function (entry) {
                return entry[0] + "=" + entry[1];
            }).join('&');
            xhr.open(method, url + (query ? "?" + query : ''));
            /**
             * Add headers to request
             */
            Object.entries(options.headers || {}).forEach(function (entry) {
                xhr.setRequestHeader(entry[0], entry[1]);
            });
            /**
             * Create cancel request
             */
            if (options.cancelToken && typeof options.cancelToken === 'object') {
                options.cancelToken.cancel = function () {
                    xhr.abort();
                };
            }
            xhr.onload = function () {
                if (this.status < 500) {
                    var data_1 = options.json ? JSON.parse(this.response) : this.response;
                    resolve({
                        request: this,
                        data: data_1,
                        status: this.status,
                        statusText: this.statusText
                    });
                }
                else {
                    reject(new Error('Internal error'));
                }
            };
            xhr.onerror = function (err) {
                reject(err);
            };
            if (options.json) {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(data ? JSON.stringify(data) : null);
            }
            else {
                xhr.send();
            }
        });
        return promise;
    };
    Ordering.prototype.get = function (path, options) {
        if (options === void 0) { options = { CastClass: null, json: true, system: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, root, reqOptions, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], reqOptions = _a[1];
                        return [4 /*yield*/, this.makeRequest('GET', root + path, null, reqOptions)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, new ApiResponse(response, options, options.api)];
                }
            });
        });
    };
    Ordering.prototype.post = function (path, data, options) {
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = { CastClass: null, json: true, system: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, root, reqOptions, key, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], reqOptions = _a[1];
                        if (options.json) {
                            for (key in data) {
                                if (data[key] !== null && typeof data[key] === 'object') {
                                    data[key] = JSON.stringify(data[key]);
                                }
                            }
                        }
                        return [4 /*yield*/, this.makeRequest('POST', root + path, data, reqOptions)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, new ApiResponse(response, options, options.api)];
                }
            });
        });
    };
    Ordering.prototype.put = function (path, data, options) {
        if (data === void 0) { data = {}; }
        if (options === void 0) { options = { CastClass: null, json: true, system: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, root, reqOptions, key, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], reqOptions = _a[1];
                        if (options.json) {
                            for (key in data) {
                                if (data[key] !== null && typeof data[key] === 'object') {
                                    data[key] = JSON.stringify(data[key]);
                                }
                            }
                        }
                        return [4 /*yield*/, this.makeRequest('PUT', root + path, data, reqOptions)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, new ApiResponse(response, options, options.api)];
                }
            });
        });
    };
    Ordering.prototype.delete = function (path, options) {
        if (options === void 0) { options = { CastClass: null, json: true, system: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, root, reqOptions, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], reqOptions = _a[1];
                        return [4 /*yield*/, this.makeRequest('DELETE', root + path, null, reqOptions)];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, new ApiResponse(response, options, options.api)];
                }
            });
        });
    };
    return Ordering;
}());
export { Ordering };
//# sourceMappingURL=Ordering.js.map