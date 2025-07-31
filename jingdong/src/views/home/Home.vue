<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
  <TabBar :currentIndex="0" />
</template>

<script>
import TabBar from "../../components/TabBar.vue"
import StaticPart from "./StaticPart.vue"
import Nearby from "./Nearby.vue"
export default {
  name: "Home",
  components: {
    TabBar, StaticPart, Nearby
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;
  padding: 0 0.18rem 0.1rem 0.18rem;
  overflow-y: auto;
}
</style>