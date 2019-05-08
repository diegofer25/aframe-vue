<template>
  <div class="home">
    <ul>
      <li v-for="lesson in lessons" :key="lesson">
        <router-link :to="lesson" v-text="lesson" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({
    lessons: ["basic-scene"]
  })
};
</script>
