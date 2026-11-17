import { NextResponse } from "next/server";

export async function GET() {
  try {
    const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
            reputation
            starRating
          }
          userCalendar {
            submissionCalendar
          }
        }
        recentAcSubmissionList(username: $username, limit: 5) {
          id
          title
          titleSlug
          timestamp
        }
      }
    `;

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "https://leetcode.com/Shouryaaaa/"
      },
      body: JSON.stringify({
        query,
        variables: { username: "Shouryaaaa" },
      }),
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error(`LeetCode API error: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data.data);
  } catch (error) {
    console.error("LeetCode fetch failed:", error);
    return NextResponse.json({ error: "Data temporarily unavailable" }, { status: 503 });
  }
}
