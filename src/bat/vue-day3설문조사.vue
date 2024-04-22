<template>


  <h1>설문 조사</h1>
  <div class="table-container">
    <table>
      <tr>
        <th>좋아하는 음식</th>
        <td><input type="text" v-model="favor_food" id="favor_food"></td>
      </tr>
      <tr>
        <th>최근 1주일 동안 먹은 횟수</th>
        <td>
          <select v-model="howMany">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </td>
      </tr>
      <tr>
        <th>국내 음식 여부</th>
        <td>
          <input type="radio" v-model="whereFood" name="foodWorld" value="국내 음식">국내 음식
          <input type="radio" v-model="whereFood" name="foodWorld" value="해외 음식">해외 음식
        </td>
      </tr>
    </table>

    <button @click="submitCheck">제출 완료</button><br/>
    <span>실시간 반영</span>
    {{favor_food}}<br/>
    {{howMany}}<br/>
    {{whereFood}}


    <!-- 설문 완료-->
    <h3>설문 완료</h3>
        <table>
      <tr>
        <th>좋아하는 음식</th>
        <td>{{a}}</td>
      </tr>
      <tr>
        <th>최근 1주일 동안 먹은 횟수</th>
        <td>{{b}}</td>
      </tr>
      <tr>
        <th>국내 음식 여부</th>
        <td>{{c}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
   // data 란에 들어가는거 없다. 
    return {
    favor_food: '',
     a :'',
     howMany :'',
     b :'',
     whereFood :'',
     c :''
    }
  },
  methods: {
    submitCheck(){
      this.a=this.favor_food;
      this.b = this.howMany;
      this.c = this.whereFood;
    }
  },

  components: {
  }
}
</script>

<style>
table {
  margin-left: 40%;
  border-collapse: collapse;
}

table tr th, table tr td {
  border: none;
  padding: 15px 10px 15px 10px;
}

table tr th {
  text-align: left;
  width: 200px;
  background-color: darkgray;
}

table tr td {
  text-align: left;
}

input[type="text"] {
  height: 30px;
}

select {
  width: 50px;
  height: 30px;
}

button {
  width: 150px;
  height: 60px;
  margin: 30px;
  padding: 10px;
  border-radius: 15px;
  border: none;
  background-color:lightblue;
  color: #2c3e50;
  font-size: 25px;
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>