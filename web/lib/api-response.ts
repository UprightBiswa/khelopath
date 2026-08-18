import { NextResponse } from "next/server";

export function ok<T>(data: T) {
  return NextResponse.json({
    data,
    meta: {
      prototype: true,
      syntheticData: true,
      officialService: false
    }
  });
}

