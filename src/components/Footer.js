import {Link} from "react-router-dom";
import linkedin from "../assets/img/linkedin.png"
const Footer= ()=> {
    return (
        <div className=" p-4 flex justify-around text-white  bg-black ">
            <div>
                <h1 className="font-bold py-2">ABOUT</h1>
                <h2>Carrers</h2>
                <h2>Stories</h2>
                <h2>Press</h2>
                <h2>Instamart</h2>

            </div>
            <div>
                <h1 className="font-bold py-2">HELP</h1>
                <h2>Payments</h2>
                <h2>Order</h2>
                <h2>Cancellation & Returns</h2>
                <h2>FAQs</h2>
                <h2>Report Infringement</h2>

            </div>
            <div>
                <h1 className="font-bold py-2">POLICY</h1>
                <h2>Return Policy</h2>
                <h2>Security</h2>
                <h2>Privacy</h2>
                <h2>Sitemap</h2>

            </div>
            <div>
                <h1 className="font-bold py-2">SOCIAL</h1>
                <ul className="flex flex-col">
          <li className="m-2">
          <Link to={"https://www.linkedin.com/in/harshwardhan335"}>
            <img className="w-8 h-8" src={linkedin}/>
            </Link>
          </li>
          <li className="m-2">
            <Link to={"https://github.com/harshwardhan335"}>
              <img
                className="w-8 h-8 rounded-md"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              />
            </Link>
          </li>
        </ul>

            </div>
        </div>
    )
}
export default Footer;