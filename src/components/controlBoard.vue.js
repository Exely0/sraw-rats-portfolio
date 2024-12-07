import { ref } from "vue";
import router from "../router";
import { useHyperspaceStore } from "../store/hyperspace";
import { useSettingsStore } from "../store/settings";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const hyperspaceStore = useHyperspaceStore();
const settingsStore = useSettingsStore();
const { hyperspaceEnabled, movingStars } = storeToRefs(settingsStore);
const { triggerFadeAway } = storeToRefs(hyperspaceStore);
const route = useRoute();
const blockNewRoute = ref(false);
const handleClick = (rroute) => {
    if (route.path == rroute) {
        return;
    }
    if (blockNewRoute.value && hyperspaceEnabled.value) {
        return;
    }
    if (hyperspaceEnabled.value) {
        blockNewRoute.value = true;
        setTimeout(() => {
            blockNewRoute.value = false;
        }, 2000);
        hyperspaceStore.triggerHyperspaceChan = true;
        triggerFadeAway.value = !triggerFadeAway.value;
        setTimeout(() => {
            router.push(rroute).catch((err) => {
                console.error("Navigation error:", err);
            });
        }, 2100);
    }
    else {
        router.push(rroute).catch((err) => {
            console.error("Navigation error:", err);
        });
    }
};
const pages = {
    0: {
        name: "home",
        route: "/",
    },
    1: {
        name: "projects",
        route: "/projects",
    },
    2: {
        name: "CV",
        route: "/cv",
    },
    3: {
        name: "contacts",
        route: "/contacts",
    },
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("z-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed right-4 top-4 z-50") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (() => {
                if (__VLS_ctx.hyperspaceEnabled == false) {
                    __VLS_ctx.movingStars = true;
                }
                __VLS_ctx.hyperspaceEnabled = !__VLS_ctx.hyperspaceEnabled;
            }) }, ...{ class: ("relative box-content h-[35px] w-[80px] rounded-full border-2 border-[#fdbf13] bg-black hover:cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((`absolute top-[4px] h-[28px] w-[28px] rounded-full transition-all duration-150 ${__VLS_ctx.hyperspaceEnabled ? 'right-[4px] bg-green-500' : 'right-[48px] bg-red-500'}`)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (() => {
                if (__VLS_ctx.movingStars == true) {
                    __VLS_ctx.hyperspaceEnabled = false;
                }
                __VLS_ctx.movingStars = !__VLS_ctx.movingStars;
            }) }, ...{ class: ("relative box-content h-[35px] w-[80px] rounded-full border-2 border-[#fdbf13] bg-black hover:cursor-pointer") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((`absolute top-[4px] h-[28px] w-[28px] rounded-full transition-all duration-150 ${__VLS_ctx.movingStars ? 'right-[4px] bg-green-500' : 'right-[48px] bg-red-500'}`)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fixed bottom-0 left-1/2 z-50 flex h-32 origin-left -translate-x-1/2 items-center justify-center gap-3 [&>div]:aspect-square [&>div]:h-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("diago-lr relative border-b-4 border-r-4 border-[#fdbf13]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute bottom-0 right-0 aspect-square h-1/4 rotate-180 bg-[#fdbf13]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute right-0 top-0 h-1/4 w-[21%] rotate-[180deg] bg-[#fdbf13]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute bottom-0 left-0 h-[21%] w-1/4 -rotate-[180deg] bg-[#fdbf13]") }, });
    for (const [page, index] of __VLS_getVForSourceType((__VLS_ctx.pages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleClick(page.route);
                } }, key: ((index)), ...{ class: ("group relative flex items-center justify-center border-y-4 border-[#fdbf13] text-2xl capitalize text-[#fdbf13] hover:cursor-pointer") }, });
        (page.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute -top-3/4 left-1/2 hidden aspect-square h-1/3 -translate-x-1/2 rotate-[225deg] bg-[#fdbf13] group-hover:block") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute left-0 top-0 aspect-square h-1/4 bg-[#fdbf13]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute right-0 top-0 aspect-square h-1/4 rotate-90 bg-[#fdbf13]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute bottom-0 left-0 aspect-square h-1/4 -rotate-90 bg-[#fdbf13]") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute bottom-0 right-0 aspect-square h-1/4 rotate-180 bg-[#fdbf13]") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("diago-rl relative border-b-4 border-l-4 border-[#fdbf13]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute bottom-0 left-0 aspect-square h-1/4 -rotate-90 bg-[#fdbf13]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute left-0 top-0 h-1/4 w-[20%] rotate-[180deg] -scale-x-100 bg-[#fdbf13]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("triangle absolute bottom-0 right-0 h-[21%] w-1/4 rotate-[180deg] -scale-x-100 bg-[#fdbf13]") }, });
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['right-4'];
    __VLS_styleScopedClasses['top-4'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['box-content'];
    __VLS_styleScopedClasses['h-[35px]'];
    __VLS_styleScopedClasses['w-[80px]'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-[#fdbf13]'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['hover:cursor-pointer'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['box-content'];
    __VLS_styleScopedClasses['h-[35px]'];
    __VLS_styleScopedClasses['w-[80px]'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['border-2'];
    __VLS_styleScopedClasses['border-[#fdbf13]'];
    __VLS_styleScopedClasses['bg-black'];
    __VLS_styleScopedClasses['hover:cursor-pointer'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-32'];
    __VLS_styleScopedClasses['origin-left'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['gap-3'];
    __VLS_styleScopedClasses['[&>div]:aspect-square'];
    __VLS_styleScopedClasses['[&>div]:h-full'];
    __VLS_styleScopedClasses['diago-lr'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['border-b-4'];
    __VLS_styleScopedClasses['border-r-4'];
    __VLS_styleScopedClasses['border-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['rotate-180'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['w-[21%]'];
    __VLS_styleScopedClasses['rotate-[180deg]'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['h-[21%]'];
    __VLS_styleScopedClasses['w-1/4'];
    __VLS_styleScopedClasses['-rotate-[180deg]'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['group'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['border-y-4'];
    __VLS_styleScopedClasses['border-[#fdbf13]'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['capitalize'];
    __VLS_styleScopedClasses['text-[#fdbf13]'];
    __VLS_styleScopedClasses['hover:cursor-pointer'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['-top-3/4'];
    __VLS_styleScopedClasses['left-1/2'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['h-1/3'];
    __VLS_styleScopedClasses['-translate-x-1/2'];
    __VLS_styleScopedClasses['rotate-[225deg]'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['group-hover:block'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['rotate-90'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['-rotate-90'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['rotate-180'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['diago-rl'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['border-b-4'];
    __VLS_styleScopedClasses['border-l-4'];
    __VLS_styleScopedClasses['border-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['-rotate-90'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['h-1/4'];
    __VLS_styleScopedClasses['w-[20%]'];
    __VLS_styleScopedClasses['rotate-[180deg]'];
    __VLS_styleScopedClasses['-scale-x-100'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
    __VLS_styleScopedClasses['triangle'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['bottom-0'];
    __VLS_styleScopedClasses['right-0'];
    __VLS_styleScopedClasses['h-[21%]'];
    __VLS_styleScopedClasses['w-1/4'];
    __VLS_styleScopedClasses['rotate-[180deg]'];
    __VLS_styleScopedClasses['-scale-x-100'];
    __VLS_styleScopedClasses['bg-[#fdbf13]'];
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
            hyperspaceEnabled: hyperspaceEnabled,
            movingStars: movingStars,
            handleClick: handleClick,
            pages: pages,
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
