"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinWithDefaultOptions = exports.getDefaultOptions = void 0;
function assertOnResult() {
    // Assert nothing
}
function assertOnError() {
    // Assert nothing
}
function getDefaultOptions() {
    return {
        assertOnError: assertOnError,
        assertOnResult: assertOnResult,
        checkForExcessKeys: true,
    };
}
exports.getDefaultOptions = getDefaultOptions;
function joinWithDefaultOptions(provided) {
    return __assign(__assign({}, getDefaultOptions()), provided);
}
exports.joinWithDefaultOptions = joinWithDefaultOptions;
