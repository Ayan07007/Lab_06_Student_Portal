import { useParams, useLoaderData } from "react-router-dom";
import type { Course } from "../data";
import "../App.css";

export function CourseDetail() {
  const { id } = useParams();

  const course = useLoaderData() as Course;

  return (
    <div className="course-detail-card">
      <h1 className="course-detail-title">{course.title}</h1>
      <div className="course-detail-instructor">Instructor: {course.instructor}</div>
      <div className="course-detail-description">{course.description}</div>
      <hr style={{ margin: "1.25rem 0" }} />
      <div style={{ color: "#94a3b8", fontSize: "0.85rem" }}><small>Course ID: {id}</small></div>
    </div>
  );
}

export default CourseDetail;