import type {Topic} from "@/api/topic/topic";

export interface Category {
  name: string;
  topics: Topic[];
}


export function sortTopicsByCategory(topics: Topic[]): Category[] {
  const categories: Category[] = [];

  topics.forEach((topic) => {
    const category = categories.find((c) => c.name === topic.category);
    if (category) {
      category.topics.push(topic);
    } else {
      categories.push({
        name: topic.category,
        topics: [topic]
      });
    }
  });

  return categories;
}
