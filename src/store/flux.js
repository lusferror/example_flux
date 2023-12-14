import storeTodoList from "./registro";

const getState = ({getStore,getActions,setStore})=>{
    return {
        store:{
            ...storeTodoList,
            fondo:'',
        },

        actions:{
            cambioInput(e){
                e.preventDefault();
                setStore({task: e.target.value});
            },
            agregarTarea(e){
                e.preventDefault();
                if(e.key == "Enter"){
                    const { task, listaTareas  } = getStore()   
                    let nuevaLista = [...listaTareas, task];
                    setStore({listaTareas: nuevaLista, task:''  });
                    if(task == 'nueva'){
                        getActions().cambiarColor()
                    }
                }
            },
            cambiarColor(){
                setStore({fondo:'red'})
            }

        }
    }
}

export default getState