import React from 'react';
import { useParams } from 'react-router-dom';

const CourseCategory = () => {
  let params = useParams();
  console.log(params);
  console.log(params.courseId);

  return (
    <div>
      <h1 className='text-center text-3xl font-semibold pt-30'>Course Category Page</h1>
    </div>
  );
}

export default CourseCategory;
