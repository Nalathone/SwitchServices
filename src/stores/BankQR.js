import {defineStore} from 'pinia'
import axios from 'axios'
import {endpoint} from '../endpoints/index'
import Config from '../configs/index'

const {baseUrl} = Config

export const useBankQRStore = defineStore('bankQRStore', {
    state: ()=>{
        return{
            bankQRInfo: {
                success: null,
                fail: null
            },
            displayBankQR: {
                success: null,
                fail: null
            },
            banks: []
        }
    },
    getters: {
        getBankQRInfo: state => state.bankQRInfo,
        getDisplayBankQR: state => state.displayBankQR,
        getBanksInfo: state => state.banks
    },
    actions:{
        async getBankQRService(bodyRequest){
            return new Promise((resolve, reject)=>{
                // console.log(baseUrl+endpoint.displayleasingaccount+
                //     `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd& &BANKCODE=VTB&status=O
                axios.post(baseUrl+endpoint.bankdisableenableQR+
                    `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&BANKCODE=${bodyRequest.bankId}&status=${bodyRequest.status}`)
                    .then(response=>{
                        this.bankQRInfo ={
                            data:  response.data.data,
                            fail: null
                        };
                        resolve(response.data)
                    })
                    .catch(error=>{
                        this.bankQRInfo={
                            success: null,
                            fail: error.response.data
                        }
                        reject(error.response.data)
                    })
            })
        },
        async getDisplayBankQRService(){
            return new Promise((resolve, reject)=>{
                axios.post(baseUrl+endpoint.dispaybanklistQR+'?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd')
                .then(response=>{
                    this.displayBankQR = {
                        success: response.data.data,
                        fail: null
                    }
                    this.banks = response.data.data.reduce((result, value, index, array) => {
                        if (index % 4 === 0) {
                          result.push(array.slice(index, index + 4));
                        //   switchValue.value.push(false);
                        }
                        return result;
                      }, []);


                    resolve(response.data)
                })
                .catch(error=>{
                    this.displayBankQR = {
                        success: null,
                        fail: error.response.data
                    }
                    reject(error.response.data)
                })
            })
        }
    }
})