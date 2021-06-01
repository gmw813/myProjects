<!--
 * @Descripttion: 
 * @Author: GENGMENGWEI
 * @Date: 2021-05-17 09:45:25
 * @LastEditTime: 2021-05-17 10:21:32
-->
<template>
  <div class="picCode">
	<canvas id="canvas" width="128" height="50"></canvas>
</div>
</template>

<script>
export default {
data(){
    return {

    }
},
mounted(){
    this.show(9973);
},
methods:{
show(codeNum){
    var canvas_width=document.querySelector('#canvas').width;
    var canvas_height=document.querySelector('#canvas').height;
    var canvas=document.getElementById("canvas");
    var context=canvas.getContext("2d");
    context.fillStyle = "white"; //画布填充色
    context.fillRect(0, 0, canvas.width, canvas.height); //清空画布
    let numArr = codeNum.toString().split('');
    for(var i=0;i<numArr.length;i++){
        var deg=Math.random()*30*Math.PI/180;
        var text=numArr[i];
        var x=i*28+10;//文字在canvas上x坐标
        var y=Math.random()*10 +30;//文字在canvas上y坐标
        
        context.font="bold 25px 微软雅黑";
        context.translate(x,y);
        context.rotate(deg);
        
        context.fillStyle=this.randomColor();
        context.fillText(text,0,0);
 
        context.rotate(-deg);
        context.translate(-x,-y);        
    }
 
    for(var i=0;i<3;i++){
        //验证码上显示线条
        context.strokeStyle=this.randomColor();
        context.beginPath();
        context.moveTo(Math.random()*canvas_width,Math.random()*canvas_height);
        context.lineTo(Math.random()*canvas_width,Math.random()*canvas_height);
        context.stroke();
    }
 
    for(var i=0;i<=30;i++){
        //验证码上显示小点
        context.strokeStyle=this.randomColor();
        context.beginPath();
        var x=Math.random()*canvas_width;
        var y=Math.random()*canvas_height;
        context.moveTo(x,y);
        context.lineTo(x+1,y+1);
        context.stroke();
    }
 
},
randomColor(){
    //得到随机的颜色值
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+","+g+","+b+")"
}
}
}
</script>

<style>

</style>