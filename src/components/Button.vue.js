import { ref } from "vue";
import { useHyperspaceStore } from "../store/hyperspace";
import { useSettingsStore } from "../store/settings";
import { storeToRefs } from "pinia";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const emit = defineEmits(["fade-away"]);
const hyperspaceStore = useHyperspaceStore();
const settingsStore = useSettingsStore();
const { hyperspaceEnabled } = storeToRefs(settingsStore);
const props = defineProps();
const textContainer = ref(null);
const dynamicBg = ref(null);
const handleMouseEnter = (event) => {
    if (!textContainer.value || !dynamicBg.value)
        return;
    const container = textContainer.value;
    const bg = dynamicBg.value;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    bg.style.left = `${x}px`;
    bg.style.top = `${y}px`;
};
const handleMouseLeave = (event) => {
    if (!textContainer.value || !dynamicBg.value)
        return;
    const container = textContainer.value;
    const bg = dynamicBg.value;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    bg.style.left = `${x}px`;
    bg.style.top = `${y}px`;
};
const handleClick = () => {
    if (props.text == "mail") {
        return;
    }
    if (hyperspaceEnabled.value) {
        hyperspaceStore.triggerHyperspaceChan = true;
        emit("fade-away", true);
        setTimeout(() => {
            window.open(props.url, "_blank");
        }, 2100);
    }
    else {
        window.open(props.url, "_blank");
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.handleClick) }, ...{ class: ("group relative aspect-square w-[250px] hover:cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMouseenter: (__VLS_ctx.handleMouseEnter) }, ...{ onMouseleave: (__VLS_ctx.handleMouseLeave) }, ...{ class: ("bg-black-500 group absolute z-10 flex aspect-square w-10/12 translate-x-10 translate-y-10 cursor-pointer items-center justify-center overflow-hidden border-2 border-yellow-500 bg-black text-5xl font-semibold text-white transition-all duration-150 group-hover:translate-x-0 group-hover:translate-y-0") }, ref: ("textContainer"), });
    // @ts-ignore navigation for `const textContainer = ref()`
    __VLS_ctx.textContainer;
    var __VLS_0 = {};
    if (__VLS_ctx.text == 'mail') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("mailto:lorris.pons@epitech.eu"), ...{ class: ("absolute h-full w-full") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ref: ("dynamicBg"), ...{ class: ("absolute -z-10 h-0 w-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500 transition-all duration-500 group-hover:h-[300%] group-hover:w-[300%]") }, });
    // @ts-ignore navigation for `const dynamicBg = ref()`
    __VLS_ctx.dynamicBg;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute z-0 aspect-square w-10/12 border-2 border-yellow-500 transition-all duration-300 group-hover:translate-x-10 group-hover:translate-y-10") }, });
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['w-[250px]'];
    __VLS_styleScopedClasses['hover:cursor-pointer'];
    __VLS_styleScopedClasses['bg-black-500'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['z-10'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['w-10/12'];
    __VLS_styleScopedClasses['translate-x-10'];
    __VLS_styleScopedClasses['translate-y-10'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['overflow-hidden'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-yellow-500'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['text-5xl'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-150'];
    __VLS_styleScopedClasses['group-hover:translate-x-0'];
    __VLS_styleScopedClasses['group-hover:translate-y-0'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['h-full'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['-z-10'];
    __VLS_styleScopedClasses['h-0'];
    __VLS_styleScopedClasses['w-0'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['-translate-y-1/2'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['bg-yellow-500'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-500'];
    __VLS_styleScopedClasses['group-hover:h-[300%]'];
    __VLS_styleScopedClasses['group-hover:w-[300%]'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['z-0'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['w-10/12'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-yellow-500'];
    __VLS_styleScopedClasses['transition-all'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['group-hover:translate-x-10'];
    __VLS_styleScopedClasses['group-hover:translate-y-10'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "textContainer": __VLS_nativeElements['div'],
        "dynamicBg": __VLS_nativeElements['div'],
    };
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
            textContainer: textContainer,
            dynamicBg: dynamicBg,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
            handleClick: handleClick,
        };
    },
    emits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    emits: {},
    __typeProps: {},
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
