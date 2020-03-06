<template>
  <div class="about">
    <h1>Vue.js webpack template</h1>
    <router-link to="/a">404 error example</router-link>
    <example-component></example-component>
  </div>
</template>

<script>
import ExampleComponent from '../../components/ExampleComponent.vue';
export default {
  name: 'Home',
  components: {
    ExampleComponent
  }
};
</script>
