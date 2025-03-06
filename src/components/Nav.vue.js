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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var isLight = (0, vue_1.ref)(false);
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    isLight.value = false;
}
else {
    document.documentElement.classList.add('light');
    isLight.value = true;
}
(0, vue_1.watch)(isLight, function (newValue) {
    if (newValue) {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
    else {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
    }
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: ("px-[3rem] py-[5rem] container md:flex md:items-center md:justify-between") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("pb-[2rem] border-b-[1px] border-light-darkText dark:border-light-text md:border-none md:pb-0") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)(__assign({ class: ("font-w700 text-light-darkText text-[2.5rem] md:text-[3.3rem] dark:text-dark-whiteText") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-w700 text-light-text dark:text-dark-text md:text-[1.7rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("mt-[2.3rem] flex justify-between items-center md:gap-x-[1.7rem]") }, { class: ((!__VLS_ctx.isLight && 'colorHover')) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-light-text font-w700 dark:text-dark-text transition-colors select-none:") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.isLight = !__VLS_ctx.isLight;
        } }, { type: ("button"), 'aria-label': ("toggle theme button") }), { class: ("py-[1.5rem] px-[3rem] rounded-badge relative before:absolute before:w-[2.2rem] before:h-[2.2rem] before:rounded-full before:translate-y-[-50%] before:top-1/2 before:translate-x-[-50%] before:transition-all before:duration-300 dark:bg-gradient-to-r lg:cursor-pointer") }), { class: (([
            __VLS_ctx.isLight
                ? 'before:left-[75%] before:bg-dark-whiteText bg-light-toggle'
                : 'before:left-[25%] before:dark:bg-light-darkText dark:from-dark-bFrom dark:to-dark-bTo',
        ])) }));
    ['px-[3rem]', 'py-[5rem]', 'container', 'md:flex', 'md:items-center', 'md:justify-between', 'pb-[2rem]', 'border-b-[1px]', 'border-light-darkText', 'dark:border-light-text', 'md:border-none', 'md:pb-0', 'font-w700', 'text-light-darkText', 'text-[2.5rem]', 'md:text-[3.3rem]', 'dark:text-dark-whiteText', 'font-w700', 'text-light-text', 'dark:text-dark-text', 'md:text-[1.7rem]', 'mt-[2.3rem]', 'flex', 'justify-between', 'items-center', 'md:gap-x-[1.7rem]', 'text-light-text', 'font-w700', 'dark:text-dark-text', 'transition-colors', 'select-none:', 'py-[1.5rem]', 'px-[3rem]', 'rounded-badge', 'relative', 'before:absolute', 'before:w-[2.2rem]', 'before:h-[2.2rem]', 'before:rounded-full', 'before:translate-y-[-50%]', 'before:top-1/2', 'before:translate-x-[-50%]', 'before:transition-all', 'before:duration-300', 'dark:bg-gradient-to-r', 'lg:cursor-pointer',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {
            isLight: isLight,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
