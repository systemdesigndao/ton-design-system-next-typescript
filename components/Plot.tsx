// @ts-ignore
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";
import {useEffect, useRef, useState} from 'react';
import { Size, useWindowSize } from "../hooks/useWindowSize";
import { addTooltips, handleZoom } from "../utils/addTooltips";

export const PlotSvg = () => {
  const svg = useRef<null | SVGSVGElement>(null);
  const [data, setData] = useState<any>();
  const size: Size = useWindowSize();

  useEffect(() => {
    d3.csv("/aapl.csv", d3.autoType).then(setData);
  }, []);

  useEffect(() => {
    if (data === undefined) return;

      const chart = addTooltips(
        Plot.plot({
          height: size.height,
          width: size.width,
          inset: 6,
          x: {
            axis: "top",
          },
          y: {
            grid: true,
            label: "TON/JETTON",
          },
          color: { domain: [-1, 0, 1], range: ["#e41a1c", "#000000", "#4daf4a"] },
          marks: [
            Plot.ruleX(data, {
              x: "Date",
              y1: "Low",
              y2: "High",
              title: (d: any) => `Stick: ${Object.keys(d).map(key => `${key}: ${d[key]}`)}`,
              stroke: (d: any) => Math.sign(d.Close - d.Open),
              strokeWidth: 2,
            }),
            Plot.ruleX(data, {
              x: "Date",
              y1: "Open",
              y2: "Close",
              stroke: (d: any) => Math.sign(d.Close - d.Open),
              strokeWidth: 9,
              title: (d: any) => `Stick: ${Object.keys(d).map(key => `${key}: ${d[key]}`)}`,
            }),
          ],
          style: {
            color: "white",
          }
        })
      )

    svg.current?.append(chart);

    const diff = 400;

    let zoom = d3.zoom().scaleExtent([0.8, 4]).translateExtent([[-diff,-diff],[(size.width ?? 0) + diff, (size.height ?? 0) + diff]])
    .on('zoom', handleZoom);
  
  d3.select('svg')
    .call(zoom as any);

    return () => chart.remove();
  }, [data, size]);

  return (
    <svg className="flex justify-center bg-gray-1-dark" ref={svg} style={{ height: '100vh', width: '100%' }} />
  );
}