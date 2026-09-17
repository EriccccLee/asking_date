/**
 * ==========================================================================
 * Google Sheets 연동용 Google Apps Script 코드
 * ==========================================================================
 * 
 * [적용 방법]
 * 1. 새 Google 스프레드시트를 만듭니다 (예: "데이트 신청 결과").
 * 2. 상단 메뉴 [확장 프로그램] -> [Apps Script] 클릭.
 * 3. 기존 코드를 모두 지우고 이 파일의 내용을 그대로 붙여넣습니다.
 * 4. 오른쪽 상단 [배포] 버튼 클릭 -> [새 배포] 선택.
 * 5. 유형 선택(톱니바퀴)에서 [웹 앱] 선택.
 *    - 설명: 데이트 답변 저장용
 *    - 다음 사용자로 실행: 나 (your-email@gmail.com)
 *    - 액세스 권한이 있는 사용자: "모든 사용자" (Anyone) ★반드시 선택!
 * 6. [배포] 버튼 클릭 후, 생성된 "웹 앱 URL"을 복사합니다.
 * 7. app.js 파일 상단의 GOOGLE_SHEET_WEB_APP_URL 변수에 붙여넣으면 완료!
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // 시트가 비어있다면 헤더 행 자동 생성
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["응답 일시", "데이트 코스명", "선택한 메뉴/장소", "추가 메모 / 의견", "선호 시간대"]);
      
      // 헤더 스타일 꾸미기
      var headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setBackground("#FF4D6D");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
      headerRange.setHorizontalAlignment("center");
      sheet.setRowHeight(1, 35);
    }
    
    // 전송된 데이터 파싱
    var data = JSON.parse(e.postData.contents);
    var timestamp = data.timestamp || new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    var courseTitle = data.courseTitle || "데이트 신청";
    var menu = data.menu || "선택 없음";
    var note = data.note || "없음";
    var preferredTime = data.preferredTime || "상관없음";
    
    // 새 행 추가 (5열 이상이면 코스명 별도 분리, 4열 시트면 메뉴에 코스명 병합 표기)
    if (sheet.getLastColumn() >= 5) {
      sheet.appendRow([timestamp, courseTitle, menu, note, preferredTime]);
      var lastRow = sheet.getLastRow();
      sheet.getRange(lastRow, 1, 1, 5).setVerticalAlignment("middle");
    } else {
      var displayMenu = (courseTitle && courseTitle !== "기본 음식 카테고리") ? ("[" + courseTitle + "]\n" + menu) : menu;
      sheet.appendRow([timestamp, displayMenu, note, preferredTime]);
      var lastRow = sheet.getLastRow();
      sheet.getRange(lastRow, 1, 1, 4).setVerticalAlignment("middle");
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "데이터가 정상적으로 저장되었습니다."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// 브라우저에서 웹앱 URL을 직접 주소창에 쳤을 때 상태 확인용
function doGet(e) {
  return ContentService.createTextOutput("데이트 신청 웹 앱이 정상 작동 중입니다! 💕")
    .setMimeType(ContentService.MimeType.TEXT);
}
