import React, { Component } from "react";

const students = [
  { id: 111, name: "三丰", score: 90 },
  { id: 112, name: "张三丰", score: 95 },
  { id: 113, name: "张三风", score: 89 },
  { id: 114, name: "张三凤", score: 92 },
];

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: students, // 保存学生数据
      highestScoreStudent: null, // 保存最高分的学生
    };
  }

  // 查找分数最高的学生
  findHighestScore = () => {
    const highestScoreStudent = this.state.students.reduce((prev, current) => {
      return prev.score > current.score ? prev : current;
    });
    this.setState({ highestScoreStudent });
  };

  // 删除指定学生
  deleteStudent = (id) => {
    const updatedStudents = this.state.students.filter(
      (student) => student.id !== id
    );
    this.setState({ students: updatedStudents }, this.findHighestScore);
  };

  render() {
    const { students, highestScoreStudent } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <h2>学生列表数据</h2>
        <div className="student-list">
          {students.map((item) => (
            <div className="student-item" key={item.id}>
              <h3>学号: {item.id}</h3>
              <h3>姓名: {item.name}</h3>
              <h3>分数: {item.score}</h3>
              <button onClick={() => this.deleteStudent(item.id)}>
                删除学生
              </button>
            </div>
          ))}
        </div>
        <button onClick={this.findHighestScore}>搜索最高分</button>

        {highestScoreStudent && (
          <div>
            <h3>最高分学生：</h3>
            <p style={{ color: "green" }}>学号: {highestScoreStudent.id}</p>
            <p style={{ color: "red" }}>姓名: {highestScoreStudent.name}</p>
            <p>分数: {highestScoreStudent.score}</p>
            <span
              role="img"
              aria-label="delete"
              onClick={() => this.deleteStudent(highestScoreStudent.id)}
            ></span>
          </div>
        )}
      </div>
    );
  }
}

export default TaskList;
