const courses = {
  courses: [
    {
      id: 1,
      name: "CourseA",
      level: "Beginner",
      description: null
    },
    {
      id: 3,
      name: "CourseC",
      level: "Beginner",
      description: "CourseC"
    },
    {
      id: 2,
      name: "CourseB",
      level: "Intermediate",
      description: "CourseB"
    }
  ]
};

const TeacherById = {
  id: 2,
  firstName: "Rail1",
  lastName: "Sham1",
  login: "Rail.Ss1",
  password: "pass1",
  email: "rail@mail.ru1",
  birthDate: null,
  role: "TEACHER",
  memo:
    "Я живу и работаю в Уфе <br> <a href=''>mysite.com</a> <br> <a href=''>vk.com/bb_king</a> "
};
const studentsTabel = [
  {
    group: "ПРО-499",
    subjects: [
      {
        name: "ООП",
        students: [
          {
            id: 1,
            name: "Анатольев Анатолий Анатолиевич",
            labs: 2,
            test: 1,
            video: 7,
            lecture: 9
          },
          {
            id: 2,
            name: "Григорьев Григорий Григориевич",
            labs: 2,
            test: 1,
            video: 7,
            lecture: 9
          }
        ],
        allLabs: 6,
        allTest: 5,
        allVideo: 18,
        allLecture: 15
      }
    ]
  }
];

const students = {
  onCourse: [
    {
      id: 0,
      name: "CourseA",
      students: ["Иванов И И", "петров П П "]
    },
    {
      id: 1,
      name: "CourseB",
      students: ["Иванов И F", "петров П F "]
    },
    {
      id: 2,
      name: "CourseC",
      students: ["Иванов F И", "петров F П "]
    }
  ]
};

const subjects = [
  {
    id: "0",
    name: "ООП"
  },
  {
    id: "1",
    name: "ФЛП"
  }
];
export class DataService {
  async getTeacher(id) {
    return TeacherById;
  }
  async getStudents(course) {
    return studentsTabel;
  }
  async getCourses() {
    return courses;
  }
  async getAllStudents() {
    return students;
  }
}
