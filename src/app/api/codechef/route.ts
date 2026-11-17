import { NextResponse } from "next/server";

export async function GET() {
  try {
    // There is no official CodeChef API. We return the verified resume data
    // as a graceful fallback architecture instead of a brittle scraper.
    return NextResponse.json({
      rating: 1486,
      highest_rating: 1486,
      stars: "2★",
      recent_achievements: [
        { title: "Rank 45", contest: "CodeChef Starters 224" },
        { title: "Rank 58", contest: "CodeChef Starters 247" }
      ],
      note: "Data sourced from verified achievements."
    });
  } catch {
    return NextResponse.json({ error: "Data temporarily unavailable" }, { status: 503 });
  }
}
