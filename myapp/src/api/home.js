import requery from '@/utils/requery'

export function getCatgroy(data){
    return requery({
        url:"/get_type",
        //在es6中属性和值同名可以这样简写
        data
    })
}
export function getStore(data){
    return requery({
        url:"/get_store",
        //在es6中属性和值同名可以这样简写
        data
    })
}