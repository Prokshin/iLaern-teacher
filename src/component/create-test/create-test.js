import React, { Component } from "react";
import { Divider } from "semantic-ui-react";
import SelectCourse from "../select-course/select-course";
import { DataService } from "../../services/data-service";

export default class CreateTest extends Component {
  data = new DataService();
  t = [{ divisions: [] }];
  state = {
    current: 0,
    answerCheck: 0,
    test: [{}],
    full: [{ divisions: [] }],
    course: 12,
    division: 0
  };
  constructor(props) {
    super(props);
    this.update();
  }
  onSelectCourse = ids => {
    console.log(ids);
    console.log(this.state.full[0]);
    this.setState({
      course: ids
    });
  };
  onSelectDiv = ids => {
    console.log(ids);
    console.log(this.state.full);
    this.setState({
      division: ids
    });
  };
  update = () => {
    this.data.getCourses().then(res => {
      this.t = res.courses;
      console.log(res.courses[0].divisions);
      this.setState({
        full: res.courses
      });
    });
  };
  handleChangeQuestion = event => {
    let ttt = this.state.test;
    ttt[this.state.current].question = event.target.value;
    this.setState({
      test: ttt
    });
  };
  handleChangeAnswers0 = event => {
    let ttt = this.state.test;
    if (this.state.answerCheck === 0) {
      ttt[this.state.current].answer = [];
    }
    ttt[this.state.current].answer[0] = event.target.value;
    this.setState({
      test: ttt,
      answerCheck: 1
    });
  };
  handleChangeAnswers1 = event => {
    let ttt = this.state.test;
    if (this.state.answerCheck === 0) {
      ttt[this.state.current].answer = [];
    }
    ttt[this.state.current].answer[1] = event.target.value;
    this.setState({
      test: ttt,
      answerCheck: 1
    });
  };
  handleChangeAnswers2 = event => {
    let ttt = this.state.test;
    if (this.state.answerCheck === 0) {
      ttt[this.state.current].answer = [];
    }
    ttt[this.state.current].answer[2] = event.target.value;
    this.setState({
      test: ttt,
      answerCheck: 1
    });
  };
  handleChangeAnswers3 = event => {
    let ttt = this.state.test;
    if (this.state.answerCheck === 0) {
      ttt[this.state.current].answer = [];
    }
    ttt[this.state.current].answer[3] = event.target.value;
    this.setState({
      test: ttt,
      answerCheck: 1
    });
  };
  handleChangeVerify = event => {
    let ttt = this.state.test;
    ttt[this.state.current].verify = event.target.value;
    this.setState({
      test: ttt
    });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };

  next = () => {
    let ttt = this.state.test;
    ttt.push({});
    this.setState({
      test: ttt,
      current: this.state.current + 1,
      answerCheck: 0
    });
    // let cl = document.getElementsByTagName("input");

    let cl = document.getElementById("nc").getElementsByTagName("input");

    for (let i = 0; i < 6; i++) {
      console.log(cl.item(i));
    }
  };
  render() {
    console.log(this.state.full[this.state.course]?.divisions);
    return (
      <div>
        <SelectCourse
          subject={this.state.full}
          onSelect={this.onSelectCourse}
        />
        <SelectCourse
          subject={this.state.full[0]?.divisions}
          onSelect={this.onSelectDiv}
        />
        <form className="ui  form" id="nc" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Введите вопрос</label>
            <input type="text" onChange={this.handleChangeQuestion} />
          </div>
          <Divider />
          <div className="field">
            <label>Введите ответы</label>
            <input type="text" onChange={this.handleChangeAnswers0} />
            <Divider hidden />
            <input type="text" onChange={this.handleChangeAnswers1} />
            <Divider hidden />
            <input type="text" onChange={this.handleChangeAnswers2} />
            <Divider hidden />
            <input type="text" onChange={this.handleChangeAnswers3} />
          </div>
          <div className="field">
            <Divider />
            <label>Введите индекс правильного ответа</label>
            <input type="text" onChange={this.handleChangeVerify} />
            <Divider />
            <button
              type="submit"
              onClick={this.next}
              class="ui animated button basic teal"
              tabindex="0"
            >
              <div class="visible content">Создать тест</div>
              <div class="hidden content">
                <i class="right arrow icon"></i>
              </div>
            </button>
          </div>
        </form>
        <button
          onClick={this.next}
          class="ui animated button basic teal"
          tabindex="0"
        >
          <div class="visible content">Следующий вопрос</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </button>
      </div>
    );
  }
}
