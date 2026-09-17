/**
 * ==========================================================================
 * Asking Date - Admin Dashboard JavaScript
 * ==========================================================================
 */

// 고화질 감성 이미지 프리셋 라이브러리 (29종)
const IMAGE_PRESETS = [
  {
    "tag": "일식 / 스시",
    "url": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "양식 / 파스타",
    "url": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "브런치 / 팬케이크",
    "url": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "스테이크 / 고기",
    "url": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "감성 카페 / 커피",
    "url": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "달콤 디저트 / 케이크",
    "url": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "전시회 / 미술관",
    "url": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "공원 / 산책",
    "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "피크닉 / 힐링",
    "url": "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "와인바 / 칵테일",
    "url": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "영화관 / 팝콘",
    "url": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "도시 야경 / 드라이브",
    "url": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "한옥 / 샤브 / 전통",
    "url": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "버거 & 멕시칸",
    "url": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "나베 / 라멘 / 전골",
    "url": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "대형 베이커리 / 테라스",
    "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "호수 & 리버뷰 산책",
    "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "공방 & 원데이 클래스",
    "url": "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "도서관 / 북카페",
    "url": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "아쿠아리움 / 바다",
    "url": "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "보드게임 / 방탈출",
    "url": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "도자기 / 도예 공방",
    "url": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "재즈바 / 라이브 음악",
    "url": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "보트 & 요트 투어",
    "url": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "벚꽃 / 봄나들이",
    "url": "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "단풍 / 가을 산책",
    "url": "https://images.unsplash.com/photo-1507783548227-544c3b8fc065?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "크리스마스 / 겨울 트리",
    "url": "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "떡볶이 & 분식 / 학생",
    "url": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
  },
  {
    "tag": "조향 / 향수 공방",
    "url": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80"
  }
];

// 추천 데이트 코스 카탈로그 (39종 전체 프리셋)
const PRESET_CATALOG = [
  {
    "key": "all_day_weekend",
    "category": "time",
    "categoryLabel": "⏰ 시간대별",
    "badgeClass": "badge-time",
    "icon": "🌞",
    "title": "주말 올데이 풀코스",
    "desc": "브런치 ➔ 전시/문화 ➔ 감성카페 ➔ 와인/디너",
    "course": {
      "title": "이번 주말 하루 종일 저랑 데이트할래요? 🥰",
      "subTitle": "브런치부터 밤 야경까지 완벽한 풀코스!",
      "transitionMain": "하루 종일 함께할 수 있다니 너무 설레요!\n최고로 행복한 주말을 선물할게요 ✨",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n원하는 세부 일정을 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 만날까요? ⏰",
          "subtitle": "편한 시간대로 골라주세요",
          "multiple": false,
          "options": [
            "11:30 여유로운 브런치부터 시작해요 🥞",
            "13:00 든든하게 점심 먹고 만나요 🍽️",
            "14:30 나른한 오후 감성 카페부터 ☕"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "점심 & 브런치 어디로 갈까요? 🍽️",
          "subtitle": "가보고 싶었던 핫플들이에요 (중복 선택 가능)",
          "multiple": true,
          "places": [
            {
              "name": "오아시스 한남",
              "tag": "브런치 / 팬케이크",
              "desc": "프렌치토스트와 에그베네딕트가 환상적인 한남동 대표 브런치 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%ED%95%9C%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "클래식당",
              "tag": "양식 / 파스타",
              "desc": "수제 라자냐와 트러플 뇨끼가 맛있는 아늑한 분위기의 레스토랑",
              "mapUrl": "https://map.naver.com/p/search/%ED%81%B4%EB%9E%98%EC%8B%9D%EB%8B%B9",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_activity",
          "type": "places",
          "title": "오후에 어떤 데이트를 즐길까요? 🎨",
          "subtitle": "원하는 코스를 골라주세요",
          "multiple": true,
          "places": [
            {
              "name": "리움미술관 & 한남동 쇼룸 투어",
              "tag": "전시 / 미술관",
              "desc": "감각적인 현대미술 전시와 주변 감성 편집숍 구경하기",
              "mapUrl": "https://map.naver.com/p/search/%EB%A6%AC%EC%9B%80%EB%AF%B8%EC%88%A0%EA%B4%80",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "서울숲 숲속 산책 & 디저트 카페",
              "tag": "공원 / 산책",
              "desc": "울창한 숲길 걷다가 시원한 아인슈페너와 달콤한 케이크 한잔 ☕",
              "mapUrl": "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%88%B2",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_dinner",
          "type": "places",
          "title": "저녁은 분위기 있는 곳에서! 🍷",
          "subtitle": "하루를 로맨틱하게 마무리해요",
          "multiple": false,
          "places": [
            {
              "name": "글라스하우스 와인바",
              "tag": "와인바 / 타파스",
              "desc": "은은한 조명과 맛있는 핑거푸드가 있는 내추럴 와인바",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%9C%EB%82%A8%EB%8F%99%20%EC%99%80%EC%9D%B8%EB%B0%94",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "정성 한우 오마카세",
              "tag": "스테이크 / 고기",
              "desc": "입에서 살살 녹는 프라이빗 한우 다이닝 코스",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%9C%EC%9A%B0%20%EC%98%A4%EB%A7%88%EC%B9%B4%EC%84%B8",
              "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "혹시 더 하고 싶은 말이나 가고 싶은 곳이 있나요? 💌",
          "subtitle": "못 먹는 음식이나 취향이 있다면 편하게 적어줘요!",
          "placeholder": "예: 날씨 좋으면 사진 많이 찍고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "after_work",
    "category": "time",
    "categoryLabel": "⏰ 시간대별",
    "badgeClass": "badge-time",
    "icon": "🌙",
    "title": "평일 퇴근 후 저녁 & 와인",
    "desc": "18:30 만남 ➔ 따뜻한 다이닝 ➔ 심야 와인바/이자카야",
    "course": {
      "title": "퇴근하고 저랑 맛있는 저녁 먹을래요? 🌙",
      "subTitle": "하루의 피로를 사르르 녹여줄 힐링 디너!",
      "transitionMain": "퇴근 후 만남 수락 완료! 칼퇴 대기 중 💨\n오늘 하루도 수고 많았어요, 이따 봐요 🌙",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n저녁 메뉴와 가고 싶은 곳을 골라봐요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "퇴근 후 몇 시에 만날까요? ⏰",
          "subtitle": "편하신 시간으로 알려주세요",
          "multiple": false,
          "options": [
            "18:30 칼퇴하고 바로 만나요! 🏃",
            "19:00 여유롭게 퇴근하고 만나요!",
            "19:30 늦은 저녁에 천천히 만나요!"
          ]
        },
        {
          "id": "step_dinner",
          "type": "places",
          "title": "피로를 사르르 녹여줄 저녁 메뉴 🍽️",
          "subtitle": "분위기 좋은 다이닝 후보",
          "multiple": true,
          "places": [
            {
              "name": "오스테리아 꼬또",
              "tag": "양식 / 파스타",
              "desc": "분위기 좋은 테라스에서 즐기는 고급 파스타 & 스테이크",
              "mapUrl": "https://map.naver.com/p/search/%EC%98%A4%EC%8A%A4%ED%85%8C%EB%A6%AC%EC%95%84%20%EA%BC%AC%EB%98%90",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "모즈타파스라운지",
              "tag": "스페인요리 / 감바스",
              "desc": "따뜻한 감바스와 빠에야, 샹그리아가 맛있는 감성 펍",
              "mapUrl": "https://map.naver.com/p/search/%EB%AA%A8%EC%A6%88%ED%83%80%ED%8C%8C%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_drinks",
          "type": "places",
          "title": "2차로 가볍게 한잔 어때요? 🍸",
          "subtitle": "도란도란 이야기 나누기 좋은 곳",
          "multiple": false,
          "places": [
            {
              "name": "골목 심야 이자카야",
              "tag": "나베 / 이자카야",
              "desc": "따뜻한 국물 요리와 시원한 하이볼이 있는 아지트",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "도심 루프탑 칵테일 바",
              "tag": "와인바 / 칵테일",
              "desc": "반짝이는 서울 야경을 내려다보며 하루 마무리 🌃",
              "mapUrl": "https://map.naver.com/p/search/%EB%A3%A8%ED%94%84%ED%83%91%20%EC%B9%B5%ED%85%8C%EC%9D%BC%EB%B0%94",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "선호하는 주종이나 피하고 싶은 음식이 있나요? 💌",
          "subtitle": "논알콜 칵테일이나 디카페인 음료도 좋아요!",
          "placeholder": "예: 가벼운 맥주나 하이볼 좋아해요!"
        }
      ]
    }
  },
  {
    "key": "afternoon_cafe",
    "category": "time",
    "categoryLabel": "⏰ 시간대별",
    "badgeClass": "badge-time",
    "icon": "☕",
    "title": "오후 나른한 커피 & 산책",
    "desc": "14:00 티타임 ➔ 시그니처 디저트 ➔ 고궁/숲길 산책",
    "course": {
      "title": "오후에 커피 한잔하면서 산책할래요? ☕",
      "subTitle": "부담 없이 편안하고 달콤한 시간!",
      "transitionMain": "좋아요! 날씨 좋은 오후에 만나요 ☕🌿\n예쁜 카페 골라둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가고 싶은 카페 분위기를 선택해주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "오후 몇 시가 가장 편하신가요? ⏰",
          "subtitle": "주말 또는 평일 오후 시간대",
          "multiple": false,
          "options": [
            "14:00 나른한 햇살 가득한 시간 ☀️",
            "15:00 여유롭게 티타임 즐기기 ☕",
            "16:30 늦은 오후 선선할 때 만나요 🍃"
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "가고 싶은 감성 카페 ☕",
          "subtitle": "커피와 디저트가 맛있는 곳 (중복 선택 가능)",
          "multiple": true,
          "places": [
            {
              "name": "마일스톤 커피",
              "tag": "감성 카페 / 커피",
              "desc": "호주식 플랫화이트와 바나나 크럼블이 유명한 커피 성지",
              "mapUrl": "https://map.naver.com/p/search/%EB%A7%88%EC%9D%BC%EC%8A%A4%ED%86%A4%20%EC%BB%A4%ED%94%BC",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "오설록 티하우스",
              "tag": "티룸 / 말차 디저트",
              "desc": "도심 속 정원에서 즐기는 프리미엄 녹차와 말차 와플 🍵",
              "mapUrl": "https://map.naver.com/p/search/%EC%98%A4%EC%84%A4%EB%A1%9D%20%ED%8B%B0%ED%95%98%EC%9A%B0%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_walk",
          "type": "places",
          "title": "커피 마시고 가볍게 산책할까요? 🌿",
          "subtitle": "바람 쐬며 도란도란 이야기 나누기",
          "multiple": false,
          "places": [
            {
              "name": "덕수궁 돌담길 & 정동길",
              "tag": "고궁 / 산책",
              "desc": "고즈넉하고 운치 있는 서울 최고의 로맨틱 산책길",
              "mapUrl": "https://map.naver.com/p/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "청계천 물소리 산책로",
              "tag": "도심 / 힐링",
              "desc": "징검다리 건너며 선선한 바람과 물소리 즐기기",
              "mapUrl": "https://map.naver.com/p/search/%EC%B2%AD%EA%B3%84%EC%B2%9C",
              "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "좋아하는 디저트 취향이 있나요? 💌",
          "subtitle": "케이크, 크로플, 소금빵 등 편하게 적어주세요",
          "placeholder": "예: 크림 디저트나 소금빵 좋아해요!"
        }
      ]
    }
  },
  {
    "key": "morning_brunch",
    "category": "time",
    "categoryLabel": "⏰ 시간대별",
    "badgeClass": "badge-time",
    "icon": "🥞",
    "title": "주말 아침 햇살 브런치",
    "desc": "10:30 여유 브런치 ➔ 독립서점 & 편집숍 ➔ 공원 산책",
    "course": {
      "title": "주말 아침 상쾌하게 브런치 먹을래요? 🥞",
      "subTitle": "여유로운 주말 아침 햇살을 함께 맞이해요!",
      "transitionMain": "주말 아침 브런치 데이트 성사! 🥞✨\n햇살 가득한 예쁜 창가 자리로 찾아둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 맛보고 싶은 브런치를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "아침 몇 시에 만날까요? ⏰",
          "subtitle": "상쾌한 아침 시간대",
          "multiple": false,
          "options": [
            "10:30 오픈런으로 여유롭게 브런치 즐기기",
            "11:30 아점(아침 겸 점심)으로 든든하게",
            "12:00 정오에 딱 맞춰 여유로운 식사"
          ]
        },
        {
          "id": "step_brunch",
          "type": "places",
          "title": "가고 싶은 브런치 레스토랑 🥞",
          "subtitle": "채광 좋고 분위기 예쁜 곳들",
          "multiple": true,
          "places": [
            {
              "name": "써머레인 (Summer Lane)",
              "tag": "호주식 브런치",
              "desc": "미트파이, 크로와상 에그베네딕트와 신선한 아보카도 플레이트",
              "mapUrl": "https://map.naver.com/p/search/%EC%8D%A8%EB%A8%B8%EB%A0%88%EC%9D%B8",
              "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "에그앤플라워 해방촌",
              "tag": "생면 파스타 / 뷰 맛집",
              "desc": "남산타워 뷰를 바라보며 즐기는 흑돼지 라구 생면 파스타",
              "mapUrl": "https://map.naver.com/p/search/%EC%97%90%EA%B7%B8%EC%95%A4%ED%94%8C%EB%9D%BC%EC%9B%8C",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_activity",
          "type": "places",
          "title": "브런치 후 산책 & 서점 🌿",
          "subtitle": "차분하게 주말을 시작해요",
          "multiple": false,
          "places": [
            {
              "name": "서점 어쩌다 산책",
              "tag": "독립서점 / 문화공간",
              "desc": "조용한 지하 정원에서 서로에게 어울리는 책 한 권 골라주기",
              "mapUrl": "https://map.naver.com/p/search/%EC%96%B4%EC%A9%8C%EB%8B%A4%20%EC%82%B0%EC%B1%85",
              "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "양재천 메타세쿼이아길 산책",
              "tag": "도심 숲길 / 산책",
              "desc": "물소리 들으며 나무 그늘 아래 선선하게 걷는 힐링 산책로",
              "mapUrl": "https://map.naver.com/p/search/%EC%96%91%EC%9E%AC%EC%B2%9C",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "혹시 브런치 메뉴 중 좋아하는 스타일이 있나요? 💌",
          "subtitle": "달콤한 팬케이크 vs 짭조름한 오믈렛/토스트",
          "placeholder": "예: 프렌치토스트 완전 좋아해요!"
        }
      ]
    }
  },
  {
    "key": "late_night_drive",
    "category": "time",
    "categoryLabel": "⏰ 시간대별",
    "badgeClass": "badge-time",
    "icon": "🌌",
    "title": "심야 감성 드라이브 & 야경",
    "desc": "21:00 야간 드라이브 ➔ 북악스카이웨이 팔각정 ➔ 심야 라멘/포차",
    "course": {
      "title": "밤공기 쐬러 심야 드라이브 갈래요? 🌌",
      "subTitle": "조용한 서울의 밤, 반짝이는 야경을 보며 달려요!",
      "transitionMain": "심야 드라이브 데이트 수락 완료! 🚗🌌\n차 안에서 들을 감성 플레이리스트 틀어둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 보고 싶은 밤의 풍경을 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "밤 몇 시에 출발할까요? ⏰",
          "subtitle": "차가 덜 막히는 여유로운 심야 시간",
          "multiple": false,
          "options": [
            "20:30 노을이 완전히 지고 밤이 깊어질 때",
            "21:30 한적하고 조용한 심야 드라이브",
            "22:30 새벽 공기 마시며 떠나는 드라이브"
          ]
        },
        {
          "id": "step_spot",
          "type": "places",
          "title": "서울 최고의 야경 명소 🌃",
          "subtitle": "도시가 한눈에 내려다보이는 곳",
          "multiple": true,
          "places": [
            {
              "name": "북악팔각정 스카이웨이",
              "tag": "전망대 / 야경",
              "desc": "구불구불 숲길을 지나 정상에서 바라보는 360도 환상적인 서울 야경",
              "mapUrl": "https://map.naver.com/p/search/%EB%B6%81%EC%95%85%ED%8C%94%EA%B0%81%EC%A0%95",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "반포 세빛섬 & 잠수교",
              "tag": "한강 / 야경",
              "desc": "잠수교를 건너며 마주하는 달빛무지개분수와 화려한 세빛섬 조명",
              "mapUrl": "https://map.naver.com/p/search/%EB%B0%98%ED%8F%AC%20%EC%84%B8%EB%B9%9B%EC%84%AC",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_night_food",
          "type": "places",
          "title": "출출할 때 먹는 심야 야식 🍜",
          "subtitle": "밤에 먹으면 두 배로 맛있는 메뉴",
          "multiple": false,
          "places": [
            {
              "name": "심야 일본식 라멘 바",
              "tag": "나베 / 라멘",
              "desc": "늦은 밤 진한 돈코츠 육수에 따뜻한 차슈 얹은 심야 라멘 한 그릇",
              "mapUrl": "https://map.naver.com/p/search/%EC%8B%AC%EC%95%BC%20%EB%9D%BC%EB%A9%98",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "한강 편의점 뽀글이 라면 & 토스트",
              "tag": "피크닉 / 분식",
              "desc": "시원한 강바람 맞으며 벤치에서 먹는 추억의 뽀글이 라면",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%9C%EA%B0%95%20%EB%9D%BC%EB%A9%B4",
              "image": "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "차에서 듣고 싶은 노래나 선호하는 장르가 있나요? 💌",
          "subtitle": "드라이브 플레이리스트에 담아갈게요!",
          "placeholder": "예: 시티팝이나 잔잔한 감성 팝송이요!"
        }
      ]
    }
  },
  {
    "key": "seongsu",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🎨",
    "title": "성수동 팝업 & 전시 핫플",
    "desc": "지중해식/파스타 ➔ 팝업거리 ➔ 미술관 전시 ➔ 디저트",
    "course": {
      "title": "힙한 성수동에서 데이트할래요? 🎨",
      "subTitle": "트렌디한 팝업스토어와 감각적인 맛집 코스!",
      "transitionMain": "진짜요?! 너무 신나요!\n성수동 핫플 다 정복하러 가요! 🎨🔥",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n마음에 드는 코스를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "성수동에서 언제 만날까요? ⏰",
          "subtitle": "선호하는 시간대를 알려주세요",
          "multiple": false,
          "options": [
            "11:30 브런치부터 여유롭게!",
            "13:30 점심 먹고 본격 핫플 투어",
            "16:30 노을과 함께 저녁 감성으로"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "성수동 트렌디 맛집 후보 🍽️",
          "subtitle": "인기 많은 곳들로 추려봤어요 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "팩피 (FAGP)",
              "tag": "미쉐린 / 파스타",
              "desc": "오징어 리가토니와 고수 파스타가 유명한 미쉐린 가이드 맛집",
              "mapUrl": "https://map.naver.com/p/search/%ED%8C%A9%ED%94%BC",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "소문난성수감자탕",
              "tag": "한식 / 든든맛집",
              "desc": "성수동 줄서서 먹는 백종원 3대천왕 명품 감자탕",
              "mapUrl": "https://map.naver.com/p/search/%EC%86%8C%EB%AC%B8%EB%82%9C%EC%84%B1%EC%88%98%EA%B0%90%EC%9E%90%ED%83%95",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "칙피스 성수점",
              "tag": "지중해식 / 샐러드",
              "desc": "건강하고 푸짐한 지중해식 피타 샌드위치 & 샐러드볼",
              "mapUrl": "https://map.naver.com/p/search/%EC%B9%99%ED%94%BC%EC%8A%A4%20%EC%84%B1%EC%88%98",
              "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_activity",
          "type": "places",
          "title": "성수 팝업 & 전시 구경 🎨",
          "subtitle": "가보고 싶은 장소를 골라주세요",
          "multiple": true,
          "places": [
            {
              "name": "디뮤지엄 성수 전시",
              "tag": "전시 / 미술관",
              "desc": "감각적인 사진과 인터랙티브 현대 미술 전시 관람",
              "mapUrl": "https://map.naver.com/p/search/%EB%94%94%EB%AE%A4%EC%A7%80%EC%97%84",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "연무장길 팝업스토어 투어",
              "tag": "쇼핑 / 팝업",
              "desc": "패션·뷰티 브랜드 팝업스토어 구경하고 포토존 인생샷 남기기",
              "mapUrl": "https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EB%8F%99%20%EC%97%B0%EB%AC%B4%EC%9E%A5%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "달콤한 디저트와 카페 ☕",
          "subtitle": "성수동 필수 카페 코스",
          "multiple": false,
          "places": [
            {
              "name": "어니언 성수",
              "tag": "베이커리 / 팡도르",
              "desc": "폐공장을 개조한 빈티지 루프탑 감성과 슈가파우더 팡도르",
              "mapUrl": "https://map.naver.com/p/search/%EC%96%B4%EB%8B%88%EC%96%B8%20%EC%84%B1%EC%88%98",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "대림창고 갤러리 카페",
              "tag": "갤러리 / 카페",
              "desc": "거대한 예술 조형물과 맛있는 커피가 공존하는 성수 랜드마크",
              "mapUrl": "https://map.naver.com/p/search/%EB%8C%80%EB%A6%BC%EC%B0%BD%EA%B3%A0",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "성수동에서 꼭 가보고 싶었던 팝업이나 매장이 있나요? 💌",
          "subtitle": "자유롭게 적어주시면 코스에 추가할게요!",
          "placeholder": "예: 디올 성수 앞 포토존 꼭 가보고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "yeonnam",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "☕",
    "title": "연남동 감성 골목 투어",
    "desc": "카이센동/파스타 ➔ 테일러커피 ➔ 경의선숲길 ➔ 와인바",
    "course": {
      "title": "저랑 연남동에서 데이트할래요? 🥰",
      "subTitle": "아기자기한 소품샵과 골목 맛집 가득한 연남동!",
      "transitionMain": "헉... 사실 거절할 줄 알았는데\n좋다니 저도 너무 좋아요! ><",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n우리 둘만의 감성 데이트 코스를 골라볼까요?",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 만날까요? ⏰",
          "subtitle": "편한 시간대로 골라주세요",
          "multiple": false,
          "options": [
            "12:00 점심부터 맛있는 거 먹어요 🍽️",
            "14:00 나른한 오후에 커피 한잔 ☕",
            "17:30 저녁 노을 보며 만나요 🌅"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "점심은 어디로 갈까요? 🍽️",
          "subtitle": "가보고 싶었던 곳들을 골라봤어요 (중복 선택 가능)",
          "multiple": true,
          "places": [
            {
              "name": "오복수산 연남점",
              "tag": "일식 / 카이센동",
              "desc": "신선한 카이센동과 우니가 정말 유명한 정갈한 맛집!",
              "mapUrl": "https://map.naver.com/p/search/%EC%98%A4%EB%B3%B5%EC%88%98%EC%82%B0%20%EC%97%B0%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "클래식당 연남",
              "tag": "양식 / 파스타",
              "desc": "수제 라자냐와 감자 뇨끼가 환상적인 아늑한 분위기",
              "mapUrl": "https://map.naver.com/p/search/%ED%81%B4%EB%9E%98%EC%8B%9D%EB%8B%B9%20%EC%97%B0%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "점심 먹고 어디로 갈까요? ☕",
          "subtitle": "커피 한잔 하면서 도란도란 이야기 나눠요",
          "multiple": true,
          "places": [
            {
              "name": "테일러커피 연남점",
              "tag": "감성 카페 / 커피",
              "desc": "시그니처 아인슈페너와 크림모카가 정말 맛있는 곳",
              "mapUrl": "https://map.naver.com/p/search/%ED%85%8C%EC%9D%BC%EB%9F%AC%EC%BB%A4%ED%94%BC%20%EC%97%B0%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "경의선 숲길 산책",
              "tag": "산책 / 힐링",
              "desc": "시원한 바람 쐬며 연트럴파크 산책로 걷기 🌿",
              "mapUrl": "https://map.naver.com/p/search/%EA%B2%BD%EC%9D%98%EC%84%A0%EC%88%B2%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_dinner",
          "type": "places",
          "title": "저녁엔 어디서 한잔할까요? 🍷",
          "subtitle": "분위기 좋은 곳에서 하루 마무리하기!",
          "multiple": false,
          "places": [
            {
              "name": "연남동 바라티에",
              "tag": "와인 / 타파스",
              "desc": "조명이 은은하고 아늑해서 깊은 이야기 나누기 딱 좋아요",
              "mapUrl": "https://map.naver.com/p/search/%EC%97%B0%EB%82%A8%EB%8F%99%20%EB%B0%94%EB%9D%BC%ED%8B%B0%EC%97%90",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "혹시 더 하고 싶은 말이 있나요? 💌",
          "subtitle": "못 먹는 음식이나 생각나는 곳이 있다면 편하게 적어줘요!",
          "placeholder": "예: 매운 건 잘 못 먹어요 / 커피는 디카페인 선호해요!"
        }
      ]
    }
  },
  {
    "key": "mangwon",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🥢",
    "title": "망원동 망리단길 & 한강 피크닉",
    "desc": "망원시장 우이락/닭강정 ➔ 딥블루레이크 ➔ 망원한강 노을",
    "course": {
      "title": "망원동 맛있는 시장 투어 & 한강 갈래요? 🥢",
      "subTitle": "망원시장의 길거리 음식과 한강의 여유로운 노을!",
      "transitionMain": "망원동 먹방 투어 당첨! 😋\n맛있는 거 다 사서 한강으로 피크닉 가요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 맛보고 싶은 간식을 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 망원역에서 만날까요? ⏰",
          "subtitle": "시장 활기와 한강 노을을 볼 수 있는 시간",
          "multiple": false,
          "options": [
            "13:30 점심부터 시장 먹거리 털기!",
            "15:30 디저트 카페 갔다가 한강 노을 피크닉",
            "17:00 해질녘 시장 안주 사서 한강 치맥"
          ]
        },
        {
          "id": "step_market",
          "type": "places",
          "title": "망원시장 필수 먹거리 후보 🥟",
          "subtitle": "줄 서서 먹는 전설의 간식들 (중복 선택)",
          "multiple": true,
          "places": [
            {
              "name": "우이락 망원시장본점",
              "tag": "튀김 / 고추튀김",
              "desc": "바삭하고 속이 꽉 찬 시그니처 대왕 고추튀김 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EC%9A%B0%EC%9D%B4%EB%9D%BD%20%EB%A7%9D%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "큐스닭강정",
              "tag": "닭강정 / 시장분식",
              "desc": "달콤양념, 치즈머스타드, 깐풍 등 다양한 맛의 수제 닭강정",
              "mapUrl": "https://map.naver.com/p/search/%ED%81%90%EC%8A%A4%EB%8B%AD%EA%B0%95%EC%A0%95",
              "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "망리단길 감성 카페 ☕",
          "subtitle": "골목 속 스페셜티 커피",
          "multiple": false,
          "places": [
            {
              "name": "딥블루레이크 (Deep Blue Lake)",
              "tag": "로스터리 / 핸드드립",
              "desc": "파란색 3층 건물에서 즐기는 고소하고 산뜻한 스페셜티 원두",
              "mapUrl": "https://map.naver.com/p/search/%EB%94%A5%EB%B8%94%EB%A3%A8%EB%A0%88%EC%9D%B4%ED%81%AC",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "단고당 망원본점",
              "tag": "화과자 / 디저트",
              "desc": "아기자기 귀여운 수제 화과자와 시원한 빙수가 있는 감성 카페",
              "mapUrl": "https://map.naver.com/p/search/%EB%8B%A8%EA%B3%A0%EB%8B%B9",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_hangang",
          "type": "places",
          "title": "망원한강공원 노을 피크닉 🌅",
          "subtitle": "포장한 음식 들고 강변으로 이동해요",
          "multiple": false,
          "places": [
            {
              "name": "망원한강공원 잔디마당",
              "tag": "피크닉 / 노을",
              "desc": "성산대교 뷰를 바라보며 붉게 물드는 노을과 함께 피크닉 즐기기",
              "mapUrl": "https://map.naver.com/p/search/%EB%A7%9D%EC%9B%90%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "망원시장에서 먹고 싶은 또 다른 음식이 있나요? 💌",
          "subtitle": "뿌링클 호떡, 떡볶이, 수제 돈까스 등!",
          "placeholder": "예: 뿌링클 호떡 꼭 먹어보고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "yongsan",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🥐",
    "title": "용산 용리단길 힙플레이스",
    "desc": "쌤쌤쌤/버뮤다삼각지 ➔ 테디뵈르/도토리 ➔ 아모레미술관",
    "course": {
      "title": "요즘 제일 핫한 용리단길 갈래요? 🥐✨",
      "subTitle": "이국적인 골목 감성과 웨이팅 맛집들의 성지!",
      "transitionMain": "용리단길 데이트 당첨! 🐻🥐\n캐치테이블로 웨이팅 싹 예약해둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 설레는 장소를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "신용산역에서 몇 시에 만날까요? ⏰",
          "subtitle": "인기 맛집 웨이팅을 고려한 시간대",
          "multiple": false,
          "options": [
            "11:30 브런치 겸 점심 오픈런!",
            "14:00 베이커리 카페 먼저 들르고 여유로운 오후",
            "17:30 저녁 다이닝과 칵테일 한잔"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "용리단길 대표 다이닝 🍽️",
          "subtitle": "해외 여행 온 것 같은 이국적 감성 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "쌤쌤쌤 (SAMSAMSAM)",
              "tag": "미국식 / 라자냐",
              "desc": "샌프란시스코 감성의 인테리어와 촉촉한 수제 라자냐 & 잠봉뵈르 파스타",
              "mapUrl": "https://map.naver.com/p/search/%EC%8C%A4%EC%8C%A4%EC%8C%A4",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "버뮤다삼각지",
              "tag": "멕시칸 / 폭립",
              "desc": "압도적인 비주얼의 바비큐 폭립 플래터와 신선한 타코",
              "mapUrl": "https://map.naver.com/p/search/%EB%B2%84%EB%AE%A4%EB%8B%A4%EC%82%BC%EA%B0%81%EC%A7%80",
              "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "동화 속 감성 카페 ☕",
          "subtitle": "인생샷 무조건 나오는 포토존 맛집",
          "multiple": false,
          "places": [
            {
              "name": "테디뵈르하우스 용산",
              "tag": "파리 감성 / 크루아상",
              "desc": "귀여운 테디베어 인형들과 버터 풍미 가득한 프랑스식 크로아상",
              "mapUrl": "https://map.naver.com/p/search/%ED%85%8C%EB%94%94%EB%B5%88%EB%A5%B4%ED%95%98%EC%9A%B0%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "도토리 (DOTORI) 용산",
              "tag": "지브리 감성 / 요거트",
              "desc": "지브리 숲속 오두막에 들어온 듯한 아늑함과 수제 그릭요거트",
              "mapUrl": "https://map.naver.com/p/search/%EB%8F%84%ED%86%A0%EB%A6%AC%20%EC%9A%A9%EC%82%B0",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_culture",
          "type": "places",
          "title": "문화 & 산책 스팟 🏛️",
          "subtitle": "용산에서만 즐길 수 있는 특별한 코스",
          "multiple": false,
          "places": [
            {
              "name": "아모레퍼시픽 미술관 (APMA)",
              "tag": "전시 / 미술관",
              "desc": "세계적 건축가 데이비드 치퍼필드가 설계한 감각적인 전시 공간",
              "mapUrl": "https://map.naver.com/p/search/%EC%95%84%EB%AA%A8%EB%A0%88%ED%8D%BC%EC%8B%9C%ED%94%BD%20%EB%AF%B8%EC%88%A0%EA%B4%80",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "용산공원 부분개방부지 산책",
              "tag": "이국적 / 포토존",
              "desc": "미국 붉은 벽돌 주택이 늘어선 이국적인 거리에서 인생 사진 남기기",
              "mapUrl": "https://map.naver.com/p/search/%EC%9A%A9%EC%82%B0%EA%B3%B5%EC%9B%90%20%EB%B6%80%EB%B6%84%EA%B0%9C%EB%B0%A9%EB%B6%80%EC%A7%80",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "용리단길에서 꼭 찍고 싶은 포토존이 있다면 적어주세요! 💌",
          "subtitle": "예쁜 사진 많이 찍어드릴게요!",
          "placeholder": "예: 테디뵈르하우스 곰돌이 앞에서 사진 찍고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "hannam",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🏛️",
    "title": "한남동 감성 & 리움미술관",
    "desc": "리움미술관 ➔ 미쉐린 일호식/부자피자 ➔ 사운즈한남 & MTL",
    "course": {
      "title": "예술과 미식의 한남동에서 만날래요? 🏛️",
      "subTitle": "품격 있는 전시와 감각적인 숍들이 어우러진 하루!",
      "transitionMain": "한남동 로맨틱 데이트 수락! 🏛️✨\n미술관과 맛있는 다이닝 예약해둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n마음에 드는 장소를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 한강진역에서 만날까요? ⏰",
          "subtitle": "미술관 예약 시간에 맞춘 시간대",
          "multiple": false,
          "options": [
            "11:30 브런치 후 오후 미술관 관람",
            "14:00 미술관 전시 먼저 보고 커피 한잔",
            "17:00 갤러리 산책 후 로맨틱 디너"
          ]
        },
        {
          "id": "step_museum",
          "type": "places",
          "title": "예술 감성 가득한 전시 🎨",
          "subtitle": "한남동을 대표하는 미술관",
          "multiple": false,
          "places": [
            {
              "name": "리움미술관",
              "tag": "현대미술 / 건축",
              "desc": "고미술과 현대미술의 조화, 건축물 자체로도 예술인 서울 최고 미술관",
              "mapUrl": "https://map.naver.com/p/search/%EB%A6%AC%EC%9B%80%EB%AF%B8%EC%88%A0%EA%B4%80",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_dining",
          "type": "places",
          "title": "한남동 대표 맛집 후보 🍽️",
          "subtitle": "차분하고 정갈한 다이닝 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "일호식 (사운즈한남)",
              "tag": "미쉐린 / 정갈한 한식",
              "desc": "건강하고 세련된 한식 정찬으로 정갈하게 즐기는 미쉐린 가이드 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%BC%ED%98%B8%EC%8B%9D",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "부자피자 1호점",
              "tag": "나폴리 / 화덕피자",
              "desc": "신선한 루꼴라와 파르미지아노 치즈가 듬뿍 올라간 시그니처 화덕피자",
              "mapUrl": "https://map.naver.com/p/search/%EB%B6%80%EC%9E%90%ED%94%BC%EC%9E%90%20%ED%95%9C%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "한남동 복합문화공간 & 카페 ☕",
          "subtitle": "유럽 골목에 온 듯한 이국적인 분위기",
          "multiple": false,
          "places": [
            {
              "name": "사운즈 한남 (SOUNDS HANNAM)",
              "tag": "복합문화공간 / 테라스",
              "desc": "붉은 벽돌 건물 안 서점, 갤러리, 편집숍이 모인 감성 공간",
              "mapUrl": "https://map.naver.com/p/search/%EC%82%AC%EC%9A%B4%EC%A6%88%ED%95%9C%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "MTL 한남 (보난자커피)",
              "tag": "베를린커피 / 비건디저트",
              "desc": "독일 베를린 보난자 커피 원두와 감각적인 음악이 흐르는 라운지",
              "mapUrl": "https://map.naver.com/p/search/MTL%20%ED%95%9C%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "한남동 쇼룸(르메르, 마르지엘라 등) 구경도 좋아하시나요? 💌",
          "subtitle": "쇼핑 동선도 편하게 맞춰드릴게요!",
          "placeholder": "예: 감성 소품이나 브랜드 쇼룸 구경 좋아해요!"
        }
      ]
    }
  },
  {
    "key": "apgujeong",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🛍️",
    "title": "압구정로데오 & 도산공원",
    "desc": "리틀넥/까폼 ➔ 꽁티드툴레아/누데이크 ➔ 위글위글집 & 도산공원",
    "course": {
      "title": "트렌디한 압구정로데오에서 데이트할래요? 🛍️✨",
      "subTitle": "패션 플래그십과 힙한 브런치, 도산공원 산책!",
      "transitionMain": "압구정로데오 핫플 정복 시작! 🕶️🔥\n인기 맛집 예약부터 바로 챙길게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가고 싶은 장소를 선택해주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "압구정로데오역에서 몇 시에 만날까요? ⏰",
          "subtitle": "선호하는 시간대를 알려주세요",
          "multiple": false,
          "options": [
            "12:00 도산공원 근처 브런치부터!",
            "14:30 카페 & 플래그십 스토어 쇼핑 투어",
            "17:30 맛있는 저녁 식사와 칵테일 한잔"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "도산공원 대표 맛집 🍽️",
          "subtitle": "취향에 따라 선택해보세요 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "리틀넥 도산 (Little Neck)",
              "tag": "아메리칸 브런치",
              "desc": "명란 크림 파스타와 살치살 스테이크, 하우스 샐러드 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EB%A6%AC%ED%8B%80%EB%84%A5%20%EB%8F%84%EC%82%B0",
              "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "까폼 (Kkapom)",
              "tag": "태국요리 / 랭쌥",
              "desc": "줄 서서 먹는 매콤새콤 태국 등갈비 랭쌥과 똠얌 쌀국수",
              "mapUrl": "https://map.naver.com/p/search/%EA%B9%8C%ED%8F%BC",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "비주얼 폭발 감성 카페 ☕",
          "subtitle": "눈과 입이 모두 즐거운 공간",
          "multiple": false,
          "places": [
            {
              "name": "꽁티드툴레아 (CONTE DE TULEAR)",
              "tag": "유럽 정원 / 브런치 카페",
              "desc": "이국적인 붉은 벽돌 테라스 정원에서 마시는 향긋한 커피와 초코무스",
              "mapUrl": "https://map.naver.com/p/search/%EA%BD%81%ED%8B%B0%EB%93%9C%ED%88%B4%EB%A0%88%EC%95%84",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "누데이크 하우스도산",
              "tag": "아트 디저트 / 갤러리",
              "desc": "예술 작품 같은 말차 피크 케이크와 감각적인 미디어 전시",
              "mapUrl": "https://map.naver.com/p/search/%EB%88%84%EB%8D%B0%EC%9D%B4%ED%81%AC%20%ED%95%98%EC%9A%B0%EC%8A%A4%EB%8F%84%EC%82%B0",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_shopping",
          "type": "places",
          "title": "놀거리 & 도산공원 산책 🌳",
          "subtitle": "볼거리가 끊이지 않는 거리",
          "multiple": true,
          "places": [
            {
              "name": "위글위글집 도산",
              "tag": "소품샵 / 포토존",
              "desc": "알록달록 컬러풀한 포토존과 귀여운 디자인 굿즈 천국",
              "mapUrl": "https://map.naver.com/p/search/%EC%9C%84%EA%B8%80%EC%9C%84%EA%B8%80%EC%A7%91%20%EB%8F%84%EC%82%B0",
              "image": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "도산공원 나무그늘 산책",
              "tag": "도심 공원 / 힐링",
              "desc": "도심 속 조용한 숲길을 걸으며 편안하게 대화 나누기",
              "mapUrl": "https://map.naver.com/p/search/%EB%8F%84%EC%82%B0%EA%B3%B5%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "가보고 싶었던 압구정 브랜드 매장이 있다면 적어주세요! 💌",
          "subtitle": "젠틀몬스터, 탬버린즈, 스투시 등",
          "placeholder": "예: 하우스도산 탬버린즈 매장 구경하고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "sinsa",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "👠",
    "title": "신사 가로수길 쇼핑 & 다이닝",
    "desc": "감성타코/우니도 ➔ 아우어베이커리 ➔ 딥티크·탬버린즈 플래그십",
    "course": {
      "title": "신사동 가로수길에서 트렌디하게 데이트할래요? 👠",
      "subTitle": "은행나무길을 따라 플래그십 쇼핑과 맛있는 타파스!",
      "transitionMain": "가로수길 데이트 환영해요! 🛍️✨\n예쁜 카페랑 맛집 미리 예약해둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 끌리는 코스를 선택해주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "신사역에서 몇 시에 만날까요? ⏰",
          "subtitle": "쇼핑과 식사를 즐기기 좋은 시간",
          "multiple": false,
          "options": [
            "12:30 가로수길 맛집에서 든든한 점심부터",
            "15:00 베이커리 카페와 플래그십 스토어 투어",
            "18:00 분위기 좋은 테라스 레스토랑 & 와인"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "가로수길 인기 맛집 🍽️",
          "subtitle": "호불호 없이 맛있는 메뉴 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "감성타코 가로수길점",
              "tag": "멕시칸 / 파히타",
              "desc": "푸짐한 고기와 또띠아를 마음껏 싸먹는 그릴드 파히타",
              "mapUrl": "https://map.naver.com/p/search/%EA%B0%90%EC%84%B1%ED%83%80%EC%BD%94%20%EA%B0%80%EB%A1%9C%EC%88%98%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "카이센동 우니도 가로수길",
              "tag": "일식 / 해산물덮밥",
              "desc": "신선한 우니와 참치, 연어가 가득 올라간 정갈한 카이센동",
              "mapUrl": "https://map.naver.com/p/search/%EC%9A%B0%EB%8B%88%EB%8F%84%20%EA%B0%80%EB%A1%9C%EC%88%98%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "디저트 & 베이커리 카페 ☕",
          "subtitle": "가로수길 대표 디저트 명소",
          "multiple": false,
          "places": [
            {
              "name": "아우어베이커리 가로수길점",
              "tag": "베이커리 / 더티초코",
              "desc": "진한 초콜릿의 더티초코와 바삭한 빨미까레가 유명한 베이커리",
              "mapUrl": "https://map.naver.com/p/search/%EC%95%84%EC%9A%B0%EC%96%B4%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC%20%EA%B0%80%EB%A1%9C%EC%88%98%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "소진담 신사점",
              "tag": "수제케이크 / 감성",
              "desc": "당근케이크와 얼그레이 케이크가 환상적인 아늑한 공간",
              "mapUrl": "https://map.naver.com/p/search/%EC%86%8C%EC%A7%84%EB%8B%B4%20%EC%8B%A0%EC%82%AC",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_brand",
          "type": "places",
          "title": "향기로운 플래그십 스토어 투어 🌸",
          "subtitle": "하나의 전시관 같은 브랜드 공간",
          "multiple": false,
          "places": [
            {
              "name": "딥티크 & 탬버린즈 플래그십",
              "tag": "향수 / 라이프스타일",
              "desc": "감각적인 조각상과 향기를 직접 체험해보는 프라이빗 공간",
              "mapUrl": "https://map.naver.com/p/search/%EB%94%A5%ED%8B%B0%ED%81%AC%20%EA%B0%80%EB%A1%9C%EC%88%98%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "가로수길에서 좋아하는 옷가게나 브랜드가 있나요? 💌",
          "subtitle": "쇼핑 동선에 추가해둘게요!",
          "placeholder": "예: Apple Store나 옷가게 구경하고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "seochon",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🏯",
    "title": "서촌 & 북촌 한옥 감성 산책",
    "desc": "통인시장/영화루 ➔ 대오서점/인텔리젠시아 ➔ 경복궁/국립현대미술관",
    "course": {
      "title": "고즈넉한 서촌과 북촌 한옥마을 걸을래요? 🏯",
      "subTitle": "돌담길과 한옥 골목, 작은 소품샵이 주는 따뜻한 낭만!",
      "transitionMain": "서촌 한옥 데이트 확정! 🏯🍃\n골목길 숨은 예쁜 카페로 모실게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n원하는 서촌 코스를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "경복궁역/안국역에서 몇 시에 만날까요? ⏰",
          "subtitle": "한옥의 정취를 느끼기 좋은 낮 시간",
          "multiple": false,
          "options": [
            "11:30 통인시장 기름떡볶이 점심부터",
            "13:30 경복궁 돌담길 산책 & 한옥 카페",
            "16:00 미술관 관람 후 고즈넉한 저녁 식사"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "서촌 로컬 맛집 후보 🥢",
          "subtitle": "오랜 세월 사랑받아온 명소 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "영화루",
              "tag": "중식 / 고추간짜장",
              "desc": "식신로드와 수요미식회가 극찬한 매콤한 원조 고추간짜장 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EC%84%9C%EC%B4%8C%20%EC%98%81%ED%99%94%EB%A3%A8",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "통인시장 엽전도시락",
              "tag": "전통시장 / 엽전체험",
              "desc": "엽전으로 기름떡볶이, 마약김밥 등을 골라 담는 재미있는 시장 투어",
              "mapUrl": "https://map.naver.com/p/search/%ED%86%B5%EC%9D%B8%EC%8B%9C%EC%9E%A5",
              "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "역사와 감성이 깃든 카페 ☕",
          "subtitle": "서촌과 북촌만의 고유한 분위기",
          "multiple": false,
          "places": [
            {
              "name": "인텔리젠시아 서촌 (한옥점)",
              "tag": "한옥 / 스페셜티 커피",
              "desc": "현대적 한옥 지붕 아래에서 마시는 미국 3대 스페셜티 커피",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%B8%ED%85%94%EB%A6%AC%EC%A0%A0%EC%8B%9C%EC%95%84%20%EC%84%9C%EC%B4%8C",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "대오서점 카페",
              "tag": "레트로 서점 / 달고나",
              "desc": "서울에서 가장 오래된 70년 전통 헌책방 겸 감성 한옥 카페",
              "mapUrl": "https://map.naver.com/p/search/%EB%8C%80%EC%98%A4%EC%84%9C%EC%A0%90",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_walk",
          "type": "places",
          "title": "고궁 & 미술관 산책 코스 🌿",
          "subtitle": "도란도란 이야기 나누며 걷기",
          "multiple": false,
          "places": [
            {
              "name": "국립현대미술관 서울관 & 삼청동길",
              "tag": "현대미술 / 정원",
              "desc": "푸른 잔디마당과 한국 현대미술 기획전, 감각적인 삼청동 갤러리 산책",
              "mapUrl": "https://map.naver.com/p/search/%EA%B5%AD%EB%A6%BD%ED%98%84%EB%8C%80%EB%AF%B8%EC%88%A0%EA%B4%80%20%EC%84%9C%EC%9A%B8",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "경복궁 영추문 돌담길",
              "tag": "고궁 / 돌담길",
              "desc": "노란 은행나무와 고풍스러운 궁궐 돌담을 따라 걷는 여유로운 길",
              "mapUrl": "https://map.naver.com/p/search/%EA%B2%BD%EB%B3%B5%EA%B6%81%20%EC%98%81%EC%B6%94%EB%AC%B8",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "한옥이나 전통 찻집, 도자기 등에 관심이 있으신가요? 💌",
          "subtitle": "취향에 맞게 소품샵 동선을 짜드릴게요!",
          "placeholder": "예: 아기자기한 서점이나 그릇 공방 좋아해요!"
        }
      ]
    }
  },
  {
    "key": "euljiro",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🏮",
    "title": "을지로 & 힙지로 레트로",
    "desc": "익선동 한옥 샤브/을지로보석 ➔ 혜민서 커피한약방 ➔ 평균율 LP바",
    "course": {
      "title": "을지로 힙지로에서 레트로 데이트할래요? 🏮",
      "subTitle": "골목 속 숨은 보물 같은 공간들을 찾아서!",
      "transitionMain": "힙지로 감성 제대로 느껴봐요! 🏮✨\n골목 구석구석 숨은 핫플로 모실게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 설레는 장소들을 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 만날까요? ⏰",
          "subtitle": "편한 시간대로 골라주세요",
          "multiple": false,
          "options": [
            "12:30 익선동 한옥 골목 점심부터 🥢",
            "16:00 을지로 감성 카페 & 소품샵 투어 ☕",
            "18:00 저녁 힙지로 골목 노포 & 와인바 🍷"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "힙지로 점심 & 저녁 맛집 🍽️",
          "subtitle": "레트로 감성 가득한 맛집 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "을지로 보석",
              "tag": "한식 주점 / 해산물",
              "desc": "들기름 낙지젓 카펠리니와 제철 해산물로 소문난 예약 필수 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EB%B3%B4%EC%84%9D",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "온천집 익선동",
              "tag": "샤브샤브 / 한옥",
              "desc": "일본 료칸 온천 감성의 고즈넉한 한옥 1인 샤브샤브 코스",
              "mapUrl": "https://map.naver.com/p/search/%EC%98%A8%EC%B2%9C%EC%A7%91%20%EC%9D%B5%EC%84%A0",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "골목 안 빈티지 카페 ☕",
          "subtitle": "을지로만의 독특한 매력",
          "multiple": true,
          "places": [
            {
              "name": "커피한약방 & 혜민당",
              "tag": "레트로 카페 / 필터커피",
              "desc": "조선시대 혜민서 터에서 즐기는 앤틱 필터커피와 달콤 서양과자",
              "mapUrl": "https://map.naver.com/p/search/%EC%BB%A4%ED%94%BC%ED%95%9C%EC%95%BD%EB%B0%A9",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "호랑이커피",
              "tag": "감성 카페 / 라떼",
              "desc": "고소하고 묵직한 호랑이라떼로 세운상가 명물이 된 곳",
              "mapUrl": "https://map.naver.com/p/search/%ED%98%B8%EB%9E%91%EC%9D%B4%EC%BB%A4%ED%94%BC",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_night",
          "type": "places",
          "title": "감성 넘치는 밤의 을지로 🍷",
          "subtitle": "LP 음악과 와인 한잔",
          "multiple": false,
          "places": [
            {
              "name": "평균율 LP 바",
              "tag": "음악 / 위스키 / 와인",
              "desc": "좋은 바이닐 LP 음악이 흐르는 아늑하고 로맨틱한 청음 공간",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%ED%8F%89%EA%B7%A0%EC%9C%A8",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "신도시 (Seendosi)",
              "tag": "레트로 펍 / 맥주",
              "desc": "독특한 예술적 감성과 루프탑이 매력적인 을지로 랜드마크",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%8B%A0%EB%8F%84%EC%8B%9C",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "을지로에서 먹고 싶거나 해보고 싶은 게 있다면 적어주세요! 💌",
          "subtitle": "노포 감성 삼겹살이나 골뱅이 골목도 환영!",
          "placeholder": "예: 노포 분위기도 좋아요!"
        }
      ]
    }
  },
  {
    "key": "yeouido",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🏢",
    "title": "여의도 더현대 서울 & 한강",
    "desc": "호우섬/수티 ➔ 카멜커피 ➔ 사운즈포레스트 & 한강공원",
    "course": {
      "title": "더현대 서울에서 날씨 걱정 없이 데이트할래요? 🏢🌿",
      "subTitle": "초대형 실내 정원과 미식 핫플, 한강 산책까지!",
      "transitionMain": "더현대 서울 데이트 출발! 🏢✨\n현대백화점 앱으로 웨이팅 걸어둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 맛보고 싶은 메뉴를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "여의도역에서 몇 시에 만날까요? ⏰",
          "subtitle": "백화점 영업시간(10:30~20:00) 기준",
          "multiple": false,
          "options": [
            "11:00 오픈 직후 여유롭게 점심 식사",
            "14:00 실내 정원 산책 & 팝업스토어 쇼핑",
            "17:00 더현대 저녁 식사 후 한강공원 야경"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "더현대 대표 미식 맛집 🍽️",
          "subtitle": "지하 1층 및 6층 인기 식당",
          "multiple": true,
          "places": [
            {
              "name": "호우섬 더현대서울점",
              "tag": "홍콩식 / 딤섬 & 솥밥",
              "desc": "육즙 가득한 소롱포와 바삭한 누룽지 솥밥(뽀짜이판) 맛집",
              "mapUrl": "https://map.naver.com/p/search/%ED%98%B8%EC%9A%B0%EC%84%AC%20%EB%8D%94%ED%98%84%EB%8C%80%EC%84%9C%EC%9A%B8",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "수티 (Sooty) 더현대서울",
              "tag": "프리미엄 바비큐",
              "desc": "몽탄과 금돼지식당의 콜라보! 진한 풍미의 로스트 비프 스테이크",
              "mapUrl": "https://map.naver.com/p/search/%EC%88%98%ED%8B%B0%20%EB%8D%94%ED%98%84%EB%8C%80%EC%84%9C%EC%9A%B8",
              "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "더현대 필수 카페 & 디저트 ☕",
          "subtitle": "줄 서서 마시는 시그니처 커피",
          "multiple": false,
          "places": [
            {
              "name": "카멜커피 더현대서울점",
              "tag": "크림커피 / 시그니처",
              "desc": "부드럽고 묵직한 크림과 에스프레소의 완벽한 밸런스 카멜커피",
              "mapUrl": "https://map.naver.com/p/search/%EC%B9%B4%EB%A9%9C%EC%BB%A4%ED%94%BC%20%EB%8D%94%ED%98%84%EB%8C%80%EC%84%9C%EC%9A%B8",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "카페 레이어드 더현대서울",
              "tag": "영국식 스콘 / 케이크",
              "desc": "동화 같은 비주얼의 수제 스콘과 달콤한 조각 케이크",
              "mapUrl": "https://map.naver.com/p/search/%EC%B9%B4%ED%8E%98%20%EB%A0%88%EC%9D%B4%EC%96%B4%EB%93%9C%20%EB%8D%94%ED%98%84%EB%8C%80",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_walk",
          "type": "places",
          "title": "힐링 숲 & 한강 노을 🌿",
          "subtitle": "도심 속 자연을 만끽하기",
          "multiple": false,
          "places": [
            {
              "name": "사운즈 포레스트 (5층 실내정원)",
              "tag": "실내정원 / 포토존",
              "desc": "천장에서 쏟아지는 자연광과 초록빛 나무들 사이로 거닐기",
              "mapUrl": "https://map.naver.com/p/search/%EB%8D%94%ED%98%84%EB%8C%80%20%EC%82%AC%EC%9A%B4%EC%A6%88%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "여의도 한강공원 물빛광장",
              "tag": "한강 / 노을",
              "desc": "더현대에서 걸어나와 강바람 맞으며 마포대교 노을 감상하기",
              "mapUrl": "https://map.naver.com/p/search/%EC%97%AC%EC%9D%98%EB%8F%84%20%ED%95%9C%EA%B0%95%EA%B3%B5%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "더현대에서 둘러보고 싶은 팝업스토어나 쇼핑 브랜드가 있나요? 💌",
          "subtitle": "EQL, 29CM 등 편하게 적어주세요!",
          "placeholder": "예: 지하 2층 팝업스토어들 구경하고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "jamsil",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🦢",
    "title": "잠실 & 석촌호수 로맨틱",
    "desc": "송리단길 맛집 ➔ 호수 산책 ➔ 롯데월드몰 ➔ 루프탑 바",
    "course": {
      "title": "잠실 석촌호수에서 로맨틱한 데이트할래요? 🦢",
      "subTitle": "호숫가 산책과 송리단길 맛집 투어!",
      "transitionMain": "와아! 석촌호수 데이트라니 벌써 로맨틱해요 🦢✨\n예쁜 호숫길 같이 걸어요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 끌리는 맛집과 장소를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 만날까요? ⏰",
          "subtitle": "편한 시간대로 골라주세요",
          "multiple": false,
          "options": [
            "12:00 송리단길 맛집 오픈런!",
            "14:30 햇살 반짝이는 호수 산책부터",
            "17:30 롯데월드타워 야경 보러 만나요"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "송리단길 맛집 후보 🍽️",
          "subtitle": "송리단길 대표 핫플들 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "배키욘방 잠실본점",
              "tag": "일식 / 우동 & 덮밥",
              "desc": "쫄깃한 자가제면 우동과 숯불 향 가득한 야키도리동 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EB%B0%B0%ED%82%A4%EC%9A%98%EB%B0%A9",
              "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "콘메 (CONME)",
              "tag": "생면 파스타 / 와인",
              "desc": "쫀득한 수제 생면 파스타와 고급스러운 유러피안 분위기",
              "mapUrl": "https://map.naver.com/p/search/%EC%86%A1%EB%A6%AC%EB%8B%A8%EA%B8%B8%20%EC%BD%98%EB%A9%94",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "호수 산책 & 뷰 좋은 카페 ☕",
          "subtitle": "석촌호수 둘레길과 감성 디저트",
          "multiple": true,
          "places": [
            {
              "name": "석촌호수 둘레길 산책",
              "tag": "산책 / 호수",
              "desc": "롯데월드 매직아일랜드와 호수를 바라보며 도란도란 걷기",
              "mapUrl": "https://map.naver.com/p/search/%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98",
              "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "앤티크커피 잠실점",
              "tag": "디저트 / 크루아상",
              "desc": "화려한 꽃장식과 비주얼 폭발 크루아상 디저트 명소",
              "mapUrl": "https://map.naver.com/p/search/%EC%95%A4%ED%8B%B0%ED%81%AC%EC%BB%A4%ED%94%BC%20%EC%9E%A0%EC%8B%A4",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_night",
          "type": "places",
          "title": "달콤한 저녁 또는 야경 스팟 🌃",
          "subtitle": "잠실의 낭만적인 밤을 함께해요",
          "multiple": false,
          "places": [
            {
              "name": "서울스카이 전망대",
              "tag": "전망대 / 야경",
              "desc": "120층에서 한눈에 내려다보는 서울 360도 환상 야경 파노라마",
              "mapUrl": "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%8A%A4%EC%B9%B4%EC%9D%B4",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "소피텔 루프탑 라티튜드32",
              "tag": "와인바 / 칵테일",
              "desc": "석촌호수 야경이 한눈에 펼쳐지는 고급스러운 칵테일 라운지 바",
              "mapUrl": "https://map.naver.com/p/search/%EB%9D%BC%ED%8B%B0%ED%8A%9C%EB%93%9C32",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "잠실에서 해보고 싶었던 것이 있다면 알려주세요! 💌",
          "subtitle": "쇼핑, 아쿠아리움, 놀이기구 등 무엇이든 좋아요",
          "placeholder": "예: 롯데월드타워 쇼핑몰 구경도 좋아요!"
        }
      ]
    }
  },
  {
    "key": "daehangno",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🎭",
    "title": "혜화 대학로 연극 & 낙산공원",
    "desc": "퓨전 한식 오이지 ➔ 대학로 로코 연극 ➔ 낙산공원 성곽길 야경",
    "course": {
      "title": "대학로에서 연극 보고 성곽길 걸을래요? 🎭🌙",
      "subTitle": "웃음 가득한 소극장 연극과 서울 최고의 야경 산책!",
      "transitionMain": "대학로 연극 데이트 당첨! 🎭✨\n재미있는 로코 연극 앞자리로 예매할게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n마음에 드는 코스를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "혜화역에서 몇 시에 만날까요? ⏰",
          "subtitle": "연극 시작 시간을 고려한 시간대",
          "multiple": false,
          "options": [
            "13:00 점심 식사 후 15:00 연극 관람",
            "15:30 연극 보고 나와서 낙산공원 노을 산책",
            "17:30 맛있는 저녁 먹고 19:30 저녁 연극 관람"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "대학로 핫플레이스 맛집 🍽️",
          "subtitle": "데이트 분위기 좋은 감성 식당 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "오이지 대학로",
              "tag": "퓨전 한식 / 명란치즈순두부",
              "desc": "차돌들기름국수와 뚝배기 명란치즈순두부가 유명한 줄서는 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EC%98%A4%EC%9D%B4%EC%A7%80%20%EB%8C%80%ED%95%99%EB%A1%9C",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "부부식당",
              "tag": "가정식 퓨전 / 파스타",
              "desc": "따뜻한 가정집 같은 아늑함 속에서 즐기는 목살구이와 파스타",
              "mapUrl": "https://map.naver.com/p/search/%EB%B6%80%EB%B6%80%EC%8B%9D%EB%8B%B9%20%EB%8C%80%ED%95%99%EB%A1%9C",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_play",
          "type": "places",
          "title": "대학로 소극장 연극 & 문화 🎭",
          "subtitle": "연인들의 필수 데이트 코스",
          "multiple": false,
          "places": [
            {
              "name": "대학로 로맨틱 코미디 연극",
              "tag": "소극장 / 연극",
              "desc": "배우들의 생생한 연기와 함께 웃음 빵빵 터지는 소극장 연극 관람",
              "mapUrl": "https://map.naver.com/p/search/%EB%8C%80%ED%95%99%EB%A1%9C%20%EC%97%B0%EA%B7%B9",
              "image": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "어쩌다 산책 북카페",
              "tag": "북카페 / 핸드드립",
              "desc": "조용한 지하 정원에서 책과 함께 마시는 향긋한 핸드드립 커피",
              "mapUrl": "https://map.naver.com/p/search/%EC%96%B4%EC%A9%8C%EB%8B%A4%20%EC%82%B0%EC%B1%85",
              "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_night",
          "type": "places",
          "title": "낙산공원 성곽길 야경 산책 🌃",
          "subtitle": "로맨틱한 데이트의 완벽한 마무리",
          "multiple": false,
          "places": [
            {
              "name": "낙산공원 서울 성곽길",
              "tag": "성곽길 / 야경",
              "desc": "고풍스러운 성곽 조명을 따라 걸으며 서울 시내 불빛을 감상하기",
              "mapUrl": "https://map.naver.com/p/search/%EB%82%99%EC%82%B0%EA%B3%B5%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "보고 싶은 연극 장르나 취향이 있다면 알려주세요! 💌",
          "subtitle": "로맨틱 코미디, 서스펜스, 감동 드라마 등",
          "placeholder": "예: 부담 없이 웃을 수 있는 로코 좋아요!"
        }
      ]
    }
  },
  {
    "key": "gangnam",
    "category": "place",
    "categoryLabel": "🗺️ 서울 핫플",
    "badgeClass": "badge-place",
    "icon": "🍸",
    "title": "강남역 & 역삼 트렌디 데이트",
    "desc": "감성 이탈리안 ➔ 대형 플래그십 스토어 ➔ 분위기 좋은 라운지 펍",
    "course": {
      "title": "활기찬 강남역에서 신나게 데이트할래요? 🍸✨",
      "subTitle": "트렌디한 맛집과 플래그십 스토어, 로맨틱한 라운지 바!",
      "transitionMain": "강남 핫플 투어 준비 완료! 🏙️✨\n분위기 좋은 테이블로 잡아둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n마음에 드는 장소를 선택해주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "강남역 몇 번 출구에서 만날까요? ⏰",
          "subtitle": "접근성 최고인 만남 시간",
          "multiple": false,
          "options": [
            "12:00 점심 파스타 & 스테이크 오픈런",
            "15:00 복합문화공간 & 플래그십 스토어 투어",
            "18:30 퇴근 후 맛있는 저녁과 칵테일 한잔"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "강남역 감성 다이닝 🍽️",
          "subtitle": "데이트 분위기 물씬 나는 레스토랑 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "바비레드 강남본점",
              "tag": "퓨전 양식 / 매운갈비파스타",
              "desc": "매콤한 소갈비 파스타와 레드밥을 비벼 먹는 강남역 시그니처 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EB%B0%94%EB%B9%84%EB%A0%88%EB%93%9C%20%EA%B0%95%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "마녀주방 강남점",
              "tag": "이색 테마 / 칵테일",
              "desc": "할로윈 컨셉의 이색적인 인테리어와 링거 칵테일, 리조또",
              "mapUrl": "https://map.naver.com/p/search/%EB%A7%88%EB%85%80%EC%A3%BC%EB%B0%A9%20%EA%B0%95%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_activity",
          "type": "places",
          "title": "플래그십 스토어 & 문화공간 🛍️",
          "subtitle": "사진 찍고 구경하기 좋은 대형 공간",
          "multiple": false,
          "places": [
            {
              "name": "카카오프렌즈 & 라인프렌즈 강남 플래그십",
              "tag": "캐릭터 / 굿즈샵",
              "desc": "대형 캐릭터 피규어 포토존과 귀여운 라이프스타일 소품 가득",
              "mapUrl": "https://map.naver.com/p/search/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88%20%EA%B0%95%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "일상비일상의틈 by U+",
              "tag": "복합문화공간 / 팝업",
              "desc": "매월 새로운 브랜드 팝업과 독립서점, 루프탑이 있는 핫플레이스",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%BC%EC%83%81%EB%B9%84%EC%9D%BC%EC%83%81%EC%9D%98%ED%8B%88",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_night",
          "type": "places",
          "title": "분위기 좋은 와인 & 라운지 🍷",
          "subtitle": "하루를 로맨틱하게 마무리하기",
          "multiple": false,
          "places": [
            {
              "name": "어반로즈 강남 (Urban Rose)",
              "tag": "감성 와인바 / 장미꽃",
              "desc": "천장에 가득 찬 장미꽃 인테리어와 감미로운 음악, 달콤한 와인",
              "mapUrl": "https://map.naver.com/p/search/%EC%96%B4%EB%B0%98%EB%A1%9C%EC%A6%88%20%EA%B0%95%EB%82%A8",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "강남역에서 가보고 싶었던 장소가 있다면 적어주세요! 💌",
          "subtitle": "보드게임, 방탈출 등도 좋아요!",
          "placeholder": "예: 분위기 좋은 와인바나 펍 좋아해요!"
        }
      ]
    }
  },
  {
    "key": "drive_paju",
    "category": "drive",
    "categoryLabel": "🚗 근교 드라이브",
    "badgeClass": "badge-drive",
    "icon": "📚",
    "title": "파주 출판도시 & 헤이리마을",
    "desc": "지혜의숲 서가 ➔ 아이노스 브런치 ➔ 레드파이프 초대형 카페",
    "course": {
      "title": "파주로 여유롭게 감성 드라이브 떠날래요? 🚗📚",
      "subTitle": "압도적인 도서관 서가와 유럽풍 예술마을 산책!",
      "transitionMain": "파주 힐링 드라이브 확정! 🚗💨\n창문 열고 강변길 따라 시원하게 달려요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 설레는 파주 명소를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "서울에서 몇 시에 출발할까요? ⏰",
          "subtitle": "자유로 드라이브에 좋은 시간대",
          "multiple": false,
          "options": [
            "10:30 아침에 출발해서 여유로운 브런치",
            "13:00 점심 먹고 출발해서 지혜의숲과 대형카페",
            "15:30 늦은 오후에 출발해서 노을과 디너"
          ]
        },
        {
          "id": "step_spot",
          "type": "places",
          "title": "파주 출판도시 랜드마크 🏛️",
          "subtitle": "책 향기 가득한 지적인 힐링 명소",
          "multiple": false,
          "places": [
            {
              "name": "지혜의 숲",
              "tag": "대형 서가 / 도서관",
              "desc": "천장까지 닿는 거대한 책장 숲에서 여유롭게 책 읽고 사진 남기기",
              "mapUrl": "https://map.naver.com/p/search/%ED%8C%8C%EC%A3%BC%20%EC%A7%80%ED%98%9C%EC%9D%98%EC%88%B2",
              "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "미메시스 아트 뮤지엄",
              "tag": "건축 / 미술관",
              "desc": "세계적 건축 거장 알바루 시자가 설계한 곡선미 가득한 미술관",
              "mapUrl": "https://map.naver.com/p/search/%EB%AF%B8%EB%A9%94%EC%8B%9C%EC%8A%A4%20%EC%95%84%ED%8A%B8%20%EB%AE%A4%EC%A7%80%EC%97%84",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "파주 브런치 & 맛집 🍽️",
          "subtitle": "드라이브 필수 미식 코스",
          "multiple": false,
          "places": [
            {
              "name": "아이노스 출판단지점",
              "tag": "이탈리안 / 브런치",
              "desc": "수제 화덕피자와 신선한 파니니, 정원이 예쁜 브런치 레스토랑",
              "mapUrl": "https://map.naver.com/p/search/%EC%95%84%EC%9D%B4%EB%85%B8%EC%8A%A4%20%EC%B6%9C%ED%8C%90%EB%8B%A8%EC%A7%80",
              "image": "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "초대형 베이커리 & 헤이리마을 ☕",
          "subtitle": "규모에 놀라는 이색 카페",
          "multiple": false,
          "places": [
            {
              "name": "레드파이프 (RED PIPE)",
              "tag": "초대형 카페 / 루프탑",
              "desc": "5개 층 1,500평 규모의 복합 문화 카페, 이국적인 포토존과 한강 뷰",
              "mapUrl": "https://map.naver.com/p/search/%ED%8C%8C%EC%A3%BC%20%EB%A0%88%EB%93%9C%ED%8C%8C%EC%9D%B4%ED%94%84",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "가드너스 (헤이리마을)",
              "tag": "모던 건축 / 갤러리",
              "desc": "헤이리 예술마을 중심에 위치한 세련된 콘크리트 건축의 대형 카페",
              "mapUrl": "https://map.naver.com/p/search/%ED%97%A4%EC%9D%B4%EB%A6%AC%20%EA%B0%80%EB%93%9C%EB%84%88%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "파주에서 헤이리마을 공방이나 아울렛도 들러볼까요? 💌",
          "subtitle": "원하시는 코스를 자유롭게 적어주세요!",
          "placeholder": "예: 신세계 프리미엄 아울렛 구경도 좋아요!"
        }
      ]
    }
  },
  {
    "key": "drive_namyangju",
    "category": "drive",
    "categoryLabel": "🚗 근교 드라이브",
    "badgeClass": "badge-drive",
    "icon": "🌊",
    "title": "남양주 팔당 북한강 리버뷰",
    "desc": "기와집순두부/초계국수 ➔ 나인블럭 북한강점 ➔ 물의정원 산책",
    "course": {
      "title": "북한강 물결 보며 남양주로 드라이브 갈래요? 🌊🚗",
      "subTitle": "탁 트인 강변 뷰와 맛있는 베이커리, 꽃길 산책!",
      "transitionMain": "남양주 드라이브 당첨! 🚗🌊\n강바람 쐬며 힐링할 준비 완료!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 끌리는 코스를 선택해주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 만나서 출발할까요? ⏰",
          "subtitle": "남양주 팔당 드라이브 출발 시간",
          "multiple": false,
          "options": [
            "11:00 일찍 출발해서 강변 맛집 점심부터",
            "13:30 점심 먹고 탁 트인 리버뷰 카페로",
            "16:30 노을과 밤 모닥불 카페 감상하기"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "팔당 원조 맛집 🍽️",
          "subtitle": "드라이버들이 사랑하는 전설의 맛집",
          "multiple": true,
          "places": [
            {
              "name": "팔당초계국수 본점",
              "tag": "초계국수 / 별미",
              "desc": "살얼음 동동 띄운 새콤달콤 닭가슴살 초계국수와 도토리전",
              "mapUrl": "https://map.naver.com/p/search/%ED%8C%94%EB%8B%B9%EC%B4%88%EA%B3%84%EA%B5%AD%EC%88%98%20%EB%B3%B8%EC%A0%90",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "기와집순두부 조안본점",
              "tag": "전통 한옥 / 순두부",
              "desc": "북한강변 고즈넉한 한옥에서 맛보는 갓 만든 부드러운 수제 생순두부",
              "mapUrl": "https://map.naver.com/p/search/%EA%B8%B0%EC%99%80%EC%A7%91%EC%88%9C%EB%91%90%EB%B6%80%20%EC%A1%B0%EC%95%88%EB%B3%B8%EC%A0%90",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "북한강 파노라마 리버뷰 카페 ☕",
          "subtitle": "강 바로 앞 테라스 명소",
          "multiple": false,
          "places": [
            {
              "name": "나인블럭 북한강점",
              "tag": "대형 베이커리 / 리버뷰",
              "desc": "통유리창 너머로 북한강 물결이 바로 펼쳐지는 스페셜티 커피 명소",
              "mapUrl": "https://map.naver.com/p/search/%EB%82%98%EC%9D%B8%EB%B8%94%EB%9F%AD%20%EB%B6%81%ED%95%9C%EA%B0%95%EC%A0%90",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "포러데이 팔당",
              "tag": "야경스팟 / 모닥불",
              "desc": "밤이 되면 야외 모닥불에서 마시멜로를 구워 먹는 로맨틱 감성 카페",
              "mapUrl": "https://map.naver.com/p/search/%ED%8F%AC%EB%9F%AC%EB%8D%B0%EC%9D%B4%20%ED%8C%94%EB%8B%B9",
              "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_walk",
          "type": "places",
          "title": "자연 힐링 산책로 🌿",
          "subtitle": "인생 사진 남기기 좋은 곳",
          "multiple": false,
          "places": [
            {
              "name": "물의정원 강변 산책길",
              "tag": "자연공원 / 뱃나들이교",
              "desc": "북한강변을 따라 늘어선 수양버들과 계절 꽃밭이 아름다운 수변공원",
              "mapUrl": "https://map.naver.com/p/search/%EB%82%A8%EC%96%91%EC%A3%BC%20%EB%AC%BC%EC%9D%98%EC%A0%95%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "드라이브하며 차에서 나누고 싶은 이야기가 있나요? 💌",
          "subtitle": "듣고 싶은 노래도 편하게 적어주세요!",
          "placeholder": "예: 강변 뷰 보면서 편하게 멍때리고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "drive_suwon",
    "category": "drive",
    "categoryLabel": "🚗 근교 드라이브",
    "badgeClass": "badge-drive",
    "icon": "🏰",
    "title": "수원 행궁동 & 방화수류정 피크닉",
    "desc": "운멜로랩 파스타 ➔ 정지영커피 ➔ 방화수류정 용연 야경 피크닉",
    "course": {
      "title": "화성행궁과 방화수류정으로 낭만 데이트 갈래요? 🏰✨",
      "subTitle": "선재 업고 튀어 촬영지 행리단길과 조선 최고의 야경!",
      "transitionMain": "수원 행궁동 낭만 데이트 확정! 🏰🌙\n성곽길 야경 피크닉 매트 챙겨둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 마음에 드는 코스를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 행궁동에서 만날까요? ⏰",
          "subtitle": "골목 투어와 성곽 야경에 어울리는 시간",
          "multiple": false,
          "options": [
            "12:00 행리단길 오픈런 맛집 점심부터",
            "14:30 화성행궁 관람 & 루프탑 카페 투어",
            "17:00 해질녘 방화수류정 피크닉 & 성곽 야경"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "행리단길 인기 감성 맛집 🍽️",
          "subtitle": "주택을 개조한 아늑한 식당 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "운멜로랩 (UNMELO LAB)",
              "tag": "양식 / 파스타 & 리조또",
              "desc": "트러플 화이트 라구 파스타와 버터 풍미 풍부한 풍기 리조또 맛집",
              "mapUrl": "https://map.naver.com/p/search/%EC%9A%B4%EB%A9%9C%EB%A1%9C%EB%9E%A9%20%ED%96%89%EA%B6%81",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "호미스 (HOMIES)",
              "tag": "스테이크 / 오픈키친",
              "desc": "정성 가득한 부채살 스테이크와 감각적인 인테리어의 작은 레스토랑",
              "mapUrl": "https://map.naver.com/p/search/%ED%98%B8%EB%AF%B8%EC%8A%A4%20%ED%96%89%EA%B6%81",
              "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "성곽 뷰 & 한옥 루프탑 카페 ☕",
          "subtitle": "행궁동의 시그니처 뷰",
          "multiple": false,
          "places": [
            {
              "name": "정지영커피로스터즈 화홍문점",
              "tag": "로스터리 / 성곽뷰",
              "desc": "수원천과 화홍문 누각이 한눈에 내려다보이는 루프탑 커피 성지",
              "mapUrl": "https://map.naver.com/p/search/%EC%A0%95%EC%A7%80%EC%98%81%EC%BB%A4%ED%94%BC%EB%A1%9C%EC%8A%A4%ED%84%B0%EC%A6%88%20%ED%99%94%ED%99%8D%EB%AC%B8",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "카페 팔레센트",
              "tag": "장안문 뷰 / 루프탑",
              "desc": "조선 시대 웅장한 장안문 성곽을 정면에서 바라보는 환상적인 뷰",
              "mapUrl": "https://map.naver.com/p/search/%ED%8C%94%EB%A0%88%EC%84%BC%ED%8A%B8%20%ED%96%89%EA%B6%81",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_night",
          "type": "places",
          "title": "방화수류정 용연 야경 산책 🌙",
          "subtitle": "서울 근교 최고의 로맨틱 포토존",
          "multiple": false,
          "places": [
            {
              "name": "방화수류정 & 용연",
              "tag": "성곽 야경 / 피크닉",
              "desc": "연못에 비치는 정자와 은은한 조명의 화성 성곽을 따라 걷는 밤 산책",
              "mapUrl": "https://map.naver.com/p/search/%EB%B0%A9%ED%99%94%EC%88%98%EB%A5%98%EC%A0%95",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "수원 통닭거리(남문통닭, 진미통닭) 야식도 당기시나요? 💌",
          "subtitle": "가마솥 통닭 포장 코스도 가능해요!",
          "placeholder": "예: 가마솥 통닭 먹어보고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "drive_incheon",
    "category": "drive",
    "categoryLabel": "🚗 근교 드라이브",
    "badgeClass": "badge-drive",
    "icon": "🌉",
    "title": "인천 송도 & 영종도 바다 드라이브",
    "desc": "센트럴파크 문보트 ➔ 바다앞테라스 오션뷰 ➔ 황해해물칼국수",
    "course": {
      "title": "인천대교 건너 서해 바다 드라이브 갈래요? 🌊🚗",
      "subTitle": "송도 센트럴파크 문보트와 영종도 일몰 오션뷰!",
      "transitionMain": "바다 드라이브 데이트 수락 완료! 🌊✨\n인천대교 바다 위를 시원하게 달려요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n원하는 바다 코스를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 출발할까요? ⏰",
          "subtitle": "바다 일몰 시간에 맞춘 드라이브",
          "multiple": false,
          "options": [
            "11:00 송도 센트럴파크에서 점심과 문보트부터",
            "14:00 인천대교 건너 영종도 바다 카페 투어",
            "16:30 서해 붉은 일몰과 해물칼국수 디너"
          ]
        },
        {
          "id": "step_songdo",
          "type": "places",
          "title": "송도 센트럴파크 액티비티 🛶",
          "subtitle": "이국적인 신도시 수변공원",
          "multiple": false,
          "places": [
            {
              "name": "송도 센트럴파크 문보트",
              "tag": "보트 / 이색체험",
              "desc": "초승달 모양의 예쁜 전동 보트를 타고 호수 위를 누비는 로맨틱 보트 투어",
              "mapUrl": "https://map.naver.com/p/search/%EC%86%A1%EB%8F%84%20%EC%84%BC%ED%8A%B8%EB%9F%B4%ED%8C%8C%ED%81%AC%20%EB%B3%B4%ED%8A%B8",
              "image": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "영종도 필수 먹거리 🍜",
          "subtitle": "푸짐한 해물 가득한 유명 맛집",
          "multiple": false,
          "places": [
            {
              "name": "황해해물칼국수 영종도",
              "tag": "해물칼국수 / 가리비",
              "desc": "가리비, 바지락, 황태가 푸짐하게 들어간 시원하고 진한 해물칼국수",
              "mapUrl": "https://map.naver.com/p/search/%ED%99%A9%ED%95%B4%ED%95%B4%EB%AC%BC%EC%B9%BC%EA%B5%AD%EC%88%98",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "영종도 오션뷰 대형 카페 ☕",
          "subtitle": "서해 바다가 한눈에 펼쳐지는 루프탑",
          "multiple": false,
          "places": [
            {
              "name": "바다앞테라스 (구읍뱃터)",
              "tag": "루프탑 / 오션뷰",
              "desc": "탁 트인 서해 바다와 모래사장, 휴양지 테라스 감성의 대형 카페",
              "mapUrl": "https://map.naver.com/p/search/%EB%B0%94%EB%8B%A4%EC%95%9E%ED%85%8C%EB%9D%BC%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "C27 다운타운 마시안점",
              "tag": "선셋 / 치즈케이크",
              "desc": "서해 일몰 명소 마시안 해변 바로 앞, 4가지 뉴욕 테마의 치즈케이크 카페",
              "mapUrl": "https://map.naver.com/p/search/C27%20%EB%8B%A4%EC%9A%B4%ED%83%80%EC%9A%B4%20%EC%98%81%EC%A2%85",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "조개구이나 회 포장, 레일바이크 등도 관심 있으신가요? 💌",
          "subtitle": "좋아하시는 바다 활동을 알려주세요!",
          "placeholder": "예: 바다 보면서 조개구이나 칼국수 먹고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "drive_gapyeong",
    "category": "drive",
    "categoryLabel": "🚗 근교 드라이브",
    "badgeClass": "badge-drive",
    "icon": "🌲",
    "title": "가평 & 청평 호수 드라이브",
    "desc": "청평호수 뷰 ➔ 숯불닭갈비 & 막국수 ➔ 아침고요수목원 산책",
    "course": {
      "title": "푸른 산과 호수가 있는 가평으로 떠날래요? 🌲🚗",
      "subTitle": "청평호수 와인딩 로드와 숯불닭갈비, 피톤치드 힐링!",
      "transitionMain": "가평 힐링 드라이브 출동! 🌲💨\n푸른 자연 속에서 여유롭게 쉬어가요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n마음에 드는 가평 명소를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 서울에서 출발할까요? ⏰",
          "subtitle": "주말 드라이브 시간대 선택",
          "multiple": false,
          "options": [
            "10:00 일찍 출발해 막힘없이 점심 닭갈비",
            "12:30 점심 먹고 호수 카페와 정원 산책",
            "15:00 늦은 오후 수목원 야간 조명 감상"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "가평 대표 별미 🍽️",
          "subtitle": "참숯 향 가득한 숯불닭갈비",
          "multiple": false,
          "places": [
            {
              "name": "칠오닭갈비 본점",
              "tag": "숯불닭갈비 / 가평잣치즈",
              "desc": "가평 특산물 잣 치즈 퐁듀에 찍어 먹는 고소하고 부드러운 숯불닭갈비",
              "mapUrl": "https://map.naver.com/p/search/%EC%B9%A0%EC%98%A4%EB%8B%AD%EA%B0%88%EB%B9%84",
              "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_spot",
          "type": "places",
          "title": "자연 힐링 수목원 & 목장 🌲",
          "subtitle": "꽃과 나무 사이를 거닐기",
          "multiple": false,
          "places": [
            {
              "name": "아침고요수목원",
              "tag": "한국 정원 / 힐링 산책",
              "desc": "축령산 자락 10만 평 꽃밭과 한국 정원의 고즈넉한 아름다움",
              "mapUrl": "https://map.naver.com/p/search/%EC%95%84%EC%B9%A8%EA%B3%A0%EC%9A%94%EC%88%98%EB%AA%A9%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "가평 양떼목장 카페 클라우드힐",
              "tag": "목장 체험 / 베이커리",
              "desc": "초록빛 언덕에서 귀여운 양들에게 건초도 주고 통창 뷰 커피 즐기기",
              "mapUrl": "https://map.naver.com/p/search/%EA%B0%80%ED%8F%89%20%EC%96%91%EB%96%BC%EB%AA%A9%EC%9E%A5",
              "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_lake_cafe",
          "type": "places",
          "title": "청평호수 파노라마 뷰 카페 ☕",
          "subtitle": "잔잔한 호수를 바라보며 쉬어가기",
          "multiple": false,
          "places": [
            {
              "name": "리버레인 청평 (RIVER LANE)",
              "tag": "북한강 뷰 / 대형 베이커리",
              "desc": "숲길과 북한강이 만나는 곳, 강물을 바로 마주보는 테라스 힐링 카페",
              "mapUrl": "https://map.naver.com/p/search/%EC%B2%AD%ED%8F%89%20%EB%A6%AC%EB%B2%84%EB%A0%88%EC%9D%B8",
              "image": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "가평에서 들러보고 싶은 이색 장소(쁘띠프랑스, 이탈리아마을 등)가 있나요? 💌",
          "subtitle": "원하시는 테마를 알려주세요!",
          "placeholder": "예: 예쁜 정원에서 산책하고 사진 찍고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "drive_yangpyeong",
    "category": "drive",
    "categoryLabel": "🚗 근교 드라이브",
    "badgeClass": "badge-drive",
    "icon": "🌻",
    "title": "양평 두물머리 & 세미원 힐링",
    "desc": "두물머리 연핫도그 ➔ 강변 한정식 ➔ 북한강 리버뷰 베이커리",
    "course": {
      "title": "남한강과 북한강이 만나는 양평으로 드라이브 갈래요? 🌻",
      "subTitle": "두물머리 명물 연핫도그와 고요한 강변 산책!",
      "transitionMain": "양평 두물머리 드라이브 출발! 🚗💨\n달콤한 연핫도그 먹으러 가요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 설레는 양평 코스를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "양평으로 몇 시에 출발할까요? ⏰",
          "subtitle": "강변 풍경이 가장 아름다운 시간",
          "multiple": false,
          "options": [
            "11:00 여유롭게 출발해서 한정식 점심부터",
            "13:30 두물머리 연핫도그 & 세미원 산책",
            "16:00 붉은 강변 노을과 운치 있는 디너"
          ]
        },
        {
          "id": "step_spot",
          "type": "places",
          "title": "양평 대표 명소 & 연핫도그 🌭",
          "subtitle": "줄 서서 먹는 두물머리 명물",
          "multiple": false,
          "places": [
            {
              "name": "두물머리 & 명물 연핫도그",
              "tag": "두물머리 / 연핫도그",
              "desc": "연잎 반죽으로 바삭하고 쫀득한 원조 연핫도그와 400년 느티나무 풍경",
              "mapUrl": "https://map.naver.com/p/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC%20%EC%97%B0%ED%95%AB%EB%8F%84%EA%B7%B8",
              "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "세미원 연꽃정원",
              "tag": "생태공원 / 연꽃박물관",
              "desc": "물과 꽃의 정원 세미원에서 배다리를 건너며 누리는 마음의 평화",
              "mapUrl": "https://map.naver.com/p/search/%EC%84%B8%EB%AF%B8%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "한옥 & 리버뷰 대형 베이커리 ☕",
          "subtitle": "넓은 잔디마당이 있는 힐링 카페",
          "multiple": false,
          "places": [
            {
              "name": "하우스베이커리 양평",
              "tag": "한옥 베이커리 / 잔디마당",
              "desc": "고풍스러운 한옥 여러 채와 넓은 잔디밭에서 즐기는 망고 크루아상",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%98%EC%9A%B0%EC%8A%A4%EB%B2%A0%EC%9D%B4%EC%BB%A4%EB%A6%AC%20%EC%96%91%ED%8F%89",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "강변 든든한 정식 맛집 🍽️",
          "subtitle": "속 편하고 정갈한 한식",
          "multiple": false,
          "places": [
            {
              "name": "양평 참좋은생각 한정식",
              "tag": "한정식 / 꽃정원",
              "desc": "예쁜 연못과 정원이 있는 한정식 코스 요리 전문점",
              "mapUrl": "https://map.naver.com/p/search/%EC%B0%B8%EC%A2%8B%EC%9D%80%EC%83%9D%EA%B0%81%20%EC%96%91%ED%8F%89",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "양평에서 가보고 싶었던 장소나 좋아하는 음식이 있나요? 💌",
          "subtitle": "장어구이, 막국수, 도토리묵 등!",
          "placeholder": "예: 북한강 보이는 테라스 카페 꼭 가고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "hangang",
    "category": "activity",
    "categoryLabel": "✨ 테마 & 액티비티",
    "badgeClass": "badge-activity",
    "icon": "🌊",
    "title": "한강 피크닉 & 노을 라면",
    "desc": "돗자리/텐트 대여 ➔ 편의점 뽀글이 라면 ➔ 따릉이 & 분수쇼",
    "course": {
      "title": "날씨 좋은 날 한강 피크닉 갈래요? 🌊",
      "subTitle": "시원한 강바람 쐬며 힐링하는 하루!",
      "transitionMain": "한강 피크닉 당첨! 돗자리랑 간식 챙길게요 🧺✨\n노을 보면서 힐링해요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 끌리는 피크닉 코스를 골라주세요!",
      "steps": [
        {
          "id": "step_location",
          "type": "choice",
          "title": "어느 한강공원으로 갈까요? 🌊",
          "subtitle": "원하는 공원을 선택해주세요",
          "multiple": false,
          "options": [
            "여의도 한강공원 (접근성 최고 & 배달존)",
            "반포 한강공원 (세빛섬 & 달빛무지개분수)",
            "뚝섬 한강공원 (서울숲 연결 & 잔디광장)"
          ]
        },
        {
          "id": "step_picnic",
          "type": "places",
          "title": "피크닉 필수 코스 & 먹거리 🍜",
          "subtitle": "한강에서 꼭 해야 할 것들 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "한강 편의점 뽀글이 라면 & 치맥",
              "tag": "피크닉 / 라면치맥",
              "desc": "은박지 그릇에 보글보글 끓인 즉석 라면과 시원한 치맥 조합!",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%9C%EA%B0%95%20%EB%9D%BC%EB%A9%B4",
              "image": "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "감성 피크닉 세트 & 텐트 대여",
              "tag": "피크닉 / 텐트",
              "desc": "감성 매트, 접이식 테이블, 블루투스 스피커와 무드등 풀세트",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%9C%EA%B0%95%20%ED%94%BC%ED%81%AC%EB%8B%89%20%EB%8C%80%EC%97%AC",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_activity",
          "type": "places",
          "title": "노을 질 때 액티비티 🚲",
          "subtitle": "한강의 로맨틱한 황금 시간대",
          "multiple": false,
          "places": [
            {
              "name": "따릉이 강변 라이딩",
              "tag": "자전거 / 액티비티",
              "desc": "노을빛으로 물든 한강을 따라 시원하게 달리기",
              "mapUrl": "https://map.naver.com/p/search/%EB%94%B0%EB%A6%89%EC%9D%B4",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "반포 달빛무지개분수 야경 감상",
              "tag": "야경 / 분수쇼",
              "desc": "세계 최장 교량 분수쇼와 잔디밭 음악 감상",
              "mapUrl": "https://map.naver.com/p/search/%EB%8B%AC%EB%B9%9B%EB%AC%B4%EC%A7%80%EA%B0%9C%EB%B6%84%EC%88%98",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "피크닉 때 특별히 먹고 싶은 간식이 있나요? 💌",
          "subtitle": "좋아하는 과일, 과자, 배달 음식 등 적어주세요!",
          "placeholder": "예: 떡볶이랑 순대 배달시켜 먹고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "rainy_indoor",
    "category": "activity",
    "categoryLabel": "✨ 테마 & 액티비티",
    "badgeClass": "badge-activity",
    "icon": "☔",
    "title": "비오는 날 실내 감성 데이트",
    "desc": "모던샤브하우스 ➔ 시그니처 향수 공방 ➔ 통유리 북카페",
    "course": {
      "title": "비오는 날 빗소리 들으며 실내 데이트할래요? ☔",
      "subTitle": "비 와도 뽀송뽀송하고 로맨틱하게!",
      "transitionMain": "비오는 날의 운치 있는 데이트! ☔🌧️\n비 한 방울 안 맞게 완벽 준비할게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 마음에 드는 실내 코스를 골라봐요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "비오는 날 몇 시에 만날까요? ⏰",
          "subtitle": "편한 시간대로 골라주세요",
          "multiple": false,
          "options": [
            "12:00 따뜻한 점심부터 실내에서 만나요",
            "14:00 나른한 오후 공방이나 전시부터",
            "17:30 빗소리 들으며 저녁 식사부터"
          ]
        },
        {
          "id": "step_lunch",
          "type": "places",
          "title": "비오는 날 딱 맞는 따뜻한 메뉴 🍲",
          "subtitle": "국물과 면요리 후보 (중복 가능)",
          "multiple": true,
          "places": [
            {
              "name": "모던샤브하우스",
              "tag": "샤브샤브 / 뷔페",
              "desc": "고급스러운 인테리어에서 즐기는 무제한 프리미엄 샤브샤브",
              "mapUrl": "https://map.naver.com/p/search/%EB%AA%A8%EB%8D%98%EC%83%A4%EB%B8%8C%ED%95%98%EC%9A%B0%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "멘야하나비",
              "tag": "일식 / 마제소바",
              "desc": "비오는 날 입맛을 확 돋워주는 중독성 강한 원조 비빔라멘",
              "mapUrl": "https://map.naver.com/p/search/%EB%A9%98%EC%95%BC%ED%95%98%EB%82%98%EB%B9%84",
              "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_activity",
          "type": "places",
          "title": "뽀송한 실내 감성 놀거리 🎨",
          "subtitle": "비 걱정 없이 몰입하는 실내 공간",
          "multiple": true,
          "places": [
            {
              "name": "나만의 시그니처 향수 공방",
              "tag": "공방 / 향수",
              "desc": "서로의 취향을 담아 세상에 단 하나뿐인 시그니처 향수 제작하기",
              "mapUrl": "https://map.naver.com/p/search/%ED%96%A5%EC%88%98%20%EA%B3%B5%EB%B0%A9",
              "image": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "그라운드시소 미디어아트 전시",
              "tag": "전시 / 실내",
              "desc": "날씨 구애 없이 감각적인 영상과 사운드에 흠뻑 빠지는 전시",
              "mapUrl": "https://map.naver.com/p/search/%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%8B%9C%EC%86%8C",
              "image": "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "창밖 빗소리 들리는 통유리 카페 ☕",
          "subtitle": "운치 있는 티타임",
          "multiple": false,
          "places": [
            {
              "name": "통유리창 대형 북카페",
              "tag": "북카페 / 커피",
              "desc": "넓은 통창으로 빗방울을 구경하며 따뜻한 바닐라 라떼 마시기",
              "mapUrl": "https://map.naver.com/p/search/%EB%8C%80%ED%98%95%20%EB%B6%81%EC%B9%B4%ED%8E%98",
              "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "비오는 날 특별히 생각나는 음식이나 하고 싶은 것이 있나요? 💌",
          "subtitle": "파전에 막걸리도 언제나 환영이에요!",
          "placeholder": "예: 창가 자리에서 도란도란 이야기하고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "perfume_workshop",
    "category": "activity",
    "categoryLabel": "✨ 테마 & 액티비티",
    "badgeClass": "badge-activity",
    "icon": "🌸",
    "title": "나만의 시그니처 향수 만들기",
    "desc": "프라이빗 조향 원데이 클래스 ➔ 아늑한 파스타 ➔ 대화형 티룸",
    "course": {
      "title": "서로를 닮은 향수를 직접 만들어볼래요? 🌸✨",
      "subTitle": "단 하나뿐인 향기를 조향하며 잊지 못할 추억 만들기!",
      "transitionMain": "향수 만들기 데이트 당첨! 🌸✨\n서로에게 어울리는 최고의 향을 찾아봐요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n원하는 클래스 분위기를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "공방 예약 시간대를 골라주세요 ⏰",
          "subtitle": "조향 클래스 소요시간은 약 1시간 30분입니다",
          "multiple": false,
          "options": [
            "13:00 점심 식사 후 나른한 오후 조향 클래스",
            "15:00 여유롭게 티타임 즐긴 후 클래스 참여",
            "17:00 향수 완성하고 로맨틱한 디너로 이어지는 코스"
          ]
        },
        {
          "id": "step_perfume",
          "type": "places",
          "title": "프리미엄 조향 원데이 클래스 🌸",
          "subtitle": "프라이빗하게 시향하고 조향하는 공방",
          "multiple": false,
          "places": [
            {
              "name": "닷노트 (DOTNOTE) 향수공방",
              "tag": "원데이 클래스 / 조향",
              "desc": "태블릿 영상을 보며 조향사 간섭 없이 둘만의 속도로 조향하는 감성 공방",
              "mapUrl": "https://map.naver.com/p/search/%EB%8B%B7%EB%85%B8%ED%8A%B8%20%ED%96%A5%EC%88%98",
              "image": "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "향기로운 데이트와 어울리는 다이닝 🍽️",
          "subtitle": "분위기 은은하고 대화하기 좋은 곳",
          "multiple": false,
          "places": [
            {
              "name": "골목 아늑한 생면 파스타 비스트로",
              "tag": "이탈리안 / 와인",
              "desc": "부드러운 조명 아래 와인 한잔과 정성 담긴 트러플 파스타",
              "mapUrl": "https://map.naver.com/p/search/%EC%83%9D%EB%A9%B4%20%ED%8C%8C%EC%8A%A4%ED%83%80",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_tea",
          "type": "places",
          "title": "차분한 힐링 티하우스 🍵",
          "subtitle": "서로의 향수를 맡아보며 이야기 나누기",
          "multiple": false,
          "places": [
            {
              "name": "델픽 (DELPHIC) 티하우스",
              "tag": "프리미엄 티룸 / 북촌",
              "desc": "돌과 나무가 어우러진 미니멀한 공간에서 즐기는 블렌딩 티와 다식",
              "mapUrl": "https://map.naver.com/p/search/%EB%8D%B8%ED%94%BD",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "평소 좋아하는 향기 스타일이 있나요? 💌",
          "subtitle": "우디, 플로럴, 시트러스, 머스크, 비누향 등",
          "placeholder": "예: 은은한 비누향이나 우디한 향 좋아해요!"
        }
      ]
    }
  },
  {
    "key": "pottery_ceramic",
    "category": "activity",
    "categoryLabel": "✨ 테마 & 액티비티",
    "badgeClass": "badge-activity",
    "icon": "🏺",
    "title": "도자기 물레 & 그릇 빚기",
    "desc": "손으로 빚는 도예 원데이 클래스 ➔ 정갈한 한식 ➔ 한옥 정원 카페",
    "course": {
      "title": "부드러운 흙 만지며 도자기 만들어볼래요? 🏺",
      "subTitle": "영화 <사랑과 영혼>처럼 로맨틱한 물레 체험!",
      "transitionMain": "도자기 공방 데이트 확정! 🏺✨\n서로를 위한 예쁜 컵이나 접시를 빚어봐요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 빚고 싶은 도자기를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "도예 클래스 몇 시로 예약할까요? ⏰",
          "subtitle": "물레 체험 소요시간은 약 1시간 30분입니다",
          "multiple": false,
          "options": [
            "13:00 점심 식사 후 오후 물레 클래스",
            "15:30 여유롭게 햇살 가득할 때 체험",
            "17:00 저녁 전 클래스 후 따뜻한 한식 디너"
          ]
        },
        {
          "id": "step_ceramic",
          "type": "places",
          "title": "도예 원데이 클래스 🏺",
          "subtitle": "직접 물레를 돌려 그릇을 만드는 시간",
          "multiple": false,
          "places": [
            {
              "name": "감성 도예공방 물레 클래스",
              "tag": "도자기 / 원데이 클래스",
              "desc": "빙글빙글 돌아가는 물레 위에서 파스타볼, 머그컵, 요거트볼 직접 만들기",
              "mapUrl": "https://map.naver.com/p/search/%EB%8F%84%EC%9E%90%EA%B8%B0%20%EA%B3%B5%EB%B0%A9%20%EC%9B%90%EB%8D%B0%EC%9D%B4",
              "image": "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "손 씻고 먹는 따뜻한 솥밥 정식 🍚",
          "subtitle": "정갈하고 속 편한 한식",
          "multiple": false,
          "places": [
            {
              "name": "소담한 도자기 솥밥 다이닝",
              "tag": "솥밥 / 정갈한 한식",
              "desc": "도자기 그릇에 정갈하게 담겨 나오는 스테이크 솥밥과 도미 솥밥",
              "mapUrl": "https://map.naver.com/p/search/%EC%86%A5%EB%B0%A5%20%EB%A7%9B%EC%A7%91",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "고즈넉한 한옥 전통 찻집 ☕",
          "subtitle": "자연을 마주보는 힐링 공간",
          "multiple": false,
          "places": [
            {
              "name": "성북동 수연산방 한옥 카페",
              "tag": "한옥 찻집 / 단호박빙수",
              "desc": "상허 이태준 가옥에서 맛보는 진한 대추차와 달콤한 단호박 빙수",
              "mapUrl": "https://map.naver.com/p/search/%EC%88%98%EC%97%B0%EC%82%B0%EB%B0%A9",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "직접 만들어보고 싶은 그릇 종류가 있나요? 💌",
          "subtitle": "커플 머그잔, 시리얼볼, 꽃병 등",
          "placeholder": "예: 커플 머그컵 만들어보고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "escape_boardgame",
    "category": "activity",
    "categoryLabel": "✨ 테마 & 액티비티",
    "badgeClass": "badge-activity",
    "icon": "🗝️",
    "title": "스릴 넘치는 방탈출 & 보드게임",
    "desc": "프리미엄 몰입형 방탈출 ➔ 레드버튼 보드게임룸 ➔ 피맥/버거 다이닝",
    "course": {
      "title": "짜릿하고 흥미진진한 방탈출 & 보드게임 할래요? 🗝️🎲",
      "subTitle": "서로 머리를 맞대고 문제를 풀며 완벽한 팀워크 발휘!",
      "transitionMain": "방탈출 & 게임 데이트 성사! 🗝️✨\n탈출 성공률 100%를 향해 힘을 합쳐봐요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n도전하고 싶은 장르를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 만나서 도전할까요? ⏰",
          "subtitle": "몰입도 높은 플레이 시간대",
          "multiple": false,
          "options": [
            "13:30 점심 먹고 방탈출 예약 시간에 맞춰!",
            "16:00 오후 방탈출 탈출 후 보드게임 카페 연계",
            "18:30 저녁 피맥 후 심야 방탈출 도전"
          ]
        },
        {
          "id": "step_escape",
          "type": "places",
          "title": "프리미엄 몰입형 방탈출 🗝️",
          "subtitle": "영화 세트장 같은 압도적 스케일",
          "multiple": false,
          "places": [
            {
              "name": "비트포비아 던전 (강남/홍대)",
              "tag": "프리미엄 방탈출 / 몰입형",
              "desc": "정교한 인테리어와 몰입도 최상의 스토리라인을 자랑하는 웰메이드 테마",
              "mapUrl": "https://map.naver.com/p/search/%EB%B9%84%ED%8A%B8%ED%8F%AC%EB%B9%84%EC%95%84%20%EB%8D%98%EC%A0%84",
              "image": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "키이스케이프",
              "tag": "스토리 명작 / 방탈출",
              "desc": "예약 오픈 1초 만에 마감되는 서울 최고 인기 방탈출 카페",
              "mapUrl": "https://map.naver.com/p/search/%ED%82%A4%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84",
              "image": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_board",
          "type": "places",
          "title": "프라이빗 룸 보드게임 카페 🎲",
          "subtitle": "음료 마시며 승부욕 불태우기",
          "multiple": false,
          "places": [
            {
              "name": "보드게임카페 레드버튼",
              "tag": "보드게임 / 프라이빗 룸",
              "desc": "태블릿으로 게임 룰 설명 듣고 넷플릭스 룸처럼 편안하게 즐기는 게임 공간",
              "mapUrl": "https://map.naver.com/p/search/%EB%A0%88%EB%93%9C%EB%B2%84%ED%8A%BC%20%EB%B3%B4%EB%93%9C%EA%B2%8C%EC%9E%84",
              "image": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "탈출 성공 기념 피맥 & 버거 🍕",
          "subtitle": "에너지 소모 후 즐기는 꿀맛 식사",
          "multiple": false,
          "places": [
            {
              "name": "파이프그라운드 (옥수수피자)",
              "tag": "피맥 / 옥수수피자",
              "desc": "달콤 고소한 마약 옥수수 피자와 시원한 수제 생맥주 페어링",
              "mapUrl": "https://map.naver.com/p/search/%ED%8C%8C%EC%9D%B4%ED%94%84%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C",
              "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "공포 테마도 괜찮으신가요? 아니면 감성/추리 테마를 선호하시나요? 💌",
          "subtitle": "무서운 건 질색이라면 꼭 미리 알려주세요!",
          "placeholder": "예: 깜짝 놀라는 건 무서워요! 추리/판타지 좋아요!"
        }
      ]
    }
  },
  {
    "key": "aquarium_cinema",
    "category": "activity",
    "categoryLabel": "✨ 테마 & 액티비티",
    "badgeClass": "badge-activity",
    "icon": "🐬",
    "title": "코엑스 아쿠아리움 & 부티크 영화관",
    "desc": "별마당도서관 ➔ 아쿠아리움 해양 탐험 ➔ 메가박스 더 부티크 관람",
    "course": {
      "title": "코엑스에서 신비로운 바닷속 보고 영화 볼래요? 🐬🎬",
      "subTitle": "푸른 바다 생물들과 별마당도서관, 최고급 리클라이너 영화관!",
      "transitionMain": "코엑스 실내 풀코스 데이트 수락! 🐬✨\n편안하고 낭만적인 시간으로 채워둘게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 설레는 장소를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "삼성역 코엑스에서 몇 시에 만날까요? ⏰",
          "subtitle": "영화 상영 시간표를 고려한 시간",
          "multiple": false,
          "options": [
            "12:00 점심 식사 후 오후 아쿠아리움 & 영화",
            "14:30 별마당도서관 구경 후 아쿠아리움 입장",
            "16:30 저녁 아쿠아리움 관람 후 부티크 영화 & 디너"
          ]
        },
        {
          "id": "step_aqua",
          "type": "places",
          "title": "신비로운 바닷속 세상 🌊",
          "subtitle": "상어와 가오리, 해저터널 인생 사진",
          "multiple": false,
          "places": [
            {
              "name": "코엑스 아쿠아리움",
              "tag": "아쿠아리움 / 해저터널",
              "desc": "4만여 마리 해양 생물과 신비로운 푸른 수조 앞에서 남기는 커플 사진",
              "mapUrl": "https://map.naver.com/p/search/%EC%BD%94%EC%97%91%EC%8A%A4%20%EC%95%84%EC%BF%A0%EC%95%84%EB%A6%AC%EC%9B%80",
              "image": "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_library",
          "type": "places",
          "title": "코엑스 랜드마크 포토존 📚",
          "subtitle": "13m 높이의 웅장한 서가",
          "multiple": false,
          "places": [
            {
              "name": "별마당 도서관",
              "tag": "대형 서가 / 문화공간",
              "desc": "천장까지 닿는 거대한 책장과 은은한 조명 아래서 사진 찍기",
              "mapUrl": "https://map.naver.com/p/search/%EB%B3%84%EB%A7%88%EB%8B%B9%20%EB%8F%84%EC%84%9C%EA%B4%80",
              "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cinema",
          "type": "places",
          "title": "호텔급 럭셔리 영화관 관람 🎬",
          "subtitle": "누워서 보는 프리미엄 리클라이너 좌석",
          "multiple": false,
          "places": [
            {
              "name": "메가박스 코엑스 더 부티크 (The Boutique)",
              "tag": "프리미엄 영화관 / 와인",
              "desc": "웰컴 드링크와 전용 라운지, 호텔 스위트룸 같은 편안한 리클라이너 좌석",
              "mapUrl": "https://map.naver.com/p/search/%EB%A9%94%EA%B0%80%EB%B0%95%EC%8A%A4%20%EC%BD%94%EC%97%91%EC%8A%A4%20%EB%B6%80%ED%8B%B0%ED%81%AC",
              "image": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "요즘 보고 싶었던 개봉 영화가 있나요? 💌",
          "subtitle": "부티크 좋은 좌석으로 예매해둘게요!",
          "placeholder": "예: 최근 개봉한 영화 편하게 보고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "cooking_baking",
    "category": "activity",
    "categoryLabel": "✨ 테마 & 액티비티",
    "badgeClass": "badge-activity",
    "icon": "🧁",
    "title": "커플 베이킹 & 케이크 클래스",
    "desc": "서로에게 선물하는 수제 케이크 베이킹 ➔ 와인 비스트로 ➔ 감성 산책",
    "course": {
      "title": "서로를 위해 달콤한 케이크를 직접 만들어볼래요? 🧁✨",
      "subTitle": "생크림 아이싱과 귀여운 레터링으로 완성하는 우리만의 케이크!",
      "transitionMain": "달콤한 베이킹 데이트 성사! 🎂✨\n앞치마 두르고 재미있게 만들어봐요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n만들어보고 싶은 디저트를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "베이킹 클래스 몇 시로 예약할까요? ⏰",
          "subtitle": "베이킹 소요시간은 약 2시간입니다",
          "multiple": false,
          "options": [
            "13:00 점심 후 나른한 오후 달콤한 베이킹",
            "15:30 디저트 완성 후 저녁 와인바로 이어지는 코스",
            "17:00 저녁 전 베이킹 후 완성된 케이크 들고 디너"
          ]
        },
        {
          "id": "step_baking",
          "type": "places",
          "title": "원데이 베이킹 & 레터링 케이크 🎂",
          "subtitle": "초보자도 쉽게 만드는 친절한 클래스",
          "multiple": false,
          "places": [
            {
              "name": "원데이 베이킹 스튜디오",
              "tag": "베이킹 / 레터링 케이크",
              "desc": "포슬포슬 시트에 생크림을 바르고 원하는 문구와 그림을 그리는 케이크 클래스",
              "mapUrl": "https://map.naver.com/p/search/%EC%9B%90%EB%8D%B0%EC%9D%B4%20%EB%B2%A0%EC%9D%B4%ED%82%B9%20%ED%81%B4%EB%9E%98%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_dinner",
          "type": "places",
          "title": "케이크를 곁들일 분위기 좋은 비스트로 🍷",
          "subtitle": "직접 만든 케이크 촛불 켜기 좋은 곳",
          "multiple": false,
          "places": [
            {
              "name": "아늑한 와인 다이닝 비스트로",
              "tag": "와인 / 파스타",
              "desc": "은은한 촛불 조명과 맛있는 파스타, 글라스 와인을 곁들이는 저녁",
              "mapUrl": "https://map.naver.com/p/search/%EC%99%80%EC%9D%B8%20%EB%B9%84%EC%8A%A4%ED%8A%B8%EB%A1%9C",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "케이크 위에 쓰고 싶은 특별한 문구나 좋아하는 맛이 있나요? 💌",
          "subtitle": "초코, 딸기, 얼그레이 등",
          "placeholder": "예: 딸기 생크림 케이크에 귀여운 문구 넣고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "blind_date_first",
    "category": "romantic",
    "categoryLabel": "💖 로맨틱 & 시즌",
    "badgeClass": "badge-romantic",
    "icon": "💌",
    "title": "첫 만남 & 소개팅 설렘 코스",
    "desc": "조용하고 은은한 레스토랑 ➔ 소파 좌석 대화형 카페 ➔ 가벼운 와인",
    "course": {
      "title": "우리 처음 만나는 날, 함께 맛있는 거 먹을래요? 💌",
      "subTitle": "서로에게 온전히 집중할 수 있는 편안하고 차분한 시간!",
      "transitionMain": "첫 만남 수락 고마워요! 두근두근... 💓\n편안하고 설레는 시간 만들어드릴게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 편안하게 느껴지는 분위기를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "첫 만남에 가장 편안한 시간대는 언제인가요? ⏰",
          "subtitle": "어색함 없이 자연스러운 시간",
          "multiple": false,
          "options": [
            "12:30 주말 여유로운 점심 파스타 & 커피",
            "15:00 부담 없이 가벼운 커피와 디저트 먼저",
            "18:30 저녁 분위기 좋은 식사와 가벼운 글라스 와인"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "대화하기 좋은 조용한 레스토랑 🍽️",
          "subtitle": "소음 데시벨이 낮고 조명이 은은한 공간",
          "multiple": false,
          "places": [
            {
              "name": "삼청동 PKM 가든 레스토랑",
              "tag": "갤러리 정원 / 이탈리안",
              "desc": "통창 너머로 청와대와 삼청동 숲이 보이며, 테이블 간격이 넓어 대화에 집중하기 최적",
              "mapUrl": "https://map.naver.com/p/search/PKM%20%EA%B0%80%EB%93%A0%20%EB%A0%88%EC%8A%A4%ED%86%A0%EB%9E%91",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "한남동 조용한 예약제 오스테리아",
              "tag": "캐주얼 다이닝 / 와인",
              "desc": "은은한 핀 조명 아래서 정갈한 파스타와 부드러운 글라스 와인 한잔",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%9C%EB%82%A8%EB%8F%99%20%EC%98%A4%EC%8A%A4%ED%85%8C%EB%A6%AC%EC%95%84",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "푹신한 소파가 있는 대화형 카페 ☕",
          "subtitle": "첫 만남의 긴장감을 사르르 녹여주는 공간",
          "multiple": false,
          "places": [
            {
              "name": "조용한 정원 뷰 감성 소파 카페",
              "tag": "정원 뷰 / 핸드드립",
              "desc": "클래식 음악이 잔잔하게 흐르고 푹신한 좌석에서 차분하게 이야기 나누기",
              "mapUrl": "https://map.naver.com/p/search/%EA%B0%90%EC%84%B1%20%EC%86%8C%ED%8C%8C%20%EC%B9%B4%ED%8E%98",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "피하고 싶은 음식(날것, 매운것 등)이나 선호하는 분위기가 있나요? 💌",
          "subtitle": "첫 만남인 만큼 편하게 알려주시면 세심하게 배려할게요!",
          "placeholder": "예: 매운 건 잘 못 먹어요 / 조용한 곳이 편해요!"
        }
      ]
    }
  },
  {
    "key": "anniversary",
    "category": "romantic",
    "categoryLabel": "💖 로맨틱 & 시즌",
    "badgeClass": "badge-romantic",
    "icon": "🥩",
    "title": "기념일 로맨틱 파인다이닝",
    "desc": "울프강 스테이크하우스 코스 ➔ 라이브 재즈바 ➔ 루프탑 샴페인",
    "course": {
      "title": "우리 소중한 특별한 날 함께할래요? 🥩✨",
      "subTitle": "잊지 못할 가장 로맨틱한 순간을 선물할게요!",
      "transitionMain": "우리 둘만의 특별한 기념일! 🥂✨\n세상에서 제일 행복한 하루를 만들어줄게요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 행복해요 ✨\n마음에 드는 코스를 선택해주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "기념일 디너 몇 시로 예약할까요? ⏰",
          "subtitle": "기념일 예약 시간대 선택",
          "multiple": false,
          "options": [
            "17:30 노을을 감상하며 1부 디너 🌅",
            "19:30 화려한 야경과 함께하는 2부 디너 🌃",
            "12:30 여유로운 기념일 런치 코스 🍽️"
          ]
        },
        {
          "id": "step_dining",
          "type": "places",
          "title": "로맨틱 파인다이닝 & 스테이크 🥩",
          "subtitle": "특별한 날을 빛내줄 최고급 다이닝",
          "multiple": false,
          "places": [
            {
              "name": "울프강 스테이크하우스 청담",
              "tag": "뉴욕 정통 스테이크",
              "desc": "최고급 드라이에이징 포터하우스와 럭셔리한 분위기",
              "mapUrl": "https://map.naver.com/p/search/%EC%9A%B8%ED%94%84%EA%B0%95%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4",
              "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "테이블34 (그랜드 인터컨티넨탈)",
              "tag": "프렌치 다이닝",
              "desc": "34층 환상적인 시티뷰와 섬세한 프렌치 코스 요리",
              "mapUrl": "https://map.naver.com/p/search/%ED%85%8C%EC%9D%B4%EB%B8%9434",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_after",
          "type": "places",
          "title": "로맨틱한 2차 분위기 스팟 🍷",
          "subtitle": "음악과 와인으로 기념일 완성하기",
          "multiple": false,
          "places": [
            {
              "name": "라이브 재즈바 부기우기",
              "tag": "라이브 재즈 / 칵테일",
              "desc": "감미로운 색소폰과 피아노 선율 속에서 칵테일 한잔 건배 🎷",
              "mapUrl": "https://map.naver.com/p/search/%EB%B6%80%EA%B8%B0%EC%9A%B0%EA%B8%B0%20%EC%9E%AC%EC%A6%88%EB%B0%94",
              "image": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "호텔 스카이라운지 바",
              "tag": "스카이라운지 / 샴페인",
              "desc": "로맨틱한 샴페인 건배와 오래 기억될 환상적인 서울 야경",
              "mapUrl": "https://map.naver.com/p/search/%ED%98%B8%ED%85%94%20%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9A%B4%EC%A7%80",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "기념일에 꼭 받고 싶거나 함께 나누고 싶은 이야기가 있다면 적어줘요! 💌",
          "subtitle": "선물이나 꽃, 이벤트 취향도 좋아요!",
          "placeholder": "예: 사진 예쁘게 남길 수 있는 곳이면 좋겠어요!"
        }
      ]
    }
  },
  {
    "key": "propose_romantic",
    "category": "romantic",
    "categoryLabel": "💖 로맨틱 & 시즌",
    "badgeClass": "badge-romantic",
    "icon": "💍",
    "title": "감동 프로포즈 & 특별 이벤트",
    "desc": "프라이빗 룸 디너 ➔ 한강 프라이빗 요트 투어 ➔ 플라워 & 샴페인",
    "course": {
      "title": "평생 기억에 남을 특별한 순간을 함께해줄래요? 💍✨",
      "subTitle": "오직 한 사람만을 위해 준비한 감동의 시간!",
      "transitionMain": "수락해줘서 정말 고마워요... 눈물 날 것 같아요 💍😭\n평생 잊지 못할 최고의 순간을 만들어줄게요!",
      "transitionSub": "하늘에서 온 우주의 별이 쏟아지는 것처럼 벅차요! ✨\n우리 둘만의 영화 같은 코스를 완성해봐요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "가장 로맨틱한 시간대를 선택해주세요 ⏰",
          "subtitle": "노을 또는 야경 골든아워",
          "multiple": false,
          "options": [
            "18:00 한강 붉은 노을 타이밍에 요트 투어",
            "19:30 별빛 반짝이는 밤하늘 야경 디너 & 세레나데",
            "21:00 프라이빗 라운지에서 둘만의 프라이빗 이벤트"
          ]
        },
        {
          "id": "step_main_event",
          "type": "places",
          "title": "단둘만을 위한 프라이빗 요트 & 다이닝 ⛵",
          "subtitle": "세상에서 가장 특별한 주인공이 되는 순간",
          "multiple": false,
          "places": [
            {
              "name": "한강 더리버 프라이빗 요트 투어",
              "tag": "럭셔리 요트 / 샴페인",
              "desc": "한강 물결 위에서 단둘이 즐기는 샴페인과 선상 일몰 파노라마",
              "mapUrl": "https://map.naver.com/p/search/%ED%95%9C%EA%B0%95%20%EB%8D%94%EB%A6%AC%EB%B2%84%20%EC%9A%94%ED%8A%B8",
              "image": "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "63빌딩 워킹온더클라우드 프라이빗 룸",
              "tag": "고층 뷰 / 프라이빗 다이닝",
              "desc": "59층에서 내려다보는 서울 불빛과 캔들 플라워 테이블 코스",
              "mapUrl": "https://map.naver.com/p/search/%EC%9B%8C%ED%82%B9%EC%98%A8%EB%8D%94%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C",
              "image": "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_gift",
          "type": "places",
          "title": "감동의 플라워 & 레터링 케이크 💐",
          "subtitle": "마음을 담은 선물",
          "multiple": false,
          "places": [
            {
              "name": "커스텀 플라워 부티크 & 레터링 케이크",
              "tag": "꽃다발 / 수제케이크",
              "desc": "진심이 담긴 손편지와 세상에 하나뿐인 레터링 플라워 박스",
              "mapUrl": "https://map.naver.com/p/search/%ED%94%8C%EB%9D%BC%EC%9B%8C%20%EB%B6%80%ED%8B%B0%ED%81%AC",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "특별히 꿈꿔왔던 이벤트나 듣고 싶은 음악이 있나요? 💌",
          "subtitle": "가장 소중하게 간직할 수 있도록 완벽하게 준비할게요!",
          "placeholder": "예: 은은하고 잔잔한 음악과 편지가 있으면 좋겠어요!"
        }
      ]
    }
  },
  {
    "key": "spring_cherry",
    "category": "romantic",
    "categoryLabel": "💖 로맨틱 & 시즌",
    "badgeClass": "badge-romantic",
    "icon": "🌸",
    "title": "봄 벚꽃 낭만 피크닉",
    "desc": "여의도 윤중로/석촌호수 벚꽃길 ➔ 딸기 디저트 ➔ 벚꽃 야경 산책",
    "course": {
      "title": "분홍빛 벚꽃 비 맞으러 봄나들이 갈래요? 🌸",
      "subTitle": "일 년에 단 한 번, 벚꽃이 만개하는 가장 예쁜 계절!",
      "transitionMain": "벚꽃 데이트 확정! 🌸🌿\n돗자리랑 벚꽃 피크닉 간식 가득 챙길게요!",
      "transitionSub": "하늘에서 분홍빛 벚꽃과 별이 쏟아져요! ✨\n가장 걷고 싶은 벚꽃 명소를 골라주세요!",
      "steps": [
        {
          "id": "step_spot",
          "type": "choice",
          "title": "어느 벚꽃 명소로 떠날까요? 🌸",
          "subtitle": "서울 대표 벚꽃 핫플레이스",
          "multiple": false,
          "options": [
            "석촌호수 벚꽃 둘레길 (호수와 벚꽃터널의 조화)",
            "여의도 윤중로 벚꽃길 (한강 바람과 웅장한 벚꽃나무)",
            "서울숲 벚꽃길 & 바람의 언덕 (사슴 방사장 벚꽃 숲)"
          ]
        },
        {
          "id": "step_cafe",
          "type": "places",
          "title": "봄 시즌 딸기 & 벚꽃 디저트 🍓",
          "subtitle": "달콤한 봄의 맛",
          "multiple": false,
          "places": [
            {
              "name": "딸기 수플레 팬케이크 카페",
              "tag": "수플레 / 생딸기 디저트",
              "desc": "폭신폭신 구름 같은 수플레 위에 생딸기와 달콤한 딸기 크림",
              "mapUrl": "https://map.naver.com/p/search/%EB%94%B8%EA%B8%B0%20%EC%88%98%ED%94%8C%EB%A0%88%20%ED%8C%AC%EC%BC%80%EC%9D%B4%ED%81%AC",
              "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "벚꽃 뷰 테라스 카페",
              "tag": "테라스 / 벚꽃뷰",
              "desc": "창밖으로 분홍 벚꽃이 손에 닿을 듯 가득한 감성 테라스",
              "mapUrl": "https://map.naver.com/p/search/%EB%B2%9A%EA%BD%83%20%EC%B9%B4%ED%8E%98",
              "image": "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_walk",
          "type": "places",
          "title": "밤에 더 로맨틱한 벚꽃 야경 조명길 🌙",
          "subtitle": "불빛에 비친 환상적인 벚꽃길",
          "multiple": false,
          "places": [
            {
              "name": "벚꽃 야경 라이트업 산책로",
              "tag": "야경 / 벚꽃산책",
              "desc": "색색의 조명을 받아 은하수처럼 반짝이는 밤 벚꽃길 걷기",
              "mapUrl": "https://map.naver.com/p/search/%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98%20%EB%B2%9A%EA%BD%83",
              "image": "https://images.unsplash.com/photo-1522383225653-ed111181a951?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "벚꽃 나무 아래서 남기고 싶은 사진 포즈나 추억이 있나요? 💌",
          "subtitle": "카메라 챙겨가서 인생샷 100장 찍어드릴게요!",
          "placeholder": "예: 벚꽃 흩날릴 때 예쁜 사진 찍어줘요!"
        }
      ]
    }
  },
  {
    "key": "autumn_leaves",
    "category": "romantic",
    "categoryLabel": "💖 로맨틱 & 시즌",
    "badgeClass": "badge-romantic",
    "icon": "🍁",
    "title": "가을 단풍 & 고궁 돌담길",
    "desc": "정동길 & 덕수궁 돌담길 ➔ 남산 둘레길 단풍 ➔ 따뜻한 핸드드립 커피",
    "course": {
      "title": "노란 은행잎과 붉은 단풍길 같이 걸을래요? 🍁🍂",
      "subTitle": "바스락거리는 낙엽 밟으며 깊어가는 가을의 낭만!",
      "transitionMain": "가을 감성 데이트 수락! 🍁☕\n따뜻한 가을 코트 입고 만나요!",
      "transitionSub": "하늘에서 별과 단풍잎이 쏟아지는 것처럼 행복해요! ✨\n가장 걷고 싶은 가을길을 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "가을 햇살이 가장 따뜻한 몇 시에 만날까요? ⏰",
          "subtitle": "단풍 색감이 가장 예쁜 낮 시간",
          "multiple": false,
          "options": [
            "12:00 따뜻한 수제비 점심 먹고 단풍 산책",
            "14:00 나른한 가을 햇살 맞으며 덕수궁 돌담길",
            "16:00 늦은 오후 남산 단풍길 노을 감상"
          ]
        },
        {
          "id": "step_walk",
          "type": "places",
          "title": "서울 최고의 가을 단풍 명소 🍁",
          "subtitle": "은행잎이 노랗게 물든 길",
          "multiple": false,
          "places": [
            {
              "name": "정동길 & 덕수궁 돌담길",
              "tag": "돌담길 / 은행나무",
              "desc": "대한문부터 정동극장까지 노란 은행잎 카펫이 깔리는 서울 최고의 가을길",
              "mapUrl": "https://map.naver.com/p/search/%EC%A0%95%EB%8F%99%EA%B8%B8",
              "image": "https://images.unsplash.com/photo-1507783548227-544c3b8fc065?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "남산 야외식물원 단풍 숲길",
              "tag": "숲길 / 단풍터널",
              "desc": "붉게 물든 단풍나무 터널 아래서 맑은 가을 공기 마시기",
              "mapUrl": "https://map.naver.com/p/search/%EB%82%A8%EC%82%B0%20%EC%95%BC%EC%99%B8%EC%8B%9D%EB%AC%BC%EC%9B%90",
              "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_warm",
          "type": "places",
          "title": "선선한 날씨에 생각나는 따뜻한 메뉴 🍲",
          "subtitle": "몸과 마음을 녹여주는 따뜻한 식사와 차",
          "multiple": true,
          "places": [
            {
              "name": "삼청동 수제비",
              "tag": "미쉐린 / 항아리 수제비",
              "desc": "멸치 육수에 얇게 뜬 쫄깃한 수제비와 바삭한 감자전",
              "mapUrl": "https://map.naver.com/p/search/%EC%82%BC%EC%B2%AD%EB%8F%99%20%EC%88%98%EC%A0%9C%EB%B9%84",
              "image": "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "커피한약방 따뜻한 필터커피",
              "tag": "핸드드립 / 앤틱",
              "desc": "따뜻한 잔에 내려주는 묵직한 핸드드립 커피 한 모금",
              "mapUrl": "https://map.naver.com/p/search/%EC%BB%A4%ED%94%BC%ED%95%9C%EC%95%BD%EB%B0%A9",
              "image": "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "가을에 꼭 먹고 싶은 계절 간식(군밤, 호떡, 붕어빵 등)이 있나요? 💌",
          "subtitle": "산책하다가 호호 불며 같이 먹어요!",
          "placeholder": "예: 따뜻한 붕어빵이랑 군밤 사먹고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "christmas_winter",
    "category": "romantic",
    "categoryLabel": "💖 로맨틱 & 시즌",
    "badgeClass": "badge-romantic",
    "icon": "🎄",
    "title": "크리스마스 & 연말 감성 코스",
    "desc": "신세계/롯데 미디어파사드 ➔ 글루바인 뱅쇼 & 퐁듀 ➔ 캔들라이트 디너",
    "course": {
      "title": "반짝이는 크리스마스 트리 보러 갈래요? 🎄✨",
      "subTitle": "캐럴 음악과 화려한 미디어파사드, 따뜻한 뱅쇼 한잔!",
      "transitionMain": "메리 크리스마스 & 해피 연말! 🎄❄️\n세상에서 가장 따뜻하고 설레는 겨울을 선물할게요!",
      "transitionSub": "하늘에서 하얀 눈송이와 별이 쏟아져요! ✨\n가장 로맨틱한 겨울 명소를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "불빛이 켜지는 몇 시에 만날까요? ⏰",
          "subtitle": "겨울 조명이 가장 화려한 시간대",
          "multiple": false,
          "options": [
            "16:30 일찍 만나서 따뜻한 치즈 퐁듀 & 뱅쇼",
            "18:00 백화점 미디어파사드 조명쇼 시간 맞춰서",
            "19:30 명동성당 촛불과 야경 구경 후 캔들 디너"
          ]
        },
        {
          "id": "step_facade",
          "type": "places",
          "title": "환상적인 크리스마스 미디어파사드 🌟",
          "subtitle": "겨울 서울의 대표 랜드마크",
          "multiple": false,
          "places": [
            {
              "name": "신세계백화점 본점 크리스마스 미디어파사드",
              "tag": "미디어아트 / 크리스마스",
              "desc": "외벽 전체가 동화 속 성으로 변하는 거대한 3D 영상 쇼와 대형 트리",
              "mapUrl": "https://map.naver.com/p/search/%EC%8B%A0%EC%84%B8%EA%B3%84%EB%B0%B1%ED%99%94%EC%A0%90%20%EB%B3%B8%EC%A0%90",
              "image": "https://images.unsplash.com/photo-1543589077-47d81606c1bf?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "명동성당 촛불 & 성탄 야경",
              "tag": "고딕 건축 / 성탄 야경",
              "desc": "은은한 불빛과 크리스마스 마켓 분위기가 흐르는 성스러운 겨울 밤",
              "mapUrl": "https://map.naver.com/p/search/%EB%AA%85%EB%8F%99%EC%84%B1%EB%8B%B9",
              "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_winter_food",
          "type": "places",
          "title": "겨울 낭만 치즈 퐁듀 & 따뜻한 뱅쇼 🍷",
          "subtitle": "추위를 사르르 녹여줄 유럽식 디너",
          "multiple": false,
          "places": [
            {
              "name": "스위스 치즈 퐁듀 & 수제 뱅쇼 비스트로",
              "tag": "치즈퐁듀 / 뱅쇼",
              "desc": "보글보글 끓는 에멘탈 치즈에 바게트를 찍어 먹고 계피 향 뱅쇼 마시기",
              "mapUrl": "https://map.naver.com/p/search/%EC%B9%98%EC%A6%88%20%ED%90%81%EB%93%80",
              "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "연말에 꼭 듣고 싶은 캐럴이나 나누고 싶은 소원이 있나요? 💌",
          "subtitle": "소중한 크리스마스 추억을 남겨드릴게요!",
          "placeholder": "예: 예쁜 대형 트리 앞에서 커플 사진 꼭 찍고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "student_cost_effective",
    "category": "romantic",
    "categoryLabel": "💖 로맨틱 & 시즌",
    "badgeClass": "badge-romantic",
    "icon": "🎒",
    "title": "가성비 학생 & 청춘 데이트",
    "desc": "대학가 꿀맛 가성비 맛집 ➔ 만화카페 뒹굴뒹굴 ➔ 코인노래방 & 인생네컷",
    "course": {
      "title": "지갑 부담 없이 알콩달콩 가성비 데이트할래요? 🎒",
      "subTitle": "맛있는 즉석 떡볶이와 만화카페, 인생네컷 추억 남기기!",
      "transitionMain": "가성비 만점 청춘 데이트 확정! 🎒✨\n재미있고 풋풋한 하루를 보내봐요!",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 하고 싶은 놀거리를 골라주세요!",
      "steps": [
        {
          "id": "step_time",
          "type": "choice",
          "title": "몇 시에 만나서 놀까요? ⏰",
          "subtitle": "하루 종일 놀기 좋은 주말/공강 시간",
          "multiple": false,
          "options": [
            "12:00 즉석 떡볶이 맛집 점심부터",
            "14:00 만화카페에서 뒹굴거리며 쉬어가기",
            "17:00 저녁 먹고 코인노래방 & 인생네컷"
          ]
        },
        {
          "id": "step_food",
          "type": "places",
          "title": "대학가 꿀맛 가성비 맛집 🥘",
          "subtitle": "가격도 착하고 양도 푸짐한 곳",
          "multiple": false,
          "places": [
            {
              "name": "즉석 떡볶이 & 버터갈릭 감자튀김",
              "tag": "분식 / 즉석떡볶이",
              "desc": "라면사리, 치즈 듬뿍 넣은 즉떡과 중독성 최고 버터갈릭 감자튀김",
              "mapUrl": "https://map.naver.com/p/search/%EC%A6%89%EC%84%9D%20%EB%96%A1%EB%B3%B6%EC%9D%B4",
              "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "대학가 가성비 파스타 & 필라프",
              "tag": "양식 / 가성비파스타",
              "desc": "만원 이하로 즐기는 푸짐하고 맛있는 베이컨 크림 파스타와 필라프",
              "mapUrl": "https://map.naver.com/p/search/%EA%B0%80%EC%84%B1%EB%B9%84%20%ED%8C%8C%EC%8A%A4%ED%83%80",
              "image": "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_activity",
          "type": "places",
          "title": "아늑한 만화카페 & 보드게임 📚",
          "subtitle": "쿠션에 기대어 만화책과 넷플릭스 보기",
          "multiple": false,
          "places": [
            {
              "name": "만화카페 벌툰 (Beoltoon)",
              "tag": "만화카페 / 넷플릭스",
              "desc": "벌집 모양 아늑한 방에서 음료 마시며 만화책, 웹툰, 보드게임 즐기기",
              "mapUrl": "https://map.naver.com/p/search/%EB%A7%8C%ED%99%94%EC%B9%B4%ED%8E%98%20%EB%B2%8C%ED%88%B0",
              "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_play",
          "type": "places",
          "title": "청춘 필수 코스: 네컷사진 & 코노 🎤",
          "subtitle": "귀여운 머리띠 쓰고 추억 남기기",
          "multiple": true,
          "places": [
            {
              "name": "인생네컷 & 포토이즘 스튜디오",
              "tag": "네컷사진 / 포토부스",
              "desc": "귀여운 동물 모자 쓰고 찰칵! 오늘 하루를 담은 네컷 사진 출력하기",
              "mapUrl": "https://map.naver.com/p/search/%EC%9D%B8%EC%83%9D%EB%84%A4%EC%BB%B7",
              "image": "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&auto=format&fit=crop&q=80"
            },
            {
              "name": "깔끔한 코인노래연습장",
              "tag": "코인노래방 / 노래",
              "desc": "좋아하는 듀엣곡 부르며 스트레스 확 날리기 🎤",
              "mapUrl": "https://map.naver.com/p/search/%EC%BD%94%EC%9D%B8%EB%85%B8%EB%9E%98%EB%B0%A9",
              "image": "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=600&auto=format&fit=crop&q=80"
            }
          ]
        },
        {
          "id": "step_note",
          "type": "text",
          "title": "정주행하고 싶은 만화책이나 부르고 싶은 노래가 있나요? 💌",
          "subtitle": "편하게 적어주세요!",
          "placeholder": "예: 명탐정 코난 보고 싶어요!"
        }
      ]
    }
  },
  {
    "key": "blank",
    "category": "custom",
    "categoryLabel": "✏️ 직접 만들기",
    "badgeClass": "badge-custom",
    "icon": "✏️",
    "title": "직접 만들기 (빈 코스)",
    "desc": "처음부터 자유롭게 나만의 순서로 구성하기",
    "course": {
      "title": "저랑 데이트할래요? 🥰",
      "subTitle": "진지하게 고민하고 솔직하게 선택해줘요!",
      "transitionMain": "헉... 사실 거절할 줄 알았는데\n좋다니 저도 좋아요 ><",
      "transitionSub": "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n우리 둘만의 데이트 코스를 골라볼까요?",
      "steps": [
        {
          "id": "step_custom_1",
          "type": "places",
          "title": "가고 싶은 식당이나 장소를 골라주세요 🍽️",
          "subtitle": "마음에 드는 곳을 선택해주세요",
          "multiple": true,
          "places": [
            {
              "name": "장소 이름 예시",
              "tag": "카테고리",
              "desc": "추천 메뉴나 장소에 대한 간단한 설명",
              "mapUrl": "",
              "image": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&auto=format&fit=crop&q=80"
            }
          ]
        }
      ]
    }
  }
];

// 기존 코드 호환용 PRESET_COURSES 맵 자동 생성
const PRESET_COURSES = {};
PRESET_CATALOG.forEach((item) => {
  PRESET_COURSES[item.key] = item.course;
});

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
      steps: (data.st || data.steps || []).map((step, idx) => ({
        ...step,
        id: step.id || "step_" + idx,
        allowCustomInput: Boolean(step.allowCustomInput || step.ci),
        customInputPlaceholder: step.customInputPlaceholder || step.cip || ""
      }))
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
   2. 프리셋 버튼 동적 렌더링 및 실시간 검색 / 카테고리 필터
   -------------------------------------------------------------------------- */
function initPresetButtons() {
  const grid = document.getElementById("presetButtonsGrid");
  const searchInput = document.getElementById("presetSearchInput");
  const clearBtn = document.getElementById("btnPresetSearchClear");
  const countText = document.getElementById("presetCountText");
  const catLabel = document.getElementById("presetCategoryLabel");
  const filterTabs = document.querySelectorAll("#presetFilterTabs .tab-btn");

  let currentFilter = "all";
  let currentSearch = "";

  function applyPreset(presetKey, presetTitle) {
    if (PRESET_COURSES[presetKey]) {
      if (confirm(`'${presetTitle}' 템플릿으로 교체하시겠습니까?\n(현재 작성 중인 내용은 덮어씌워집니다)`)) {
        currentCourse = JSON.parse(JSON.stringify(PRESET_COURSES[presetKey]));
        document.getElementById("courseTitle").value = currentCourse.title;
        document.getElementById("courseSubTitle").value = currentCourse.subTitle;
        document.getElementById("transitionMainMsg").value = currentCourse.transitionMain || "헉... 사실 거절할 줄 알았는데\n좋다니 저도 좋아요 ><";
        document.getElementById("transitionSubMsg").value = currentCourse.transitionSub || "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨ 우리 둘만의 데이트 코스를 골라볼까요?";
        saveDraft();
        renderSteps();
        showAdminToast(`'${presetTitle}' 템플릿이 적용되었습니다 ✨`);
        // 스크롤 이동
        const configCard = document.querySelector(".config-card");
        if (configCard) {
          configCard.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }

  function renderGrid() {
    if (!grid) return;
    grid.innerHTML = "";
    let visibleCount = 0;

    const query = currentSearch.toLowerCase().trim();

    PRESET_CATALOG.forEach((preset) => {
      const matchCat = (currentFilter === "all" || preset.category === currentFilter);
      let matchSearch = true;
      if (query) {
        const titleMatch = preset.title && preset.title.toLowerCase().includes(query);
        const descMatch = preset.desc && preset.desc.toLowerCase().includes(query);
        const catMatch = preset.categoryLabel && preset.categoryLabel.toLowerCase().includes(query);
        let placeMatch = false;
        if (preset.course && preset.course.steps) {
          placeMatch = preset.course.steps.some((st) => {
            if (st.title && st.title.toLowerCase().includes(query)) return true;
            if (st.places) {
              return st.places.some((p) =>
                (p.name && p.name.toLowerCase().includes(query)) ||
                (p.desc && p.desc.toLowerCase().includes(query)) ||
                (p.tag && p.tag.toLowerCase().includes(query))
              );
            }
            return false;
          });
        }
        matchSearch = titleMatch || descMatch || catMatch || placeMatch;
      }

      if (matchCat && matchSearch) {
        visibleCount++;
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn-preset" + (preset.key === "blank" ? " btn-preset-blank" : "");
        btn.dataset.preset = preset.key;
        btn.dataset.category = preset.category;
        btn.innerHTML = `
          <div class="preset-top-tag"><span class="preset-cat-badge ${preset.badgeClass}">${preset.categoryLabel}</span></div>
          <span class="preset-icon">${preset.icon}</span>
          <span class="preset-title">${escapeHtml(preset.title)}</span>
          <span class="preset-desc">${escapeHtml(preset.desc)}</span>
        `;
        btn.addEventListener("click", () => applyPreset(preset.key, preset.title));
        grid.appendChild(btn);
      }
    });

    if (visibleCount === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px 16px; color: #868E96; background: #FAF9FB; border-radius: 16px; border: 1.5px dashed #E9ECEF;">
          <div style="font-size: 36px; margin-bottom: 8px;">🔍</div>
          <div style="font-weight: 700; font-size: 15px; margin-bottom: 4px; color: #495057;">검색된 데이트 코스가 없습니다</div>
          <div style="font-size: 13px;">다른 검색어나 다른 카테고리 탭을 선택해 보세요.</div>
        </div>
      `;
    }

    if (countText) {
      countText.textContent = `총 ${visibleCount}개의 검증된 데이트 코스 템플릿`;
    }
  }

  // 카테고리 필터 탭 이벤트
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.dataset.filter;
      if (catLabel) {
        catLabel.textContent = tab.textContent.split("(")[0].trim();
      }
      renderGrid();
    });
  });

  // 검색 인풋 이벤트
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      if (clearBtn) {
        if (currentSearch) clearBtn.classList.remove("hidden");
        else clearBtn.classList.add("hidden");
      }
      renderGrid();
    });
  }

  // 검색 초기화 버튼
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearch = "";
      clearBtn.classList.add("hidden");
      renderGrid();
      searchInput.focus();
    });
  }

  // 초기 그리드 렌더링
  renderGrid();

  document.getElementById("courseTitle").addEventListener("input", saveDraft);
  document.getElementById("courseSubTitle").addEventListener("input", saveDraft);
  document.getElementById("transitionMainMsg").addEventListener("input", saveDraft);
  document.getElementById("transitionSubMsg").addEventListener("input", saveDraft);
}

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
        <div class="form-group" style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">
          <input type="checkbox" id="multi_${sIdx}" class="step-multiple-check" ${step.multiple ? "checked" : ""}>
          <label for="multi_${sIdx}" style="margin-bottom:0; cursor:pointer; font-weight:600;">여러 개 중복 선택 허용하기</label>
        </div>

        <div class="custom-input-setting-box">
          <div style="display:flex; align-items:center; gap:8px;">
            <input type="checkbox" id="customInput_${sIdx}" class="step-custom-input-check" ${step.allowCustomInput ? "checked" : ""}>
            <label for="customInput_${sIdx}" style="margin-bottom:0; cursor:pointer; font-weight:700; color: #FF4D6D;">
              ✍️ 상대방이 직접 입력할 수 있는 입력창 제공 (기타 의견/장소)
            </label>
          </div>
          <div class="step-custom-placeholder-wrap" style="${step.allowCustomInput ? '' : 'display:none;'} margin-top:8px; padding-left:24px;">
            <label style="font-size:12px; color:#6C757D; margin-bottom:4px; display:block;">입력창 안내 문구 (Placeholder)</label>
            <input type="text" class="form-control input-sm step-custom-placeholder" value="${escapeHtml(step.customInputPlaceholder || '')}" placeholder="${step.type === 'places' ? '예: 가고 싶은 다른 맛집이나 장소가 있다면 적어주세요' : '예: 원하는 다른 시간이나 선택지를 적어주세요'}">
          </div>
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

    const customInputCheck = stepEl.querySelector(".step-custom-input-check");
    const customWrap = stepEl.querySelector(".step-custom-placeholder-wrap");
    if (customInputCheck) {
      customInputCheck.addEventListener("change", (e) => {
        step.allowCustomInput = e.target.checked;
        if (customWrap) {
          customWrap.style.display = e.target.checked ? "block" : "none";
        }
        saveDraft();
      });
    }

    const customPlaceholderInput = stepEl.querySelector(".step-custom-placeholder");
    if (customPlaceholderInput) {
      customPlaceholderInput.addEventListener("input", (e) => {
        step.customInputPlaceholder = e.target.value;
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
    st: currentCourse.steps.map((st, idx) => {
      const stepObj = {
        id: st.id || "step_" + idx,
        type: st.type,
        title: st.title,
        subtitle: st.subtitle,
        multiple: Boolean(st.multiple)
      };
      if (st.allowCustomInput) {
        stepObj.ci = 1;
        if (st.customInputPlaceholder) {
          stepObj.cip = st.customInputPlaceholder;
        }
      }
      if (st.type === "choice") {
        stepObj.options = st.options || [];
      } else if (st.type === "places") {
        stepObj.places = (st.places || []).map((p) => ({
          name: p.name || "",
          tag: p.tag || "",
          desc: p.desc || "",
          mapUrl: p.mapUrl || "",
          image: p.image || ""
        }));
      } else if (st.type === "text") {
        stepObj.placeholder = st.placeholder || "";
      }
      return stepObj;
    })
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
