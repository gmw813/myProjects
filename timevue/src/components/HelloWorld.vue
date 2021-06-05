<template>
<div class="page">
  {{showTime}}
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: ['timeParams','formatParams','stepParams'],
  data(){
    return{
      showTime:'',
      time:this.timeParams,
      format:this.formatParams,
      step:this.stepParams,
      interVal:undefined
    }
  },
  mounted(){
    this.showTime = this.parseTime();
  },
  methods:{
    parseTime(){
      let time = this.time;
      let format = this.format;
      let _s = 1000;
      let _m = 1000*60;
      let _h = 1000*60*60;
      let _d = 1000*60*60*24;
      let d=0;
      let h=0;
      let m=0;
      let s=0;
      if(format.indexOf('DD')!= -1 && time>0){
        d = parseInt(time / _d);
        time = time - d*_d;
        console.log('dd',d,time)
      }
      if(format.indexOf('HH')!= -1 && time>0){
        h = parseInt(time / _h);
        time = time - h*_h;
        console.log('hh',h,time)
      }
      if(format.indexOf('mm')!= -1 && time>0){
        m = parseInt(time / _m);
        time = time - m*_m;
        console.log('mm',m,time)
      }
      if(format.indexOf('ss')!= -1 && time>0){
        s = parseInt(time / _s);
        time = time - s*_s;
        console.log('ss',s,time)
      }
      return format.replace(/ss/,s).replace(/mm/,m).replace(/HH/,h).replace(/DD/,d);
    },
    start(){
      let step = this.step;
      this.interVal = setInterval(()=>{
        if(this.time >0){
          this.time = this.time -step;
          this.showTime = this.parseTime();
        }else{
          clearInterval(this.interVal);
        }
      },step)
    },
    pause(){
      clearInterval(this.interVal);
    },
    reset(time,format){
      this.time = time;
      this.format = format;
      clearInterval(this.interVal);
      this.showTime = this.parseTime();
      this.start();
    }
  }
}
</script>
