import { serverApi, type Response } from '@/apis';
import type { CourseList, Course } from '@en/common/course';

export const getCourseList = async (): Promise<Response<CourseList>> => {
    const res = await serverApi.get<any, Response<CourseList>>('/course/list');
    return res;
};

export const getCourseById = async (id: string): Promise<Response<Course>> => {
    const res = await serverApi.get<any, Response<Course>>(`/course/${id}`);
    return res;
};
