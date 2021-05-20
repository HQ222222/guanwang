<template>
  <li>
    {{index}}-->{{item}}
    <button @click="remove" >删除</button>
  </li>
</template>

<script>
export default {
  name: 'Todocontent',
  props: ['item', 'index'],
  methods: {
    remove() {
      this.$emit('remove');
    },
  },
};
</script>
