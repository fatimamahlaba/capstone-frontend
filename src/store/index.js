import { createStore } from "vuex";

export default createStore ({
    state: {
        drivers: [],
        login: [],
    },
    mutations: {
        setDrivers(state, drivers){
            state.drivers = drivers
        }
    },
    actions: {
        getDrivers(context){
            fetch("http://capstone-final-backend.herokuapp.com/drivers")
            .then((res) => res.json())
            .then((data) => {
                // COMMIT runs a MUTATION
                context.commit("setDrivers", data)
            });
        },
        
        remove(context, {id}) {
            fetch("http://capstone-final-backend.herokuapp.com/drivers/" +id, {
              method: "DELETE",
            })
            .then((response) => response.json())
            .then((data) => {
              alert("Blog deleted successfully");
              context.commit("setDrivers", data)
            })
          },
        }
})