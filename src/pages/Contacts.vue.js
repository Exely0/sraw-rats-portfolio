import Button from "../components/Button.vue";
import MainLayout from "../layouts/MainLayout.vue";
import githubIcon from "../assets/icons/github.png";
import linkedinLogo from "../assets/icons/linkedin.png";
import mailLogo from "../assets/icons/mail.png";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    [MainLayout, MainLayout,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(MainLayout, new MainLayout({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    var __VLS_5 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex min-h-screen w-full items-center justify-center gap-6") }, });
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(Button, new Button({ text: (""), url: ("https://github.com/Exely0/"), }));
    const __VLS_7 = __VLS_6({ text: (""), url: ("https://github.com/Exely0/"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-1/2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("h-full w-auto invert") }, src: ((__VLS_ctx.githubIcon)), });
    __VLS_nonNullable(__VLS_10.slots).default;
    var __VLS_10;
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Button, new Button({ text: (""), url: ("https://www.linkedin.com/in/lorris-pons/"), }));
    const __VLS_12 = __VLS_11({ text: (""), url: ("https://www.linkedin.com/in/lorris-pons/"), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-1/2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("h-full w-auto invert") }, src: ((__VLS_ctx.linkedinLogo)), });
    __VLS_nonNullable(__VLS_15.slots).default;
    var __VLS_15;
    // @ts-ignore
    [Button, Button,];
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent(Button, new Button({ text: ("mail"), url: (""), }));
    const __VLS_17 = __VLS_16({ text: ("mail"), url: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("h-1/2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("h-full w-auto invert") }, src: ((__VLS_ctx.mailLogo)), });
    __VLS_nonNullable(__VLS_20.slots).default;
    var __VLS_20;
    __VLS_nonNullable(__VLS_4.slots).default;
    var __VLS_4;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-6'];
    __VLS_styleScopedClasses['h-1/2'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-auto'];
    __VLS_styleScopedClasses['invert'];
    __VLS_styleScopedClasses['h-1/2'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-auto'];
    __VLS_styleScopedClasses['invert'];
    __VLS_styleScopedClasses['h-1/2'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-auto'];
    __VLS_styleScopedClasses['invert'];
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
            Button: Button,
            MainLayout: MainLayout,
            githubIcon: githubIcon,
            linkedinLogo: linkedinLogo,
            mailLogo: mailLogo,
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
