import React from "react";

const students = [
  { id: 111, name: "三丰", score: 90 },
  { id: 112, name: "张三丰", score: 95 },
  { id: 113, name: "张三风", score: 89 },
  { id: 114, name: "张三凤", score: 92 },
];

const element = (
  <div>
    <h2>学生列表数据</h2>
    <div className="student-list">
      {students
        .filter((item) => item.score > 90) // 筛选分数大于90的学生
        .map((item) => {
          return (
            <div className="student-item" key={item.id}>
              <h3>学号: {item.id}</h3>
              <h3>姓名: {item.name}</h3>
              <h3>分数: {item.score}</h3>
            </div>
          );
        })}
    </div>
  </div>
);

class TaskList extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        {/* 渲染学生列表 */}
        {element}
      </div>
    );
  }
}

export default TaskList;
