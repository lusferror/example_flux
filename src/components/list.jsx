import React, { useContext } from "react";
import { Context } from "../store/appContext";

export default function List(){

    const { store } = useContext(Context)

    return(
        <>
            {
                store?.listaTareas?.map(tarea =>
                <>
                    { tarea == 'nueva' ? 
                        <span style={{color:store.fondo}}>
                            {tarea}
                        </span>
                    :
                        <>
                            {tarea}
                        </>
                    } 
                <br/>               
                </>
                    )
            }
        </>
    )
}