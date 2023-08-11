import React from "react";
import { GoogleMap } from "@/components";

export default class GoogleMapDemo extends React.Component {
  render() {
    return (
      <div style={{ padding: 24, background: '#f1f3f4', borderRadius: '10px', height: 'calc(100vh - 70px)' }}>
        <GoogleMap
          appKey=""
        />
      </div>
    )
  }
}
