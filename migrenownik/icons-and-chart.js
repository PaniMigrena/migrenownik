const { useState, useMemo, useEffect, useRef } = React;
function IconBase({
  size: e = 18,
  color: n,
  style: r,
  className: a,
  strokeWidth: c = 1.6,
  fill: g = "none",
  children: h,
}) {
  const z = { color: n || (r && r.color), ...r };
  return React.createElement(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 24 24",
      fill: g,
      stroke: "currentColor",
      strokeWidth: c,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: a,
      style: z,
    },
    h,
  );
}
const Plus = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
      React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    ),
  ChevronLeft = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("polyline", { points: "15 18 9 12 15 6" }),
    ),
  Home = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M3 11l9-8 9 8" }),
      React.createElement("path", { d: "M5 10v10h14V10" }),
    ),
  BarChart3 = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("line", { x1: "4", y1: "20", x2: "4", y2: "10" }),
      React.createElement("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
      React.createElement("line", { x1: "20", y1: "20", x2: "20", y2: "14" }),
    ),
  Moon = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", {
        d: "M20 12.5A8 8 0 1 1 11.5 4a6.5 6.5 0 0 0 8.5 8.5z",
      }),
    ),
  CloudRain = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", {
        d: "M6 15a4 4 0 1 1 1-7.9A5 5 0 0 1 17 9a3.5 3.5 0 0 1-.5 7H6z",
      }),
      React.createElement("line", { x1: "8", y1: "19", x2: "8", y2: "21" }),
      React.createElement("line", { x1: "12", y1: "19", x2: "12", y2: "21" }),
      React.createElement("line", { x1: "16", y1: "19", x2: "16", y2: "21" }),
    ),
  Wine = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M8 3h8l-1 7a3 3 0 0 1-6 0L8 3z" }),
      React.createElement("line", { x1: "12", y1: "13", x2: "12", y2: "19" }),
      React.createElement("line", { x1: "9", y1: "19", x2: "15", y2: "19" }),
    ),
  Zap = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M13 2 4 14h7l-1 8 9-12h-7l1-8z" }),
    ),
  Eye = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", {
        d: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z",
      }),
      React.createElement("circle", { cx: "12", cy: "12", r: "3" }),
    ),
  Volume2 = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M4 9v6h4l5 5V4L8 9H4z" }),
      React.createElement("path", { d: "M16 8a5 5 0 0 1 0 8" }),
    ),
  Pill = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", {
        d: "M6 14 14 6a4 4 0 1 1 6 6l-8 8a4 4 0 1 1-6-6z",
      }),
      React.createElement("line", { x1: "10", y1: "10", x2: "14", y2: "14" }),
    ),
  Check = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("polyline", { points: "4 12 9 17 20 6" }),
    ),
  Calendar = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("rect", {
        x: "3",
        y: "5",
        width: "18",
        height: "16",
        rx: "2",
      }),
      React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" }),
      React.createElement("line", { x1: "8", y1: "3", x2: "8", y2: "7" }),
      React.createElement("line", { x1: "16", y1: "3", x2: "16", y2: "7" }),
    ),
  Activity = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("polyline", {
        points: "2 12 7 12 10 4 14 20 17 12 22 12",
      }),
    ),
  Utensils = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("line", { x1: "5", y1: "2", x2: "5", y2: "9" }),
      React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "9" }),
      React.createElement("line", { x1: "11", y1: "2", x2: "11", y2: "9" }),
      React.createElement("path", { d: "M5 9c0 2 3 3 3 3v10" }),
      React.createElement("path", { d: "M15 2c-2 0-3 2-3 5s1 5 3 5v10" }),
    ),
  BatteryLow = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("rect", {
        x: "2",
        y: "7",
        width: "18",
        height: "10",
        rx: "2",
      }),
      React.createElement("line", { x1: "22", y1: "11", x2: "22", y2: "13" }),
      React.createElement("rect", {
        x: "5",
        y: "10",
        width: "3",
        height: "4",
        fill: "currentColor",
        stroke: "none",
      }),
    ),
  Trash2 = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("polyline", { points: "3 6 5 6 21 6" }),
      React.createElement("path", {
        d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6",
      }),
      React.createElement("path", { d: "M10 11v6" }),
      React.createElement("path", { d: "M14 11v6" }),
      React.createElement("path", {
        d: "M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2",
      }),
    ),
  Droplet = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", {
        d: "M12 2c4 6 7 9.5 7 13a7 7 0 0 1-14 0c0-3.5 3-7 7-13z",
      }),
    ),
  Download = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M12 3v10" }),
      React.createElement("polyline", { points: "7 9 12 14 17 9" }),
      React.createElement("path", { d: "M5 21h14" }),
    ),
  Upload = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M12 21V11" }),
      React.createElement("polyline", { points: "7 15 12 10 17 15" }),
      React.createElement("path", { d: "M5 3h14" }),
    ),
  FileText = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M7 3h7l4 4v14H7z" }),
      React.createElement("line", { x1: "9", y1: "11", x2: "15", y2: "11" }),
      React.createElement("line", { x1: "9", y1: "15", x2: "15", y2: "15" }),
    ),
  MapPin = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", {
        d: "M12 22s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12z",
      }),
      React.createElement("circle", { cx: "12", cy: "10", r: "2.5" }),
    ),
  Clock = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("circle", { cx: "12", cy: "12", r: "9" }),
      React.createElement("polyline", { points: "12 7 12 12 16 14" }),
    ),
  Lock = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("rect", {
        x: "4",
        y: "11",
        width: "16",
        height: "9",
        rx: "2",
      }),
      React.createElement("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
    ),
  AlertTriangle = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", { d: "M12 3 2 20h20L12 3z" }),
      React.createElement("line", { x1: "12", y1: "9", x2: "12", y2: "14" }),
      React.createElement("circle", {
        cx: "12",
        cy: "17",
        r: "0.6",
        fill: "currentColor",
      }),
    ),
  FlaskConical = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("path", {
        d: "M9 2v6L4 19a1 1 0 0 0 1 2h14a1 1 0 0 0 1-2l-5-11V2",
      }),
      React.createElement("line", {
        x1: "8.5",
        y1: "14",
        x2: "15.5",
        y2: "14",
      }),
      React.createElement("line", { x1: "7", y1: "2", x2: "17", y2: "2" }),
    ),
  Smartphone = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("rect", {
        x: "6",
        y: "2",
        width: "12",
        height: "20",
        rx: "2",
      }),
      React.createElement("line", { x1: "11", y1: "18", x2: "13", y2: "18" }),
    ),
  MoreVertical = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("circle", {
        cx: "12",
        cy: "5",
        r: "1",
        fill: "currentColor",
      }),
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1",
        fill: "currentColor",
      }),
      React.createElement("circle", {
        cx: "12",
        cy: "19",
        r: "1",
        fill: "currentColor",
      }),
    ),
  Share2 = (e) =>
    React.createElement(
      IconBase,
      { ...e },
      React.createElement("rect", {
        x: "7",
        y: "9",
        width: "10",
        height: "12",
        rx: "2",
      }),
      React.createElement("polyline", { points: "9 7 12 3 15 7" }),
      React.createElement("line", { x1: "12", y1: "3", x2: "12", y2: "14" }),
    );
function PainTrendChart({ data: e }) {
  if (!e.length)
    return React.createElement(
      "p",
      { className: "text-[12px]", style: { color: "#8f8d97" } },
      "Brak danych do pokazania.",
    );
  const n = 320,
    r = 150,
    a = 10,
    c = 10,
    g = 10,
    h = 20,
    z = n - a - c,
    N = r - g - h,
    j = e.length > 1 ? z / (e.length - 1) : 0,
    S = e.map((d, v) => ({ x: a + v * j, y: g + N - (d.Ból / 10) * N, ...d })),
    P = S.map(
      (d, v) => `${v === 0 ? "M" : "L"}${d.x.toFixed(1)},${d.y.toFixed(1)}`,
    ).join(" "),
    s = e.length > 6 ? Math.ceil(e.length / 6) : 1;
  return React.createElement(
    "svg",
    { viewBox: `0 0 ${n} ${r}`, width: "100%", height: r },
    [0, 5, 10].map((d) => {
      const v = g + N - (d / 10) * N;
      return React.createElement("line", {
        key: d,
        x1: a,
        y1: v,
        x2: n - c,
        y2: v,
        stroke: "#34333a",
        strokeWidth: "1",
        strokeDasharray: "3 3",
      });
    }),
    React.createElement("path", {
      d: P,
      fill: "none",
      stroke: "#9b8fb0",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
    S.map((d, v) =>
      React.createElement("circle", {
        key: v,
        cx: d.x,
        cy: d.y,
        r: "2.5",
        fill: "#9b8fb0",
      }),
    ),
    S.map((d, v) =>
      v % s === 0
        ? React.createElement(
            "text",
            {
              key: "t" + v,
              x: d.x,
              y: r - 4,
              fontSize: "8",
              fill: "#605f68",
              textAnchor: "middle",
            },
            d.date,
          )
        : null,
    ),
  );
}
