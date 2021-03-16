<template>
    <div class="container">
        <div class="header">
            <span class="iconfont icon-fanhui" @click="$router.push('/')" ></span>
        </div>
        <div>
            <div class="seller-box">
                <img :src="seller.img" class="img-box">
                <div class="info-box">
                    <div class="time">{{seller.minute}}分钟  {{seller.distance}}</div>
                    <div class="notice">公告:{{seller.notice}}</div>
                    <div class="full">满减:{{seller.full}}</div>
                </div>
            </div>    
        </div>  
    </div>   
</template>

<script>
    export default {
        props:["seller"]
    }
</script>

<style lang="scss" scoped>
    .container{
        background-color:black;
        .header{
            height: 1rem;
            color: white;
            line-height: 1rem;
            padding-left: 0.2rem;
            
        }
        .seller-box{
            display: flex;
            padding: 0.1rem 0.2rem 0.2rem;
            .img-box{
                width: 1.7rem;
                flex: 0 0 1.7rem;
                margin-right: 0.2rem;
                img{
                    width: 100%;
                }
            }
        }
        .info-box{
            color: white;
            flex: 1;
            width: 0;
            font-size: 12px;
            .time{
                height: 0.32rem;
                line-height: 0.32rem;
                margin-bottom: 0.1rem;
            }
            .notice{
                height: 0.32rem;
                line-height: 0.32rem;
                //文本超出屏幕（溢出）时省略
                overflow: hidden;
                //文本超出屏幕（溢出）时用省略号表示
                text-overflow: ellipsis;
                //文本超出屏幕（溢出）时不换行
                white-space: nowrap;
                margin-bottom: 0.2rem;
            }
            .full{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            
        }
    }
</style>