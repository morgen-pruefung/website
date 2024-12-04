export interface BlogArticle {
  id: number;
  title: string;
  summary: string;
  body: string;
  authors: string[];
  published_at: string;
  tags: string[];
}

export async function getArticles(): Promise<BlogArticle[]> {
  const response = await fetch("http://localhost:4242/api/v1/blog/article", {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching articles");
  }

  return await response.json();
}
