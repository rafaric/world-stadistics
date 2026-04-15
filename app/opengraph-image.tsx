import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "World Estadísticas — Indicadores del Banco Mundial";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #2d5f8a 50%, #1e3a5f 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 8,
            }}
          >
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span
              style={{
                fontSize: 72,
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              World Estadísticas
            </span>
          </div>
          <span
            style={{
              fontSize: 28,
              color: "#93c5fd",
              letterSpacing: "0.01em",
            }}
          >
            Indicadores del Banco Mundial
          </span>
          <div
            style={{
              display: "flex",
              gap: 24,
              marginTop: 32,
              padding: "16px 24px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: 12,
            }}
          >
            {["Demografía", "Economía", "Ambiente", "Educación", "Tecnología", "Comercio"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 16,
                    color: "#bfdbfe",
                    padding: "6px 12px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 8,
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
