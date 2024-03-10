import { useState } from "react";
const WaitingRoom = ({joinChatRoom})=>{
    const [userName, setUserName] = useState('');
    const [chatRoom, setChatRoom] = useState('');
    return (
        <>
        <div className="container" style={{padding:"8rem 0 0 0",maxWidth:"30rem"}}>
            <form action="post" onSubmit={(e)=>
                {
                    e.preventDefault();
                    console.log("submit form");
                    joinChatRoom(userName,chatRoom);
                }}>
                    <div class="mb-3">
                        <label class="form-label" htmlFor="username">UserName : </label><br />
                        <input class="form-control" name="username" type="text" onChange={(e)=>{setUserName(e.target.value)}}/><br/>
                    </div> 
                    <div class="mb-3">
                        <label class="form-label" htmlFor="chatRoom">chatRoom : </label><br />
                        <input class="form-control" name="chatRoom" type="text" onChange={(e)=>{setChatRoom(e.target.value)}}/><br/>
                    </div>
                    <div class="mb-3 form-check">
                        <button style={{width:"10rem"}} type="submit" className="btn-lg btn btn-success">Join</button>
                    </div>
                <form>  
</form>
            </form>
        </div>

        </>
    );
}
export default WaitingRoom;