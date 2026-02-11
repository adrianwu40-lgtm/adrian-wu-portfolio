import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const essaysDirectory = path.join(process.cwd(), "content/essays");

export interface EssayMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
}

export interface Essay extends EssayMeta {
  contentHtml: string;
}

export function getAllEssays(): EssayMeta[] {
  const fileNames = fs.readdirSync(essaysDirectory);
  const essays = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(essaysDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
      };
    });

  return essays.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return a.date < b.date ? 1 : -1;
  });
}

export function getAllEssaySlugs(): string[] {
  const fileNames = fs.readdirSync(essaysDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export async function getEssayBySlug(slug: string): Promise<Essay> {
  const fullPath = path.join(essaysDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    contentHtml,
  };
}
