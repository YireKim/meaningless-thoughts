<template>
  <div>
    <p>{{ name }} {{ age }}</p>
    <button @click="handleClick">CLICK index</button>
    <div>
      {{ testWord }}
    </div>
    {{ testWord }}
  </div>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    // 반응형 아님
    let name = ref('nkh');
    let age = ref(29);

    const handleClick = () => {
      console.log(age);
      age.value += 1;
    };
    return { name, age, handleClick };
  },
  data() {
    return {
      testWord: 'test',
    };
  },
});
</script>
