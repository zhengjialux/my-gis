import React from "react";
import { LbsAMap } from "@/components";
import { _gaodeConfig } from "@/config.js";

const { appKey, appCode } = _gaodeConfig

export default class LbsAMapDemo extends React.Component {
  render() {
    return (
      <div style={{ padding: 24, background: '#f1f3f4', borderRadius: '10px', height: 'calc(100vh - 70px)' }}>
        <LbsAMap
          appKey={appKey}
          appCode={appCode}
        />
      </div>
    )
  }
}
