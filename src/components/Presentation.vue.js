import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default (await import('vue')).defineComponent({
    mounted() {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".pres-text", {
            scrollTrigger: {
                trigger: ".welcome-container",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
            transform: "scale(0%)",
            opacity: 0,
        });
        // gsap.to(".pres-text-1", {
        //   scrollTrigger: {
        //     trigger: ".welcome-container",
        //     start: "top top",
        //     end: "bottom top",
        //     scrub: true,
        //   },
        //   transform: "translateX(-2000px)",
        // });
        // gsap.to(".pres-text-2", {
        //   scrollTrigger: {
        //     trigger: ".welcome-container",
        //     start: "top top",
        //     end: "bottom top",
        //     scrub: true,
        //   },
        //   transform: "translateX(2000px)",
        // });
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['pres-text'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("welcome-container h-[6000px] w-screen") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-screen w-full sticky top-0 flex items-center justify-center overflow-x-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-[12rem] text-center pres-text uppercase") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("pres-text-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("pres-text-2") }, });
    __VLS_styleScopedClasses['welcome-container'];
    __VLS_styleScopedClasses['h-[6000px]'];
    __VLS_styleScopedClasses['w-screen'];
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['sticky'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['overflow-x-hidden'];
    __VLS_styleScopedClasses['text-[12rem]'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['pres-text'];
    __VLS_styleScopedClasses['uppercase'];
    __VLS_styleScopedClasses['pres-text-1'];
    __VLS_styleScopedClasses['pres-text-2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
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
let __VLS_self;
