import React from "react";
import { LbsAMap } from "@/gis-components";

export default class LbsAMapDemo extends React.Component {
  render() {
    return (
      <div style={{ padding: 24, background: '#f1f3f4', borderRadius: '10px', height: 'calc(100vh - 70px)' }}>
        <LbsAMap
          appKey="6be7d50bdef539a38d2766d2a5aa00b6"
          appCode="d636b1409025de990cd02c84ca0f791a"
          version="2.0"
        />
      </div>
    )
  }
}
