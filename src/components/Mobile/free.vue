<template>
    <div>
      <div class="m-4 p-2.5 rounded-lg px-4 bg-white">
        <div id="font-blue" class="flex items-center">
          <font-awesome-icon
            size="xl"
            class="mr-2 mt-10"
            :icon="['fas', 'circle-chevron-right']"
          />
          <span class="font-bold text-lg container">Mobile Switch Services</span>
        </div>
      </div>
    <!-- End Top content -->
  
              <!-- Menu Content -->
              <div class="m-4 mt-6 p-2.5 rounded-lg px-4 bg-white">
          <div class="mt-3">
      <span id="font-blue" class="font-bold text-2xl">Mobile Switch Services</span>
  </div>
      <div id="font-blue" class="mb-5 mt-5 grid grid-cols-4 gap-5 textsize" >
        <div v-for="(companys, index) in companyss" :key="companys[0]">
          <div class="mb-5 bg-gray-100 rounded-lg shadow-md text-center p-5 m-0 w-full">
            <img width="220" height="220" :src="getImage(index)" alt="Wallet Logo" class=" mx-auto mb-3" />
            <p>
              <span class="hide">{{ index < 9 ? '0'+(index+1) : index+1 }}</span>
              {{ companys[1] }} - {{ companys[2] }} - {{ companys[3] }}
            </p>
            <button class="switch mb-5 center" :id="'button'+(index+1)" @click="toggleSwitch(index)" :class="{on: switchValue[index]}">
              <div class="status">Status: {{ switchValue[index] ? 'ON' : 'OFF' }}</div>
            </button>
          
        </div>
      </div> 
    </div>
  </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, watch } from "vue";
  import axios from "axios";
  
  export default {
    setup() {
      const companyss = ref([]);
      const switchValue = ref([]);
  
      const toggleSwitch = (index) => {
        switchValue.value[index] = !switchValue.value[index];
        const value = switchValue.value[index] ? 'O' : 'C';
        sendRequest(companyss.value[index], value);
      };
  
      const sendRequest = (companys, value) => {
        // const url = `http://172.21.25.79:7007/jdb/v1/mobiledisable?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BILLER_CODE=ETL&status=O`;
        const url = `http://172.21.25.79:7007/jdb/v1/mobiledisable?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BILLER_CODE=${companys[0]}&status=${value}`;
        axios.post(url)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };
  
      const getImage = (index) => {
          if (index === 0) return "src/assets/images/Mobilepic/ETL.jpg";
        if (index === 1) return "src/assets/images/Mobilepic/LTC.jpg";
        if (index === 2) return "src/assets/images/Mobilepic/TPLUS.png";
        if (index === 3) return "src/assets/images/Mobilepic/UNITEL.jpg";
      };
  
      
      watch(switchValue, (newValue) => {
        localStorage.setItem("switchValue", JSON.stringify(newValue));
      }, { deep: true });
  
      onMounted(async () => {
        const savedSwitchValue = localStorage.getItem("switchValue");
        if (savedSwitchValue) {
          switchValue.value = JSON.parse(savedSwitchValue);
        }
        
        const response = await axios.post("http://172.21.25.79:7007/jdb/v1/displaymbbillerlist?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd");
        companyss.value = response.data.data.reduce((result, value, index, array) => {
          if (index % 4 === 0) {
            result.push(array.slice(index, index + 4));
            switchValue.value.push(false);
          }
          return result;
        }, []);
      });
  
     
  
      return {
        companyss,
        switchValue,
        getImage,
        toggleSwitch,
        items: ['Status'],
      };
    },
  };
  </script>
  
  <style scoped>
  #font-blue {
    color: #2a5ba7;
  }
  button {
    margin-top: 10px;
    padding: 5px 10px;
  }
  button:hover {
    cursor: pointer;
    background-color: #2a5ba7;
    color: #2a5ba7;
  }
  .center {
    text-align: center;
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: auto;
  }
  .container {
      margin-top:40px;
      top:40px;
      
    }
  .textsize {
    text-align: center;
    font-size: 20px;
  }
  .grid {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    left: 50px;
    width: 50px;
    height: 30px;
    background: #8f8c8c;
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
  
  .off.switch {
    background-color: rgb(248, 18, 18);
  }
  
  .on.switch::after {
    background-color: #0af82a;
  
    transform: translatex(20px);
  }
  
  .status {
    position: absolute;
    margin-left: -135px;
    margin-top: -15px;
  }
  .hide {
    display: none;
  }
  .buttonOn {
    background-color: green;
    color: white;
  }
  .hide {
    display: none;
  }
  </style>