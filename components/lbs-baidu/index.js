import { useEffect } from "react"
import styles from "./index.less";

let baidu_map = null

export const LbsBaiduMap = ({
  version = '1.0',
  appKey
}) => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = `https://api.map.baidu.com/api?v=${version}&type=webgl&ak=${appKey}&callback=onLoad`
    scriptElement.className = 'map_script'
    document.body.appendChild(scriptElement);

    window.onLoad = initMap

    return () => {
      // 组件销毁时清除地图实例
      baidu_map && baidu_map.destroy();
    };
  }, [])

  const initMap = () => {
    baidu_map = new BMapGL.Map(styles.container);          // 创建地图实例 
    var point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标 
    baidu_map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    baidu_map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }

  return <div id={styles.container}></div>
}
