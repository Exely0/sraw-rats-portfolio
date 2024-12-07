import { onMounted, computed, reactive, ref } from "vue";
import Icon from "../components/Icon.vue";
import { gsap } from "gsap";
import MainLayout from "../layouts/MainLayout.vue";
import ProjectElement from "../components/ProjectElement.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const sizes = {
    1: "2",
    2: "3",
    3: "4",
};
const activeCol = ref(null);
const activeProj = ref(null);
const closeExpansion = () => {
    console.log("coucou");
    activeProj.value = null;
    activeCol.value = null;
};
const isExpanded = () => {
    return activeCol.value != null && activeProj.value != null;
};
const projects = [
    {
        link: "#",
        index: 0,
        title: "Infact",
        description: "Une application permettant de postuler à des offres d'emploi en ligne.",
        size: 1,
    },
    {
        link: "#",
        index: 1,
        title: "Dash geometry",
        description: "Un jeu de plateforme 2d inspiré du célèbre Geometry Dash.",
        size: 2,
    },
    {
        link: "#",
        index: 2,
        title: "Advice generator",
        description: "Une application web qui donne des conseils alétoires grâce à une api.",
        size: 1,
    },
    {
        link: "#",
        index: 3,
        title: "Portfolio v1",
        description: "Premier portfolio que j'ai réalisé.",
        size: 3,
    },
    {
        link: "#",
        index: 4,
        title: "Interactive card details form",
        description: "Intégration d'une maquette interactive.",
        size: 2,
    },
    {
        link: "#",
        index: 5,
        title: "Project 6",
        description: "Description of project 6.",
        size: 2,
    },
    {
        link: "#",
        index: 6,
        title: "Digital resume",
        description: "Un CV digital.",
        size: 1,
    },
    {
        link: "#",
        index: 7,
        title: "Project 8",
        description: "Description of project 8.",
        size: 1,
    },
    {
        link: "#",
        index: 8,
        title: "Multi-step form",
        description: "Intégration d'une maquette.",
        size: 2,
    },
    {
        link: "#",
        index: 9,
        title: "News homepage",
        description: "Intégration d'une maquette.",
        size: 1,
    },
    {
        link: "#",
        index: 10,
        title: "Todo list",
        description: "Une application permettant de noter et gérer les tâches du quotidien.",
        size: 3,
    },
    {
        link: "#",
        index: 11,
        title: "Project 12",
        description: "Description of project 12.",
        size: 1,
    },
];
const columns = computed(() => {
    const colCount = 4;
    const columns = Array.from({ length: colCount }, () => []);
    projects.forEach((project, index) => {
        const columnIndex = index % colCount;
        columns[columnIndex].push(project);
    });
    return columns;
});
const projectRefs = reactive({});
const colRefs = reactive({});
const gridRef = ref();
onMounted(() => {
    const timeline = gsap.timeline();
    const allRefs = Object.values(projectRefs);
    allRefs.forEach((el, index) => {
        if (el) {
            timeline.fromTo(el, { y: 3000 }, { y: 0, duration: 0.3, ease: "power3.out" }, index * 0.14);
        }
    });
});
const handleClick = (colIndex, projIndex) => {
    if (isExpanded()) {
        return;
    }
    activeCol.value = colIndex;
    activeProj.value = projIndex;
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
    // @ts-ignore
    [MainLayout, MainLayout,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(MainLayout, new MainLayout({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    var __VLS_5 = {};
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex h-screen w-full items-center justify-center overflow-y-hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((`mb-12 flex h-3/5 w-3/5 ${__VLS_ctx.isExpanded() ? 'gap-0' : 'gap-5'}`)) }, ref: ("gridRef"), });
    // @ts-ignore navigation for `const gridRef = ref()`
    __VLS_ctx.gridRef;
    for (const [column, colIndex] of __VLS_getVForSourceType((__VLS_ctx.columns))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((colIndex)), ref: (((el) => (__VLS_ctx.colRefs['col' + colIndex] = el))), ...{ class: ((`flex h-full flex-col transition-all duration-500 ease-out ${!__VLS_ctx.isExpanded() ? 'w-1/4 gap-5' : __VLS_ctx.activeCol == colIndex ? 'w-full gap-0' : 'w-0 gap-0'}`)) }, });
        for (const [project] of __VLS_getVForSourceType((column))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        __VLS_ctx.handleClick(colIndex, project.index);
                    } }, key: ((project.index)), ref: (((el) => (__VLS_ctx.projectRefs[`project${project.index}`] = el))), ...{ class: ((`masonry-item relative shrink transition-all duration-500 ease-out ${__VLS_ctx.isExpanded() ? '' : '[&>div]:hover:scale-95'} ${__VLS_ctx.isExpanded() && __VLS_ctx.activeProj != project.index ? 'h-0' : ''}`)) }, ...{ style: (({
                        flexGrow: !__VLS_ctx.isExpanded()
                            ? __VLS_ctx.sizes[project.size]
                            : __VLS_ctx.activeProj == project.index
                                ? '1'
                                : '0',
                    })) }, });
            if (__VLS_ctx.activeProj == project.index) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.closeExpansion) }, ...{ class: ("absolute right-4 top-4 z-20 flex aspect-square w-12 cursor-pointer items-center justify-center rounded-md border-2") }, });
                // @ts-ignore
                [Icon,];
                // @ts-ignore
                const __VLS_6 = __VLS_asFunctionalComponent(Icon, new Icon({ name: ("close_fullscreen"), color: ("white"), }));
                const __VLS_7 = __VLS_6({ name: ("close_fullscreen"), color: ("white"), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
            }
            // @ts-ignore
            [ProjectElement,];
            // @ts-ignore
            const __VLS_11 = __VLS_asFunctionalComponent(ProjectElement, new ProjectElement({ link: ((project.link)), title: ((project.title)), description: ((project.description)), }));
            const __VLS_12 = __VLS_11({ link: ((project.link)), title: ((project.title)), description: ((project.description)), }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        }
    }
    __VLS_nonNullable(__VLS_4.slots).default;
    var __VLS_4;
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['overflow-y-hidden'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['right-4'];
    __VLS_styleScopedClasses['top-4'];
    __VLS_styleScopedClasses['z-20'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['aspect-square'];
    __VLS_styleScopedClasses['w-12'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['border-2'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "gridRef": __VLS_nativeElements['div'],
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
            Icon: Icon,
            MainLayout: MainLayout,
            ProjectElement: ProjectElement,
            sizes: sizes,
            activeCol: activeCol,
            activeProj: activeProj,
            closeExpansion: closeExpansion,
            isExpanded: isExpanded,
            columns: columns,
            projectRefs: projectRefs,
            colRefs: colRefs,
            gridRef: gridRef,
            handleClick: handleClick,
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
