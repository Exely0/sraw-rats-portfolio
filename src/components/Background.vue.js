import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { useHyperspaceStore } from "../store/hyperspace";
import { useSettingsStore } from "../store/settings";
import { storeToRefs } from "pinia";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const starCanvas = ref(null);
let ctx = null;
const stars = [];
let animationIntervalId;
let starFactoryId;
const hyperspaceChan = ref(false);
const hyperspaceSpeed = ref(false);
const hyperspaceChannelingTime = ref(0);
const hyperspaceStore = useHyperspaceStore();
const settingsStore = useSettingsStore();
const { movingStars } = storeToRefs(settingsStore);
watch(() => hyperspaceStore.triggerHyperspaceChan, (value) => {
    if (value) {
        manualActivation();
        hyperspaceStore.triggerHyperspaceChan = false;
    }
});
const manualActivation = () => {
    hyperspaceChan.value = true;
    setTimeout(() => {
        hyperspaceChan.value = false;
    }, 1100);
};
const initializeCanvas = () => {
    const canvas = starCanvas.value;
    if (!canvas)
        return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
};
const createStar = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angle = Math.random() * Math.PI * 2;
    const radius = 200 + Math.random() * 10000;
    const x = centerX + Math.cos(angle) * radius;
    const y = centerY + Math.sin(angle) * radius;
    const speed = -(Math.random() + 1);
    return {
        x,
        y,
        z: 1000 + 500 * Math.random(),
        size: Math.random() * 5 + 6,
        velocityX: Math.cos(angle) * speed,
        velocityY: Math.sin(angle) * speed,
        velocityZ: Math.random() * 2 + 1,
        hyperspaceChanPosX: x,
        hyperspaceChanPosY: y,
        originX: x,
        originY: y,
    };
};
watch(hyperspaceChan, (oldValue, newValue) => {
    if (oldValue == true && newValue == false) {
        hyperspaceChannelingTime.value = 0;
        stars.forEach((star) => {
            star.hyperspaceChanPosX = star.x;
            star.hyperspaceChanPosY = star.y;
        });
    }
});
watch(movingStars, (newValue) => {
    if (newValue) {
        animationIntervalId = setInterval(animate, 16);
        starFactoryId = setInterval(populateStars, 50);
    }
    else {
        clearInterval(animationIntervalId);
        clearInterval(starFactoryId);
    }
});
const populateStars = () => {
    if (!hyperspaceChan.value) {
        if (hyperspaceSpeed.value) {
            for (let i = 0; i < 100; i++) {
                stars.push(createStar());
            }
        }
        else {
            for (let i = 0; i < 2; i++) {
                stars.push(createStar());
            }
        }
    }
};
const drawStar = (star) => {
    if (!ctx)
        return;
    const scale = 100 / star.z;
    const size = star.size * scale;
    if (hyperspaceSpeed.value) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = (star.x - centerX) * scale + centerX;
        const y = (star.y - centerY) * scale + centerY;
        const originX = (star.originX - centerX) * scale + centerX;
        const originY = (star.originY - centerY) * scale + centerY;
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "white";
        ctx.lineWidth = size * 4;
        ctx.stroke();
        ctx.closePath();
    }
    else if (hyperspaceChan.value) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = (star.x - centerX) * scale + centerX;
        const y = (star.y - centerY) * scale + centerY;
        const hyperX = (star.hyperspaceChanPosX - centerX) * scale + centerX;
        const hyperY = (star.hyperspaceChanPosY - centerY) * scale + centerY;
        ctx.beginPath();
        ctx.moveTo(hyperX, hyperY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = "white";
        ctx.lineWidth = size;
        ctx.stroke();
        ctx.closePath();
    }
    else {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = (star.x - centerX) * scale + centerX;
        const y = (star.y - centerY) * scale + centerY;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
    }
};
const updateStars = () => {
    for (let i = stars.length - 1; i >= 0; i--) {
        const star = stars[i];
        if (hyperspaceChan.value) {
            star.x -= 10 * star.velocityX;
            star.y -= 10 * star.velocityY;
        }
        else {
            star.x -= star.velocityX;
            star.y -= star.velocityY;
            if (hyperspaceSpeed.value) {
                star.x -= 5 * star.velocityX;
                star.y -= 5 * star.velocityY;
                star.z -= 35 * star.velocityZ;
            }
            else {
                star.z -= star.velocityZ;
            }
            if (star.z <= 0) {
                stars.splice(i, 1);
            }
        }
    }
};
const animate = () => {
    if (!ctx)
        return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (hyperspaceChan.value) {
        hyperspaceChannelingTime.value += 16;
    }
    if (hyperspaceChannelingTime.value >= 1000 && !hyperspaceChan.value) {
        hyperspaceSpeed.value = true;
        hyperspaceChannelingTime.value = 0;
        setTimeout(() => {
            hyperspaceSpeed.value = false;
        }, 1000);
    }
    updateStars();
    for (const star of stars) {
        drawStar(star);
    }
};
const resizeCanvas = () => {
    initializeCanvas();
};
onMounted(() => {
    initializeCanvas();
    animationIntervalId = setInterval(animate, 16);
    starFactoryId = setInterval(populateStars, 50);
    window.addEventListener("resize", resizeCanvas);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", resizeCanvas);
    clearInterval(animationIntervalId);
    clearInterval(starFactoryId);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fade-in sticky top-0 -z-10 h-0 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((`absolute -z-10 h-screen w-full bg-black transition-opacity duration-1000 ${__VLS_ctx.hyperspaceChan || __VLS_ctx.hyperspaceSpeed ? 'opacity-0' : 'opacity-100'}`)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((`absolute ${__VLS_ctx.hyperspaceSpeed ? 'opacity-0' : 'opacity-100'} -z-20 h-screen w-full bg-grad-blue-black transition-opacity duration-1000`)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((`absolute -z-30 h-screen w-full bg-grad-lightblue-black opacity-100`)) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.canvas, __VLS_intrinsicElements.canvas)({ ...{ onMousedown: (...[$event]) => {
                __VLS_ctx.hyperspaceChan = true;
            } }, ...{ onMouseup: (...[$event]) => {
                __VLS_ctx.hyperspaceChan = false;
            } }, ref: ("starCanvas"), ...{ class: ((`star-canvas h-screen`)) }, });
    // @ts-ignore navigation for `const starCanvas = ref()`
    __VLS_ctx.starCanvas;
    __VLS_styleScopedClasses['fade-in'];
    __VLS_styleScopedClasses['sticky'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['-z-10'];
    __VLS_styleScopedClasses['h-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['-z-30'];
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['bg-grad-lightblue-black'];
    __VLS_styleScopedClasses['opacity-100'];
    __VLS_styleScopedClasses['star-canvas'];
    __VLS_styleScopedClasses['h-screen'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "starCanvas": __VLS_nativeElements['canvas'],
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
            starCanvas: starCanvas,
            hyperspaceChan: hyperspaceChan,
            hyperspaceSpeed: hyperspaceSpeed,
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
