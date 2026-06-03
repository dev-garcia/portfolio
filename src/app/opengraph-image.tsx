import { ImageResponse } from "next/og";

import { site } from "@/data/site";

export const alt = `${site.name} — portfólio`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#f7f7f5",
        color: "#171715",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(23, 23, 21, 0.12)",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div style={{ color: "#f26a2e", fontSize: 28, fontWeight: 700 }}>{site.name}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "860px",
          }}
        >
          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 0.94 }}>
            Aplicações web para uso real.
          </div>
          <div style={{ color: "#5f5b55", fontSize: 34, lineHeight: 1.25 }}>
            Backend, integrações, APIs e produto em produção.
          </div>
        </div>
        <div style={{ color: "#5f5b55", fontSize: 26 }}>{site.url.hostname}</div>
      </div>
    </div>,
    size,
  );
}
