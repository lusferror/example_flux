import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";

export default function InputTask(){

    const { store , actions } = useContext(Context)
    const { task } = store;

    return(
        <>
            <div>
                <input value={task} onChange={actions.cambioInput} onKeyUp={actions.agregarTarea}/>
            </div>
            <div>
                <h2>
                    {task}
                </h2>
            </div>
        </>
    )
}