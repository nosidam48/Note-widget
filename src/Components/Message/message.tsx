import React from "react";

class Message extends React.Component {
    
    state = {
            message: "",
            position: 'topLeft',
            type: 'alert'
        }

    handleChange = (event: any) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event: any) => {
        event.preventDefault()

        let message: string = this.state.message
        let position: string = this.state.position
        let type: string = this.state.type;

        if (!message) {
            alert("You got nothing to say?!");
            return
        }
        let target = document.getElementById(position)

        let msgbox = document.createElement("p")

        msgbox.innerHTML = message;

        msgbox.classList.add(type);

        if(position === "topLeft" || position === "topRight") {
               target!.prepend(msgbox)
        }
        if (position === "bottomLeft" || position === "bottomRight") {
               target!.append(msgbox)
        }
        
        setTimeout(() => {
            msgbox.style.opacity = "0"
            msgbox.addEventListener("transitionend", destroyMessage, false)
            function destroyMessage() {
                target!.removeChild(msgbox)
            }
        }, 3000)
    }

    
    render() {
        return (
            <div>
            <form>
            <label htmlFor="message">Message:
            <input type="text" value={this.state.message} onChange={this.handleChange} id="message" name="message"></input>
            </label>
            <br></br>
            <label htmlFor="position">Location: 
            <select value={this.state.position} onChange={this.handleChange} id="position" name="position">
            <option value="topLeft">Top-left</option>
            <option value="topRight">Top-right</option>
            <option value="bottomLeft">Bottom-left</option>
            <option value="bottomRight">Bottom-right</option>
            </select>
            </label>
            <br></br>
            <label htmlFor="type">Type: 
            <select value={this.state.type} onChange={this.handleChange} id="type" name="type">
            <option value="info">Info</option>
            <option value="alert">Alert</option>
            <option value="warning">Warning</option>
            </select>
            </label>
            <br></br>
            <button type="submit" id="submit" onClick={this.handleSubmit}>Transmit</button>
            </form>
            </div>
        )
    }
}

export default Message;