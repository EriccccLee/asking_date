/**
 * ==========================================================================
 * Asking Date - Mobile Web App Logic
 * ==========================================================================
 */

// [중요] 사용자의 구글 스프레드시트 웹 앱(Google Apps Script) 배포 URL을 여기에 입력하세요.
// 설정 전에는 자동으로 '데모 모드'로 작동하여 로컬에서 바로 테스트할 수 있습니다.
const GOOGLE_SHEET_WEB_APP_URL = "";

document.addEventListener("DOMContentLoaded", () => {
  initFloatingHearts();
  initDodgeButton();
  initStepNavigation();
  initKakaoShare();
});

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
    "어라? 🏃‍♂️",
    "안돼요~ 😜",
    "손이 미끄러졌나? 🫨",
    "잡아봐라~ 💨",
    "실패! 😆",
    "포기하면 편해요 🥺",
    "좋아요만 눌러줘요 💖",
    "어딜 누르려구! 🤭",
    "거절은 거절한다! 🙅‍♀️",
    "헤헤 못 누르지롱 😝"
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

    // 1) 텍스트를 '먼저' 변경하여 정확한 버튼 크기를 측정할 수 있도록 함
    let nextText;
    if (isAuto) {
      nextText = "누르기도 전에 도망! 🏃‍♂️💨";
    } else {
      nextText = funnyTexts[(dodgeCount - 1) % funnyTexts.length];
    }
    btnNo.innerHTML = nextText;

    // 2) dodging 클래스를 추가하여 fixed 상태 적용
    btnNo.classList.add("dodging");

    // 3) 화면 뷰포트 크기 측정 (모바일 브라우저 주소창/하단바 대응)
    const viewportWidth = window.visualViewport
      ? window.visualViewport.width
      : (document.documentElement.clientWidth || window.innerWidth);
    const viewportHeight = window.visualViewport
      ? window.visualViewport.height
      : (document.documentElement.clientHeight || window.innerHeight);

    // 변경된 텍스트 기준 버튼의 실제 너비/높이 측정
    const btnRect = btnNo.getBoundingClientRect();
    const btnWidth = Math.ceil(btnRect.width || 120);
    const btnHeight = Math.ceil(btnRect.height || 48);

    // 모바일 안전 여백 (상단 노치/헤더 70px, 하단 툴바/홈바 85px, 좌우 20px)
    const padX = 20;
    const padTop = 70;
    const padBottom = 85;

    const minX = padX;
    const maxX = Math.max(minX, viewportWidth - btnWidth - padX);
    const minY = padTop;
    const maxY = Math.max(minY, viewportHeight - btnHeight - padBottom);

    // '좋아요' 버튼 영역과 겹치지 않도록 회피 좌표 계산
    const yesRect = btnYes.getBoundingClientRect();

    let newX = minX;
    let newY = minY;
    let foundSafePos = false;

    // 최대 12회 시도하여 '좋아요' 버튼과 겹치지 않는 안전 좌표 탐색
    for (let attempt = 0; attempt < 12; attempt++) {
      const candidateX = Math.floor(minX + Math.random() * (maxX - minX));
      const candidateY = Math.floor(minY + Math.random() * (maxY - minY));

      const overlapYes = !(
        candidateX + btnWidth + 15 < yesRect.left ||
        candidateX > yesRect.right + 15 ||
        candidateY + btnHeight + 15 < yesRect.top ||
        candidateY > yesRect.bottom + 15
      );

      if (!overlapYes) {
        newX = candidateX;
        newY = candidateY;
        foundSafePos = true;
        break;
      }
    }

    if (!foundSafePos) {
      // 겹치지 않는 위치를 못 찾은 경우 상단 또는 하단 여백으로 분기
      newX = Math.floor(minX + Math.random() * (maxX - minX));
      newY = Math.random() > 0.5 ? minY + 10 : maxY - 10;
    }

    // 4) 최종 안전 클램핑 (화면 밖으로 절대 나가지 않도록 강제 제한)
    newX = Math.min(Math.max(minX, newX), maxX);
    newY = Math.min(Math.max(minY, newY), maxY);

    // 버튼 좌표 적용
    btnNo.style.left = `${newX}px`;
    btnNo.style.top = `${newY}px`;

    // 5) 힌트 텍스트 변경
    if (dodgeHint) {
      if (isAuto) {
        dodgeHint.textContent = "앗! 가만히 있었는데 1초 만에 알아서 도망갔어요! 🤣 (답은 '좋아요'뿐...)";
      } else if (dodgeCount === 1) {
        dodgeHint.textContent = "어라? 싫어요 버튼이 도망갔어요! 🤣";
      } else if (dodgeCount >= 4) {
        dodgeHint.textContent = "이제 포기하시고 '좋아요'를 눌러주세요! 💖";
      }
    }

    // '좋아요' 버튼 크기 확대 (최대 1.4배)
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
  const step2 = document.getElementById("step2");
  const step3 = document.getElementById("step3");

  const btnYes = document.getElementById("btnYes");
  const menuForm = document.getElementById("menuForm");
  const loadingOverlay = document.getElementById("loadingOverlay");

  // [좋아요] 버튼 클릭 -> 2단계로 이동 & 축하 폭죽
  btnYes.addEventListener("click", () => {
    fireConfetti();

    step1.classList.remove("active");
    step1.classList.add("hidden");

    // 싫어요 버튼 원래 위치로 복귀(숨김)
    const btnNo = document.getElementById("btnNo");
    if (btnNo) {
      btnNo.style.display = "none";
    }

    step2.classList.remove("hidden");
    step2.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // [선택 완료] 폼 제출 -> Google Sheets 저장 -> 3단계로 이동
  menuForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // 체크된 카테고리 수집
    const checkedBoxes = Array.from(
      document.querySelectorAll('input[name="food_category"]:checked')
    );

    if (checkedBoxes.length === 0) {
      showToast("먹고 싶은 메뉴를 최소 하나는 골라주세요! 🍽️");
      return;
    }

    const selectedCategories = checkedBoxes.map((cb) => cb.value).join(", ");
    const extraNote = document.getElementById("extraNote").value.trim();
    const preferredTime = document.getElementById("preferredTime").value.trim();
    const now = new Date();
    const timeFormatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const payload = {
      timestamp: timeFormatted,
      menu: selectedCategories,
      note: extraNote || "없음",
      preferredTime: preferredTime || "상관없음"
    };

    // 로딩 표시
    loadingOverlay.classList.remove("hidden");

    try {
      if (GOOGLE_SHEET_WEB_APP_URL && GOOGLE_SHEET_WEB_APP_URL.startsWith("http")) {
        // Google Apps Script 웹 앱으로 POST 전송
        await fetch(GOOGLE_SHEET_WEB_APP_URL, {
          method: "POST",
          mode: "no-cors", // Google Apps Script 리디렉션 처리
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
      } else {
        // 데모 모드 (URL 설정 전)
        console.log("ℹ️ [데모 모드] 구글 시트 URL이 설정되지 않아 콘솔에 저장합니다:", payload);
        await new Promise((res) => setTimeout(res, 800)); // 자연스러운 로딩 연출
      }

      // 요약 카드 업데이트
      document.getElementById("summaryMenu").textContent = selectedCategories;
      
      const summaryNoteRow = document.getElementById("summaryNoteRow");
      if (extraNote) {
        document.getElementById("summaryNote").textContent = extraNote;
        summaryNoteRow.style.display = "flex";
      } else {
        summaryNoteRow.style.display = "none";
      }

      const summaryTimeRow = document.getElementById("summaryTimeRow");
      if (preferredTime) {
        document.getElementById("summaryTime").textContent = preferredTime;
        summaryTimeRow.style.display = "flex";
      } else {
        summaryTimeRow.style.display = "none";
      }

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
      console.error("전송 에러:", error);
      showToast("전송 중 문제가 생겼지만 마음은 잘 전달되었어요! 💕");
      // 에러가 나도 사용자 경험상 완료 화면으로 넘김
      step2.classList.remove("active");
      step2.classList.add("hidden");
      step3.classList.remove("hidden");
      step3.classList.add("active");
    } finally {
      loadingOverlay.classList.add("hidden");
    }
  });
}

/* --------------------------------------------------------------------------
   4. 카카오톡 공유 기능
   -------------------------------------------------------------------------- */
function initKakaoShare() {
  const btnShare = document.getElementById("btnKakaoShare");
  if (!btnShare) return;

  btnShare.addEventListener("click", async () => {
    const shareData = {
      title: "저랑 데이트할래요? 💌",
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
