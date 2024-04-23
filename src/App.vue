<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/bind">exam</router-link> |
    <router-link to="/food">food</router-link> |
    <router-link to="/howManyMeals">howManyMeals</router-link> |
    <router-link to="/research">research</router-link> |
    <router-link to="/forStudy">forStudy</router-link> |
    <router-link to="/modal">modal</router-link> |
    <router-link to="/modalIf">modalIf</router-link> |
    <router-link to="/axio">axio</router-link> |
    <router-link to="/nodeTest">nodeTest</router-link> |  
    <span> test</span>
    <router-link to="/tourAPI">tourAPI</router-link> |
    <router-link to="/tourAPILoca">tourAPILoca</router-link> |
    <router-link to="/tourAPIFestival">tourAPIFestival</router-link> |
    <router-link to="/tourAPIitem">tourAPIitem</router-link> |
    <router-link to="/AreaToDB">AreaToDB</router-link> |
    <router-link to="/AreaToDBAll">AreaToDBAll</router-link> |
    <router-link to="/AskToDB">AskToDB</router-link> |
    <router-link to="/TravelPlanner">TravelPlanner</router-link> |
    <router-link to="/kakaoStart">kakaoStart</router-link> |


  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
