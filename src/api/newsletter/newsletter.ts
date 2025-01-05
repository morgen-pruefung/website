export type NewsletterEntry = {
  email: string;
}

export async function newsletterSubscribe(request: NewsletterEntry): Promise<void> {
  await fetch("/api/v1/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
}

export async function newsletterUnsubscribe(request: NewsletterEntry): Promise<void> {
  await fetch("/api/v1/newsletter", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });
}
