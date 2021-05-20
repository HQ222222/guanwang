<template>
  <div>
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'Todotitle',
  props: ['title'],
  msg: ' 我是一段信息',
  methods: {
    Test() {
      // eslint-disable-next-line no-console
      console.log('我是一个方法');
    },
  },
};
</script>
