"use client"

import { useRef, useEffect } from "react"
import * as echarts from "echarts"
import { useTheme } from "next-themes"

export function EChart({ option, style = { height: "400px" } }) {
  const chartRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current, theme === "dark" ? "dark" : null)
    chart.setOption(option)

    const handleResize = () => chart.resize()
    window.addEventListener("resize", handleResize)

    return () => {
      chart.dispose()
      window.removeEventListener("resize", handleResize)
    }
  }, [option, theme])

  return <div ref={chartRef} style={{ width: "100%", ...style }} />
}
