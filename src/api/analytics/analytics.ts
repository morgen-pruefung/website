export type PageVisitedRequest = {
  url: string;
  referrer: string;
}

export async function pageVisited(request: PageVisitedRequest): Promise<void> {
  await fetch("/api/v1/analytics/page-visited", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
}
