import { blogs } from "./allData.js";

export function displayBlogs() {
  for (let i = 0; i < blogs.length; i++) {
    document.getElementById("blogg").innerHTML +=
      '<div class="blog">' +
      '<p class="p1">' +
      blogs[i].title +
      "</p>" +
      '<p class="pp" id="c1">' +
      blogs[i].description +
      "</p>" +
      '<div class="flex-container">' +
      '<div class="flex-child" id="postedDate">' +
      blogs[i].createdTime +
      "</div>" +
      "<span>&#46;</span>" +
      '<div class="flex-child" id="readDuration">' +
      blogs[i].readTime +
      "</div>" +
      "</div>" +
      "</div>" +
      "<hr />";
  }
}
