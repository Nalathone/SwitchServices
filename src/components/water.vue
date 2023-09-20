<template>
    
     
      <div class="flex-1 bg-gray-200">
      <!--=========================================== Content ===========================================-->
      <div class="content">

          <div class="m-4 p-2.5 rounded-lg px-4 bg-white">
            <div id="font-blue" class="flex items-center">
              <font-awesome-icon
                size="xl"
                class="mr-2"
                :icon="['fas', 'circle-chevron-right']"
              />
              <span class="font-bold text-lg">Switch Services Water</span>
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
                  <img width="220" height="220"
                    class="center"
                    src="../assets/images/water.jpg"
                  />
                  
                </div>
                <text id="font-blue" class="font-bold center"
                    >Water</text
                  >
                  <waterswitch id="font-blue" class="move mb-5"></waterswitch>
                 

               
               
                <!--======================= End Grid =======================-->
              </div>
              <!--=========================================== End LAK ===========================================-->

              <!--=========================================== THB ===========================================-->
              <div class="bg-gray-200 rounded-lg">
                <div class="flex items-center m-4">
                  <img width="220" height="220"
                    class="center"
                    src="../assets/images/water.jpg"
                  />
                </div>
                <div>
                  <span id="font-blue" class="font-bold center"
                    >Blank</span
                  >
                  <waterswitch id="font-blue" class="move mb-5"></waterswitch>
                </div>
              </div>

              <!--=========================================== USD ===========================================-->
              <div class="bg-gray-200 rounded-lg">
                <div class="flex items-center m-4">
                  <img width="220" height="220"
                    class="center"
                    src="../assets/images/water.jpg"
                  />
                </div>
                <div>
                  <span id="font-blue" class="font-bold center"
                    >Blank</span
                  >
                  <waterswitch id="font-blue" class="move mb-5"></waterswitch>
                </div>
              </div>

              <!--=========================================== CNY ===========================================-->
              <div class="bg-gray-200 rounded-lg">
                <div class="flex items-center m-4">
                  <img width="250" height="250"
                    class="center"
                    src="../assets/images/water.jpg"
                  />
                </div>
                <div>
                  <span id="font-blue" class="font-bold center"
                    >Blank</span
                  >
                  <waterswitch id="font-blue" class="move mb-5"></waterswitch>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--=========================================== Waiting for authorize Content  ===========================================-->
       
      </div>
      
 

       
 
   

</template>
<script>
import waterswitch from './waterswitch.vue';
export default {
  name: 'Water',
  components: {
    waterswitch
  },
}

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
.center {
  text-align: center;
  font-size: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
#a {
    background-image: none;
}


</style>