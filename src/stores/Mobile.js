import {defineStore} from 'pinia'
import axios from 'axios'
import {endpoint} from '../endpoints/index'
import Config from '../configs/index'

const {baseUrl} = Config

export const useMobileStore = defineStore('mobileStore', {
    state: ()=>{
        return{
            mobileInfo: {
                success: null,
                fail: null
            },
            displayMobile: {
                success: null,
                fail: null
            },
            companies: []
        }
    },
    getters: {
        getMobileInfo: state => state.mobileInfo,
        getDisplayMobile: state => state.displayMobile,
        getCompaniesInfo: state => state.companies
    },
    actions:{
        async getMobileService(bodyRequest){
            return new Promise((resolve, reject)=>{
                // console.log(baseUrl+endpoint.displayleasingaccount+
                //     `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd &BILLER_CODE=LTC&status=O
                axios.post(baseUrl+endpoint.mobiledisable+
                    `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BILLER_CODE=${bodyRequest.billerId}&status=${bodyRequest.status}`)
                    .then(response=>{
                        this.mobileInfo ={
                            data:  response.data.data,
                            fail: null
                        };
                        resolve(response.data)
                    })
                    .catch(error=>{
                        this.mobileInfo={
                            success: null,
                            fail: error.response.data
                        }
                        reject(error.response.data)
                    })
            })
        },
        async getDisplayMobileService(){
            return new Promise((resolve, reject)=>{
                axios.post(baseUrl+endpoint.displaymbbillerlist+'?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd')
                .then(response=>{
                    this.displaymobile = {
                        success: response.data.data,
                        fail: null
                    }
                    this.companies = response.data.data.reduce((result, value, index, array) => {
                        if (index % 4 === 0) {
                          result.push(array.slice(index, index + 4));
                        //   switchValue.value.push(false);
                        }
                        return result;
                      }, []);


                    resolve(response.data)
                })
                .catch(error=>{
                    this.displayMobile = {
                        success: null,
                        fail: error.response.data
                    }
                    reject(error.response.data)
                })
            })
        }
    }
})