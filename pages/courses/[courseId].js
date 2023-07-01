import { getCourse } from '@/prisma/course'
import { currencyConverter } from '@/utils/currencyConverter'
import React from 'react'

const CourseDetails = ({ course }) => {
    const handleEnroll = () => { }
    return (
        <div className="wrapper py-10 min-h-screen">
            <div
                style={{ backgroundImage: `url(${course.cover})` }}
                className="w-full h-[32rem] bg-no-repeat bg-cover bg-center"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
            />
            <div className="mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold" data-aos="fade-up">
                        {course.title}
                    </h2>
                    <p data-aos="fade-up">
                        <span className="font-semibold">Instructor:</span>{" "}
                        {course.instructor}
                    </p>
                    <p data-aos="fade-up">
                        <span className="font-semibold">Course Description:</span>{" "}
                        {course.description}
                    </p>
                    <p data-aos="fade-up">
                        <span className="font-semibold">Entrolled Students:</span>{" "}
                        {course.students}
                    </p>
                </div>

                <div className="space-y-2" data-aos="fade-up">
                    <p>
                        <span className="font-semibold">Course Duration:</span>{" "}
                        {course.duration}
                    </p>
                    <p>
                        <span className="font-semibold">Rating:</span> {course.rating}
                    </p>
                    <p className="text-3xl font-semibold">
                        Price: {currencyConverter(course.price)}
                    </p>

                    <button
                        data-aos="fade-up"
                        onClick={handleEnroll}
                        className="bg-black text-white py-3 rounded-lg w-full hover:bg-gray-700 duration-300"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails

export const getServerSideProps = async ({ query }) => {

    const course = await getCourse(query.courseId)

    const updatedCourse = {
        ...course,
        updatedAt: course.updatedAt.toString(),
        createdAt: course.createdAt.toString(),
    };

    return {
        props: {
            course: updatedCourse,
        }
    }
}
