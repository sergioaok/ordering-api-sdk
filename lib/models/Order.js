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
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(order, api) {
        if (order === void 0) { order = {}; }
        var _this = _super.call(this, order, api, ['customer', 'business']) || this;
        Object.entries(order).map(function (_a) {
            var key = _a[0], value = _a[1];
            _this[key] = value;
        });
        return _this;
    }
    /**
     * Get indentifier of model
     */
    Order.prototype.getId = function () {
        return this.id;
    };
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            if (!this.products) {
                return 0;
            }
            var subtotal = this.products.reduce(function (total, product) {
                var totaloptions = product.options.reduce(function (totalOption, option) {
                    var totalSuboptions = option.suboptions.reduce(function (totalSuboption, suboption) {
                        var price = (suboption.position && suboption.position !== 'whole') ? suboption.half_price : suboption.price;
                        var quantity = (option.allow_suboption_quantity && suboption.quantity > 1) ? suboption.quantity : 1;
                        return totalSuboption + (price * quantity);
                    }, 0);
                    return totalOption + totalSuboptions;
                }, 0);
                return total + ((product.price + totaloptions) * product.quantity);
            }, 0);
            return subtotal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "deliveryFee", {
        get: function () {
            return (!this.delivery_type || this.delivery_type === 1) ? this.delivery_zone_price : 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "serviceFee", {
        get: function () {
            return (this.subtotal - this.discount) * (this.service_fee / 100);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "totalTax", {
        get: function () {
            return (this.subtotal * this.tax) / (this.tax + 100);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "totalDriverTip", {
        get: function () {
            return (this.subtotal - this.totalTax) * (this.driver_tip / 100);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "total", {
        get: function () {
            return this.subtotal + this.serviceFee + this.deliveryFee + this.totalDriverTip + (this.tax_type === 2 ? this.totalTax : 0) - this.discount;
        },
        enumerable: false,
        configurable: true
    });
    return Order;
}(Model));
export { Order };
//# sourceMappingURL=Order.js.map