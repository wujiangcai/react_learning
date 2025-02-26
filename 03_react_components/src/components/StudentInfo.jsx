const StudentInfo = ({ name, avatar, number, age }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // 水平居中
        alignItems: "center", // 垂直居中
        height: "100vh", // 使容器高度充满整个视口
        textAlign: "center", // 文字居中
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={avatar}
          alt="avatar"
          style={{
            width: "150px", // 设置图片的宽度
            height: "150px", // 设置图片的高度
            borderRadius: "50%", // 使图片圆形
            objectFit: "cover", // 保持图片比例裁剪
          }}
        />
        <h1>姓名：{name}</h1>
        <h1>学号：{number}</h1>
        <h1>年龄：{age}</h1>
      </div>
    </div>
  );
};

export default StudentInfo;
