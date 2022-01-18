const app = Vue.createApp({
    data(){
        return{
            sum: "",
            operators: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "0",
                    "+",
                    "-",
                    "*",
                    "/",
                    ".",
            ]
        }
    },
    methods: {
        addToSum(operators){
            this.sum += operators
        },
        evalSum(){
            this.sum = eval(this.sum)
        },
        clearSum(){
            this.sum = ""
        },
        deleteSum(){
            this.sum = this.sum.slice(0, -1)
        }
    },
})

app.mount("#app")