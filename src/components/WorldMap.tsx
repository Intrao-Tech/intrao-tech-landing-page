import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json";

const LONDON_COORDS: [number, number] = [-0.1278, 51.5074];

const WorldMap = () => {
  return (
    <div className="w-full h-full min-h-[200px]">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 350,
          center: [5, 52],
        }}
        style={{ width: "100%", height: "100%" }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="hsl(var(--muted-foreground) / 0.15)"
                stroke="hsl(var(--muted-foreground) / 0.3)"
                strokeWidth={0.5}
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
          {/* Outer pulse ring */}
          <motion.circle
            r={8}
            fill="hsl(var(--primary))"
            initial={{ r: 8, opacity: 0.6 }}
            animate={{
              r: [8, 20, 8],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          {/* Main marker dot */}
          <circle r={6} fill="hsl(var(--primary))" />
          {/* Inner highlight */}
          <circle r={2} fill="hsl(var(--primary-foreground) / 0.6)" />
          {/* London label */}
          <text
            x={12}
            y={4}
            fontSize={12}
            fontWeight={500}
            fill="hsl(var(--foreground))"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            London
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
