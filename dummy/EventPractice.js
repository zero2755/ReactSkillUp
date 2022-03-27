import React, { Component } from "react";

const alertGood = () => {
  alert("good");
};

class EventPractice extends Component {
  state = {
    message: "default",
  };
  render() {
    return (
      <div>
        <h1 onClick={alertGood}>이벤트연습</h1>

        <input
          type="text"
          name="message"
          value={this.state.message}
          placeholder="아무거나 입력해 보세요"
          onChange={(e) => {
            //console.log(e.target.value);
            this.setState({ message: e.target.value });
            console.log(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default EventPractice;
