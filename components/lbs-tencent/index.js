import { useEffect, useLayoutEffect } from "react"
import styles from "./index.less";

let qq_map = null

export const LbsQQMap = ({
  version = '1.exp',
  appKey,
  libraries = 'visualization'
}) => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = `https://map.qq.com/api/gljs?v=${version}&key=${appKey}&libraries=${libraries}&callback=onLoad`
    scriptElement.className = 'map_script'
    document.body.appendChild(scriptElement);

    window.onLoad = initMap

    return () => {
      // 组件销毁时清除地图实例
      qq_map && qq_map.destroy();
    };
  }, [])

  const initMap = () => {
    //定义地图中心点坐标
    var center = new TMap.LatLng(39.984120, 116.307484)
    //定义map变量，调用 TMap.Map() 构造函数创建地图
    qq_map = new TMap.Map(document.getElementById(styles.container), {
      center: center,//设置地图中心点坐标
      zoom: 17.2,   //设置地图缩放级别
      pitch: 43.5,  //设置俯仰角
      rotation: 45    //设置地图旋转角度
    });
  }

  return <div id={styles.container}></div>
}
