import { calculateStreak } from "@/lib/streakLogic";
import { NextResponse } from "next/server";
import { studyDates } from "../study/route";

export async function GET() {

  const data = calculateStreak(studyDates);

  return NextResponse.json(data);

}