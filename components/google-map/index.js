import { useEffect } from "react"
import styles from "./index.less";

let google_map = null

export const GoogleMap = ({
  version = 'weekly',
  appKey,
}) => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = `https://polyfill.io/v3/polyfill.min.js?features=default&callback=onLoad`
    scriptElement.className = 'map_script'
    document.body.appendChild(scriptElement);

    window.onLoad = initMap

    return () => {
      // 组件销毁时清除地图实例
    };
  }, [])

  useEffect(() => {
    scriptInit({ key: appKey, v: version })
  }, [])

  const initMap = async () => {
    const { Map } = await google.maps.importLibrary("maps");

    google_map = new Map(document.getElementById(styles.container), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }

  const scriptInit = g => {
    var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => {
      await (a = m.createElement("script"));
      e.set("libraries", [...r] + "");
      for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q);
      a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load."));
      a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a)
    }));
    d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))
  }

  return <div id={styles.container}></div>
}
