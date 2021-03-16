<template>
    <div>
        <van-list  v-model="loading"  :finished="finished"  finished-text="没有更多了"  @load="getData">
        <ul class="list-container">
            <li class="shop-list" v-for="item in list" :key="item.id" @click="godetail(item.id)">
                <div class="img-box">
                    <img :src="item.img">
                </div>
                <div class="info-box">
                    <div class="title">{{item.name}}</div>
                    <div class="rate-box">
                        <div class="d1">
                            <star :score='item.score'></star>
                            <span class="rate">{{item.score}}</span>
                            <span>{{item.num}}月销</span>
                        </div>
                        <div>
                            <span>{{item.minute}}分钟</span>
                            <span class="left-line">{{item.distance}}</span>
                        </div>
                    </div>
                    <div class="distribution-box">
                        <span>起送{{item.price}}</span>
                        <span class="left-line">配送{{item.fee}}</span>
                        <span class="left-line">人均{{item.per_capita}}</span>
                    </div>
                </div>
            </li>
        </ul>
        </van-list>
    </div>
</template>

<script>
import star from './../../components/star'
import {getStore} from '@/api/home.js'
    export default {
        data(){
            return{
               current:0,
                size:10,
                list:[],

                //控制着三个变量的值，下拉获取很多商户
                loading:true,
                finished:false,
                total:0
            }
        },
        components:{
            star
        },
        methods:{
            getData(){
                getStore({
                    current:this.current,
                    size:this.size
                }).then(res=>{
                    this.list = this.list.concat(res.data.list);
                    this.loading = false;
                    this.current++;
                    this.total = res.data.total
                    //加载完所有列表后停止finished
                    if(this.list.length >= this.total){
                        this.finished = true;
                    }
                })
            },
            //跳转商家详情页
            godetail(id){
                this.$router.push({path:'/detail',query:{id}})
            }
        },
        created(){
            this.getData();
        }
    }
</script>

<style lang="scss" scoped>
    .list-container{
        padding:0 0.2rem 0;
        .shop-list{
            margin: 0.2rem 0 0.5rem 0;
            display: flex;
            .img-box{
                width: 1.5rem;
                height: 1.15rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .info-box{
                margin: 0.05rem 0.3rem 0.1rem 0.3rem;
                flex:1;
                .title{
                    font-size: 0.3rem;
                    color: black;
                    line-height: 1.4;
                    font-weight: bold;
                }
                .rate-box,.distribution-box{
                    display: flex;
                    line-height: 1.4;
                    font-size: 0.1rem;
                    .rate{
                        margin-right: 0.2rem;
                    }
                    .left-line::before{
                        content:"";
                        display: inline-block;
                        width: 1px;
                        height: 6px;
                        margin: 0 3px;
                        background:#ccc;
                    }
                    
                }
                .rate-box{
                    justify-content: space-between;
                    .d1{
                        display: flex;
                    }
                }           
            }
        }
    }
</style>