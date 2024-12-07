import { ref, onMounted, onUnmounted } from "vue";
import MainLayout from "../layouts/MainLayout.vue";
import CV from "../assets/pdf/cv lorris pons.pdf";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const embedWidth = ref(0);
const embedHeight = ref(0);
const updateEmbedDimensions = () => {
    embedWidth.value = (2 * window.innerWidth) / 5;
    embedHeight.value = window.innerHeight * 0.7;
};
onMounted(() => {
    updateEmbedDimensions();
    window.addEventListener("resize", updateEmbedDimensions);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateEmbedDimensions);
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
    // @ts-ignore
    [MainLayout, MainLayout,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(MainLayout, new MainLayout({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    var __VLS_5 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex min-h-screen w-full items-center justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-[5%]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.embed)({ src: ((__VLS_ctx.CV)), width: ((__VLS_ctx.embedWidth)), height: ((__VLS_ctx.embedHeight)), });
    __VLS_nonNullable(__VLS_4.slots).default;
    var __VLS_4;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['mb-[5%]'];
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
            MainLayout: MainLayout,
            CV: CV,
            embedWidth: embedWidth,
            embedHeight: embedHeight,
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
