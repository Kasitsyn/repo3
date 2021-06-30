import s from './../Dialogs.module.css'
import React from 'react'
import { updateNewMessageBodyCreator } from '../../../Redux/state'
const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}



const MessagesItem = (props) => {

    let newMessageElement = React.createRef()

    let messageOnChange = () => {
        let body = newMessageElement.current.value
        props.dispatch(updateNewMessageBodyCreator(body))
        console.log(props)  
    }

    let messageElements = props.messageData.map(m => <Message message={m.message} />)
    let onSendMessageClick = () => alert('ass')
    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <div>
                <textarea ref={newMessageElement} onChange={messageOnChange} placeholder='enter your message' value={props.newMessageBody}></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>
            <div></div>
        </div>
    )

}

export default MessagesItem