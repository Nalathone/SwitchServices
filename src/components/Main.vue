<template>
  
  <div class="relative flex min-h-screen">
    <!--=========================================== Sidebar ===========================================-->
    <div class="flex flex-col justify-between bg-white text-gray-900 w-72">
      <div>
        <div class="p-1 pl-3 flex items-center justify-center">
          <img
            alt="Rubick Tailwind HTML Admin Template"
            class="self-center w-12"
            src="../assets/images/jdblogo.png"
          />
          <span id="font-blue" class="pl-2 text-2xl font-extrabold"
            >Switch Services</span
          >
        </div>
        <div class="px-4 w-full">
          <hr />
        </div>

        <!--=========================================== Menu Sidebar and Active Content ===========================================-->
        <div id="tabs" class="container">
          <div class="tabs">
            <a
              @click="currentTab = 1"
              :class="[currentTab == 1 ? 'active' : '']"
              class="m-3 p-2.5 mt-4 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon size="xl" :icon="['fas', 'money-bill']" />
              <span class="text-md ml-2">EDL</span>
            </a>

            <a
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
              @click="currentTab = 2"
              :class="[currentTab == 2 ? 'active' : '']"
            >
              <font-awesome-icon size="xl" :icon="['fas', 'list-check']" />
              <span class="text-md ml-2">Water</span>
            </a>

            <a
              @click="currentTab = 3"
              :class="[currentTab == 3 ? 'active' : '']"
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon
                size="xl"
                :icon="['fas', 'money-bill-trend-up']"
              />
              <span class="text-md ml-2">Leasing</span>
            </a>

            <a
              @click="currentTab = 4"
              :class="[currentTab == 4 ? 'active' : '']"
              class="m-3 p-2.5 flex items-center rounded-lg px-4"
            >
              <font-awesome-icon
                size="xl"
                :icon="['fas', 'money-bill-trend-up']"
              />
              <span class="text-md ml-2">SIM Services</span>
            </a>

            <!-- Wallet services -->
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


          </div>
        </div>
      </div>
        <div class="item-center" >
      <!--=========================================== Menu Sidebar logout ===========================================-->
      <button @click="logout"
        id="btn-logout"
        class="m-3 p-2.5 rounded-lg px-20 border-2 border-red-600 text-md ml-2 font-bold"
      >Logout
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
      <Headerbar />

      <!--=========================================== Content ===========================================-->
      <div class="content">
        <!--=========================================== Input Money Content ===========================================-->
        <div v-if="currentTab === 1" class="tabcontent">
          <div class="m-4 p-2.5 rounded-lg px-4 bg-white">
            <div id="font-blue" class="flex items-center">
              <font-awesome-icon
                size="xl"
                class="mr-2"
                :icon="['fas', 'circle-chevron-right']"
              />
              <span class="font-bold text-lg">Switch Services EDL</span>
            </div>
          </div>
          <div class="m-4 mt-6 p-2.5 rounded-lg px-4 bg-white">
            <div class="mt-3">
              <span id="font-blue" class="font-bold text-2xl">Switch Services</span>
            </div>

            <div
              class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 mt-8"
            >
              <!--=========================================== LAK ===========================================-->
              <div class="bg-gray-200 rounded-lg">
                <div class="flex items-center m-4">
                  <img
                    class="center"
                    src="../assets/images/EDL.png"
                  />
                  
                </div>
                <text id="font-blue" class="font-bold center"
                    >EDL</text
                  >
                  <switchtog id="font-blue" class="move mb-5"></switchtog>
                <!--======================= End Grid =======================-->
              </div>
              <!--=========================================== End LAK ===========================================-->

              <!--=========================================== THB ===========================================-->
              <div class="bg-gray-200 rounded-lg">
                <div class="flex items-center m-4">
                  <img
                    class="center"
                    src="../assets/images/EDL.png"
                  />
                </div>
                <div>
                  <text id="font-blue" class="font-bold center"
                    >EDL</text
                  >
                  <switchtog id="font-blue" class="move mb-5"></switchtog>

                </div>
              </div>

              <!--=========================================== USD ===========================================-->
              <div class="bg-gray-200 rounded-lg">
                <div class="flex items-center m-4">
                  <img
                    class="center"
                    src="../assets/images/EDL.png"
                  />
                </div>
                <div>
                  <text id="font-blue" class="font-bold center"
                    >EDL</text
                  >
                  <switchtog id="font-blue" class="move mb-5"></switchtog>

                </div>
              </div>

              <div class="bg-gray-200 rounded-lg">
                <div class="flex items-center m-4">
                  <img
                    class="center"
                    src="../assets/images/EDL.png"
                  />
                </div>
                <div>
                  <text id="font-blue" class="font-bold center"
                    >EDL</text
                  >
                  <switchtog id="font-blue" class="move mb-5"></switchtog>

                </div>
              </div>
            </div>
          </div>
        </div>

        <!--=========================================== Waiting for authorize Content  ===========================================-->
        <div v-if="currentTab === 2" class="tabcontent">
         
          <water></water> 
        
        </div>

        <!--=========================================== Amount money Content  ===========================================-->
        <div v-if="currentTab === 3" class="tabcontent">
          <lessing></lessing>
        </div>

        <div v-if="currentTab === 4" class="tabcontent">
          <simservices></simservices>
         
        </div>

        <!-- wallet component -->
        <div v-if="currentTab === 5" class="tabcontent">
          <Walletcontent/>
         
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>


import { useRouter } from "vue-router";
const router = useRouter();
function logout () {
  router.push("/UserLogin")
}


import Headerbar from "../components/Headerbar.vue";
import switchtog from '../components/switchtog.vue';
import water from './water.vue';
import lessing from './lessing.vue';
import simservices from './simservices.vue';
import Walletcontent from './Wallet/WalletContent.vue'


//fontawesome icon
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRightFromBracket,
  faCircleChevronRight,
  faListCheck,
  faMoneyBill,
  faMoneyBillTrendUp,
  faWallet
 
  
} from "@fortawesome/free-solid-svg-icons";
import { ref } from "vue";
library.add(
  faCircleChevronRight,
  faMoneyBill,
  faListCheck,
  faMoneyBillTrendUp,
  faArrowRightFromBracket,
  faWallet
);


const currentTab = ref(1);




</script>

<style scoped>
#font-blue {
  color: #2a5ba7;
}

#btn-logout {
  color: #e53e3e;
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

.tabs a:hover {
  background-color: #eeeeee;
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

</style>