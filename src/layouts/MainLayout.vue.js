import { watch } from "vue";
import { storeToRefs } from "pinia";
import controlBoard from "../components/controlBoard.vue";
import { useHyperspaceStore } from "../store/hyperspace";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const hyperspaceStore = useHyperspaceStore();
const { triggerFadeAway } = storeToRefs(hyperspaceStore);
watch(triggerFadeAway, () => {
    const ele = document.getElementsByTagName("main")[0];
    ele.classList.remove("fade-in");
    ele.classList.add("fade-away");
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("min-h-screen w-full") }, });
    // @ts-ignore
    [controlBoard,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(controlBoard, new controlBoard({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("main fade-in") }, });
    var __VLS_5 = {};
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['main'];
    __VLS_styleScopedClasses['fade-in'];
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
            controlBoard: controlBoard,
        };
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
