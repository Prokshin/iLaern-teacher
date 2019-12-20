const userInfo = {
  name: "Иванов Иван ",
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

const subjects = [
  {
    name: "ООП"
  },
  {
    name: "ФЛП"
  }
];
export class DataService {
  async getUserInfo() {
    return userInfo;
  }
  async getStudents(group) {
    return studentsTabel;
  }
  async getSubjects() {
    return subjects;
  }
}
