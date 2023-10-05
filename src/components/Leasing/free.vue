<template>
    <div>
      <div class="m-4 p-2.5 rounded-lg px-4 bg-white">
        <div id="font-blue" class="flex items-center">
          <font-awesome-icon
            size="xl"
            class="mr-2 mt-10"
            :icon="['fas', 'circle-chevron-right']"
          />
          <span class="font-bold text-lg container">Wallet Switch Services</span>
        </div>
      </div>
    <!-- End Top content -->
  
              <!-- Menu Content -->
              <div class="m-4 mt-6 p-2.5 rounded-lg px-4 bg-white">
          <div class="mt-3">
      <span id="font-blue" class="font-bold text-2xl">Wallet Switch Services</span>
  </div>
      <div id="font-blue" class="mb-5 mt-5 grid grid-cols-4 gap-5 textsize" >
        <div v-for="(wallet, index) in wallets" :key="[0]">
          <div class="mb-5 bg-gray-100 rounded-lg shadow-md text-center p-5 m-0 w-full">
            <img width="220" height="220" :src="getImage(index)" alt="Wallet Logo" class=" mx-auto mb-3" />
            <p>
              <span class="hide">{{ index < 9 ? '0'+(index+1) : index+1 }}</span>
              {{ wallet[1] }} - {{ wallet[0] }} - {{ wallet[3] }}
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
    const wallets = ref([]);
    const switchValue = ref([]);

    const toggleSwitch = (index) => {
      switchValue.value[index] = !switchValue.value[index];
      const value = switchValue.value[index] ? "A" : "IN";
      sendRequest(wallets.value[index], value);
    };

    const sendRequest = (wallet, value) => {
        const url = `http://172.21.25.79:7007/jdb/v1/disableenableleasingaccount?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&COMPANY_ID=${companys[0]}&STATUS=${value}`;
      axios
        .post(url)
        .then((response) => {
          console.log(response.data);
 })
        .catch((error) => {
          console.error(error);
        });
    };

    const getImage = (index) => {
        if (index === 0) return "src/assets/images/Leasingpic/AVFINAN.jpg";
      if (index === 1) return "src/assets/images/Leasingpic/gll.png";
      if (index === 2) return "src/assets/images/Leasingpic/bic.png";
      if (index === 3) return "src/assets/images/Leasingpic/phet.jpg";
      if (index === 4) return "src/assets/images/Leasingpic/sml.jpg";
      if (index === 5) return "src/assets/images/Leasingpic/dgb.jpg";
      if (index === 6) return "src/assets/images/Leasingpic/SMI.jpg";
      if (index === 7) return "src/assets/images/Leasingpic/aeon.png";
      if (index === 8) return "src/assets/images/Leasingpic/kolao.jpg";
      if (index === 9) return "src/assets/images/Leasingpic/thai.jpg";
      if (index === 10) return "src/assets/images/Leasingpic/krung.jpg";
      if (index === 11) return "src/assets/images/Leasingpic/kb.jpg";
      if (index === 12) return "src/assets/images/Leasingpic/maha.jpg";
      if (index === 13) return "src/assets/images/Leasingpic/lat.jpg";
    };
    
    

    watch(
      switchValue,
      (newValue) => {
        localStorage.setItem("switchValue", JSON.stringify(newValue));
      },
      { deep: true }
    );

    onMounted(async () => {
      const savedSwitchValue = localStorage.getItem("switchValue");
      if (savedSwitchValue) {
        switchValue.value = JSON.parse(savedSwitchValue);
      }

      const response = await axios.post(
        "http://172.21.25.79:7007/jdb/v1/displayleasingaccount?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd"
      );
      wallets.value = response.data.data.reduce((result, value, index, array) => {
        if (index % 4 === 0) {
          result.push(array.slice(index, index + 4));
          switchValue.value.push(false);
        }
        return result;
      }, []);
    });

    return {
      wallets,
      switchValue,
      toggleSwitch,
      items: ["Status"],
      getImage,
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
  margin-top: 40px;
  top: 40px;
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