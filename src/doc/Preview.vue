<template>
    <Spoiler summary="Пример">
        <Set>
            <SetItem>
                <Source :code="code"/>
            </SetItem>
            <SetItem :cols="2">
                <component :is="dynamicComponent" />
            </SetItem>
        </Set>
    </Spoiler>
</template>

<script>
import { compile, defineComponent, h } from 'vue';
import Source from "../components/Source";
import Spoiler from "../components/Spoiler";
import Set from "../components/Set";
import SetItem from "../components/SetItem";

export default defineComponent({
    name: "Preview",
    components: {SetItem, Set, Spoiler, Source},
    props: {
        code: {
            type: String,
            default: () => ''
        }
    },
    computed: {
        dynamicComponent() {
            if (!this.code) {
                return null;
            }
            try {
                const render = compile(this.code);
                return defineComponent({
                    render,
                });
            } catch (e) {
                console.error(e);
                return defineComponent({
                    render: () => h('div', 'Error compiling template'),
                });
            }
        }
    }
});
</script>