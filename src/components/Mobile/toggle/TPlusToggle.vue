<template>
    <div class="switch-toggle">
      <button class="switch switch::after" :class="{ 'on': value, 'off': !value }" @click="toggleValue"></button>
      <text class="status">Status: {{ status }}</text>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        value: false,
        status: 'Off',
        apiUrlOn: 'http://172.21.57.211:8080/jdb/v1/mobiledisable?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BILLER_CODE=TPL&status=O', // replace with your API URL to turn on
        apiUrlOff: 'http://172.21.57.211:8080/jdb/v1/mobiledisable?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BILLER_CODE=TPL&status=C' // replace with your API URL to turn off
      }
    },
    mounted() {
      // Load the button state from localStorage
      const savedState = localStorage.getItem("buttonState");
      if (savedState) {
        this.value = JSON.parse(savedState);
        this.status = this.value ? 'On' : 'Off';
      }
    },
    watch: {
      // Save the button state to localStorage when it changes
      value(newValue) {
        localStorage.setItem("buttonState", JSON.stringify(newValue));
      }
    },
    methods: {
      toggleValue() {
        this.value = !this.value
        this.status = this.value ? 'On' : 'Off'
        this.sendValueToApi()
      },
      sendValueToApi() {
        const apiUrl = this.value ? this.apiUrlOn : this.apiUrlOff
        axios.post(apiUrl, { value: this.value })
          .then(response => console.log('API response:', response))
          .catch(error => console.log('API error:', error))
      }
    }
  }
  </script>
  
  <style scoped>
  .switch {
  position: relative;
  display: inline-block;
  left: 150px;
  width: 50px;
  height: 30px;
  background:#1e89e1;
  border-radius: 100px;
  transition: all 0.6s;
  }
  .switch::after {
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 18px;
  background: #cccccc;
  ;
  top: 1px;
  left: 1px;
  
  transition: all 0.6s;
  }
  .off.switch{
  background-color: white;
  
  
  }
  .on.switch::after {
  background-color: #cccccc;
  transform: translatex(20px);
  
  ;
  }
  .status {
  position: absolute;
  margin-left: 1px;
  margin-top: 5px;
  
  
  
  
  
  }
  </style>