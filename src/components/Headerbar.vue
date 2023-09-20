<template>
  <!--Header-->
  <div id="bg-blue" class="px-2 py-4 text-white">
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div class="flex justify-start">
        <div>
          
          <span class="pl-5">Date :  </span>
        </div>
      </div>
      <div class="flex items-center justify-end">
        <UserIcon class="w-5 h-5" />
        <font-awesome-icon :icon="['fas', 'user']" />
        <span class="pl-2 pr-2">0000</span> |
        <span class="pl-2 pr-5"> Username</span>
      </div>
    </div>
  </div>
</template>

<!--=========================================== Amount money Content  
  <div >
                  <switchtog></switchtog>
                </div>
import switchtog from '../components/switchtog.vue'

<template>
    <div class="switch-toggle">
      <button class="switch" :class="{ 'on': value, 'off': !value }" @click="toggleValue"></button>
      <span class="status">{{ status }}</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        value: false,
        status: 'Off'
      }
    },
    methods: {
      toggleValue() {
        this.value = !this.value
        this.status = this.value ? 'On' : 'Off'
        // API call here
        console.log('API call with value:', this.value)
      }
    }
  }
  </script>

<style scoped>


.switch {
  position: relative;
  display: inline-block;
  top: 10px;
  left: 150px;
  width: 50px;
  height: 30px;
  background: white;
  border-radius: 100px;
  transition: all 0.6s;
}

.switch::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 18px;
  background: rgb(214, 212, 212);
  top: 1px;
  left: 1px;

  transition: all 0.6s;
}
input[type="checkbox"]:checked + .switch::after {
  transform: translateX(20px);
}
input[type="checkbox"]:checked + .switch {
  background: #2e88dd;
}
.offscreen {
  position: absolute;
  margin-left: 164px;
  margin-top: 15px;
  margin-right: 50px;
}
</style>

  ===========================================-->

<script setup>
//fontawesome icon

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
library.add(faUser);
</script>

<style scoped>
#bg-blue {
  background-color: #2a5ba7;
}
</style>
