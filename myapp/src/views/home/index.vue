<template>
    <div>
        <!-- header -->
        <van-sticky :offset-top="0">   
            <div class="header">
                <input type="text" class="search" placeholder="搜索商家或者商品">
            </div>
        </van-sticky>   
        <category></category>
        <div class="title">---附近商家---</div>
        <list></list>
        
    </div>
</template>

<script>
    import category from './category'
    import list from './list'
    export default {
    components:{
        category,
        list
    }
    }
</script>

<style lang="scss" scoped>
    .header{
        background: black;
        padding: 0.2rem;
        .search{
            width:100%;
            height: 0.6rem;
            border: none;
            // 块元素显示的文本的行数
            line-clamp: 0.6rem;
            //边框的圆角
            border-radius: 0.3rem;
            padding: 0 0.2rem;
            box-sizing: border-box;
        }
    }
    .title{
        font-size: 15px;
        text-align: center;
        font-weight: bold;
        margin: 0.3rem 0 0.1rem;
    }
    
</style>