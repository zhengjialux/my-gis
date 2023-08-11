import React from "react";
import { LbsBaiduMap } from "@/components";

export default class LbsQQDemo extends React.Component {
  render() {
    return (
      <div style={{ padding: 24, background: '#f1f3f4', borderRadius: '10px', height: 'calc(100vh - 70px)' }}>
        <LbsBaiduMap
          appKey="dj2Oxd6XQfGC2lcknHOGQuo4X9iS6gCh"
        />
      </div>
    )
  }
}
