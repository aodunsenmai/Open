<template>
  <div class="error_box">
    <img src="../../assets/images/error500.png" alt="">
    <div>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>

<style>
  body {
    background-color: #f5f8ff;
  }

  .error_box {
    width:500px;
    height:416px;
    position:absolute;
    top:50%;
    left:50%;
    text-align: center;
    margin-top:-208px;
    margin-left:-250px;
  }
  .error_box a{
    display: inline-block;
    width: 240px;
    height: 44px;
    line-height: 44px;
    border-radius: 4px;
    background-color: rgb(7, 75, 206);
    color: rgb(255, 255, 255);
    font-size: 16px;
    text-align: center;
    margin-top: 30px;
  }


</style>

<script>
  export default{
    data () {
      return {msg: '这个是Home模板页'}
    }
  }
</script>
