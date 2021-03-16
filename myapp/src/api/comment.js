import requery from '@/utils/requery'

export function getComment(data){
    return requery({
        url:"/get_info",
        //在es6中属性和值同名可以这样简写
        data
    })
}