/**
 * ==========================================================================
 * Asking Date - Mobile Web App Logic
 * ==========================================================================
 */

// [중요] 사용자의 구글 스프레드시트 웹 앱(Google Apps Script) 배포 URL을 여기에 입력하세요.
// 설정 전에는 자동으로 '데모 모드'로 작동하여 로컬에서 바로 테스트할 수 있습니다.
const GOOGLE_SHEET_WEB_APP_URL = "";

document.addEventListener("DOMContentLoaded", () => {
  initCustomPlan();
  initFloatingHearts();
  initDodgeButton();
  initStepNavigation();
  initKakaoShare();
});

/* --------------------------------------------------------------------------
   0. 커스텀 데이트 코스 파싱 및 렌더링 엔진 (URL 기반 + 기본 프리셋)
   -------------------------------------------------------------------------- */
const DEFAULT_PLAN = {
  title: "저랑 데이트할래요? 🥰",
  subTitle: "진지하게 고민하고 솔직하게 선택해줘요!",
  steps: [
    {
      id: "step_time",
      type: "choice",
      title: "몇 시에 만날까요? ⏰",
      subtitle: "편한 시간대로 골라주세요",
      multiple: false,
      options: [
        "12:00 점심부터 맛있는 거 먹어요 🍽️",
        "14:00 나른한 오후에 커피 한잔 ☕",
        "17:30 저녁 노을 보며 만나요 🌅"
      ]
    },
    {
      id: "step_lunch",
      type: "places",
      title: "점심은 어디로 갈까요? 🍽️",
      subtitle: "가보고 싶었던 곳들을 골라봤어요 (중복 선택 가능)",
      multiple: true,
      places: [
        {
          name: "오복수산 연남점",
          tag: "일식 / 카이센동",
          desc: "신선한 카이센동과 우니가 정말 유명한 정갈한 맛집!",
          mapUrl: "https://map.naver.com/p/search/%EC%98%A4%EB%B3%B5%EC%88%98%EC%82%B0%20%EC%97%B0%EB%82%A8",
          image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80"
        },
        {
          name: "클래식당 연남",
          tag: "양식 / 파스타",
          desc: "수제 라자냐와 감자 뇨끼가 환상적인 아늑한 분위기",
          mapUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9E%98%EC%8B%9D%EB%8B%B9%20%EC%97%B0%EB%82%A8",
          image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      id: "step_cafe",
      type: "places",
      title: "점심 먹고 어디로 갈까요? ☕",
      subtitle: "커피 한잔 하면서 도란도란 이야기 나눠요",
      multiple: true,
      places: [
        {
          name: "테일러커피 연남점",
          tag: "감성 카페 / 커피",
          desc: "시그니처 아인슈페너와 크림모카가 정말 맛있는 곳",
          mapUrl: "https://map.naver.com/p/search/%ED%85%8C%EC%9D%BC%EB%9F%AC%EC%BB%A4%ED%94%BC%20%EC%97%B0%EB%82%A8",
          image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
        },
        {
          name: "경의선 숲길 산책",
          tag: "산책 / 힐링",
          desc: "시원한 바람 쐬며 연트럴파크 산책로 걷기 🌿",
          mapUrl: "https://map.naver.com/p/search/%EA%B2%BD%EC%9D%98%EC%84%A0%EC%88%B2%EA%B8%B8",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      id: "step_dinner",
      type: "places",
      title: "저녁엔 어디서 한잔할까요? 🍷",
      subtitle: "분위기 좋은 곳에서 하루 마무리하기!",
      multiple: false,
      places: [
        {
          name: "연남동 바라티에",
          tag: "와인 / 타파스",
          desc: "조명이 은은하고 아늑해서 깊은 이야기 나누기 딱 좋아요",
          mapUrl: "https://map.naver.com/p/search/%EB%B0%94%EB%9D%BC%ED%8B%B0%EC%97%90%20%EC%97%B0%EB%82%A8",
          image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      id: "step_note",
      type: "text",
      title: "혹시 더 하고 싶은 말이 있나요? 💌",
      subtitle: "못 먹는 음식이나 생각나는 곳이 있다면 편하게 적어줘요!",
      placeholder: "예: 매운 건 잘 못 먹어요 / 커피는 디카페인 선호해요!"
    }
  ]
};

window.activeCustomPlan = null;

function initCustomPlan() {
  window.activeCustomPlan = parsePlanFromUrl();

  // URL 파라미터가 없는 경우 로컬 드래프트 또는 기본 프리셋 적용
  if (!window.activeCustomPlan || !window.activeCustomPlan.steps || window.activeCustomPlan.steps.length === 0) {
    const saved = localStorage.getItem("asking_date_admin_draft");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.steps && parsed.steps.length > 0) {
          window.activeCustomPlan = parsed;
        }
      } catch (e) {}
    }
  }

  // 여전히 없으면 기본 프리셋 확정 적용
  if (!window.activeCustomPlan || !window.activeCustomPlan.steps || window.activeCustomPlan.steps.length === 0) {
    window.activeCustomPlan = JSON.parse(JSON.stringify(DEFAULT_PLAN));
  }

  // 1단계 첫 질문 제목/부제목 반영
  const titleEl = document.getElementById("mainStep1Title");
  const subEl = document.getElementById("mainStep1SubTitle");
  if (titleEl && window.activeCustomPlan.title) {
    titleEl.textContent = window.activeCustomPlan.title;
  }
  if (subEl && window.activeCustomPlan.subTitle) {
    subEl.textContent = window.activeCustomPlan.subTitle;
  }

  // 2단계 커스텀 코스 동적 렌더링
  renderCustomCourse(window.activeCustomPlan);
}

function parsePlanFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  let raw = urlParams.get("plan");
  if (!raw && window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (hash.startsWith("plan=")) {
      raw = hash.substring(5);
    }
  }

  if (!raw) return null;

  try {
    let jsonStr = "";
    if (raw.startsWith("lz:")) {
      let payload = raw.substring(3);
      payload = decodeURIComponent(payload).replace(/ /g, "+");
      if (window.LZString && typeof window.LZString.decompressFromEncodedURIComponent === "function") {
        jsonStr = window.LZString.decompressFromEncodedURIComponent(payload);
      }
    } else if (raw.startsWith("b64:")) {
      let payload = raw.substring(4);
      payload = decodeURIComponent(payload).replace(/ /g, "+");
      jsonStr = decodeURIComponent(escape(atob(payload)));
    } else {
      let payload = decodeURIComponent(raw).replace(/ /g, "+");
      if (window.LZString) {
        jsonStr = window.LZString.decompressFromEncodedURIComponent(payload);
      }
      if (!jsonStr) {
        try {
          jsonStr = decodeURIComponent(escape(atob(payload)));
        } catch (e) {}
      }
    }

    if (!jsonStr) return null;

    const data = JSON.parse(jsonStr);
    return {
      title: data.t || data.title || "저랑 데이트할래요? 🥰",
      subTitle: data.s || data.subTitle || "진지하게 고민하고 솔직하게 선택해줘요!",
      steps: data.st || data.steps || []
    };
  } catch (err) {
    console.error("커스텀 데이트 플랜 파싱 실패:", err);
    return null;
  }
}

function renderCustomCourse(plan) {
  const customForm = document.getElementById("customCourseForm");
  const stepsContainer = document.getElementById("customStepsList");

  if (!customForm || !stepsContainer) return;

  // Step 2 배지 및 타이틀 업데이트
  const badge = document.getElementById("step2Badge");
  const emoji = document.getElementById("step2Emoji");
  const title = document.getElementById("step2Title");
  const subtitle = document.getElementById("step2Subtitle");

  if (badge) badge.textContent = "데이트 코스 정하기 💌";
  if (emoji) emoji.textContent = "🗺️";
  if (title) title.textContent = "우리 이렇게 데이트할까요?";
  if (subtitle) subtitle.innerHTML = "가장 마음에 드는 선택지를 골라주세요! 🥰";

  stepsContainer.innerHTML = "";

  plan.steps.forEach((step, idx) => {
    const stepId = step.id || "step_" + idx;
    const block = document.createElement("div");
    block.className = "custom-step-block";
    block.dataset.stepId = stepId;
    block.dataset.stepType = step.type;
    block.dataset.multiple = step.multiple ? "true" : "false";

    let contentHtml = "";

    if (step.type === "choice") {
      const options = step.options || [];
      contentHtml = `
        <div class="choice-chips-list">
          ${options.map((opt, oIdx) => `
            <label class="choice-chip" data-opt-idx="${oIdx}">
              <input type="${step.multiple ? 'checkbox' : 'radio'}" name="${stepId}" value="${escapeHtml(opt)}">
              <span class="choice-chip-radio-icon"></span>
              <span>${escapeHtml(opt)}</span>
            </label>
          `).join("")}
        </div>
      `;
    } else if (step.type === "places") {
      const places = step.places || [];
      contentHtml = `
        <div class="place-cards-list">
          ${places.map((place, pIdx) => `
            <div class="custom-place-card" data-place-name="${escapeHtml(place.name)}">
              <input type="${step.multiple ? 'checkbox' : 'radio'}" name="${stepId}" value="${escapeHtml(place.name)}">
              <div class="place-card-banner">
                <img src="${escapeHtml(place.image || 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80')}" alt="${escapeHtml(place.name)}">
                ${place.tag ? `<span class="place-card-badge">${escapeHtml(place.tag)}</span>` : ""}
                <span class="place-card-select-icon">✔</span>
              </div>
              <div class="place-card-body">
                <h3 class="place-card-title">${escapeHtml(place.name)}</h3>
                ${place.desc ? `<p class="place-card-desc">${escapeHtml(place.desc)}</p>` : ""}
                ${place.mapUrl ? `
                  <a href="${escapeHtml(place.mapUrl)}" target="_blank" rel="noopener noreferrer" class="place-card-map-btn" onclick="event.stopPropagation()">
                    🗺️ 지도/리뷰 보기 ↗
                  </a>
                ` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    } else if (step.type === "text") {
      contentHtml = `
        <textarea class="custom-note-input" name="${stepId}" placeholder="${escapeHtml(step.placeholder || '자유롭게 적어주세요 :)')}" maxlength="200"></textarea>
      `;
    }

    block.innerHTML = `
      <div class="custom-step-header">
        <span class="step-num-pill">${idx + 1}단계</span>
        <h3 class="custom-step-title">${escapeHtml(step.title)}</h3>
        ${step.subtitle ? `<p class="custom-step-sub">${escapeHtml(step.subtitle)}</p>` : ""}
      </div>
      <div class="custom-step-content">
        ${contentHtml}
      </div>
    `;

    // choice-chip 선택 시 클래스 토글
    if (step.type === "choice") {
      const chips = block.querySelectorAll(".choice-chip");
      chips.forEach((chip) => {
        const input = chip.querySelector("input");
        input.addEventListener("change", () => {
          if (!step.multiple) {
            chips.forEach((c) => c.classList.remove("selected"));
          }
          if (input.checked) {
            chip.classList.add("selected");
          } else {
            chip.classList.remove("selected");
          }
        });
      });
    } else if (step.type === "places") {
      const cards = block.querySelectorAll(".custom-place-card");
      cards.forEach((card) => {
        const input = card.querySelector("input");
        card.addEventListener("click", () => {
          if (step.multiple) {
            input.checked = !input.checked;
          } else {
            cards.forEach((c) => {
              c.classList.remove("selected");
              c.querySelector("input").checked = false;
            });
            input.checked = true;
          }

          if (input.checked) {
            card.classList.add("selected");
          } else {
            card.classList.remove("selected");
          }
        });
      });
    }

    stepsContainer.appendChild(block);
  });
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* --------------------------------------------------------------------------
   1. 배경 하트 파티클 생성기
   -------------------------------------------------------------------------- */
function initFloatingHearts() {
  const container = document.getElementById("floatingHearts");
  if (!container) return;

  const heartIcons = ["❤️", "💖", "🌸", "✨", "💕", "🤍"];
  const count = 15;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = heartIcons[Math.floor(Math.random() * heartIcons.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 6}s`;
    heart.style.animationDuration = `${6 + Math.random() * 6}s`;
    heart.style.fontSize = `${14 + Math.random() * 16}px`;
    container.appendChild(heart);
  }
}

/* --------------------------------------------------------------------------
   2. '싫어요' 도망가기 버튼 로직 (모바일 터치 & PC 마우스 대응)
   -------------------------------------------------------------------------- */
function initDodgeButton() {
  const btnNo = document.getElementById("btnNo");
  const btnYes = document.getElementById("btnYes");
  const dodgeHint = document.getElementById("dodgeHint");
  const step1 = document.getElementById("step1");

  if (!btnNo || !btnYes) return;

  let dodgeCount = 0;
  let autoDodgeTimer = null;

  const funnyTexts = [
    "싫어요 💨",
    "싫어요 😜",
    "싫어요 🏃‍♂️",
    "싫어요 😆",
    "싫어요 😝",
    "싫어요 🥺",
    "싫어요 🤭",
    "싫어요 👻"
  ];

  const dodge = (e, isAuto = false) => {
    // 자동 회피 타이머 취소
    if (autoDodgeTimer) {
      clearTimeout(autoDodgeTimer);
      autoDodgeTimer = null;
    }

    // 모바일 터치 이벤트 발생 시 가상 클릭(click) 방지
    if (e && e.cancelable && e.type !== "click") {
      e.preventDefault();
    }

    dodgeCount++;

    // 1) [중요] '싫어요' 글자는 그대로 유지하고 뒤에 귀여운 액션 이모지만 붙임
    let nextText = isAuto ? "싫어요 💨" : funnyTexts[(dodgeCount - 1) % funnyTexts.length];
    btnNo.innerHTML = nextText;

    // 2) [버그 수정] 부모 카드의 CSS transform/overflow에 의해 화면에서 사라지는 현상 원천 차단
    // 현재 위치를 캡처한 뒤 document.body의 직속 자식으로 이동하여 부드럽게 화면을 날아다니게 함
    if (btnNo.parentElement !== document.body) {
      const currentRect = btnNo.getBoundingClientRect();
      btnNo.style.position = "fixed";
      btnNo.style.left = `${currentRect.left}px`;
      btnNo.style.top = `${currentRect.top}px`;
      document.body.appendChild(btnNo);
    }

    btnNo.classList.add("dodging");

    // 3) 실제 화면 뷰포트 크기 측정
    const viewportWidth = window.visualViewport
      ? window.visualViewport.width
      : (document.documentElement.clientWidth || window.innerWidth);
    const viewportHeight = window.visualViewport
      ? window.visualViewport.height
      : (document.documentElement.clientHeight || window.innerHeight);

    // 변경된 텍스트 기준 버튼의 실제 너비/높이 측정
    const btnRect = btnNo.getBoundingClientRect();
    const btnWidth = Math.ceil(btnRect.width || 90);
    const btnHeight = Math.ceil(btnRect.height || 44);

    // 모바일 안전 여백 (상단 노치/헤더 65px, 하단 툴바/홈바 80px, 좌우 16px)
    const padX = 16;
    const padTop = 65;
    const padBottom = 80;

    const minX = padX;
    const maxX = Math.max(minX, viewportWidth - btnWidth - padX);
    const minY = padTop;
    const maxY = Math.max(minY, viewportHeight - btnHeight - padBottom);

    // [요구사항] 글자를 절대 가리지 않도록 금지 구역 수집
    const forbiddenRects = [];
    const elementsToAvoid = [
      step1.querySelector(".main-title"),
      step1.querySelector(".sub-title"),
      step1.querySelector("#dodgeHint"),
      btnYes
    ].filter(Boolean);

    elementsToAvoid.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        forbiddenRects.push({
          left: r.left - 10,
          top: r.top - 8,
          right: r.right + 10,
          bottom: r.bottom + 8
        });
      }
    });

    const isCollidingWithText = (x, y) => {
      const right = x + btnWidth;
      const bottom = y + btnHeight;
      for (const r of forbiddenRects) {
        if (x < r.right && right > r.left && y < r.bottom && bottom > r.top) {
          return true; // 글자나 버튼 영역과 겹침!
        }
      }
      return false; // 안전함
    };

    let newX = minX;
    let newY = minY;
    let foundSafePos = false;

    // 최대 40회 무작위 시도로 글자와 겹치지 않는 안전 좌표 탐색
    for (let attempt = 0; attempt < 40; attempt++) {
      const candidateX = Math.floor(minX + Math.random() * (maxX - minX));
      const candidateY = Math.floor(minY + Math.random() * (maxY - minY));

      if (!isCollidingWithText(candidateX, candidateY)) {
        newX = candidateX;
        newY = candidateY;
        foundSafePos = true;
        break;
      }
    }

    if (!foundSafePos) {
      // 겹치지 않는 위치를 못 찾은 경우, 카드 아래/위 빈 여백에 확정 배치 (글자 절대 가리지 않음)
      const cardRect = step1.getBoundingClientRect();
      if (cardRect.bottom + btnHeight + 10 <= maxY) {
        newX = Math.floor(minX + Math.random() * (maxX - minX));
        newY = Math.floor(cardRect.bottom + 12);
      } else if (cardRect.top - btnHeight - 12 >= minY) {
        newX = Math.floor(minX + Math.random() * (maxX - minX));
        newY = Math.floor(cardRect.top - btnHeight - 12);
      } else {
        newX = Math.random() > 0.5 ? minX : maxX;
        newY = Math.max(minY, Math.min(cardRect.bottom, maxY));
      }
    }

    // 4) 최종 안전 클램핑 (화면 밖으로 절대 나가지 않도록 보장)
    newX = Math.min(Math.max(minX, newX), maxX);
    newY = Math.min(Math.max(minY, newY), maxY);

    // 버튼 좌표 적용 -> CSS transition을 통해 부드럽게 미끄러지듯 도망감!
    btnNo.style.left = `${newX}px`;
    btnNo.style.top = `${newY}px`;

    // 5) 힌트 텍스트 변경
    if (dodgeHint) {
      if (isAuto) {
        dodgeHint.textContent = "어라? 싫어요 버튼이 혼자 도망갔어요! 🏃‍♂️💨";
      } else if (dodgeCount === 1) {
        dodgeHint.textContent = "잡아보려 해도 자꾸 도망가요! 🤣";
      } else if (dodgeCount >= 3) {
        dodgeHint.textContent = "이제 포기하시고 '좋아요'를 눌러주세요! 💖";
      }
    }

    // '좋아요' 버튼 크기 확대
    const scale = Math.min(1 + dodgeCount * 0.08, 1.4);
    btnYes.style.transform = `scale(${scale})`;
  };

  // 모바일: 손가락이 닿는 즉시 반응 (touchstart, pointerdown)
  btnNo.addEventListener("touchstart", dodge, { passive: false });
  btnNo.addEventListener("pointerdown", dodge);

  // 데스크톱: 마우스 올리는 즉시 반응
  btnNo.addEventListener("mouseenter", dodge);

  // 혹시라도 클릭이 일어났을 때도 회피
  btnNo.addEventListener("click", (e) => {
    e.preventDefault();
    dodge(e);
  });

  // [요구사항] 1초 지나면 자동으로 알아서 도망가도록 타이머 등록
  autoDodgeTimer = setTimeout(() => {
    if (step1 && step1.classList.contains("active") && dodgeCount === 0) {
      dodge(null, true);
    }
  }, 1000);

  // '좋아요' 버튼 클릭 시 타이머 취소
  btnYes.addEventListener("click", () => {
    if (autoDodgeTimer) {
      clearTimeout(autoDodgeTimer);
      autoDodgeTimer = null;
    }
  });

  // 모바일 화면 회전/리사이즈 시 화면 밖으로 이탈 방지 재계산
  window.addEventListener("resize", () => {
    if (btnNo.classList.contains("dodging")) {
      const viewportWidth = window.visualViewport
        ? window.visualViewport.width
        : (document.documentElement.clientWidth || window.innerWidth);
      const viewportHeight = window.visualViewport
        ? window.visualViewport.height
        : (document.documentElement.clientHeight || window.innerHeight);

      const rect = btnNo.getBoundingClientRect();
      const padX = 20, padTop = 70, padBottom = 85;
      const maxX = Math.max(padX, viewportWidth - rect.width - padX);
      const maxY = Math.max(padTop, viewportHeight - rect.height - padBottom);

      const currentX = parseInt(btnNo.style.left, 10) || padX;
      const currentY = parseInt(btnNo.style.top, 10) || padTop;

      btnNo.style.left = `${Math.min(Math.max(padX, currentX), maxX)}px`;
      btnNo.style.top = `${Math.min(Math.max(padTop, currentY), maxY)}px`;
    }
  });
}

/* --------------------------------------------------------------------------
   3. 단계 전환 & 폼 제출 로직 (Google Sheets 연동)
   -------------------------------------------------------------------------- */
function initStepNavigation() {
  const step1 = document.getElementById("step1");
  const stepTransition = document.getElementById("stepTransition");
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");

  const btnYes = document.getElementById("btnYes");
  const customCourseForm = document.getElementById("customCourseForm");
  const loadingOverlay = document.getElementById("loadingOverlay");

  // [좋아요] 버튼 클릭 -> 하늘에서 별이 쏟아지는 특수 연출 & 중간 연출 화면
  btnYes.addEventListener("click", () => {
    // [요구사항 4] 위에서 별이 쏟아지는 특수 효과 실행
    fireStarShower();

    // 1) 1단계 질문 화면 숨기기
    step1.classList.remove("active");
    step1.classList.add("hidden");

    // 싫어요 버튼 완전히 숨김 및 제거
    const btnNo = document.getElementById("btnNo");
    if (btnNo) {
      btnNo.style.display = "none";
      btnNo.remove();
    }

    // 2) 중간 연출 화면(stepTransition) 부드럽게 페이드인
    stepTransition.classList.remove("hidden");
    stepTransition.classList.add("fade-in");
    window.scrollTo({ top: 0, behavior: "smooth" });

    let transitioned = false;
    const goToStep2 = () => {
      if (transitioned) return;
      transitioned = true;

      // 페이드아웃 애니메이션 시작 (0.6초)
      stepTransition.classList.remove("fade-in");
      stepTransition.classList.add("fade-out");

      // 페이드아웃 완료(600ms) 후 2단계 설문창 페이드인
      setTimeout(() => {
        stepTransition.classList.add("hidden");
        stepTransition.classList.remove("fade-out");

        step2.classList.remove("hidden");
        step2.classList.add("active");

        if (window.activeCustomPlan) {
          renderCustomCourse(window.activeCustomPlan);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 600);
    };

    // [요구사항 3] 터치로 넘어가므로 30초 동안 여유롭게 감상할 수 있도록 시간 연장
    const autoTimer = setTimeout(goToStep2, 30000);

    // 화면 터치 또는 '메뉴 고르러 가기' 버튼 클릭 시 즉시 다음 단계로 전환
    const handleTransitionTouch = () => {
      clearTimeout(autoTimer);
      goToStep2();
    };

    stepTransition.addEventListener("click", handleTransitionTouch, { once: true });
  });

  // [데이트 코스 폼 제출] -> Google Sheets 저장 -> 3단계로 이동
  if (customCourseForm) {
    customCourseForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!window.activeCustomPlan || !window.activeCustomPlan.steps || window.activeCustomPlan.steps.length === 0) {
        showToast("데이트 코스 정보가 올바르지 않습니다.");
        return;
      }

      const steps = window.activeCustomPlan.steps;
      const answers = [];
      let missingStepTitle = null;
      let missingBlock = null;

      for (let i = 0; i < steps.length; i++) {
        const step = steps[i];
        const stepId = step.id || "step_" + i;
        const block = customCourseForm.querySelector(`[data-step-id="${stepId}"]`);

        if (step.type === "choice" || step.type === "places") {
          const checked = Array.from(
            customCourseForm.querySelectorAll(`input[name="${stepId}"]:checked`)
          ).map((input) => input.value);

          if (checked.length === 0) {
            missingStepTitle = `${i + 1}단계 (${step.title})`;
            missingBlock = block;
            break;
          }

          answers.push({
            stepNum: i + 1,
            title: step.title,
            type: step.type,
            value: checked.join(", ")
          });
        } else if (step.type === "text") {
          const textarea = customCourseForm.querySelector(`textarea[name="${stepId}"]`);
          const textVal = textarea ? textarea.value.trim() : "";
          answers.push({
            stepNum: i + 1,
            title: step.title,
            type: "text",
            value: textVal || "특별한 의견 없음"
          });
        }
      }

      if (missingStepTitle) {
        showToast(`${missingStepTitle} 항목을 선택해주세요! 💕`);
        if (missingBlock) {
          missingBlock.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return;
      }

      const now = new Date();
      const timeFormatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

      // 요약 텍스트 구성
      const menuSummary = answers
        .filter((a) => a.type !== "text")
        .map((a) => `[${a.title}] ${a.value}`)
        .join(" / ");

      const noteAnswer = answers.find((a) => a.type === "text");
      const noteSummary = noteAnswer ? noteAnswer.value : "없음";

      const timeAnswer = answers.find((a) =>
        a.title.includes("시") || a.title.includes("언제") || a.title.includes("시간")
      );
      const timeSummary = timeAnswer ? timeAnswer.value : "상관없음";

      const payload = {
        timestamp: timeFormatted,
        courseTitle: window.activeCustomPlan.title || "커스텀 데이트 코스",
        menu: menuSummary || "코스 선택 완료",
        note: noteSummary,
        preferredTime: timeSummary,
        answers: answers
      };

      // 로딩 표시
      loadingOverlay.classList.remove("hidden");

      try {
        if (GOOGLE_SHEET_WEB_APP_URL && GOOGLE_SHEET_WEB_APP_URL.startsWith("http")) {
          await fetch(GOOGLE_SHEET_WEB_APP_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
          });
        } else {
          console.log("ℹ️ [데모 모드] 커스텀 데이트 답변 저장:", payload);
          await new Promise((res) => setTimeout(res, 800));
        }

        // 3단계 결과 요약창 렌더링
        renderCustomResultSummary(answers);

        // 3단계 완료 화면 표시
        step2.classList.remove("active");
        step2.classList.add("hidden");

        step3.classList.remove("hidden");
        step3.classList.add("active");

        window.scrollTo({ top: 0, behavior: "smooth" });
        fireBigCelebration();

        if (!GOOGLE_SHEET_WEB_APP_URL) {
          showToast("구글 시트 연동 전(데모 모드)으로 완료되었습니다 ✨");
        }
      } catch (error) {
        console.error("커스텀 코스 전송 에러:", error);
        showToast("전송 중 문제가 생겼지만 마음은 잘 전달되었어요! 💕");
        renderCustomResultSummary(answers);
        step2.classList.remove("active");
        step2.classList.add("hidden");
        step3.classList.remove("hidden");
        step3.classList.add("active");
      } finally {
        loadingOverlay.classList.add("hidden");
      }
    });
  }
}

function renderCustomResultSummary(answers) {
  const container = document.getElementById("resultSummary");
  if (!container) return;

  container.innerHTML = answers.map((ans) => `
    <div class="summary-item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 10px 0; border-bottom: 1px dashed #FFE0E6;">
      <span class="summary-label" style="font-size: 12px; color: #FF4D6D; font-weight: 700;">${escapeHtml(ans.title)}</span>
      <span class="summary-val" style="font-size: 14.5px; font-weight: 700; color: #2B2D42; word-break: break-word; line-height: 1.4;">${escapeHtml(ans.value)}</span>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   4. 카카오톡 공유 기능
   -------------------------------------------------------------------------- */
function initKakaoShare() {
  const btnShare = document.getElementById("btnKakaoShare");
  if (!btnShare) return;

  btnShare.addEventListener("click", async () => {
    const shareTitle = (window.activeCustomPlan && window.activeCustomPlan.title)
      ? window.activeCustomPlan.title
      : "저랑 데이트할래요? 💌";

    const shareData = {
      title: shareTitle,
      text: "저랑 데이트할래요? 솔직하게 답해주세요! 🥰",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== "AbortError") {
          fallbackCopyUrl();
        }
      }
    } else {
      fallbackCopyUrl();
    }
  });
}

function fallbackCopyUrl() {
  const url = window.location.href;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("링크가 복사되었어요! 카톡에 붙여넣어 공유하세요 💬");
    }).catch(() => {
      prompt("아래 링크를 복사하여 카카오톡에 공유하세요:", url);
    });
  } else {
    prompt("아래 링크를 복사하여 카카오톡에 공유하세요:", url);
  }
}

/* --------------------------------------------------------------------------
   5. 알림 토스트 & 축하 이펙트 (Confetti)
   -------------------------------------------------------------------------- */
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

/* --------------------------------------------------------------------------
   별이 쏟아지는 특수 연출 (Star Shower Effect)
   -------------------------------------------------------------------------- */
function fireStarShower() {
  if (typeof confetti !== "function") return;

  // 1) 중앙에서 터지는 찬란한 황금빛 별 폭죽
  confetti({
    particleCount: 50,
    spread: 100,
    origin: { y: 0.45 },
    shapes: ["star"],
    colors: ["#FFE600", "#FFD700", "#FFAA00", "#FFFFFF", "#FF6B8B", "#FF85A1"],
    scalar: 1.4,
    ticks: 250
  });

  // 2) 하늘(상단 화면 밖)에서 은하수처럼 주르륵 쏟아져 내리는 별비 (4.5초 지속)
  const duration = 4500;
  const end = Date.now() + duration;

  (function frame() {
    // 화면 상단(y: -0.05)에서 아래로 쏟아지는 별들
    confetti({
      particleCount: 4,
      angle: 90,
      spread: 75,
      origin: { x: Math.random(), y: -0.05 },
      gravity: 0.85,
      drift: (Math.random() - 0.5) * 0.4,
      shapes: ["star"],
      colors: ["#FFE600", "#FFD700", "#FFB703", "#FFF9A6", "#FFFFFF", "#FF6B8B"],
      ticks: 320,
      scalar: Math.random() * 0.8 + 0.8
    });

    // 화면 좌우 모서리에서 쏟아지는 유성 스트림
    if (Math.random() < 0.28) {
      confetti({
        particleCount: 2,
        angle: 65,
        spread: 35,
        origin: { x: 0, y: 0.05 },
        gravity: 0.7,
        shapes: ["star"],
        colors: ["#FFD700", "#FFFFFF", "#FF85A1"],
        scalar: 1.2
      });
      confetti({
        particleCount: 2,
        angle: 115,
        spread: 35,
        origin: { x: 1, y: 0.05 },
        gravity: 0.7,
        shapes: ["star"],
        colors: ["#FFD700", "#FFFFFF", "#FF85A1"],
        scalar: 1.2
      });
    }

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function fireConfetti() {
  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#FF4D6D", "#FF758F", "#FFCCD5", "#FFF0F3", "#FFE4E8"]
    });
  }
}

function fireBigCelebration() {
  if (typeof confetti !== "function") return;

  const duration = 2.5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#FF4D6D", "#FF758F", "#FFCCD5", "#FEE500"]
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#FF4D6D", "#FF758F", "#FFCCD5", "#FEE500"]
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}
