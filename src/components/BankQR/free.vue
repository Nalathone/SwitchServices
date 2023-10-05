<template>
    <div>
      <div class="m-4 p-2.5 rounded-lg px-4 bg-white">
        <div id="font-blue" class="flex items-center">
          <font-awesome-icon
            size="xl"
            class="mr-2 mt-10"
            :icon="['fas', 'circle-chevron-right']"
          />
          <span class="font-bold text-lg container">Bank-QR Switch Services</span>
        </div>
      </div>
    <!-- End Top content -->
  
              <!-- Menu Content -->
              <div class="m-4 mt-6 p-2.5 rounded-lg px-4 bg-white">
          <div class="mt-3">
      <span id="font-blue" class="font-bold text-2xl">Bank-QR Switch Services</span>
  </div>
      <div id="font-blue" class=" mb-5 mt-5 grid grid-cols-4 gap-5 textsize" >
        <div v-for="(bank, index) in banks" :key="bank[0]">
          <div class="mb-5 bg-gray-100 rounded-lg shadow-md text-center p-5 m-0 w-full">
            <img width="220" height="220" :src="getImage(index)" alt="Wallet Logo" class=" mx-auto mb-3" />
              <span class="hide">{{ index < 9 ? '0'+(index+1) : index+1 }}</span>
              {{ bank[1] }} - {{ bank[0] }} - {{ bank[3] }} 
              <br>
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
      const banks = ref([]);
      const switchValue = ref([]);
  
      const toggleSwitch = (index) => {
        switchValue.value[index] = !switchValue.value[index];
        const value = switchValue.value[index] ? 'O' : 'C';
        sendRequest(banks.value[index], value);
      };
  
      const sendRequest = (bank, value) => {
        // const url = `http://172.21.25.79:7007/jdb/v1/bankdisableenableQR?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BANKCODE=VTB&status=O`;
        const url = `http://172.21.25.79:7007/jdb/v1/bankdisableenableQR?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BANKCODE=${bank[0]}&status=${value}`;
        axios.post(url)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      };

      const getImage = (index) => {
        if (index === 0) return "src/assets/images/BANKPIC/vtb.jpg";
      if (index === 1) return "src/assets/images/BANKPIC/vmb.jpg";
      if (index === 2) return "src/assets/images/BANKPIC/ACLE.jpg";
      if (index === 3) return "src/assets/images/BANKPIC/apb.jpg";
      if (index === 4) return "src/assets/images/BANKPIC/bcel.png";
      if (index === 5) return "src/assets/images/BANKPIC/bic.jpg";
      if (index === 6) return "src/assets/images/BANKPIC/boc.jpg";
      if (index === 7) return "src/assets/images/BANKPIC/ICBC.png";
      if (index === 8) return "src/assets/images/BANKPIC/idb.jpg";
      if (index === 9) return "src/assets/images/BANKPIC/jdb.jpg";
      if (index === 10) return "src/assets/images/BANKPIC/kbank.jpg";
      if (index === 11) return "src/assets/images/BANKPIC/ldb.jpg";
      if (index === 12) return "src/assets/images/BANKPIC/LVB.jpg";
      if (index === 13) return "src/assets/images/BANKPIC/maruhan.jpg";
      if (index === 14) return "src/assets/images/BANKPIC/public.png";
      if (index === 15) return "src/assets/images/BANKPIC/sacom.jpg";
      if (index === 16) return "src/assets/images/BANKPIC/bfl.jpg";
      if (index === 17) return "src/assets/images/BANKPIC/stb.png";
      if (index === 18) return "src/assets/images/BANKPIC/psvb.png";
    };
      
      watch(switchValue, (newValue) => {
        localStorage.setItem("switchValue", JSON.stringify(newValue));
      }, { deep: true });
  
      onMounted(async () => {
        const savedSwitchValue = localStorage.getItem("switchValue");
        if (savedSwitchValue) {
          switchValue.value = JSON.parse(savedSwitchValue);
        }
        
        const response = await axios.post("http://172.21.25.79:7007/jdb/v1/dispaybanklistQR?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd");
        banks.value = response.data.data.reduce((result, value, index, array) => {
          if (index % 4 === 0) {
            result.push(array.slice(index, index + 4));
            switchValue.value.push(false);
          }
          return result;
        }, []);
      });
  
     
  
      return {
        banks,
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