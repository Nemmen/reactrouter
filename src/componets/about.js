import { useNavigate } from "react-router-dom"

function About(){
    const navigate = useNavigate();
    function change(){
        navigate("/");
    }
    function goback(){
        navigate(-1)
    }
    return(
        <div>
            About<br/>
            <button onClick={change} className="border-[3px] border-black  px-2  " >go to home?</button><br/>
            <button onClick={goback} className="border-[3px] border-black  px-2  " >go back</button>

        </div>
    )
}

export default About