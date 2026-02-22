export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Basics", instructor: "John Doe", description: "Learn the fundamentals of React." },
  { id: 2, title: "Advanced TypeScript", instructor: "Jane Smith", description: "Deep dive into TS types." },
  { id: 3, title: "Web Design", instructor: "Alice Brown", description: "Master UI/UX principles." },
  { id: 4, title: "Node.js Backend", instructor: "Bob Wilson", description: "Build scalable server applications." },
];