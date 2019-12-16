const userInfo = {
  name: "Иванов Иван Иванович",
  location: "Уфа",
  university: "УГАТУ",
  email: "example@mail.ru",
  site: "vk.com/BestMotherFucker"
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

export class DataService {
  async getUserInfo() {
    return userInfo;
  }
  async getStudents(group) {
    return studentsTabel;
  }
}
