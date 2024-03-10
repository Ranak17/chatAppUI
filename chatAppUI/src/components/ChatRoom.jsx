import MessageContainer from "./MessageContainer";
import SendMessageForm from "./SendMessageForm";
const ChatRoom = ({messages,sendMessage}) =>{
    return(
        <>
            <h1>ChatRoom</h1> 
            <div className="container-fluid">
                <MessageContainer messages = {messages}/>
                
            </div>
            <SendMessageForm sendMessage={sendMessage}/>
        </>
    );
}

export default ChatRoom;