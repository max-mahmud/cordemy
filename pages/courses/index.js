import CourseItem from "@/components/CourseItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllCourses } from "@/prisma/course";

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper py-10">
      <SectionHeader
        span={"Courses"}
        h2={"Browse All Course"}
        p={
          "These courses are typically offered by colleges and universities and are designed to provide students with knowledge and skills in a particular subject area. Academic courses can be taken for credit or non-credit."
        }
      />
      <div className="mt-10 flex flex-wrap gap-10">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    }
  }
}

