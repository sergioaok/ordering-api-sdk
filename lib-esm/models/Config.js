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
import { Model } from './Model';
var Config = /** @class */ (function (_super) {
    __extends(Config, _super);
    function Config(config, api) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, config, api) || this;
        Object.entries(config).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    /**
     * Get indentifier of model
     */
    Config.prototype.getId = function () {
        return this.id;
    };
    return Config;
}(Model));
export { Config };
//# sourceMappingURL=Config.js.map