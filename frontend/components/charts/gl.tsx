"use client"

import { useRef, useEffect } from "react"
import * as echarts from "echarts"
import 'echarts-gl'
import { useTheme } from "next-themes"

type GLChartProps = {
  option: any // Use any type for GL charts since TypeScript definitions might be incomplete
  style?: React.CSSProperties
}

export function GLChart({ option, style = { height: "600px" } }: GLChartProps) {
  const chartRef = useRef(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current, isDark ? "dark" : null)
    
    // Simple base options for 3D charts
    const baseOptions = {
      backgroundColor: 'transparent',
      textStyle: {
        fontFamily: 'var(--font-sans)',
        color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)'
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
        borderRadius: 8,
        padding: [8, 12],
        textStyle: {
          color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.85)',
          fontFamily: 'var(--font-sans)'
        }
      },
      grid3D: {
        axisLine: {
          lineStyle: { 
            color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
          }
        },
        axisPointer: {
          lineStyle: { 
            color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
          }
        },
        viewControl: {
          projection: 'perspective',
          autoRotateSpeed: 10,
          distance: 100
        }
      }
    }

    chart.setOption({
      ...baseOptions,
      ...option
    })

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
        minHeight: "600px",
        ...style 
      }} 
      className="relative rounded-xl border border-border bg-background/50 px-8 pb-12 pt-6 backdrop-blur supports-[backdrop-filter]:bg-background/50"
    >
      <div className="absolute inset-0 -z-10 rounded-xl [background-size:16px_16px] [background:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background:radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]" />
    </div>
  )
} 