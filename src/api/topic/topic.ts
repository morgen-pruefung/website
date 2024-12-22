export type Topic = {
  id: string;
  name: string;
}

export async function getTopics(): Promise<Topic[]> {
  const response = await fetch("/api/v1/topics", {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching topics");
  }

  return await response.json();
}

export async function getTopic(id: string): Promise<Topic> {
  const response = await fetch("/api/v1/topics/"+id, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching topic");
  }

  return await response.json();
}

export async function getTopicTextContent(id: string): Promise<string> {
  const response = await fetch("/api/v1/topics/"+id+"/text-content", {
    method: "GET",
    headers: {
      "Accept": "text/plain",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching topic text content");
  }

  return await response.json();
}
