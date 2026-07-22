import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "JTLH LTD — Start a conversation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [syneBold, outfitSemiBold] = await Promise.all([
    readFile(join(process.cwd(), "src/app/fonts/Syne-Bold.ttf")),
    readFile(join(process.cwd(), "src/app/fonts/Outfit-SemiBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="140"
            height="81"
            viewBox="0 0 124 72"
            fill="none"
            style={{ display: "block" }}
          >
            <path d="M0 72H28V36L0 72Z" fill="#E8C36A" />
            <path d="M36 72H72V18L36 72Z" fill="#E8C36A" />
            <path d="M80 72H124V0L80 72Z" fill="#E8C36A" />
          </svg>
          <div
            style={{
              display: "flex",
              marginLeft: 32,
              fontFamily: "Syne",
              fontSize: 68,
              fontWeight: 700,
              color: "#F4F4F4",
              letterSpacing: "0.08em",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            JTLH LTD
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontFamily: "Outfit",
            fontSize: 28,
            fontWeight: 600,
            color: "#E8C36A",
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          Start a conversation →
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: syneBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Outfit",
          data: outfitSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    },
  );
}
