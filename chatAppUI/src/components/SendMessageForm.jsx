import { useState } from "react"

const SendMessageForm = ({sendMessage})=>{
const [message,setMessage] = useState('');
return (<>
<form method="post" onSubmit={e=>{
    e.preventDefault();
    sendMessage(message);
    setMessage('');
}}>
    <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"
            onChange={e=>setMessage(e.target.value) }/>
  <button style={{width:"10rem"}} type="submit" class="btn btn-success">Send</button>
    </div>
</form>
</>);
}

export default SendMessageForm;