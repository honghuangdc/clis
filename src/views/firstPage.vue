<template>
  <div class="container">
    <h1 class="title">This is the first page !</h1>
    <demo-component msg="This is the component !"></demo-component>
  </div>
</template>

<script>
import DemoComponent from "../components/demoComponent.vue";
export default {
  components: {
    DemoComponent,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  color: #666;
  .title {
    color: #f00;
  }
}
</style>
