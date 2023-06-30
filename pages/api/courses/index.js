import { getAllCourses } from "@/prisma/course";

// export default async function handler(req, res, next) {
//     try {
//         if (req.method === 'GET') {
//             const cousre = await getAllCourses()
//             return res.status(200).json(cousre);
//         }
//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// }


export default async function handler(req, res) {
    try {
        if (req.method === "GET") {
            const courses = await getAllCourses();

            return res.status(200).json(courses);
        }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}