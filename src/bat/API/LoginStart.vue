<template>
    <h1>Login</h1>
    <button @click="loginStart">로그인</button>
    <!-- <img src="@/assets/kakaoLogin.png" style="cursor: pointer;" @click="loginStart"> -->
</template>

<script>
export default {
  name: 'loginComponent',
  methods: {
    loginStart() {
      window.Kakao.Auth.authorize({
        redirectUri: "http://localhost:8080/kakaoLogin",
        prompt: 'select_account'
        // 
      });
    }
  }
};
</script>
<style scoped>

</style>
