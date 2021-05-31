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
var Translation = /** @class */ (function (_super) {
    __extends(Translation, _super);
    function Translation(translation, api) {
        if (translation === void 0) { translation = {}; }
        var _this = _super.call(this, translation, api) || this;
        Object.entries(translation).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    /**
     * Get indentifier of model
     */
    Translation.prototype.getId = function () {
        return this.id;
    };
    return Translation;
}(Model));
export { Translation };
//# sourceMappingURL=Translation.js.map