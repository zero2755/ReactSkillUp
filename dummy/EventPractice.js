import React, { Component } from "react";

const alertGood = () => {
  alert("good");
};
//화살표함수로 따로 빼놓는게 가독성좋음(바벨이용한다함, 생성자에 일일히 bind안해도됨)
class EventPractice extends Component {
  state = {
    message: "default",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      message: e.target.value,
    });
  };
  handleInit = () => {
    this.setState({
      message: "버튼으로초기화됨",
    });
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
          onChange={this.handleChange}
        />
        <button onClick={this.handleInit}>메시지 초기화하기</button>
      </div>
    );
  }
}

export default EventPractice;
