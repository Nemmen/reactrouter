import { useNavigate } from "react-router-dom"

function Hello(){
    const navigate = useNavigate();
    function change(){
        navigate("/about");
    }



    return(
        <div>
            Hello jiiiii <br></br>
            <button className="border-[3px] border-black  px-2  " onClick={change}>go to about?</button>
        </div>
    )
}

export default Hello