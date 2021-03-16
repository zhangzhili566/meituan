<template>
    <div class="tag-box">
        <span class="tag-item" v-for="obj in tag" :key="obj.id" :class="{'active':currentType == obj.id}"
        @click="changeTab(obj.id)">
            {{obj.name}}({{obj.count}})
        </span>
    </div>
</template>

<script>

    export default {
        props:['tag','currentType'],
        methods:{
            changeTab(id){
                this.$emit('change',id);
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/css/mixin.scss";
    .tag-box{
        padding:0.3rem 0.28rem 0.1rem;
        .tag-item{
            padding: 0 0.24rem;
            display: inline-block;
            height: 0.52rem;
            line-height: 0.52rem;
            text-align: center;
            font-size: 0.26rem;
            color: #666;
            //添加处理过的边框
            @include border-fix(#bbb,0.52rem);
            margin: 0 0.2rem 0.2rem;
            &.active{
                @include border-fix(#ffb000,0.52rem);
                background: #fffbf1;
            }
        }
    }
</style>