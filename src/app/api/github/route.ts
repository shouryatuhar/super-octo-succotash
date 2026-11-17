import { NextResponse } from "next/server";

export async function GET() {
  try {
    const userRes = await fetch("https://api.github.com/users/shouryatuhar", {
      next: { revalidate: 3600 }
    });
    
    if (!userRes.ok) {
      throw new Error(`GitHub API error: ${userRes.status}`);
    }

    const userData = await userRes.json();

    return NextResponse.json({
      public_repos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      updated_at: userData.updated_at,
    });
  } catch (error) {
    console.error("GitHub fetch failed:", error);
    return NextResponse.json({ error: "Data temporarily unavailable" }, { status: 503 });
  }
}
