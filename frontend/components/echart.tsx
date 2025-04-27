"use client"

import { useRef, useEffect } from "react"
import * as echarts from "echarts"
import { useTheme } from "next-themes"

type EChartProps = {
  option: echarts.EChartsOption
  style?: React.CSSProperties
}

const getDefaultOptions = (isDark: boolean) => ({
  backgroundColor: 'transparent',
  grid: {
    left: '3%',
    right: '12%',
    bottom: '80px',
    top: '3%',
    containLabel: true,
    show: true,
    backgroundColor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
    borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    borderWidth: 1
  },
  textStyle: {
    fontFamily: 'var(--font-sans)',
    color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)'
  },
  animation: true,
  animationDuration: 1000,
  animationEasing: 'cubicOut' as const,
  tooltip: {
    trigger: 'axis',
    backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
    borderRadius: 8,
    padding: [8, 12],
    textStyle: {
      color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
      fontFamily: 'var(--font-sans)'
    }
  },
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: { show: false }
    },
    iconStyle: {
      borderColor: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'
    }
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100,
      zoomOnMouseWheel: 'shift',
      moveOnMouseMove: true,
      moveOnMouseWheel: true
    },
    {
      type: 'slider',
      show: true,
      start: 0,
      end: 100,
      height: 40,
      bottom: 10,
      borderColor: 'transparent',
      backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
      fillerColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      handleStyle: {
        borderColor: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'
      },
      textStyle: {
        color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'
      },
      brushSelect: true,
      moveHandleSize: 8
    },
    {
      type: 'slider',
      show: true,
      yAxisIndex: 0,
      width: 40,
      right: 10,
      borderColor: 'transparent',
      backgroundColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
      fillerColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      handleStyle: {
        borderColor: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'
      },
      textStyle: {
        color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'
      },
      brushSelect: true,
      moveHandleSize: 8
    }
  ],
  xAxis: {
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        type: 'dashed',
        width: 1
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
      }
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
        type: 'dashed',
        width: 1
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
      }
    }
  },
})

export function EChart({ option, style = { height: "400px" } }: EChartProps) {
  const chartRef = useRef(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current, isDark ? "dark" : null)
    const mergedOptions = {
      ...getDefaultOptions(isDark),
      ...option
    }
    chart.setOption(mergedOptions)

    const handleResize = () => chart.resize()
    window.addEventListener("resize", handleResize)

    return () => {
      chart.dispose()
      window.removeEventListener("resize", handleResize)
    }
  }, [option, theme])

  return (
    <div 
      ref={chartRef} 
      style={{ 
        width: "100%", 
        borderRadius: "0.75rem",
        minHeight: "500px",
        ...style 
      }} 
      className="relative rounded-xl border border-border bg-background/50 px-8 pb-12 pt-6 backdrop-blur supports-[backdrop-filter]:bg-background/50"
    >
      <div className="absolute inset-0 -z-10 rounded-xl [background-size:16px_16px] [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]" />
    </div>
  )
}
