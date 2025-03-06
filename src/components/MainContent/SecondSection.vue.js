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
var icon_instagram_svg_1 = __importDefault(require("@/images/icon-instagram.svg"));
var icon_twitter_svg_1 = __importDefault(require("@/images/icon-twitter.svg"));
var icon_youtube_svg_1 = __importDefault(require("@/images/icon-youtube.svg"));
var icon_up_svg_1 = __importDefault(require("@/images/icon-up.svg"));
var icon_down_svg_1 = __importDefault(require("@/images/icon-down.svg"));
var data = (0, vue_1.reactive)({
    0: {
        title: 'Page Views',
        img: icon_facebook_svg_1.default,
        arrow: icon_up_svg_1.default,
        num: 87,
        procent: 3,
    },
    1: {
        title: 'Likes',
        img: icon_facebook_svg_1.default,
        arrow: icon_down_svg_1.default,
        num: 52,
        procent: 2,
    },
    2: {
        title: 'Likes',
        img: icon_instagram_svg_1.default,
        arrow: icon_up_svg_1.default,
        num: 5462,
        procent: 2257,
    },
    3: {
        title: 'Profile Views',
        img: icon_instagram_svg_1.default,
        arrow: icon_up_svg_1.default,
        num: '52k',
        procent: 1375,
    },
    4: {
        title: 'Retweets',
        img: icon_twitter_svg_1.default,
        arrow: icon_up_svg_1.default,
        num: 117,
        procent: 303,
    },
    5: {
        title: 'Likes',
        img: icon_twitter_svg_1.default,
        arrow: icon_up_svg_1.default,
        num: 507,
        procent: 553,
    },
    6: {
        title: 'Likes',
        img: icon_youtube_svg_1.default,
        arrow: icon_down_svg_1.default,
        num: 107,
        procent: 19,
    },
    7: {
        title: 'Total views',
        img: icon_youtube_svg_1.default,
        arrow: icon_down_svg_1.default,
        num: 1407,
        procent: 12,
    },
});
console.log(data[0].arrow === icon_up_svg_1.default); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("text-[2.5rem] font-w700 pb-[2.2rem]") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("grid gap-y-[2rem] md:flex md:flex-wrap md:justify-center md:gap-[3rem] xl:justify-between") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.data)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ key: ((index)) }, { class: ("p-[2.5rem] bg-light-cardBg rounded-xl grid gap-y-[2.8rem] dark:bg-dark-cardBg md:w-[28rem] lg:hover:bg-light-hover dark:lg:hover:bg-dark-hover lg:cursor-pointer") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-w700 text-light-text  dark:text-dark-text") }));
        (item.title);
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((item.img)), alt: ("facebook") }, { class: ("w-[2.2rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center justify-between") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-w700 text-[4rem] text-light-darkText leading-[1] dark:text-dark-whiteText") }));
        (item.num);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("flex items-center gap-x-[.5rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)(__assign({ src: ((item.arrow)), alt: ("up") }, { class: ("w-[1rem]") }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("font-w700") }, { class: ((item.arrow === __VLS_ctx.up ? 'text-primary-limeGreen' : 'text-primary-brightRed')) }));
        (item.procent);
    }
    ['text-[2.5rem]', 'font-w700', 'pb-[2.2rem]', 'grid', 'gap-y-[2rem]', 'md:flex', 'md:flex-wrap', 'md:justify-center', 'md:gap-[3rem]', 'xl:justify-between', 'p-[2.5rem]', 'bg-light-cardBg', 'rounded-xl', 'grid', 'gap-y-[2.8rem]', 'dark:bg-dark-cardBg', 'md:w-[28rem]', 'lg:hover:bg-light-hover', 'dark:lg:hover:bg-dark-hover', 'lg:cursor-pointer', 'flex', 'items-center', 'justify-between', 'font-w700', 'text-light-text', 'dark:text-dark-text', 'w-[2.2rem]', 'flex', 'items-center', 'justify-between', 'font-w700', 'text-[4rem]', 'text-light-darkText', 'leading-[1]', 'dark:text-dark-whiteText', 'flex', 'items-center', 'gap-x-[.5rem]', 'w-[1rem]', 'font-w700',];
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
