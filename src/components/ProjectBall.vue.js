import { ref, reactive, onMounted, onBeforeUnmount } from "vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const isMouseDown = ref(null);
const props = defineProps();
const position = reactive({ ...props.initialPosition });
const velocity = reactive({ ...props.initialVelocity });
const ball = ref(null);
let moveInterval = null;
const dragMouse = (event) => {
    console.log("coucou");
    position.x = event.clientX - props.size / 2;
    position.y = event.clientY - props.size / 2;
};
const moveBall = () => {
    position.x += velocity.x;
    position.y += velocity.y;
    const { width, height } = props.containerBounds;
    if (position.x <= 0 || position.x + props.size >= width) {
        velocity.x *= -1;
    }
    if (position.y <= 0 || position.y + props.size >= height) {
        velocity.y *= -1;
    }
};
const handleMouseEnter = () => {
    if (moveInterval !== null) {
        clearInterval(moveInterval);
        moveInterval = null;
    }
};
const handleMouseLeave = () => {
    if (moveInterval === null) {
        moveInterval = window.setInterval(moveBall, 16);
    }
};
const getBoundingClientRect = () => {
    return ball.value?.getBoundingClientRect() ?? null;
};
const getVelocity = () => {
    return velocity;
};
const getPosition = () => {
    return position;
};
const setVelocity = (newVelocity) => {
    velocity.x = newVelocity.x;
    velocity.y = newVelocity.y;
};
onMounted(() => {
    moveInterval = setInterval(moveBall, 16);
});
onBeforeUnmount(() => {
    if (moveInterval !== null) {
        clearInterval(moveInterval);
    }
});
const __VLS_exposed = {
    getBoundingClientRect,
    getVelocity,
    getPosition,
    setVelocity,
};
defineExpose({
    getBoundingClientRect,
    getVelocity,
    getPosition,
    setVelocity,
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMouseenter: (__VLS_ctx.handleMouseEnter) }, ...{ onMouseleave: (__VLS_ctx.handleMouseLeave) }, ...{ onIsMouseDown: (__VLS_ctx.dragMouse) }, ...{ class: ("project-ball floating absolute z-20 flex aspect-square items-center justify-center rounded-full transition-shadow duration-300 hover:cursor-pointer") }, id: ((props.id)), ...{ style: (({
                '--x': __VLS_ctx.position.x + 'px',
                '--y': __VLS_ctx.position.y + 'px',
                width: __VLS_ctx.size + 'px',
                backgroundColor: __VLS_ctx.color,
                transform: `translate(${__VLS_ctx.position.x}px, ${__VLS_ctx.position.y}px)`,
            })) }, ref: ("ball"), });
    // @ts-ignore navigation for `const ball = ref()`
    __VLS_ctx.ball;
    (__VLS_ctx.name);
    __VLS_styleScopedClasses['project-ball'];
    __VLS_styleScopedClasses['floating'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['z-20'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['transition-shadow'];
    __VLS_styleScopedClasses['duration-300'];
    __VLS_styleScopedClasses['hover:cursor-pointer'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "ball": __VLS_nativeElements['div'],
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
            position: position,
            ball: ball,
            dragMouse: dragMouse,
            handleMouseEnter: handleMouseEnter,
            handleMouseLeave: handleMouseLeave,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            ...__VLS_exposed,
        };
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
