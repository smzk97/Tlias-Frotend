import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/page/Home.vue'
import Class from '@/page/class/Class.vue'
import Department from '@/page/department/Department.vue'
import Employee from '@/page/employee/Employee.vue'
import EmployeeData from '@/page/employee_data/EmployeeData.vue'
import LogData from '@/page/log_data/LogData.vue'
import Student from '@/page/student/Student.vue'
import StudentData from '@/page/student_data/StudentData.vue'

const route = [
  {
    path: "/",
    name: "",
    redirect: "/home",
    meta: { title: "首页" },
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
        meta: { title: '首页' }
      },
      {
        path: "class",
        name: "class",
        component: Class,
        meta: { title: '班级管理' }
      },
      {
        path: "students",
        name: "students",
        component: Student,
        meta: { title: '学员管理' }
      },
      {
        path: "department",
        name: "department",
        component: Department,
        meta: { title: '部门管理' }
      },
      {
        path: "employee",
        name: "employee",
        component: Employee,
        meta: { title: '员工管理' }
      },
      {
        path: "empReport",
        name: "empReport",
        component: EmployeeData,
        meta: { title: '员工信息统计' }
      },
      {
        path: "stuReport",
        name: "stuReport",
        component: StudentData,
        meta: { title: '学员信息统计' }
      },
      {
        path: "logReport",
        name: "logReport",
        component: LogData,
        meta: { title: '日志信息统计' }
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: route,
})

export default router
