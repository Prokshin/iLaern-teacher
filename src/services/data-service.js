const courses = {
  courses: [
    {
      id: 12,
      name: "CourseA",
      divisions: [
        {
          id: "12-A",
          name: "Division A"
        },
        {
          id: "12-B",
          name: "Division B"
        }
      ],
      level: "Beginner",
      description: null
    },
    {
      id: 34,
      name: "CourseC",
      level: "Beginner",
      description: "CourseC",
      divisions: [
        {
          id: "34-A",
          name: "Division c"
        },
        {
          id: "34-B",
          name: "Division d"
        }
      ]
    },
    {
      id: 25,
      name: "CourseB",
      level: "Intermediate",
      description: "CourseB",
      divisions: [
        {
          id: "25-A",
          name: "Division e"
        },
        {
          id: "25-B",
          name: "Division f"
        }
      ]
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

const task = [
  {
    id: 4,
    name: "ex4",
    description: "Написать быструю сортировку символьного массива",
    attachments: [
      {
        id: 5,
        fileName: "2. Чем отличается дисциплинированный человек.txt",
        location:
          "C:\\courses-storage\\uploads\\2. Чем отличается дисциплинированный человек.txt",
        downloadURI: "http://localhost:8080/downloadFile/api.txt"
      }
    ]
  }
];

export class DataService {
  async getRes(url) {
    const res = await fetch(url);

    //console.log(await res.json());
    return await res.json();
  }
  async postRes(url, data) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  }
  async getTeacher(id) {
    const res = await this.getRes(`http://localhost:8080/teacher/${id}`);
    return res;
  }
  async getStudents(course) {
    return studentsTabel;
  }
  async getCourses(id) {
    const res = await this.getRes(
      `http://localhost:8080/teacher/${id}/my-courses`
    );
    return res;
  }

  async getAllThemes(id) {
    const res = await this.getRes(
      `
      http://localhost:8080/teacher/1/courses/OOP/
      `
    );
    return res;
  }
  async getAllStudents() {
    return students;
  }
  async getMyCourse(id) {
    const res = await this.getRes(
      `http://localhost:8080/teacher/${id}/my-courses`
    );
    return res;
  }
  async getExamineTask() {
    return task;
  }

  async getExToCheck(id, url) {
    const res = await this.getRes(`http://localhost:8080/teacher/${id}${url}`);
    return res;
  }

  async getCommentByEx(id, url, ex_id) {
    const res = await this.getRes(`http://localhost:8080/teacher/${id}${url}`);
    console.log(res);
    return res;
  }

  async getLecture() {
    const res = await this.getRes(
      `http://localhost:8080/teacher/1/courses/OOP/inheritance/lecture`
    );
    return res;
  }
  async postCreateCourse(id, data) {
    const res = await this.postRes(
      `http://localhost:8080/teacher/${id}/courses`,
      data
    );
    return res;
  }
  async postCreateTheme(id, course_name, data) {
    const res = await this.postRes(
      `http://localhost:8080/teacher/${id}/courses/${course_name}`,
      data
    );
    return res;
  }
}

const a = new DataService();
// a.getRes("http://localhost:8080/teacher/1").then(body => {
//   console.log(body);
// });

// const b = new DataService();
// a.postRes("http://localhost:8080/teacher/1/courses", {
//   name: "Course5",
//   level: "Beginner",
//   description: "my course 1!"
// }).then(body => {
//   console.log(body);
// });

console.log(a.getMyCourse(1));
