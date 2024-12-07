import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./Icon.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const doubleArrow = ref("keyboard_double_arrow_down");
gsap.registerPlugin(ScrollTrigger);
const triggerFadeAway = () => {
    const ele = document.getElementsByClassName("scroll-trigger-intro")[0];
    ele.classList.add("fade-away");
};
onMounted(() => {
    gsap.to(".text-animation", {
        scrollTrigger: {
            trigger: ".scroll-trigger-intro",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
        bottom: "100%",
    });
    gsap.to(".text-animation", {
        scrollTrigger: {
            trigger: ".scroll-trigger-intro",
            start: "30% top",
            end: "60% top",
            scrub: true,
        },
        opacity: 0,
    });
    gsap.to(".intro-container", {
        scrollTrigger: {
            trigger: ".scroll-trigger-intro",
            start: "60% top",
            end: "100%",
            scrub: true,
        },
        rotateX: 0,
        transformPerspective: 3000,
    });
    gsap.to(".btn-1", {
        scrollTrigger: {
            trigger: ".scroll-trigger-intro",
            start: "30% top",
            end: "60%",
            scrub: true,
        },
        translateY: 0,
    });
    gsap.to(".btn-2", {
        scrollTrigger: {
            trigger: ".scroll-trigger-intro",
            start: "40% top",
            end: "70%",
            scrub: true,
        },
        translateY: 0,
    });
    gsap.to(".btn-3", {
        scrollTrigger: {
            trigger: ".scroll-trigger-intro",
            start: "50% top",
            end: "80%",
            scrub: true,
        },
        translateY: 0,
    });
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("scroll-trigger-intro h-[12000px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sticky top-0 flex h-screen w-full justify-center overflow-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("intro-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-animation text-xl font-semibold text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btn-container absolute bottom-0 flex h-screen w-full items-center justify-center gap-10 transition-all") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btn-1 translate-y-[1000px] text-6xl text-[#fdbf13]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-14 text-center") }, });
    // @ts-ignore
    [Icon,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Icon, new Icon({ name: ("keyboard_double_arrow_down"), color: ("#fdbf13"), fontSize: ("120px"), }));
    const __VLS_1 = __VLS_0({ name: ("keyboard_double_arrow_down"), color: ("#fdbf13"), fontSize: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_styleScopedClasses['scroll-trigger-intro'];
    __VLS_styleScopedClasses['h-[12000px]'];
    __VLS_styleScopedClasses['sticky'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['intro-container'];
    __VLS_styleScopedClasses['text-animation'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['btn-container'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-10'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['btn-1'];
    __VLS_styleScopedClasses['translate-y-[1000px]'];
    __VLS_styleScopedClasses['text-6xl'];
    __VLS_styleScopedClasses['text-[#fdbf13]'];
    __VLS_styleScopedClasses['mt-14'];
    __VLS_styleScopedClasses['text-center'];
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Icon: Icon,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
