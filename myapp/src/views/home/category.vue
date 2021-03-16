<template>
    <div class="cate-box">
        <ul class="cate-list" v-for="obj in cateList" :key="obj.id">
            <img class="cate-img" v-bind:src="obj.img">
            <li class="cate-title">{{obj.name}}</li>
        </ul>
       
        
    </div>
</template>
// 每次请求需要引用axios，然后通过axios.get发送请求，如果请求成功会判断后台给的状态码是否成功，如果是的话把数据存进cateList数组，
// 然后上面再循环输出cateList数组，对应的标签取到对应的值，例如：ul取到obj.id;  img取到obj.img;  li取到obj.name

<script>
// import axios from 'axios'
import {getCatgroy} from '@/api/home.js'
    export default {
        data(){
                return{
                    cateList:[]
                }
            },
        created(){
            getCatgroy().then(res=>{
                this.cateList =res.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .cate-box{
        display: flex;
        flex-wrap: wrap;
        .cate-list{
            width: 20%;
            text-align: center;
            padding-top: 0.3rem;
            font-size: 11px;
            .cate-img{
                width: 0.88rem;
                height: 0.88rem;
                padding-bottom: 0.1rem;
            }
        }
    }
    
</style>