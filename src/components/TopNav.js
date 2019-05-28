import React from "react";

class TopNav extends React.Component {
    changeCategory = (e) => {
        e.preventDefault()
        this.props.changeCategory(e.target.id)
    }

    render() {
        return(
            <div className="top-nav">
                <ul>
                    <li><a href="#" onClick={this.changeCategory}>car lights</a></li>
                    <li><a id="tires" href="carwheels.html" onClick={this.changeCategory}>Car wheels</a></li>
                    <li><a id="bumpers" href="carbumpers.html" onClick={this.changeCategory}>car bumpers</a></li>
                    <li><a id="audio" href="caradsystem.html" onClick={this.changeCategory}>car audiosystem</a></li>
                    <li><a id="bumpers" href="truckbumpers.html" onClick={this.changeCategory}>Truck bumpers</a></li>
                    <li><a href="contact.html" onClick={this.changeCategory}>Feedback</a></li>
                    <div className="clear"> </div>
                </ul>
            </div>
        )
    }
}

export default TopNav;