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
var Language = /** @class */ (function (_super) {
    __extends(Language, _super);
    // Use name 'language' because has 'default' attribute and is a javascript keyword
    function Language(language, api) {
        if (language === void 0) { language = {}; }
        var _this = _super.call(this, language, api) || this;
        Object.entries(language).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    /**
     * Get indentifier of model
     */
    Language.prototype.getId = function () {
        return this.id;
    };
    return Language;
}(Model));
export { Language };
//# sourceMappingURL=Language.js.map