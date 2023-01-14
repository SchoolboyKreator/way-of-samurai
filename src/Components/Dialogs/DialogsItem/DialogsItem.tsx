import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number
}
type MessagePropsType = {
    message: string
}
const DialogItem = (props: DialogItemPropsType) => {
    return <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessagePropsType) => {
    return <div className={styles.dialog}>{props.message}</div>

}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Deniska'},
        {id: 7, name: 'asdf'},
    ]


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)}

            </div>

        </div>
    )
}