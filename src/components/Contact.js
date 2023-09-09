import linkedin from "../assets/img/linkedin.png"
import {Link} from "react-router-dom";
const Contact = () => {
    return (
        <div className="flex flex-col p-5 m-2 gap-2">
            <span className="text-3xl font-bold">Contact Details</span>
            <span>Email : wardhan335@gmail.com</span>
            <span>Mobile : 9155561486</span>
            <Link className="flex gap-1 underline text-blue-500 " to={"https://www.linkedin.com/in/harshwardhan335"}>
              Connect with me <img className="w-6 h-6" src={linkedin}/>
            </Link>
        </div>
        
    )
};
export default Contact;