const content = window.DEMO_CONTENT;
let currentSlide = 0;

const appShell = document.querySelector(".app-shell");
const views = {
  presentation: document.querySelector("#presentationView"),
  resume: document.querySelector("#resumeView"),
  discovery: document.querySelector("#discoveryView"),
  questions: document.querySelector("#questionsView")
};

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}

function renderProfile() {
  document.querySelector("#profileAvatar").src = content.profile.avatar;
  setText("#profileName", content.profile.name);
  setText("#profileTitle", content.profile.title);
  setText("#profileAbout", content.profile.about);
}

function renderSlide() {
  const slide = content.slides[currentSlide];
  setText("#slideKicker", slide.kicker);
  setText("#slideTitle", slide.title);
  setText("#slideSubtitle", slide.subtitle);
  setText("#slideProof", slide.proof);
  setText("#speakerNotes", slide.notes);

  const list = document.querySelector("#slideBullets");
  list.replaceChildren(
    ...slide.bullets.map((bullet) => {
      const item = document.createElement("li");
      item.textContent = bullet;
      return item;
    })
  );

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function renderDots() {
  const dots = content.slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
    dot.addEventListener("click", () => {
      currentSlide = index;
      renderSlide();
    });
    return dot;
  });
  document.querySelector("#slideDots").replaceChildren(...dots);
}

function renderResume() {
  setText("#resumeHeadline", content.resume.headline);
  setText("#resumeBody", content.resume.body);
  setText("#resumePositioning", content.resume.positioning);

  const strengths = content.resume.strengths.map((strength) => {
    const item = document.createElement("div");
    item.className = "strength";
    item.textContent = strength;
    return item;
  });
  document.querySelector("#strengthGrid").replaceChildren(...strengths);
}

function renderQuestions() {
  const questions = content.questions.map((question) => {
    const item = document.createElement("li");
    item.textContent = question;
    return item;
  });
  document.querySelector("#questionList").replaceChildren(...questions);
}

function showView(viewName) {
  Object.entries(views).forEach(([name, element]) => {
    element.classList.toggle("active", name === viewName);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === viewName);
  });
}

function toggleProfileMenu() {
  const trigger = document.querySelector("#profileTrigger");
  const panel = document.querySelector("#profilePanel");
  const isOpen = panel.hidden;
  panel.hidden = !isOpen;
  trigger.setAttribute("aria-expanded", String(isOpen));
}

function setTheme() {
  const isClassic = appShell.dataset.theme === "classic";
  appShell.dataset.theme = isClassic ? "modern" : "classic";
  document.querySelector("#themeToggle").textContent = isClassic
    ? "Switch to Classic"
    : "Switch to Lightning-inspired";
}

function toggleFeature(featureName, enabled) {
  document.querySelectorAll(`[data-feature="${featureName}"]`).forEach((element) => {
    element.classList.toggle("hidden-feature", !enabled);
  });
}

function updateStageMeter() {
  const select = document.querySelector("#stageSelect");
  const percent = ((select.selectedIndex + 1) / select.options.length) * 100;
  document.querySelector("#stageMeter").style.width = `${percent}%`;
}

function addMessage(text, sender = "assistant") {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;
  document.querySelector("#chatMessages").appendChild(message);
  message.scrollIntoView({ block: "end" });
}

function openChatWith(seed) {
  document.querySelector("#chatPanel").hidden = false;
  if (seed && content.chatResponses[seed]) {
    addMessage(content.chatResponses[seed]);
  }
}

function wireEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.view));
  });

  document.querySelector("[data-view-shortcut='resume']").addEventListener("click", () => {
    showView("resume");
    toggleProfileMenu();
  });

  document.querySelector("#prevSlide").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + content.slides.length) % content.slides.length;
    renderSlide();
  });

  document.querySelector("#nextSlide").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % content.slides.length;
    renderSlide();
  });

  document.querySelector("#profileTrigger").addEventListener("click", toggleProfileMenu);
  document.querySelector("#themeToggle").addEventListener("click", setTheme);

  document.querySelectorAll("[data-toggle-feature]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      toggleFeature(checkbox.dataset.toggleFeature, checkbox.checked);
    });
  });

  document.querySelector("[data-toggle-density]").addEventListener("change", (event) => {
    appShell.classList.toggle("compact", event.target.checked);
  });

  document.querySelector("#stageSelect").addEventListener("change", updateStageMeter);

  document.querySelector("#chatLauncher").addEventListener("click", () => openChatWith());
  document.querySelector("#closeChat").addEventListener("click", () => {
    document.querySelector("#chatPanel").hidden = true;
  });

  document.querySelectorAll("[data-chat-seed]").forEach((button) => {
    button.addEventListener("click", () => openChatWith(button.dataset.chatSeed));
  });

  document.querySelector("#chatForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("#chatInput");
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, "user");
    input.value = "";
    addMessage("For the interview: answer by naming the business problem, the impact, the solution hypothesis, and the validation step.");
  });
}

function init() {
  renderProfile();
  renderDots();
  renderSlide();
  renderResume();
  renderQuestions();
  updateStageMeter();
  wireEvents();
  addMessage("Hi Ed. I can surface discovery, demo, feasibility, or AI-loop prompts during the showcase.");
}

init();
