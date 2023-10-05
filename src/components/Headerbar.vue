<template>
  <!--Header-->
  <div id="header" class="px-2 py-4 text-white">
    <div>
      <div>
        <div>
          <text class="pl-5">Date :  {{ currentDate }}</text>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faUser);

export default {
  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
    }
  },
}
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 290px;
  right: 0;
  background-color: #2a5ba7;
  z-index: 9999; /* to make sure it stays on top of other elements */
}

#header .grid {
  max-width: 960px;
  margin: 0 auto;
}
</style>