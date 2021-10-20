<template>
  <div>
    {{ $route.params }}
  </div>
</template>
<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      sampleData: '',
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.$route.params);
  },
  unmounted() {},
  methods: {},
};
</script>
