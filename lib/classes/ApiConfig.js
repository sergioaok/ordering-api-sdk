var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Config } from '../models/Config';
import { ApiBase } from './ApiBase';
/**
 * Class to configs api control
 */
var ApiConfig = /** @class */ (function (_super) {
    __extends(ApiConfig, _super);
    function ApiConfig(ordering, configId) {
        var _this = _super.call(this, ordering) || this;
        _this.configId = configId;
        return _this;
    }
    /**
     * Replace current modelId
     * @param id ID to replace current api modelId
     */
    ApiConfig.prototype.setModelId = function (id) {
        this.configId = id;
    };
    /**
     * Get a config if configId is set else get all
     * @param {RequestOptionsProps} options Params, headers and other options
     */
    ApiConfig.prototype.get = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.configId && this.conditions) {
                            throw new Error('The `where` function is not compatible with configs(configId). Example ordering.configs().where(contitions).get()');
                        }
                        url = '/configs' + (this.configId ? "/" + this.configId : '');
                        return [4 /*yield*/, this.makeRequest('GET', url, undefined, Config, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Update a config if configId is set else create config
     * @param {ConfigProps} config Attributes to create or update config
     * @param {RequestOptionsProps} options Params, headers and other options
     */
    ApiConfig.prototype.save = function (config, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, response, _a, error, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = '/configs' + (this.configId ? "/" + this.configId : '');
                        return [4 /*yield*/, this.makeRequest(this.configId ? 'PUT' : 'POST', url, config, Config, options)];
                    case 1:
                        response = _b.sent();
                        _a = response.content, error = _a.error, result = _a.result;
                        if (!error && !this.configId) {
                            this.configId = result.id;
                        }
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * Delete a config by configId
     * @param {RequestOptionsProps} options Params, headers and other options
     */
    ApiConfig.prototype.delete = function (options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.configId) {
                            throw new Error('`configId` is require to delete. Example: ordering.configs(configId).delete()');
                        }
                        url = "/configs/" + this.configId;
                        return [4 /*yield*/, this.makeRequest('DELETE', url, undefined, null, options)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return ApiConfig;
}(ApiBase));
export { ApiConfig };
//# sourceMappingURL=ApiConfig.js.map