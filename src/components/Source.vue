<template>
    <highlightjs language="javascript" :code="code" />
</template>

<script>
    export default {
        name: "Source",
        props: {
            code: String
        }
    }
</script>

<style scoped>
</style>
