/**
 * ==========================================================================
 * Asking Date - Admin Dashboard JavaScript
 * ==========================================================================
 */

// 고화질 감성 이미지 프리셋 라이브러리
const IMAGE_PRESETS = [
  { tag: "일식 / 스시", url: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80" },
  { tag: "양식 / 파스타", url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80" },
  { tag: "브런치 / 팬케이크", url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80" },
  { tag: "스테이크 / 고기", url: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80" },
  { tag: "감성 카페 / 커피", url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80" },
  { tag: "달콤 디저트 / 케이크", url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" },
  { tag: "전시회 / 미술관", url: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80" },
  { tag: "공원 / 산책", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80" },
  { tag: "피크닉 / 힐링", url: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&auto=format&fit=crop&q=80" },
  { tag: "와인바 / 칵테일", url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80" },
  { tag: "영화관 / 팝콘", url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80" },
  { tag: "도시 야경 / 드라이브", url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80" }
];

// 프리셋 코스 데이터
const PRESET_COURSES = {
  yeonnam: {
    title: "저랑 데이트할래요? 🥰",
    subTitle: "진지하게 고민하고 솔직하게 선택해줘요!",
    transitionMain: "헉... 사실 거절할 줄 알았는데\n좋다니 저도 너무 좋아요! ><",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n우리 둘만의 감성 데이트 코스를 골라볼까요?",
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
            image: IMAGE_PRESETS[0].url
          },
          {
            name: "클래식당 연남",
            tag: "양식 / 파스타",
            desc: "수제 라자냐와 감자 뇨끼가 환상적인 아늑한 분위기",
            mapUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9E%98%EC%8B%9D%EB%8B%B9%20%EC%97%B0%EB%82%A8",
            image: IMAGE_PRESETS[1].url
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
            image: IMAGE_PRESETS[4].url
          },
          {
            name: "경의선 숲길 산책",
            tag: "산책 / 힐링",
            desc: "시원한 바람 쐬며 연트럴파크 산책로 걷기 🌿",
            mapUrl: "https://map.naver.com/p/search/%EA%B2%BD%EC%9D%98%EC%84%A0%EC%88%B2%EA%B8%B8",
            image: IMAGE_PRESETS[7].url
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
            image: IMAGE_PRESETS[9].url
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
  },
  seongsu: {
    title: "성수동에서 데이트할래요? 🎨",
    subTitle: "주말 핫플레이스 코스를 준비했어요!",
    transitionMain: "진짜요?! 너무 신나요!\n성수동 핫플 다 정복하러 가요! 🎨🔥",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 마음에 드는 코스를 골라주세요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "성수동에서 언제 만날까요? ⏰",
        subtitle: "선호하는 시간대를 알려주세요",
        multiple: false,
        options: ["11:30 브런치부터!", "14:00 전시/구경부터", "17:00 저녁에 만나요"]
      },
      {
        id: "step_lunch",
        type: "places",
        title: "성수동 맛집 후보 🍽️",
        subtitle: "인기 많은 곳들로 추려봤어요",
        multiple: true,
        places: [
          {
            name: "칙피스 성수점",
            tag: "지중해식 / 샐러드",
            desc: "건강하고 푸짐한 지중해식 피타 샌드위치 & 샐러드볼",
            mapUrl: "https://map.naver.com/p/search/%EC%B9%99%ED%94%BC%EC%8A%A4%20%EC%84%B1%EC%88%98",
            image: IMAGE_PRESETS[2].url
          },
          {
            name: "팩피 (FAGP)",
            tag: "미쉐린 / 파스타",
            desc: "오징어 리가토니와 고수 파스타가 유명한 미쉐린 가이드 맛집",
            mapUrl: "https://map.naver.com/p/search/%ED%8C%A9%ED%94%BC",
            image: IMAGE_PRESETS[1].url
          }
        ]
      },
      {
        id: "step_activity",
        type: "places",
        title: "오후엔 성수 핫플 둘러보기 🎨",
        subtitle: "가보고 싶은 장소를 골라주세요",
        multiple: true,
        places: [
          {
            name: "디뮤지엄 성수 전시",
            tag: "전시 / 미술관",
            desc: "감각적인 사진과 현대 미술 전시 관람하기",
            mapUrl: "https://map.naver.com/p/search/%EB%94%94%EB%shared%EC%A7%80%EC%97%84",
            image: IMAGE_PRESETS[6].url
          },
          {
            name: "성수동 팝업스토어 거리 투어",
            tag: "쇼핑 / 팝업",
            desc: "트렌디한 브랜드 팝업스토어 구경하고 포토존 즐기기",
            mapUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EB%8F%99%20%EC%B9%B4%ED%8E%98%EA%B1%B0%EB%A6%AC",
            image: IMAGE_PRESETS[11].url
          }
        ]
      }
    ]
  },
  weekend: {
    title: "이번 주말에 저랑 데이트할래요? 🌿",
    subTitle: "날씨 좋은 날 여유롭게 힐링해요!",
    transitionMain: "와아! 주말 데이트 수락 고마워요!\n벌써부터 기대돼요 🌿💚",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 행복해요 ✨\n원하는 주말 일정을 골라봐요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "몇 시에 만나는 게 좋을까요? ⏰",
        subtitle: "주말이니까 편한 시간에 만나요",
        multiple: false,
        options: ["13:00 느긋한 점심", "15:00 여유로운 티타임", "18:00 선선한 저녁"]
      },
      {
        id: "step_activity",
        type: "places",
        title: "어떤 힐링 데이트가 좋아요? 🌳",
        subtitle: "마음에 드는 활동을 골라주세요",
        multiple: true,
        places: [
          {
            name: "서울숲 & 피크닉",
            tag: "자연 / 산책",
            desc: "돗자리 펴고 숲속 바람 맞으며 맛있는 디저트 먹기",
            mapUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%88%B2",
            image: IMAGE_PRESETS[8].url
          },
          {
            name: "한강 노을 & 따릉이 타기",
            tag: "노을 / 자전거",
            desc: "시원한 강바람 맞으면서 노을 구경하고 라면 먹기 🍜",
            mapUrl: "https://map.naver.com/p/search/%EC%97%AC%EC%9D%98%EB%8F%84%20%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90",
            image: IMAGE_PRESETS[7].url
          }
        ]
      }
    ]
  },
  blank: {
    title: "저랑 데이트할래요? 🥰",
    subTitle: "진지하게 고민하고 솔직하게 선택해줘요!",
    transitionMain: "헉... 사실 거절할 줄 알았는데\n좋다니 저도 좋아요 ><",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n우리 둘만의 데이트 코스를 골라볼까요?",
    steps: [
      {
        id: "step_custom_1",
        type: "places",
        title: "가고 싶은 식당이나 장소를 골라주세요 🍽️",
        subtitle: "마음에 드는 곳을 선택해주세요",
        multiple: true,
        places: [
          {
            name: "장소 이름 예시",
            tag: "카테고리",
            desc: "추천 메뉴나 장소에 대한 간단한 설명",
            mapUrl: "",
            image: IMAGE_PRESETS[0].url
          }
        ]
      }
    ]
  }
};

// 현재 코스 상태 (기본값: 연남동 템플릿)
let currentCourse = JSON.parse(JSON.stringify(PRESET_COURSES.yeonnam));
let activeImageTarget = null; // { stepIdx, placeIdx }

document.addEventListener("DOMContentLoaded", () => {
  loadSavedDraft();
  initPresetButtons();
  initStepBuilder();
  initAddStepMenu();
  initModals();
  initActionBar();
  initImageModal();
});

/* --------------------------------------------------------------------------
   1. 드래프트 로컬스토리지 저장 및 불러오기
   -------------------------------------------------------------------------- */
function loadSavedDraft() {
  // 1) URL 파라미터 ?plan= 이 있으면 우선 로드 (기존 생성 링크 수정 지원)
  const urlParams = new URLSearchParams(window.location.search);
  let raw = urlParams.get("plan");
  if (!raw && window.location.hash) {
    const hash = window.location.hash.substring(1);
    if (hash.startsWith("plan=")) {
      raw = hash.substring(5);
    }
  }

  if (raw) {
    const imported = parsePlanRaw(raw);
    if (imported && imported.steps && imported.steps.length > 0) {
      currentCourse = imported;
      document.getElementById("courseTitle").value = currentCourse.title || "저랑 데이트할래요? 🥰";
      document.getElementById("courseSubTitle").value = currentCourse.subTitle || "진지하게 고민하고 솔직하게 선택해줘요!";
      document.getElementById("transitionMainMsg").value = currentCourse.transitionMain || "헉... 사실 거절할 줄 알았는데\n좋다니 저도 좋아요 ><";
      document.getElementById("transitionSubMsg").value = currentCourse.transitionSub || "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨ 우리 둘만의 데이트 코스를 골라볼까요?";
      renderSteps();
      saveDraft();
      showAdminToast("링크에서 데이트 코스를 불러왔습니다 ✨");
      return;
    }
  }

  // 2) 로컬스토리지 저장본 로드
  const saved = localStorage.getItem("asking_date_admin_draft");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.steps && parsed.steps.length > 0) {
        currentCourse = parsed;
      }
    } catch (e) {
      console.warn("드래프트 파싱 실패, 기본 템플릿 사용:", e);
    }
  }
  document.getElementById("courseTitle").value = currentCourse.title || "저랑 데이트할래요? 🥰";
  document.getElementById("courseSubTitle").value = currentCourse.subTitle || "진지하게 고민하고 솔직하게 선택해줘요!";
  document.getElementById("transitionMainMsg").value = currentCourse.transitionMain || "헉... 사실 거절할 줄 알았는데\n좋다니 저도 좋아요 ><";
  document.getElementById("transitionSubMsg").value = currentCourse.transitionSub || "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨ 우리 둘만의 데이트 코스를 골라볼까요?";
  renderSteps();
}

function parsePlanRaw(raw) {
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
      transitionMain: data.tm || data.transitionMain || "헉... 사실 거절할 줄 알았는데\n좋다니 저도 좋아요 ><",
      transitionSub: data.ts || data.transitionSub || "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨ 우리 둘만의 데이트 코스를 골라볼까요?",
      steps: data.st || data.steps || []
    };
  } catch (e) {
    console.error("코스 데이터 파싱 오류:", e);
    return null;
  }
}

function saveDraft() {
  currentCourse.title = document.getElementById("courseTitle").value.trim();
  currentCourse.subTitle = document.getElementById("courseSubTitle").value.trim();
  currentCourse.transitionMain = document.getElementById("transitionMainMsg").value.trim();
  currentCourse.transitionSub = document.getElementById("transitionSubMsg").value.trim();
  localStorage.setItem("asking_date_admin_draft", JSON.stringify(currentCourse));
}

/* --------------------------------------------------------------------------
   2. 프리셋 버튼 핸들러
   -------------------------------------------------------------------------- */
function initPresetButtons() {
  const buttons = document.querySelectorAll(".btn-preset");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const presetKey = btn.dataset.preset;
      if (PRESET_COURSES[presetKey]) {
        if (confirm("선택한 템플릿으로 교체하시겠습니까? (현재 작성 내용은 덮어씌워집니다)")) {
          currentCourse = JSON.parse(JSON.stringify(PRESET_COURSES[presetKey]));
          document.getElementById("courseTitle").value = currentCourse.title;
          document.getElementById("courseSubTitle").value = currentCourse.subTitle;
          document.getElementById("transitionMainMsg").value = currentCourse.transitionMain || "헉... 사실 거절할 줄 알았는데\n좋다니 저도 좋아요 ><";
          document.getElementById("transitionSubMsg").value = currentCourse.transitionSub || "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨ 우리 둘만의 데이트 코스를 골라볼까요?";
          saveDraft();
          renderSteps();
          showAdminToast(`'${btn.querySelector(".preset-title").textContent}' 템플릿이 적용되었습니다 ✨`);
        }
      }
    });
  });

  document.getElementById("courseTitle").addEventListener("input", saveDraft);
  document.getElementById("courseSubTitle").addEventListener("input", saveDraft);
  document.getElementById("transitionMainMsg").addEventListener("input", saveDraft);
  document.getElementById("transitionSubMsg").addEventListener("input", saveDraft);
}

/* --------------------------------------------------------------------------
   3. 단계 빌더 렌더링 및 조작
   -------------------------------------------------------------------------- */
function initStepBuilder() {
  renderSteps();
}

function renderSteps() {
  const container = document.getElementById("stepsContainer");
  if (!container) return;

  container.innerHTML = "";

  if (!currentCourse.steps || currentCourse.steps.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: #868E96; padding: 24px;">등록된 코스 단계가 없습니다. 아래 버튼으로 추가해주세요!</div>`;
    return;
  }

  currentCourse.steps.forEach((step, sIdx) => {
    const stepEl = document.createElement("div");
    stepEl.className = "step-box";
    stepEl.dataset.stepIndex = sIdx;

    const typeLabel = step.type === "choice" ? "단순 선택지" : step.type === "places" ? "장소/식당 카드" : "자유 입력(메모)";
    const typeEmoji = step.type === "choice" ? "⏰" : step.type === "places" ? "🍽️" : "💌";

    stepEl.innerHTML = `
      <div class="step-box-header">
        <div class="step-tag-wrap">
          <span class="step-badge">${sIdx + 1}단계</span>
          <span class="step-type-pill">${typeEmoji} ${typeLabel}</span>
        </div>
        <div class="step-controls">
          <button type="button" class="btn-icon-control btn-move-up" title="위로 이동" ${sIdx === 0 ? "disabled style='opacity:0.3;cursor:default;'" : ""}>▲</button>
          <button type="button" class="btn-icon-control btn-move-down" title="아래로 이동" ${sIdx === currentCourse.steps.length - 1 ? "disabled style='opacity:0.3;cursor:default;'" : ""}>▼</button>
          <button type="button" class="btn-icon-control btn-icon-delete btn-delete-step" title="단계 삭제">🗑️</button>
        </div>
      </div>

      <div class="form-group">
        <label>질문 제목</label>
        <input type="text" class="form-control step-title-input" value="${escapeHtml(step.title || "")}" placeholder="예: 몇 시에 만날까요?">
      </div>

      <div class="form-group">
        <label>질문 부제목 (안내 문구)</label>
        <input type="text" class="form-control step-subtitle-input" value="${escapeHtml(step.subtitle || "")}" placeholder="예: 편한 시간대로 골라주세요">
      </div>

      ${step.type === "places" || step.type === "choice" ? `
        <div class="form-group" style="display:flex; align-items:center; gap:8px;">
          <input type="checkbox" id="multi_${sIdx}" class="step-multiple-check" ${step.multiple ? "checked" : ""}>
          <label for="multi_${sIdx}" style="margin-bottom:0; cursor:pointer;">여러 개 중복 선택 허용하기</label>
        </div>
      ` : ""}

      <!-- 단계 타입별 상세 콘텐츠 -->
      <div class="step-content-area">
        ${renderStepTypeContent(step, sIdx)}
      </div>
    `;

    // 이벤트 리스너 바인딩
    const titleInput = stepEl.querySelector(".step-title-input");
    titleInput.addEventListener("input", (e) => {
      step.title = e.target.value;
      saveDraft();
    });

    const subInput = stepEl.querySelector(".step-subtitle-input");
    subInput.addEventListener("input", (e) => {
      step.subtitle = e.target.value;
      saveDraft();
    });

    const multiCheck = stepEl.querySelector(".step-multiple-check");
    if (multiCheck) {
      multiCheck.addEventListener("change", (e) => {
        step.multiple = e.target.checked;
        saveDraft();
      });
    }

    const btnUp = stepEl.querySelector(".btn-move-up");
    if (btnUp) {
      btnUp.addEventListener("click", () => moveStep(sIdx, -1));
    }

    const btnDown = stepEl.querySelector(".btn-move-down");
    if (btnDown) {
      btnDown.addEventListener("click", () => moveStep(sIdx, 1));
    }

    const btnDel = stepEl.querySelector(".btn-delete-step");
    if (btnDel) {
      btnDel.addEventListener("click", () => deleteStep(sIdx));
    }

    // 장소 추가 / 선택지 추가 바인딩
    const btnAddPlace = stepEl.querySelector(".btn-add-place");
    if (btnAddPlace) {
      btnAddPlace.addEventListener("click", () => addPlace(sIdx));
    }

    const btnAddOpt = stepEl.querySelector(".btn-add-option");
    if (btnAddOpt) {
      btnAddOpt.addEventListener("click", () => addOption(sIdx));
    }

    container.appendChild(stepEl);
  });
}

function renderStepTypeContent(step, sIdx) {
  if (step.type === "places") {
    const places = step.places || [];
    return `
      <label style="font-size:13px; font-weight:700; display:block; margin-bottom:8px;">후보 장소 목록 (${places.length}곳)</label>
      <div class="places-list">
        ${places.map((place, pIdx) => renderPlaceItem(place, sIdx, pIdx)).join("")}
      </div>
      <button type="button" class="btn-add-place">➕ 후보 장소 추가하기</button>
    `;
  } else if (step.type === "choice") {
    const options = step.options || [];
    return `
      <label style="font-size:13px; font-weight:700; display:block; margin-bottom:8px;">선택지 목록</label>
      <div class="options-list" style="display:flex; flex-direction:column; gap:8px; margin-bottom:10px;">
        ${options.map((opt, oIdx) => `
          <div style="display:flex; gap:6px; align-items:center;">
            <input type="text" class="form-control input-sm option-input" data-sidx="${sIdx}" data-oidx="${oIdx}" value="${escapeHtml(opt)}" placeholder="선택지 내용">
            <button type="button" class="btn-icon-control btn-delete-opt" data-sidx="${sIdx}" data-oidx="${oIdx}">×</button>
          </div>
        `).join("")}
      </div>
      <button type="button" class="btn-add-place btn-add-option">➕ 선택지 항목 추가하기</button>
    `;
  } else if (step.type === "text") {
    return `
      <div class="form-group" style="margin-top:10px;">
        <label>입력창 placeholder (안내 문구)</label>
        <input type="text" class="form-control input-sm text-placeholder-input" data-sidx="${sIdx}" value="${escapeHtml(step.placeholder || "")}" placeholder="예: 못 먹는 음식이 있다면 적어주세요!">
      </div>
    `;
  }
  return "";
}

function renderPlaceItem(place, sIdx, pIdx) {
  const imgSrc = place.image || IMAGE_PRESETS[0].url;
  return `
    <div class="place-item" data-sidx="${sIdx}" data-pidx="${pIdx}">
      <button type="button" class="btn-delete-place" onclick="window.adminDeletePlace(${sIdx}, ${pIdx})" title="이 장소 삭제">×</button>
      <div class="place-top-row">
        <div class="place-thumb-wrap" onclick="window.adminOpenImagePicker(${sIdx}, ${pIdx})" title="사진 변경하기">
          <img src="${escapeHtml(imgSrc)}" alt="장소 사진">
          <div class="place-thumb-overlay">사진 변경 📸</div>
        </div>
        <div class="place-fields-grid">
          <input type="text" class="form-control input-sm place-name-input" value="${escapeHtml(place.name || "")}" placeholder="식당/장소 이름 (예: 연남동 오복수산)" oninput="window.adminUpdatePlace(${sIdx}, ${pIdx}, 'name', this.value)">
          <input type="text" class="form-control input-sm place-tag-input" value="${escapeHtml(place.tag || "")}" placeholder="카테고리/태그 (예: 일식 / 카이센동)" oninput="window.adminUpdatePlace(${sIdx}, ${pIdx}, 'tag', this.value)">
        </div>
      </div>
      <input type="text" class="form-control input-sm place-desc-input" value="${escapeHtml(place.desc || "")}" placeholder="메뉴 요약 / 추천 이유 (예: 카이센동과 우니가 유명해요!)" oninput="window.adminUpdatePlace(${sIdx}, ${pIdx}, 'desc', this.value)">
      <div style="display:flex; gap:6px; align-items:center;">
        <span style="font-size:16px;">🗺️</span>
        <input type="url" class="form-control input-sm place-map-input" value="${escapeHtml(place.mapUrl || "")}" placeholder="네이버/카카오/구글 지도 링크 (선택)" oninput="window.adminUpdatePlace(${sIdx}, ${pIdx}, 'mapUrl', this.value)">
      </div>
    </div>
  `;
}

// 글로벌 핸들러 등록
window.adminDeletePlace = function(sIdx, pIdx) {
  if (currentCourse.steps[sIdx] && currentCourse.steps[sIdx].places) {
    currentCourse.steps[sIdx].places.splice(pIdx, 1);
    saveDraft();
    renderSteps();
  }
};

window.adminUpdatePlace = function(sIdx, pIdx, field, val) {
  if (currentCourse.steps[sIdx] && currentCourse.steps[sIdx].places[pIdx]) {
    currentCourse.steps[sIdx].places[pIdx][field] = val;
    saveDraft();
  }
};

window.adminOpenImagePicker = function(sIdx, pIdx) {
  activeImageTarget = { sIdx, pIdx };
  const modal = document.getElementById("imagePresetModal");
  if (modal) {
    modal.classList.remove("hidden");
  }
};

function addPlace(sIdx) {
  if (!currentCourse.steps[sIdx].places) {
    currentCourse.steps[sIdx].places = [];
  }
  const randomPreset = IMAGE_PRESETS[Math.floor(Math.random() * IMAGE_PRESETS.length)];
  currentCourse.steps[sIdx].places.push({
    name: "",
    tag: "",
    desc: "",
    mapUrl: "",
    image: randomPreset.url
  });
  saveDraft();
  renderSteps();
}

function addOption(sIdx) {
  if (!currentCourse.steps[sIdx].options) {
    currentCourse.steps[sIdx].options = [];
  }
  currentCourse.steps[sIdx].options.push("새 선택지");
  saveDraft();
  renderSteps();
}

// 선택지 옵션 이벤트 델리게이션
document.addEventListener("input", (e) => {
  if (e.target.classList.contains("option-input")) {
    const sIdx = parseInt(e.target.dataset.sidx, 10);
    const oIdx = parseInt(e.target.dataset.oidx, 10);
    if (currentCourse.steps[sIdx] && currentCourse.steps[sIdx].options) {
      currentCourse.steps[sIdx].options[oIdx] = e.target.value;
      saveDraft();
    }
  } else if (e.target.classList.contains("text-placeholder-input")) {
    const sIdx = parseInt(e.target.dataset.sidx, 10);
    if (currentCourse.steps[sIdx]) {
      currentCourse.steps[sIdx].placeholder = e.target.value;
      saveDraft();
    }
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete-opt")) {
    const sIdx = parseInt(e.target.dataset.sidx, 10);
    const oIdx = parseInt(e.target.dataset.oidx, 10);
    if (currentCourse.steps[sIdx] && currentCourse.steps[sIdx].options) {
      currentCourse.steps[sIdx].options.splice(oIdx, 1);
      saveDraft();
      renderSteps();
    }
  }
});

function moveStep(idx, dir) {
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= currentCourse.steps.length) return;
  const temp = currentCourse.steps[idx];
  currentCourse.steps[idx] = currentCourse.steps[newIdx];
  currentCourse.steps[newIdx] = temp;
  saveDraft();
  renderSteps();
}

function deleteStep(idx) {
  if (confirm("이 단계를 삭제하시겠습니까?")) {
    currentCourse.steps.splice(idx, 1);
    saveDraft();
    renderSteps();
  }
}

/* --------------------------------------------------------------------------
   4. 새 단계 추가 드롭다운 메뉴
   -------------------------------------------------------------------------- */
function initAddStepMenu() {
  const btnToggle = document.getElementById("btnAddStepMenuToggle");
  const menu = document.getElementById("addStepMenu");

  btnToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", () => {
    menu.classList.add("hidden");
  });

  menu.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const addType = item.dataset.addType;
      addNewStepByType(addType);
      menu.classList.add("hidden");
    });
  });
}

function addNewStepByType(type) {
  const stepId = "step_" + Date.now();
  if (type === "time") {
    currentCourse.steps.push({
      id: stepId,
      type: "choice",
      title: "몇 시에 만날까요? ⏰",
      subtitle: "편한 시간대를 골라주세요",
      multiple: false,
      options: ["12:00 점심부터!", "14:00 나른한 오후", "17:30 저녁 노을 보며"]
    });
  } else if (type === "places_lunch") {
    currentCourse.steps.push({
      id: stepId,
      type: "places",
      title: "점심은 어디로 갈까요? 🍽️",
      subtitle: "가보고 싶은 후보들을 골라봤어요",
      multiple: true,
      places: [
        {
          name: "맛있는 식당 후보 1",
          tag: "파스타 / 양식",
          desc: "시그니처 파스타와 스테이크 맛집",
          mapUrl: "",
          image: IMAGE_PRESETS[1].url
        }
      ]
    });
  } else if (type === "places_activity") {
    currentCourse.steps.push({
      id: stepId,
      type: "places",
      title: "오후엔 뭐하고 놀까요? 🎨",
      subtitle: "원하는 데이트 활동을 골라주세요",
      multiple: true,
      places: [
        {
          name: "전시회 / 팝업스토어",
          tag: "전시 / 관람",
          desc: "감성 사진 스팟과 볼거리가 가득한 곳",
          mapUrl: "",
          image: IMAGE_PRESETS[6].url
        }
      ]
    });
  } else if (type === "places_dinner") {
    currentCourse.steps.push({
      id: stepId,
      type: "places",
      title: "저녁엔 어디서 식사/한잔할까요? 🍷",
      subtitle: "분위기 좋은 곳에서 하루를 마무리해요",
      multiple: false,
      places: [
        {
          name: "분위기 좋은 와인바/레스토랑",
          tag: "와인 / 디너",
          desc: "아늑한 조명에 대화 나누기 좋은 장소",
          mapUrl: "",
          image: IMAGE_PRESETS[9].url
        }
      ]
    });
  } else if (type === "text_note") {
    currentCourse.steps.push({
      id: stepId,
      type: "text",
      title: "혹시 전하고 싶은 말이 있나요? 💌",
      subtitle: "못 먹는 음식이나 원하는 것이 있다면 편하게 적어줘요!",
      placeholder: "자유롭게 적어주세요 :)"
    });
  }
  saveDraft();
  renderSteps();
  showAdminToast("새로운 단계가 추가되었습니다 ✨");
}

/* --------------------------------------------------------------------------
   5. 이미지 프리셋 모달
   -------------------------------------------------------------------------- */
function initImageModal() {
  const modal = document.getElementById("imagePresetModal");
  const grid = document.getElementById("imagePresetGrid");
  const btnClose = document.getElementById("btnCloseImageModal");

  grid.innerHTML = IMAGE_PRESETS.map((item, idx) => `
    <div class="img-preset-item" data-img-idx="${idx}">
      <img src="${item.url}" alt="${item.tag}">
      <span class="img-preset-tag">${item.tag}</span>
    </div>
  `).join("");

  grid.querySelectorAll(".img-preset-item").forEach((item) => {
    item.addEventListener("click", () => {
      const idx = parseInt(item.dataset.imgIdx, 10);
      const selected = IMAGE_PRESETS[idx];
      if (activeImageTarget && selected) {
        const { sIdx, pIdx } = activeImageTarget;
        if (currentCourse.steps[sIdx] && currentCourse.steps[sIdx].places[pIdx]) {
          currentCourse.steps[sIdx].places[pIdx].image = selected.url;
          if (!currentCourse.steps[sIdx].places[pIdx].tag) {
            currentCourse.steps[sIdx].places[pIdx].tag = selected.tag;
          }
          saveDraft();
          renderSteps();
        }
      }
      modal.classList.add("hidden");
    });
  });

  btnClose.addEventListener("click", () => modal.classList.add("hidden"));
}

/* --------------------------------------------------------------------------
   6. 액션 바 & 링크 생성 / 미리보기
   -------------------------------------------------------------------------- */
function initActionBar() {
  const btnPreview = document.getElementById("btnPreview");
  const btnGenerate = document.getElementById("btnGenerateLink");

  btnPreview.addEventListener("click", () => {
    saveDraft();
    const url = buildShareUrl();
    window.open(url, "_blank");
  });

  btnGenerate.addEventListener("click", () => {
    saveDraft();
    const url = buildShareUrl();
    openShareModal(url);
  });
}

// Plan 인코딩 유틸리티 (LZString 우선 사용, fallback Base64)
function buildShareUrl() {
  const cleanPlan = {
    t: currentCourse.title,
    s: currentCourse.subTitle,
    tm: currentCourse.transitionMain,
    ts: currentCourse.transitionSub,
    st: currentCourse.steps
  };

  const jsonStr = JSON.stringify(cleanPlan);
  let encoded = "";

  if (window.LZString && typeof window.LZString.compressToEncodedURIComponent === "function") {
    encoded = "lz:" + encodeURIComponent(window.LZString.compressToEncodedURIComponent(jsonStr));
  } else {
    encoded = "b64:" + encodeURIComponent(btoa(unescape(encodeURIComponent(jsonStr))));
  }

  // 기본 메인 앱 주소
  const origin = window.location.origin;
  let pathname = window.location.pathname;
  if (pathname.endsWith("admin.html")) {
    pathname = pathname.replace("admin.html", "index.html");
  } else if (!pathname.endsWith("index.html")) {
    pathname = pathname.replace(/\/?$/, "/index.html");
  }

  return `${origin}${pathname}?plan=${encoded}`;
}

function initModals() {
  const shareModal = document.getElementById("shareModal");
  const btnClose = document.getElementById("btnCloseModal");
  const btnCopy = document.getElementById("btnCopyUrl");
  const urlInput = document.getElementById("generatedUrl");

  btnClose.addEventListener("click", () => shareModal.classList.add("hidden"));

  btnCopy.addEventListener("click", () => {
    urlInput.select();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(urlInput.value).then(() => {
        showAdminToast("링크가 복사되었습니다! 카카오톡에 붙여넣으세요 💬");
      }).catch(() => {
        document.execCommand("copy");
        showAdminToast("링크가 복사되었습니다! 📋");
      });
    } else {
      document.execCommand("copy");
      showAdminToast("링크가 복사되었습니다! 📋");
    }
  });
}

function openShareModal(url) {
  const modal = document.getElementById("shareModal");
  const urlInput = document.getElementById("generatedUrl");
  const btnTest = document.getElementById("btnTestInNewTab");

  urlInput.value = url;
  btnTest.href = url;
  modal.classList.remove("hidden");
}

function showAdminToast(msg) {
  const toast = document.getElementById("adminToast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove("hidden");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
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
