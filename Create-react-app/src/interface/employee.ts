// 放置所有与后端交互的数据请求
export interface EmployeeRequest {
    name:string;
    departmentId:number|undefined
}
interface EmployeeInfo {
    id: number;
    key: number;
    name: string;
    department: string;
    hiredate: string;
    level: string;
}
export type EmployeeResponse = EmployeeInfo[] | undefined 
//定义EmployeeResponse作为后端的响应