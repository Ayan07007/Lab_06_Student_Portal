import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { courses as coursesData, type Course } from '../data';

const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = (searchParams.get('sort') as 'asc' | 'desc' | null) ?? 'asc';

  const sortedCourses: Course[] = [...coursesData].sort((a: Course, b: Course) => {
    return sort === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
  });

  const setSort = (order: 'asc' | 'desc') => {
    setSearchParams({ sort: order });
  };

  return (
    <div>
      <div className="hero">
        <h1 style={{ margin: 0 }}>Available Courses</h1>
        <div className="muted-small">Explore curated courses to boost your skills</div>
      </div>

      <div className="container" style={{ marginTop: '1rem' }}>
        <div className="toolbar">
          <div style={{ marginRight: 'auto' }} />
          <button
            className={`btn ${sort === 'asc' ? 'btn--active' : 'btn--ghost'}`}
            onClick={() => setSort('asc')}
            aria-pressed={sort === 'asc'}
          >
            Sort Asc
          </button>
          <button
            className={`btn ${sort === 'desc' ? 'btn--active' : 'btn--ghost'}`}
            onClick={() => setSort('desc')}
            aria-pressed={sort === 'desc'}
          >
            Sort Desc
          </button>
        </div>

        <ul className="course-list">
          {sortedCourses.map((course: Course) => (
              <li key={course.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <Link className="course-link" to={`/courses/${course.id}`} style={{ fontSize: '1.05rem' }}>{course.title}</Link>
                  <span className="author-badge">{course.instructor}</span>
                </div>
                <div className="course-snippet">{course.description}</div>
                <div className="course-meta">ID: {course.id}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Courses;