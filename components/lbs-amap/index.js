// 高德地图
import { useEffect, useState } from "react"
import styles from "./index.less";

let a_map = null

export const LbsAMap = ({
  version = '2.0',
  appKey,
  appCode,
  otherOptions = {
    viewMode: '2D',  // 默认使用 2D 模式
    zoom: 11,  //初始化地图层级
    center: [116.397428, 39.90923],  //初始化地图中心点
    mapStyle: 'amap://styles/54a041f92359a6be496e336f807b2cdc',
  },
  layerParams = {}
}) => {
  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: appCode,
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = `https://webapi.amap.com/maps?v=${version}&key=${appKey}&callback=onLoad`
    scriptElement.className = 'map_script'
    document.body.appendChild(scriptElement);

    window.onLoad = function () {
      const layer = new AMap.createDefaultLayer(layerParams)

      a_map = new AMap.Map(styles.container, {
        ...otherOptions,
        layers: [layer]
      })
    }

    return () => {
      // 组件销毁时清除地图实例
      a_map && a_map.destroy();
    };
  }, [])

  return <div id={styles.container}></div>
}
