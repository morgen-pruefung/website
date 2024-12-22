export type Exam = {
  id: string;
  name: string;
  topic_ids: string[];
}

export async function getExams(): Promise<Exam[]> {
  const response = await fetch("/api/v1/exams", {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching exams");
  }

  return await response.json();
}

export async function getExam(id: string): Promise<Exam> {
  const response = await fetch("/api/v1/exams/"+id, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Error fetching exam");
  }

  return await response.json();
}
