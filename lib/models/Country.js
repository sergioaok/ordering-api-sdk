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
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country(country, api) {
        if (country === void 0) { country = {}; }
        var _this = _super.call(this, country, api) || this;
        Object.entries(country).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    /**
     * Get indentifier of model
     */
    Country.prototype.getId = function () {
        return this.id;
    };
    return Country;
}(Model));
export { Country };
//# sourceMappingURL=Country.js.map