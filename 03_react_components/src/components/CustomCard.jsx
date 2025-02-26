// src/CustomCard.jsx
import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

const CustomCard = ({ cover, avatar, title, content }) => {
  return (
    <Card hoverable cover={<img alt={title} src={cover} />}>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={title}
        description={content}
      />
    </Card>
  );
};

export default CustomCard;
