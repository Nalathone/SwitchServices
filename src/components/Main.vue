<template>
  
  <div class="relative flex min-h-screen">
    <!--=========================================== Sidebar ===========================================-->
    <div class="flex flex-col justify-between bg-white text-gray-900 w-72">
      
        <div>
        <div class="p-1 pl-3 flex items-center justify-center">
          <img
            alt="Rubick Tailwind HTML Admin Template"
            class="self-center w-12 picfreez" 
            src="../assets/images/jdblogo.png"
          />
          <span id="font-blue" class="pl-2 text-2xl font-extrabold" style="position: fixed; top: 20px;"
            >Switch Services</span
          >
         </div>
        <div class="px-4 w-full">   
        </div>

        <!--=========================================== Menu Sidebar and Active Content ===========================================-->
        <div id="tabs" class="container">
          <div class="tabs">
            <a
              @click="currentTab = 1"
              :class="[currentTab == 1 ? 'active' : '']"
              class="m-3 p-2.5 mt-4 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon size="xl" :icon="['fas', 'bolt']" />
              <span class="text-md ml-2">EDL</span>
            </a>
  <!--=========================================== Menu Sidebar and Active Content ===========================================-->
            <a
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
              @click="currentTab = 2"
              :class="[currentTab == 2 ? 'active' : '']"
            >
            <font-awesome-icon
                size="xl"
                :icon="['fas', 'faucet-drip']"
               
              />
              <span class="text-md ml-2">Water</span>
            </a>
  <!--=========================================== Menu Sidebar and Active Content ===========================================-->
            <a
              @click="currentTab = 3"
              :class="[currentTab == 3 ? 'active' : '']"
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon
                size="xl"
                :icon="['fas', 'file-contract']"
              />
              <span class="text-md ml-2">Leasing</span>
            </a>
  <!--=========================================== Menu Sidebar and Active Content ===========================================-->
            <a
              @click="currentTab = 4"
              :class="[currentTab == 4 ? 'active' : '']"
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon
                size="xl"
                :icon="['fas', 'sim-card']"
              />
              <span class="text-md ml-2">Mobile Services</span>
            </a>
  <!--=========================================== Menu Sidebar and Active Content ===========================================-->
            <a
              @click="currentTab = 5"
              :class="[currentTab == 5 ? 'active' : '']"
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon
                size="xl"
                :icon="['fas', 'wallet']"
              />
              <span class="text-md ml-2">Wallet Service</span>
            </a>
  <!--=========================================== Menu Sidebar and Active Content ===========================================-->
            <a
              @click="currentTab = 6"
              :class="[currentTab == 6 ? 'active' : '']"
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon
                size="xl"
                :icon="['fas', 'qrcode']"
              />
              <span class="text-md ml-2">Bank-QR</span>
            </a>

  <!--=========================================== ENd menu ===========================================-->
          </div>
        </div>
      </div>
        <div class="item-center" >
      <!--=========================================== Menu logout ===========================================-->
      <button @click="logout"
        id="btn-logout"
        class="m-3 p-2.5 rounded-lg px-20 border-2 border-red-600 text-md ml-2 font-bold"
      > Logout
        <font-awesome-icon
          size="lg"
          :icon="['fas', 'arrow-right-from-bracket']"
          rotation="180"
        />
      </button>
   
  </div>
    </div>

    <!--=========================================== Main content ===========================================-->
    <div class="flex-1 bg-gray-200">
      <!--=========================================== Header ===========================================-->
      
      <Headerbar :username="$route.query.username"/>

      <!--=========================================== Content ===========================================-->
      <div class="content">
        <!--=========================================== Input Money Content ===========================================-->
        <div v-if="currentTab === 1" class="tabcontent">
          <EDLContent/>
       </div>

        <!--=========================================== Waiting for authorize Content  ===========================================-->
        <div v-if="currentTab === 2" class="tabcontent">
         
      <WaterContent/>
        
        </div>

        <!--=========================================== Amount money Content  ===========================================-->
        <div v-if="currentTab === 3" class="tabcontent">
         <LeasingContent/>
        </div>

        <div v-if="currentTab === 4" class="tabcontent">
          <simservices></simservices>
         
        </div>

        <!-- wallet component -->
        <div v-if="currentTab === 5" class="tabcontent">
          <WalletContent/>
         
        </div>

        <div v-if="currentTab === 6" class="tabcontent">
        
         <BankQRContent/>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>



import { useRouter } from "vue-router";
const router = useRouter();
async function logout () {
  await localStorage.clear();
  router.replace("/UserLogin")
}


import Headerbar from "../components/Headerbar.vue";
import WaterContent from "./Water/WaterContent.vue";
import LeasingContent from "./Leasing/LeasingContent.vue"
import simservices from './Mobile/simservices.vue';
import EDLContent from './EDL/EDLContent.vue';
import WalletContent from './Wallet/WalletContent.vue';
import BankQRContent from './BankQR/BankQRContent.vue'



//fontawesome icon

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightFromBracket,
  faCircleChevronRight,
  faListCheck,
  faMoneyBill,
  faMoneyBillTrendUp,
  faWallet,
  faList,
  faBolt,
  faFaucetDrip,
  faFileContract,
  faSimCard,
  faQrcode



} from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
library.add(
  faCircleChevronRight,
  faMoneyBill,
  faListCheck,
  faMoneyBillTrendUp,
  faArrowRightFromBracket,
  faWallet,
  faList,
  faBolt,
  faFaucetDrip,
  faFileContract,
  faSimCard,
  faQrcode
  
);


const currentTab = ref(1);




</script>

<style scoped>


#font-blue {
  color: #2a5ba7;
}

#btn-logout {
  color: #e53e3e;
  position: fixed;
  bottom: 20px; /* adjust the vertical position */
  left: 5px; /* adjust the horizontal position */
  
}


#btn-logout:hover {
  background-color: #e53e3e;
  color: #fff;
}


/* #menu-color {
  color: #2a5ba7;
  cursor: pointer;
} */

/* #menu-color:hover {
  background-color: #2a5ba7;
  color: white;
} */

.tabs a {
  cursor: pointer;
  color: #2a5ba7;
}
.tabs  {
  position: fixed;
  top: 60px;
  padding: 0 10px;
  padding-left: 1px;
  width:  300px;
}
.picfreez  {
  position: fixed;
  top: 12px;
  left: 5px;
}




.tabs a:hover {
  background-color: #d4d4d4;
  color: #2a5ba7;
  cursor: pointer;
}

.tabs a.active {
  background-color: #2a5ba7;
  color: #fff;
  cursor: default;
}



.center {
  text-align: center;
  font-size: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.item-center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.move {
  align-items: center;
  margin-left: 50px;
  
}
.sidebar {
  width: 25%;
  float: left;
}

.main-content {
  width: 75%;
  float: right;
}

@media screen and (max-width: 768px) {
  .sidebar {
    width: 100%;
    float: none;
  }
  
  .main-content {
    width: 100%;
    float: none;
  }
}

</style>