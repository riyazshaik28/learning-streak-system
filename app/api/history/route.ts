import { NextResponse } from "next/server";
import { studyDates } from "../study/route";
export async function GET() {

  const history = [...studyDates].sort().reverse();

  return NextResponse.json({
    history
  });

}