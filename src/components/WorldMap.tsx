import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Graticule,
} from "react-simple-maps";
import { motion } from "framer-motion";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LONDON_COORDS: [number, number] = [-0.1278, 51.5074];

interface WorldMapProps {
  variant?: "footer" | "full";
  className?: string;
}

const WorldMap = ({ variant = "footer", className }: WorldMapProps) => {
  const config = variant === "full"
    ? { scale: 180, center: [10, 30] as [number, number] }
    : { scale: 350, center: [5, 52] as [number, number] };

  const markerSize = variant === "full"
    ? { outer: 12, main: 8, inner: 3, pulse: 30 }
    : { outer: 8, main: 6, inner: 2, pulse: 20 };

  return (
    <div className={`w-full h-full ${variant === "footer" ? "min-h-[200px]" : "min-h-[400px]"} ${className || ""}`}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: config.scale,
          center: config.center,
        }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Grid lines for full variant */}
        {variant === "full" && (
          <Graticule stroke="hsl(var(--primary) / 0.08)" strokeWidth={0.5} />
        )}

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={variant === "full" ? "hsl(var(--primary) / 0.08)" : "hsl(var(--muted-foreground) / 0.15)"}
                stroke={variant === "full" ? "hsl(var(--primary) / 0.25)" : "hsl(var(--muted-foreground) / 0.3)"}
                strokeWidth={variant === "full" ? 0.8 : 0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={LONDON_COORDS}>
          {/* Outer glow */}
          {variant === "full" && (
            <circle r={20} fill="hsl(var(--primary) / 0.15)" />
          )}
          {/* Outer pulse ring */}
          <motion.circle
            r={markerSize.outer}
            fill="hsl(var(--primary))"
            initial={{ r: markerSize.outer, opacity: 0.6 }}
            animate={{
              r: [markerSize.outer, markerSize.pulse, markerSize.outer],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          {/* Main marker dot */}
          <circle r={markerSize.main} fill="hsl(var(--primary))" />
          {/* Inner highlight */}
          <circle r={markerSize.inner} fill="hsl(var(--primary-foreground) / 0.8)" />
          {/* London label */}
          <text
            x={markerSize.main + 8}
            y={5}
            fontSize={variant === "full" ? 14 : 12}
            fontWeight={600}
            fill="hsl(var(--foreground))"
            style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "0.02em" }}
          >
            London
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
