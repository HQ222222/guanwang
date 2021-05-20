<template>
  <div>
    <slot name="Todotitle"> </slot>
    <ul>
      <slot name="Todocontent"> </slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Todo',
};
</script>
