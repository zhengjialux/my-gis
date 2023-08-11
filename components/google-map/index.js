import { useEffect } from "react"
import styles from "./index.less";

let google_map = null

export const GoogleMap = ({
  version = '',
  appKey,
}) => {
  useEffect(() => {
    // const scriptElement = document.createElement('script');
    // scriptElement.src = `https://map.qq.com/api/gljs?v=${version}&key=${appKey}&libraries=${libraries}&callback=onLoad`
    // scriptElement.className = 'map_script'
    // document.body.appendChild(scriptElement);

    // window.onLoad = initMap

    return () => {
      // 组件销毁时清除地图实例
    };
  }, [])

  const initMap = () => {

  }

  return <div id={styles.container}></div>
}
