import axios from 'axios'
const BASE_URL = "http://admin.gxxmglzx.com/tender/test"


// 只要调用Promise对象，就会调用axios.get()
export default function({url,data={ }}){
    return new Promise(resolve => {
        axios.get(BASE_URL+url,{
            params:data
        }).then(res=>{
            //请求成功，后台返回200时
            if(res.data.errcode === 200){
                resolve(res.data)
            }else{
                //请求成功，但后台返回的不是200
                console.log(res.errmsg)
            }
            //返回失败
        }).catch(err=>{
            console.log(err)
        })
    })
}

//这个文件主要用来封装axios的请求