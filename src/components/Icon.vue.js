const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    name: {
        type: String,
        required: true,
    },
    fontSize: {
        type: String,
        default: "24px",
    },
    color: {
        type: String,
        default: "black",
    },
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        name: {
            type: String,
            required: true,
        },
        fontSize: {
            type: String,
            default: "24px",
        },
        color: {
            type: String,
            default: "black",
        },
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("material-symbols-outlined") }, ...{ style: (({ fontSize: __VLS_ctx.fontSize, color: __VLS_ctx.color })) }, });
    (__VLS_ctx.name);
    __VLS_styleScopedClasses['material-symbols-outlined'];
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
        return {};
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        fontSize: {
            type: String,
            default: "24px",
        },
        color: {
            type: String,
            default: "black",
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        fontSize: {
            type: String,
            default: "24px",
        },
        color: {
            type: String,
            default: "black",
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
