import { useEffect } from "react"
import styles from "./index.less";

export const LbsAMap = ({
  version,
  appKey,
  appCode
}) => {
  let map = null;

  useEffect(() => {
    window._AMapSecurityConfig = {
      securityJsCode: appCode,
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = `https://webapi.amap.com/maps?v=${version}&key=${appKey}&callback=onLoad`
    scriptElement.className = 'map_script'
    document.body.appendChild(scriptElement);

    window.onLoad = function () {
      map = new AMap.Map(styles.container);
    }

    return () => {
      // 组件销毁时清除地图实例
      map.destroyMap();
    };
  }, [])

  return <div id={styles.container}></div>
}
