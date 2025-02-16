function goToNextPage() {
  window.location.href = "giftpage.html";
}
const febHolidays = [
    "Dear Baby, feel it",
    "Ye pyaar ka cycle hai, ache se feel karna",
    "Dost bhi tum, pyaar bhi tum 😊",
    "Ek bhi tum, aur hazar bhi tum 🤩",
    "Dukh me tum, aur khushi me tum 🤨",
    "Jindagi ke safar me kaafi ho tum ❤",
    "Maine shiddat se chaha hai tumhe, I love you❤️",
    "You're my first love ✔",
    "You're my only love ✨💕",
    "Thank you for coming into my life",
    "I am so blessed to have you",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never multi-thread on you",
    "You're my gadhi, my yedi, my pagal, my partner in crime", 
    "my sweetie, my pretty, my cutie, my baby",
    "my caretaker, my aaram, my sukoon 🤞",
    "In one word, you're Mine.😍",
    "I love the way you make efforts for me",
    "I love the way you look at me",
    "I love the way you love me 💫",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "Main humesha tumhare sath hun 🤞✔",
    "kabhi khud ko akela mat samjhna💓",
    "You are very special person in my life🥰",
    "I feel happy when you are around 🥰",
    "There's no one better than you❤️",
    "You're the best baby!! 💖",
    "I miss you all the time",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete love cycle is just for you, 😘",
    "a display of very small part of my love 💖",
    "There is lot but the cycle won't end",
    "Khayal rakha kar gaadhi ❤",
    "You're the one and only '1 in my life",
    "Thanks to God for helping us,ki hum logo ko milaya🙏",
    "I Love You So So So So So much baby❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  