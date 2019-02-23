<template>
  <div id="app">
    <Header />
    <section class="main">
      <router-view/>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  margin: 20px auto;
  overflow: hidden;
  width: 80%;
}

h1 {
  border: 5px solid #2c3e50;
  color: #34495f;
  padding: 20px;
}

h1 strong {
  color: #3ab981;
}

h1 em {
  color: #99424f;
}
</style>
