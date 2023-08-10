import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <p>
                This is the Namste react course
            </p>
            <Outlet/>
            <ProfileFunctionalComponent name={"Harshwardhan"}/>
            <Profile name={"Harshwardhan"}/>
        </div>
    );
};
export default About;