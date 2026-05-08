import { serverApi, type Response } from '@/apis';
import type { CourseList, Course } from '@en/common/course';

export const getCourseList = async (): Promise<Response<CourseList>> => {
    const res = await serverApi.get('/course/list');
    return res.data;
};

export const getCourseById = async (id: string): Promise<Response<Course>> => {
    const res = await serverApi.get(`/course/${id}`);
    return res.data;
};