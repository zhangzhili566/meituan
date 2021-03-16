import Vue from 'vue'
const ball = {
    namespaced:true,
    state:{
        ballList:[{
            show:false
        },
        {
            show:false
        },
        {
            show:false
        },
        {
            show:false
        },
        {
            show:false
        },
        {
            show:false
        }],
        runList:[]
    },
    mutations:{
        show(state,el){
            for(var i=0;i<state.ballList.length;i++){
                let ball = state.ballList[i];
                if(!ball.show){
                    Vue.set(ball,'show',true);
                    Vue.set(ball,'el',el)
                    state.runList.push(ball);
                    break;
                }
            }
        },
        //调用这个方法释放小球，把小球的状态变成false
        removeBall(state){
            let ball = state.runList.shift();
            if(ball){
                Vue.set(ball,'show',false)
            }
        }
    }
}
export default ball;