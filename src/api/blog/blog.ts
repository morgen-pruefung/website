export type BlogArticle = {
  id: string;
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

export async function getArticle(id: string): Promise<BlogArticle> {
  const response = await fetch("http://localhost:4242/api/v1/blog/article/"+id, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching article");
  }

  return await response.json();
}
