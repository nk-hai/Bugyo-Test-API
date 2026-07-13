import { NextResponse } from "next/server";

export async function POST() {
  const data = [
    {
      GL1080001: "WT001",
      GL1080002: "基礎工事",
      GL1080003: 1,
      GL1080004: "2024/01/01",
      GL1080005: "2026/12/31",
    },
    {
      GL1080001: "WT002",
      GL1080002: "鉄筋工事",
      GL1080003: 2,
      GL1080004: "2024/01/01",
      GL1080005: "2026/12/31",
    },
    {
      GL1080001: "WT003",
      GL1080002: "型枠工事",
      GL1080003: 3,
      GL1080004: "2024/01/01",
      GL1080005: "2026/12/31",
    }
  ];

  return NextResponse.json(data);
}
