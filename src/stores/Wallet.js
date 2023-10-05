import {defineStore} from 'pinia'
import axios from 'axios'
import {endpoint} from '../endpoints/index'
import Config from '../configs/index'

const {baseUrl} = Config

export const useWalletStore = defineStore('walletStore', {
    state: ()=>{
        return{
            walletInfo: {
                success: null,
                fail: null
            },
            displayWallet: {
                success: null,
                fail: null
            },
            companies: []
        }
    },
    getters: {
        getWalletInfo: state => state.walletInfo,
        getDisplayWallet: state => state.displayWallet,
        getCompaniesInfo: state => state.companies
    },
    actions:{
        async getWalletService(bodyRequest){
            return new Promise((resolve, reject)=>{
                // console.log(baseUrl+endpoint.displayleasingaccount+
                //     `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd &PROVIDER_CODE=UM&PROVIDER_STATUS=A
                axios.post(baseUrl+endpoint.disableenablewalletaccount+
                    `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&PROVIDER_CODE=${bodyRequest.providerId}&PROVIDER_STATUS=${bodyRequest.status}`)
                    .then(response=>{
                        this.walletInfo ={
                            data:  response.data.data,
                            fail: null
                        };
                        resolve(response.data)
                    })
                    .catch(error=>{
                        this.walletInfo={
                            success: null,
                            fail: error.response.data
                        }
                        reject(error.response.data)
                    })
            })
        },
        async getDisplayWalletService(){
            return new Promise((resolve, reject)=>{
                axios.post(baseUrl+endpoint.displaywalletaccount+'?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd')
                .then(response=>{
                    this.displayWallet = {
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
                    this.displayWallet = {
                        success: null,
                        fail: error.response.data
                    }
                    reject(error.response.data)
                })
            })
        }
    }
})