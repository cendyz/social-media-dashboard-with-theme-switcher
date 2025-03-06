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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var icon_facebook_svg_1 = __importDefault(require("@/images/icon-facebook.svg"));
var icon_twitter_svg_1 = __importDefault(require("@/images/icon-twitter.svg"));
var icon_instagram_svg_1 = __importDefault(require("@/images/icon-instagram.svg"));
var icon_youtube_svg_1 = __importDefault(require("@/images/icon-youtube.svg"));
var icon_up_svg_1 = __importDefault(require("@/images/icon-up.svg"));
var icon_down_svg_1 = __importDefault(require("@/images/icon-down.svg"));
var data = (0, vue_1.reactive)({
    0: {
        img: icon_facebook_svg_1.default,
        name: '@nathanf',
        date: 1987,
        num: 12,
        border: 'bg-social-facebook',
    },
    1: {
        img: icon_twitter_svg_1.default,
        name: '@nathanf',
        date: 1044,
        num: 99,
        border: 'bg-social-twitter',
    },
    2: {
        img: icon_instagram_svg_1.default,
        name: '@realnathanf',
        date: '11k',
        num: 1099,
        border: 'bg-gradient-to-r from-gradient-instagramFrom to-gradient-instagramTo',
    },
    3: {
        img: icon_youtube_svg_1.default,
        name: '@realnathanf',
        date: 8239,
        num: 144,
        border: 'bg-social-youtube',
    },
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)(__assign({ class: ("grid gap-y-[3.3rem] text-[1.4rem] md:flex md:justify-center md:gap-[3rem] md:flex-wrap xl:justify-between") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ key: ((index)) }, { class: ("pt-[.5rem] text-center rounded-xl overflow-hidden") }), { class: ((item.border)) }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("bg-light-cardBg h-full py-[2.5rem] dark:bg-dark-cardBg md:w-[28rem] lg:hover:bg-light-hover lg:cursor-pointer dark:lg:hover:bg-dark-hover") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-center gap-x-[1rem] mb-[2.5rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((item.img)), alt: ("facebook logo") }, { class: ("block w-[2rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-w700 text-light-text dark:text-dark-text pt-[.5rem]") }));
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("text-light-darkText font-w700 text-[7rem] leading-[1] dark:text-dark-whiteText") }));
        (item.date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("uppercase text-light-text dark:text-dark-text font-w400 tracking-[4px]") }));
        (index == 3 ? 'subscribers' : 'followers');
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-center mt-[2rem] gap-x-[.6rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((index == 3 ? __VLS_ctx.down : __VLS_ctx.up)), alt: ("up") }, { class: ("w-[1rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-w700") }, { class: ((index == 3 ? 'text-primary-brightRed' : ' text-primary-limeGreen')) }));
        (item.num);
    }
    ['grid', 'gap-y-[3.3rem]', 'text-[1.4rem]', 'md:flex', 'md:justify-center', 'md:gap-[3rem]', 'md:flex-wrap', 'xl:justify-between', 'pt-[.5rem]', 'text-center', 'rounded-xl', 'overflow-hidden', 'bg-light-cardBg', 'h-full', 'py-[2.5rem]', 'dark:bg-dark-cardBg', 'md:w-[28rem]', 'lg:hover:bg-light-hover', 'lg:cursor-pointer', 'dark:lg:hover:bg-dark-hover', 'flex', 'items-center', 'justify-center', 'gap-x-[1rem]', 'mb-[2.5rem]', 'block', 'w-[2rem]', 'font-w700', 'text-light-text', 'dark:text-dark-text', 'pt-[.5rem]', 'text-light-darkText', 'font-w700', 'text-[7rem]', 'leading-[1]', 'dark:text-dark-whiteText', 'uppercase', 'text-light-text', 'dark:text-dark-text', 'font-w400', 'tracking-[4px]', 'flex', 'items-center', 'justify-center', 'mt-[2rem]', 'gap-x-[.6rem]', 'w-[1rem]', 'font-w700',];
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
            up: icon_up_svg_1.default,
            down: icon_down_svg_1.default,
            data: data,
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
