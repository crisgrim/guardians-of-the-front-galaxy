<template>
  <div>
    <form
      action=""
      @submit.prevent="onSubmit(inputValue)"
    >
      <input
        v-model="inputValue"
        type="text"
      >
      <button type="submit">
        Send
      </button>
      <span class="reversed">{{ reversedInput }}</span>
    </form>

    <p
      v-for="res in results"
      :key="res.id"
      class="result"
    >
      {{ res.title }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    reversed: {
      required: true,
      type: Boolean,
    }
  },
  data: () => ({
    inputValue: '',
    results: [],
  }),
  computed: {
    reversedInput() {
      return this.inputValue.split('').reverse().join('');
    },
  },
  watch: {
    inputValue(newVal, oldVal) {
      if (newVal.trim().length && newVal !== oldVal) {
        // console.log(newVal);
      }
    },
  },
  methods: {
    onSubmit(value) {
      const getPromise = axios.get(`https://jsonplaceholder.typicode.com/posts?q=${value}`);

      getPromise.then((results) => {
        this.results = results.data;
      });

      return getPromise;
    },
  },
};
</script>

<style lang="scss">
form,
.result {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  text-align: left;
  width: 100%;
}

input {
  padding: 8px 10px;
  border: 0 solid grey;
  border-bottom: 1px solid grey;
  margin: 10px 0;
}

input,
span,
button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 10px 0;
}

button {
  background: #32ba7e;
  border: 0;
  color: #ffffff;
  text-transform: uppercase;
}

input:hover,
button:hover {
  opacity: 0.5;
}

input:focus,
button:focus {
  outline: none;
}
</style>
