const switcher = document.querySelector(".btn-toggle");
const mode_name = document.querySelector(".mode-name")
const li = document.querySelectorAll("li");
const number = document.querySelectorAll(".number");
const number2 = document.querySelectorAll(".number2");
const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const instagram = document.querySelector(".instagram");
const youtube = document.querySelector(".youtube");
const followers = document.querySelectorAll(".follow");
const counters = document.querySelectorAll(".counter");
const bg_container = document.querySelector(".container");
const bg_top = document.querySelector(".bg-top");
const h2 = document.querySelectorAll("h2");
const p = document.querySelector("p");
function light_theme() {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.add("light");
  }

  for (let i = 0; i < number.length; i++) {
    number[i].classList.add("light-number");
  }

  for (let i = 0; i < number2.length; i++) {
    number2[i].classList.add("light-number2");
  }
  for (let i = 0; i < followers.length; i++) {
    followers[i].classList.add("follow-light");
  }

  for (let i = 0; i < counters.length; i++) {
    counters[i].classList.add("counter-light");
  }

  for (let i = 0; i < h2.length; i++) {
    h2[i].classList.add("h2-light");
  }

  bg_container.classList.add("container-light");

  bg_top.classList.add("bg-top-light");

  p.classList.add("p-light");

  facebook.classList.add("social-network-color");
  twitter.classList.add("social-network-color");
  instagram.classList.add("social-network-color");
  youtube.classList.add("social-network-color");
}
function dark_theme() {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.remove("light");
  }

  for (let i = 0; i < number.length; i++) {
    number[i].classList.remove("light-number");
  }

  for (let i = 0; i < number2.length; i++) {
    number2[i].classList.remove("light-number2");
  }

  for (let i = 0; i < followers.length; i++) {
    followers[i].classList.add("follow-light");
  }

  for (let i = 0; i < counters.length; i++) {
    counters[i].classList.remove("counter-light");
  }

  for (let i = 0; i < h2.length; i++) {
    h2[i].classList.remove("h2-light");
  }

  bg_container.classList.remove("container-light");

  bg_top.classList.remove("bg-top-light");

  p.classList.remove("p-light");

  facebook.classList.remove("social-network-color");
  twitter.classList.remove("social-network-color");
  instagram.classList.remove("social-network-color");
  youtube.classList.remove("social-network-color");
}

switcher.addEventListener("click", () => {
  if (switcher.classList.contains("active")) {
    switcher.classList.remove("active");
    mode_name.innerHTML = "Dark Mode"
    mode_name.style.color = "hsl(228, 34%, 66%)"
    dark_theme();
  } else {
    switcher.classList.add("active");
    light_theme();
    mode_name.innerHTML = "Light Mode"
    mode_name.style.color = "hsl(228, 12%, 44%)"
  }
});
