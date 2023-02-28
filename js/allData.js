//blog posted date
let d = new Date();
let day = d.getDate();
let month = d.getMonth();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let finalTime = months[month] + " " + day;

const blogs = [
  {
    title: "This is Blog 1. It is about the recent earthquake in Turkey.",
    description:
      "The earthquake, which hit near the town of Gaziantep, was closely  followed by numerous aftershocks - including one quake which was almost as...",
    createdTime: finalTime,
    readTime: "2 min",
  },
  {
    title: "This is Blog 2. It is about the recent earthquake in Turkey.",
    description:
      "The earthquake, which hit near the town of Gaziantep, was closely  followed by numerous aftershocks - including one quake which was almost as...",
    createdTime: finalTime,
    readTime: "3 min",
  },
  {
    title: "This is Blog 3. It is about the recent earthquake in Turkey.",
    description:
      "The earthquake, which hit near the town of Gaziantep, was closely  followed by numerous aftershocks - including one quake which was almost as...",
    createdTime: finalTime,
    readTime: "5 min",
  },
  {
    title: "This is Blog 4. It is about the recent earthquake in Turkey.",
    description:
      "The earthquake, which hit near the town of Gaziantep, was closely  followed by numerous aftershocks - including one quake which was almost as...",
    createdTime: finalTime,
    readTime: "4 min",
  },
  {
    title: "This is Blog 5. It is about the recent earthquake in Turkey.",
    description:
      "The earthquake, which hit near the town of Gaziantep, was closely  followed by numerous aftershocks - including one quake which was almost as...",
    createdTime: finalTime,
    readTime: "6 min",
  },
];

var tableHeading =
  "<tr>" +
  "<th>uid</th>" +
  "<th>Food</th>" +
  "<th>Quantity</th>" +
  "<th>Carbs</th>" +
  "<th>Protein</th>" +
  "<th>Fat</th>" +
  "<th>Calorie</th>" +
  "<th>Action</th>" +
  "</tr>";

export { tableHeading, months, blogs };
