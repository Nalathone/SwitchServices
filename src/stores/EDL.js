import {defineStore} from 'pinia'
import axios from 'axios'
import {endpoint} from '../endpoints/index'
import Config from '../configs/index'

const {baseUrl} = Config

export const useEDLStore = defineStore('edlStore', {
    state: ()=>{
        return{
            edlInfo: {
                success: null,
                fail: null
            },
            displayedl: {
                success: null,
                fail: null
            },
            province: []
        }
    },
    getters: {
        getEDLInfo: state => state.edlInfo,
        getDisplayEDL: state => state.displayEDL,
        getprovinceInfo: state => state.province
    },
    actions:{
        async getEDLService(bodyRequest){
            return new Promise((resolve, reject)=>{
                // console.log(baseUrl+endpoint.displayleasingaccount+
                //     `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&COMPANY_ID=${bodyRequest.companyId}&STATUS=${bodyRequest.status}`); &PRO_ID=02&SHORT_NAME=VT&status=O
                axios.post(baseUrl+endpoint.disableenableedlprovince+
                    `?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd&PRO_ID=${bodyRequest.proId}&SHORT_NAME=${bodyRequest.shortname}&status=${bodyRequest.status}`)
                    .then(response=>{
                        this.edlInfo ={
                            data:  response.data.edl,
                            fail: null
                        };
                        resolve(response.data)
                    })
                    .catch(error=>{
                        this.edlInfo={
                            success: null,
                            fail: error.response.data
                        }
                        reject(error.response.data)
                    })
            })
        },
        async getDisplayEDLService(){
            return new Promise((resolve, reject)=>{
                axios.post(baseUrl+endpoint.displayEDLprovinces+'?sign=ed0e999dda8e923cb1eaa402384213a3439db0fe556e68ba24a8a985947f14dd')
                .then(response=>{
                    this.displayEDL = {
                        success: response.data.edl,
                        fail: null
                    }
                    this.province = response.data.edl.reduce((result, value, index, array) => {
                        if (index % 4 === 0) {
                          result.push(array.slice(index, index + 4));
                        //   switchValue.value.push(false);
                        }
                        return result;
                      }, []);


                    resolve(response.data)
                })
                .catch(error=>{
                    this.displayEDL = {
                        success: null,
                        fail: error.response.data
                    }
                    reject(error.response.data)
                })
            })
        }
    }
})