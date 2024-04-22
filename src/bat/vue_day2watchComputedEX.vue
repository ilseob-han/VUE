<template>

  <h1>입력마다 alert가 뜨도록</h1>
  <input type="text" v-model="mem_first">
  <input type="text" v-model="mem_second">

  {{mem_first}}
  {{mem_second}}

  {{fullName}}
  <!-- computed를 여기서 불러버린다.  -->
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mem_first:'',
      mem_second:''
    }
  },

  watch:{
    mem_first(){
      console.log('변경확인')
    }
  },

  computed:{
    fullName(){
      return this.mem_first+this.mem_second;
    }
  },

  methods: {

  },

  components: {
  }
}
</script>

<style>


</style>