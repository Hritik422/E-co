import Navbar from "../../common/navbar";
import Main from "./main"
import Foot from'./../../common/footer';
const Account = (props) => {
    if(props.login){
    return(
        <div>
            <Navbar/>
            <div style={{color:"white", background:"black", height:"100px", fontSize:"40px", textAlign:"center"}}>
                My Account
            </div>
            <br></br>
            <Main/>
        </div>
    );
}
    else{
        return(
        <>
        <Navbar/>
        <br></br><br></br>
        <h1>Please Login First To View Accoun Details.</h1><br></br><br></br>
        <Foot/>
        </>
        );
    }
    
}

export default Account;