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
import { ApiResponse } from './ApiResponse';
import { ApiLanguage } from './ApiLanguage';
import { ApiSystem } from './ApiSystem';
import { ApiUser } from './ApiUser';
import { ApiValidationField } from './ApiValidationField';
import { ApiOrder } from './ApiOrder';
import { ApiBusiness } from './ApiBusiness';
import axios from 'axios';
import { ApiConfig } from './ApiConfig';
import { ApiTranslation } from './ApiTranslation';
var Ordering = /** @class */ (function () {
    function Ordering(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.url, url = _c === void 0 ? 'https://apiv4.ordering.co' : _c, _d = _b.version, version = _d === void 0 ? 'v400' : _d, _e = _b.project, project = _e === void 0 ? 'demo' : _e, _f = _b.language, language = _f === void 0 ? 'en' : _f, _g = _b.accessToken, accessToken = _g === void 0 ? null : _g, _h = _b.apiKey, apiKey = _h === void 0 ? null : _h;
        this.url = url;
        this.version = version;
        this.project = project;
        this.language = language;
        this.accessToken = accessToken;
        this.apiKey = apiKey;
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
    Ordering.prototype.system = function () {
        return new ApiSystem(this);
    };
    Ordering.prototype.getRequestProps = function (options) {
        var _a, _b, _c;
        var root = options.system ? this.systemRoot : this.root;
        var query = options.query || {};
        if (Object.keys(query).length > 0) {
            for (var key in query) {
                query[key] = typeof query[key] === 'object' ? JSON.stringify(query[key]) : query[key];
            }
        }
        /**
         * Parse params from options and select attributes
         */
        var params = ((_b = (_a = options.query) === null || _a === void 0 ? void 0 : _a.params) === null || _b === void 0 ? void 0 : _b.split(',')) || [];
        params = params.concat(options.attributes || []);
        if (params.length > 0) {
            query.params = params.join(',');
        }
        /**
         * Parse conditions to filter api data
         */
        if (((_c = options.conditions) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            query.where = typeof options.conditions === 'object' ? JSON.stringify(options.conditions) : options.conditions;
        }
        /**
         * Parse conditions to filter api data
         */
        if (options.mode) {
            query.mode = options.mode;
        }
        /**
         * Parse headers from options and default
         */
        var headers = {};
        if (this.accessToken && !this.apiKey) {
            headers.Authorization = "Bearer " + this.accessToken;
        }
        if (this.apiKey) {
            headers['X-Api-Key'] = this.apiKey;
        }
        /**
         * Create Axios Option Request
         */
        var axiosOptions = {
            validateStatus: function (status) { return status < 500; },
            params: query || {},
            headers: Object.assign(headers, options.headers || {})
        };
        return [root, axiosOptions];
    };
    Ordering.prototype.get = function (path, options) {
        if (options === void 0) { options = { CastClass: null, json: true, system: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, root, axiosOptions, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], axiosOptions = _a[1];
                        return [4 /*yield*/, axios.get(root + path, axiosOptions)];
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
            var _a, root, axiosOptions, key, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], axiosOptions = _a[1];
                        if (options.json) {
                            for (key in data) {
                                if (typeof data[key] === 'object') {
                                    data[key] = JSON.stringify(data[key]);
                                }
                            }
                        }
                        return [4 /*yield*/, axios.post(root + path, data, axiosOptions)];
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
            var _a, root, axiosOptions, key, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], axiosOptions = _a[1];
                        if (options.json) {
                            for (key in data) {
                                if (typeof data[key] === 'object') {
                                    data[key] = JSON.stringify(data[key]);
                                }
                            }
                        }
                        return [4 /*yield*/, axios.put(root + path, data, axiosOptions)];
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
            var _a, root, axiosOptions, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.getRequestProps(options), root = _a[0], axiosOptions = _a[1];
                        return [4 /*yield*/, axios.delete(root + path, axiosOptions)];
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