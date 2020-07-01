<template>
    <Spoiler summary="Пример">
        <Set>
            <SetItem>
                <Source :code="code"/>
            </SetItem>
            <SetItem :cols="2">
                <Injector :nodes="genRenderOutput()"></Injector>
            </SetItem>
        </Set>
    </Spoiler>
</template>

<script>
    import Vue from 'vue';
    import Source from "../components/Source";
    import Spoiler from "../components/Spoiler";
    import Set from "../components/Set";
    import SetItem from "../components/SetItem";

    Vue.component('Injector', {
        functional: true,
        props: ['nodes'],
        render(h, {props}) {
            return props.nodes
        }
    });
    export default {
        name: "Preview",
        components: {SetItem, Set, Spoiler, Source},
        props: {
            code: {
                type: String,
                default: ''
            }
        },
        created() {
            console.log(this.code);
        },
        computed: {
            compiledTemplate() {
                return Vue.compile(this.code)
            },
        },
        methods: {
            genRenderOutput() {
                const {render, staticRenderFns} = this.compiledTemplate;
                const _staticRenderFns = this.$options.staticRenderFns;
                this.$options.staticRenderFns;
                const output = render.call(this, this.$createElement);
                this.$options.staticRenderFns = _staticRenderFns;
                return output;
            }
        }
    }
</script>