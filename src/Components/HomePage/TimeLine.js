import React from "react";
import { Timeline } from "antd";

function TimeLine() {
  return (
    <Timeline>
      <Timeline.Item>Gelir 1 - 1000 TL</Timeline.Item>
      <Timeline.Item>Gider 1 - 200 TL</Timeline.Item>
      {/* Daha fazla gelir ve giderler buraya eklenecek */}
    </Timeline>
  );
}

export default TimeLine;
