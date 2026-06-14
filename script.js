// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Project filtering interaction: projects.html
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const projectResult = document.getElementById("projectResult");

function filterProjects(filter) {
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const categories = card.dataset.category.split(" ");
    const shouldShow = filter === "all" || categories.includes(filter);
    card.classList.toggle("hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  if (projectResult) {
    const label = filter === "all" ? "전체" : filter.toUpperCase();
    projectResult.textContent = `${label} 프로젝트 ${visibleCount}개를 표시 중입니다.`;
  }
}

if (filterButtons.length > 0 && projectCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterProjects(button.dataset.filter);
    });
  });
}

// Publication category tabs: publications.html
const tabButtons = document.querySelectorAll(".tab-btn");
const publicationItems = document.querySelectorAll(".publication-item");

function filterPublications(topic) {
  publicationItems.forEach((item) => {
    const topics = item.dataset.topic.split(" ");
    const shouldShow = topic === "all" || topics.includes(topic);
    item.classList.toggle("hidden", !shouldShow);
  });
}

if (tabButtons.length > 0 && publicationItems.length > 0) {
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      filterPublications(button.dataset.tab);
    });
  });
}

// Contact form interaction: contact.html
const interestForm = document.getElementById("interestForm");
const formResult = document.getElementById("formResult");

const recommendationMap = {
  "Power Electronics": "고효율 DC-DC 컨버터, 인버터 제어, 고전력밀도 전력변환 프로젝트를 추천합니다.",
  "AI Fault Diagnosis": "AI 기반 아크 고장 검출, 전력변환 데이터 전처리, 신호 분석 프로젝트를 추천합니다.",
  "Battery Measurement": "온라인 EIS, 배터리 저항 추정, 셀 사이클러 개발 프로젝트를 추천합니다.",
  "Renewable Energy": "태양광·풍력 발전용 전력변환장치와 DC 그리드 응용 프로젝트를 추천합니다.",
  "Flyback Converter": "QR 플라이백 컨버터, EMI 저감, 고주파 공진형 컨버터 설계 주제를 추천합니다."
};

if (interestForm && formResult) {
  interestForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const interest = document.getElementById("interestSelect").value;
    const message = document.getElementById("message").value.trim();
    const recommendation = recommendationMap[interest];

    formResult.classList.add("show");
    formResult.innerHTML = `
      <strong>${name || "지원자"}님에게 맞는 연구 방향</strong><br />
      관심 분야: ${interest}<br />
      추천: ${recommendation}<br />
      ${message ? `메모: ${message}` : "문의 메모가 입력되지 않았습니다."}
    `;

    interestForm.reset();
  });
}
