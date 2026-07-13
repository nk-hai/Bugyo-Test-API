import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      GL1080001: "P001",
      GL1080002: "工程A",
      GL1080003: 1,
      GL1080004: "2024-01-01",
      GL1080005: "2024-12-31",
    },
    {
      GL1080001: "P002",
      GL1080002: "工程B",
      GL1080003: 2,
      GL1080004: "2024-02-01",
      GL1080005: "2024-12-31",
    },
    {
      GL1080001: "P003",
      GL1080002: "工程C",
      GL1080003: 3,
      GL1080004: "2024-03-01",
      GL1080005: "2024-12-31",
    },
  ];

  return NextResponse.json(data);
}