//定义单个课程接口
export interface Course {
    id: String;       // 课程ID
    name: String;// 课程名
    value: String; // 课程value
    description?: String;// 课程描述
    teacher: String; // 教师
    url: String; // 课程url
    price: number; // 课程价格

}
//定义多个课程的列表 
export type CourseList = Course[];