import { useEffect, useState } from "react"
import styles from "./index.less";

let a_map = null

export const LbsAMap = ({
  version = '2.0',
  appKey,
  appCode
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
      a_map = new AMap.Map(styles.container)
    }

    return () => {
      // 组件销毁时清除地图实例
      a_map && a_map.destroy();
    };
  }, [])

  return <div id={styles.container}></div>
}
