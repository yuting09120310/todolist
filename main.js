let app = Vue.createApp({
    data() {
        return {
            TodoList_Array:[],
            inputText:"",
            selected:"selected",
            show:'all',
        }
    },
    methods: {
        add(){
            this.TodoList_Array.push({
                title:this.inputText,
                status:false,
                time:new Date().getTime(),
            })
            this.inputText = ""
        },
        del(data){
            this.TodoList_Array = this.TodoList_Array.filter((item)=>{
                return item != data;
            });
        },
    },
    computed:{
        filter(){
            if(this.show === 'no'){
                return this.TodoList_Array.filter(item => {
                    return item.status === false
                })
            }
            else if(this.show === 'yes'){
                return this.TodoList_Array.filter(item => {
                    return item.status === true
                })
            }else{
                return this.TodoList_Array
            }
        }
    }
})
app.mount('#app');