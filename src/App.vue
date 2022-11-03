<template>
    <div id="app">
      <UI/>
      <GridTest/>
    </div>
</template>

<script>
    import UI from "@/views/UI";
    import GridTest from "@/views/GridTest";
    export default {
        name: 'app',
      components: {GridTest, UI},
    }
</script>
