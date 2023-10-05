import {defineStore} from 'pinia'
import axios from 'axios'
import {endpoint} from '../endpoints/index'
import Config from '../configs/index'

const {baseUrl} = Config

export const useWaterStore = defineStore('waterStore', {
    state: ()=>{
        return{
            waterInfo: {
                success: null,
                fail: null
            },
            displaywater: {
                success: null,
                fail: null
            },
            province: []
        }
    },
    getters: {
        getWaterInfo: state => state.waterInfo,
        getDisplayWater: state => state.displayWater,
        getprovinceInfo: state => state.province
    },
    actions:{
        async getWaterService(bodyRequest){
            return new Promise((resolve, reject)=>{
                // console.log(baseUrl+endpoint.displayleasingaccount+
                //     `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&COMPANY_ID=${bodyRequest.companyId}&STATUS=${bodyRequest.status}`); &PRO_ID=01&SHORT_NAME=VC&status=C
                axios.post(baseUrl+endpoint.disableenablewaterarea+
                    `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&PRO_ID=${bodyRequest.proId}&SHORT_NAME=${bodyRequest.shortname}&status=${bodyRequest.status}`)
                    .then(response=>{
                        this.waterInfo ={
                            data:  response.data.data,
                            fail: null
                        };
                        resolve(response.data)
                    })
                    .catch(error=>{
                        this.waterInfo={
                            success: null,
                            fail: error.response.data
                        }
                        reject(error.response.data)
                    })
            })
        },
        async getDisplayWaterService(){
            return new Promise((resolve, reject)=>{
                axios.post(baseUrl+endpoint.displaywateraccount+'?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd')
                .then(response=>{
                    this.displayWater = {
                        success: response.data.data,
                        fail: null
                    }
                    this.province = response.data.data.reduce((result, value, index, array) => {
                        if (index % 5 === 0) {
                          result.push(array.slice(index, index + 5));
                        //   switchValue.value.push(false);
                        }
                        return result;
                      }, []);


                    resolve(response.data)
                })
                .catch(error=>{
                    this.displayWater = {
                        success: null,
                        fail: error.response.data
                    }
                    reject(error.response.data)
                })
            })
        }
    }
})