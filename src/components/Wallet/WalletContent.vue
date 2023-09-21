<template>
    <div class="flex-1 bg-gray-200">
        <div class="content">
            <!-- Top content -->
            <div class="m-4 p-2.5 rounded-lg px-4 bg-white">
                <div id="font-blue" class="flex items-center">
                    <font-awesome-icon size="xl" class="mr-2" :icon="['fas', 'circle-chevron-right']" />
                    <span class="font-bold text-lg">Switch Services Wallet</span>
                </div>
            </div>
            <!-- End Top content -->

            <!-- Menu Content -->
            <div class="m-4 mt-6 p-2.5 rounded-lg px-4 bg-white">

                <div class="mt-3">
                    <span id="font-blue" class="font-bold text-2xl">Switch Services</span>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-8 mb-2">
                    <div class="bg-gray-200 rounded-lg">
                        <div class="flex items-center m-4">
                            <img width="300" height="300" class="center" src="../../assets/images/wallet/mmoney_logo.png" />
                        </div>
                        <div>
                            <span id="font-blue" class="font-bold center">MMoney</span>
                            <mmoney id="font-blue" class="move mb-5" />
                        </div>
                    </div>
                    <div class="bg-gray-200 rounded-lg">
                        <div class="flex items-center m-4">
                            <img width="300" height="300" class="center" src="../../assets/images/wallet/umoney_logo.png" />
                        </div>
                        <div>
                            <span id="font-blue" class="font-bold center">UMoney</span>
                            <umoney id="font-blue" class="move mb-5" />
                        </div>
                    </div>
                    <div class="bg-gray-200 rounded-lg">
                        <div class="flex items-center m-4">
                            <img width="300" height="300" class="center rounded-3xl"
                                src="../../assets/images/wallet/laopay_logo.jpg" />
                        </div>
                        <div>
                            <span id="font-blue" class="font-bold center">LapPay</span>
                            <laopay id="font-blue" class="move mb-5" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Menu Content -->
        </div>
    </div>
</template>

<script setup>

import mmoney from './MmoneyToggle.vue'
import umoney from './UmoneyToggle.vue'
import laopay from './LaopayToggle.vue'

</script>

<style scoped>
#font-blue {
    color: #2a5ba7;
}

.move {
    align-items: center;
    margin-left: 50px;

}

.center {
    text-align: center;
    font-size: 40px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>