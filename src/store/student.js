import { createStore } from 'vuex'

const store = createStore( {
    state: {
        studentList: new Array
    },
    mutations: {
        addStu(state,obj){            
            console.log(state);
            console.log('==========');
            console.log(obj);
            // state 란 - 위의 stated안의 변수를 의미한다.
            state.studentList.push(obj);
        },

        delStu(state,delIndex){
            // console.log("delIndex실행");
            // console.log(state);
            console.log("delStu실행");
            console.log(delIndex);
            // console.log(state.studentList[delIndex]);

            // state 란 - 위의 stated안의 변수를 의미한다.
            state.studentList.splice(delIndex,1);

        }

            },
    getters: {
    getStudentList(state){
        return state.studentList;
    }
    }
})

export default store;