import React from "react";
class Profile extends React.Component {
    constructor(props) {
        super(props);
        //create state
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h3>Name: {this.props.name}</h3>
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=> {
                    this.setState({
                        count: 1,
                    });
                }}
                >SetCount</button>
            </div>
        );
    }
}
export default Profile;