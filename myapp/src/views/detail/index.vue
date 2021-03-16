<template>
    <div class="scrollBox">
        <div>
            <sellerheader :seller="seller"></sellerheader>
            <van-tabs v-model="active" sticky animated swipeable color="#ffda41">
                <van-tab title="点单">
                <order></order>
                 </van-tab>
                <van-tab title="评价">
                    <comment></comment>
                </van-tab>
                <van-tab title="商家">
                    <seller :seller="seller"></seller>
                </van-tab>
            </van-tabs>
        </div> 
            <cart :seller="seller"></cart>
    </div>
        
    
</template>

<script>

import {getStoreById} from "@/api/detail.js"
import sellerheader from './seller-header'
import order from './order'
import cart from './cart'
import comment  from './../comment'
import seller from './../seller'
import BScroll from "better-scroll"
    export default {
        data(){
            return {
                seller:[],
                active:0,
                scrollBox: null
            };
        },
        components:{
            sellerheader,
            order,
            cart,
            comment,
            seller
        },
        //封装getStoreMsg方法，这个方法是用来获取商家信息的
        methods:{
            getStoreMsg(){   
                getStoreById({id:this.$route.query.id}).then(res => {
                    this.seller = res.data;  
                })
            }
        },
        mounted(){
            this.scrollBox = new BScroll('.scrollBox' ,{
                click:true,
                bounce:false
            });
        },
        created(){
            this.getStoreMsg();
        }
    }
</script>

<style lang="scss" scoped>
    .scrollBox{
        height:100vh;
    }
</style>