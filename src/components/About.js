// import { Outlet } from "react-router-dom";
// import ProfileFunctionalComponent from "./Profile";
// import Profile from "./ProfileClass";
import html from "../assets/img/html5.png";
import css from "../assets/img/css3.png";
import javascript from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import profile from "../assets/img/profile.jpeg";
import tailwind from "../assets/img/tailwind-css.png";
import redux from "../assets/img/redux.png";
const About = () => {
    return (
        // <div>
        //     <h1>About Us Page</h1>
        //     <p>
        //         This is the Namste react course
        //     </p>
        //     <Outlet/>
        //     <ProfileFunctionalComponent name={"Harshwardhan"}/>
        //     <Profile name={"Harshwardhan"}/>
        // </div>
        <div className="flex flex-col gap-4 justify-center p-4 m-4">
            <span className="font-bold text-3xl text-purple-900">Frontend React.js Developer</span>
            <img className="h-32 w-32 rounded-3xl" src={profile} alt="profile photo"/>
            <span>Hi... I am Harshwardhan Kumar loves React.</span>
            <h1>A Detail-oriented Frontend Developer with expertise in React and a keen interest in emerging web technologies. Seeking a challenging position in a rapidly expanding company to drive innovation and contribute to team growth.</h1>
            <p className="flex flex-wrap">Tech Stack used  React Js <img className="h-8 w-8 pl-2 p-2" src={react}/> , Javascript & Advance Javascript  <img className="h-8 w-8 pl-2 p-2" src={javascript}/> ,  HTML5 <img className="h-8 w-8 pl-2 p-2" src={html}/> ,  CSS3 <img className="h-8 w-8 pl-2 p-2" src={css}/> ,Tailwind <img className="h-8 w-8 pl-2 p-2" src={tailwind}/> , redux  <img className="h-8 w-8 pl-2 p-2" src={redux}/>
               </p>
        </div>

    );
};
export default About;