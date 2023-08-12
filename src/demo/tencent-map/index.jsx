import React from "react";
import { LbsQQMap } from "@/components";

export default class LbsQQDemo extends React.Component {
  render() {
    return (
      <div style={{ padding: 24, background: '#f1f3f4', borderRadius: '10px', height: 'calc(100vh - 70px)' }}>
        <LbsQQMap appKey="" />
      </div>
    )
  }
}
