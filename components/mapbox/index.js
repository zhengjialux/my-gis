import { useEffect } from "react"
import styles from "./index.less";

let mapbox = null

export const Mapbox = ({
  version = '2.9.1',
  appKey
}) => {
  useEffect(() => {
    createScript()

    return () => {
      // 组件销毁时清除地图实例
      mapbox && mapbox.remove();
    };
  }, [])

  const createScript = () => {
    const linkElement = document.createElement('link');
    linkElement.href = `https://api.mapbox.com/mapbox-gl-js/v${version}/mapbox-gl.css`
    linkElement.rel = 'stylesheet'
    linkElement.className = 'map_link'
    document.body.appendChild(linkElement);

    const scriptElement = document.createElement('script');
    scriptElement.src = `https://api.mapbox.com/mapbox-gl-js/v${version}/mapbox-gl.js`
    scriptElement.className = 'map_script'
    scriptElement.onload = initMap
    document.body.appendChild(scriptElement);
  }

  const initMap = () => {
    mapboxgl.accessToken = appKey;
    mapbox = new mapboxgl.Map({
      container: styles.container,
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

  return <div id={styles.container}></div>
}
