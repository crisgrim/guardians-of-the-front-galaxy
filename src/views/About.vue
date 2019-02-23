<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Form/>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';

export default {
  name: 'about',

  components: {
    Form,
  },
};
</script>
