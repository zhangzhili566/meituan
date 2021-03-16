import requery from '@/utils/requery'

export function getStoreById(data){
    return requery({
        url:"/get_store_id",
        //在es6中属性和值同名可以这样简写
        data
    })
}
//获取商品页面
export function getProdById(data){
    return requery({
        url:"/get_nav",
        //在es6中属性和值同名可以这样简写
        data
    })
}