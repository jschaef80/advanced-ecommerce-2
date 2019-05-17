import React from "react";

class TopNav extends React.Component {
    changeCategory = (e) => {
        e.preventDefault()
        this.props.changeCategory("bumpers")
    }

    render() {
        return(
            <div className="top-nav">
                <ul>
                    <li><a href="#" onClick={this.changeCategory}>car lights</a></li>
                    <li><a href="carwheels.html">Car wheels</a></li>
                    <li><a href="carbumpers.html">car bumpers</a></li>
                    <li><a href="caradsystem.html">car audiosystem</a></li>
                    <li><a href="truckbumpers.html">Truck bumpers</a></li>
                    <li><a href="contact.html">Feedback</a></li>
                    <div className="clear"> </div>
                </ul>
            </div>
        )
    }
}

export default TopNav;