import {defineStore} from 'pinia'
import axios from 'axios'
import {endpoint} from '../endpoints/index'
import Config from '../configs/index'

const {baseUrl} = Config

export const useLeasingStore = defineStore('leasingStore', {
    state: ()=>{
        return{
            leasingInfo: {
                success: null,
                fail: null
            },
            displayLeasing: {
                success: null,
                fail: null
            },
            companies: []
        }
    },
    getters: {
        getLeasingInfo: state => state.leasingInfo,
        getDisplayLeasing: state => state.displayLeasing,
        getCompaniesInfo: state => state.companies
    },
    actions:{
        async getLeasingService(bodyRequest){
            return new Promise((resolve, reject)=>{
                // console.log(baseUrl+endpoint.displayleasingaccount+
                //     `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&COMPANY_ID=${bodyRequest.companyId}&STATUS=${bodyRequest.status}`);
                axios.post(baseUrl+endpoint.disableenableleasingaccount+
                    `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&COMPANY_ID=${bodyRequest.companyId}&STATUS=${bodyRequest.status}`)
                    .then(response=>{
                        this.leasingInfo ={
                            data:  response.data.data,
                            fail: null
                        };
                        resolve(response.data)
                    })
                    .catch(error=>{
                        this.leasingInfo={
                            success: null,
                            fail: error.response.data
                        }
                        reject(error.response.data)
                    })
            })
        },
        async getDisplayLeasingService(){
            return new Promise((resolve, reject)=>{
                axios.post(baseUrl+endpoint.displayleasingaccount+'?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd')
                .then(response=>{
                    this.displayLeasing = {
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
                    this.displayLeasing = {
                        success: null,
                        fail: error.response.data
                    }
                    reject(error.response.data)
                })
            })
        }
    }
})