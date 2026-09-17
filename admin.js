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
  { tag: "도시 야경 / 드라이브", url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&auto=format&fit=crop&q=80" },
  { tag: "한옥 / 샤브 / 전통", url: "https://images.unsplash.com/photo-1547928576-a4a33237cbc3?w=600&auto=format&fit=crop&q=80" },
  { tag: "버거 & 멕시칸", url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80" },
  { tag: "나베 / 라멘 / 전골", url: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop&q=80" },
  { tag: "대형 베이커리 / 테라스", url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80" },
  { tag: "호수 & 리버뷰 산책", url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=80" },
  { tag: "공방 & 원데이 클래스", url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80" }
];

// 프리셋 코스 데이터 (카테고리별 12종)
const PRESET_COURSES = {
  // 1. 시간대별: 주말 올데이 풀코스
  all_day_weekend: {
    title: "이번 주말 하루 종일 저랑 데이트할래요? 🥰",
    subTitle: "브런치부터 밤 야경까지 완벽한 풀코스!",
    transitionMain: "하루 종일 함께할 수 있다니 너무 설레요!\n최고로 행복한 주말을 선물할게요 ✨",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n원하는 세부 일정을 골라주세요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "몇 시에 만날까요? ⏰",
        subtitle: "편한 시간대로 골라주세요",
        multiple: false,
        options: [
          "11:30 여유로운 브런치부터 시작해요 🥞",
          "13:00 든든하게 점심 먹고 만나요 🍽️",
          "14:30 나른한 오후 감성 카페부터 ☕"
        ]
      },
      {
        id: "step_lunch",
        type: "places",
        title: "점심 & 브런치 어디로 갈까요? 🍽️",
        subtitle: "가보고 싶었던 핫플들이에요 (중복 선택 가능)",
        multiple: true,
        places: [
          {
            name: "오아시스 한남",
            tag: "브런치 / 팬케이크",
            desc: "프렌치토스트와 에그베네딕트가 환상적인 한남동 대표 브런치 맛집",
            mapUrl: "https://map.naver.com/p/search/%EC%98%A4%EC%95%84%EC%8B%9C%EC%8A%A4%20%ED%95%9C%EB%82%A8",
            image: IMAGE_PRESETS[2].url
          },
          {
            name: "클래식당",
            tag: "양식 / 파스타",
            desc: "수제 라자냐와 트러플 뇨끼가 맛있는 아늑한 분위기의 레스토랑",
            mapUrl: "https://map.naver.com/p/search/%ED%81%B4%EB%9E%98%EC%8B%9D%EB%8B%B9",
            image: IMAGE_PRESETS[1].url
          }
        ]
      },
      {
        id: "step_activity",
        type: "places",
        title: "오후에 어떤 데이트를 즐길까요? 🎨",
        subtitle: "원하는 코스를 골라주세요",
        multiple: true,
        places: [
          {
            name: "리움미술관 & 한남동 쇼룸 투어",
            tag: "전시 / 미술관",
            desc: "감각적인 현대미술 전시와 주변 감성 편집숍 구경하기",
            mapUrl: "https://map.naver.com/p/search/%EB%A6%AC%EC%9B%80%EB%AF%B8%EC%88%A0%EA%B4%80",
            image: IMAGE_PRESETS[6].url
          },
          {
            name: "서울숲 숲속 산책 & 디저트 카페",
            tag: "공원 / 산책",
            desc: "울창한 숲길 걷다가 시원한 아인슈페너와 달콤한 케이크 한잔 ☕",
            mapUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%88%B2",
            image: IMAGE_PRESETS[7].url
          }
        ]
      },
      {
        id: "step_dinner",
        type: "places",
        title: "저녁은 분위기 있는 곳에서! 🍷",
        subtitle: "하루를 로맨틱하게 마무리해요",
        multiple: false,
        places: [
          {
            name: "글라스하우스 와인바",
            tag: "와인바 / 타파스",
            desc: "은은한 조명과 맛있는 핑거푸드가 있는 내추럴 와인바",
            mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EB%82%A8%EB%8F%99%20%EC%99%80%EC%9D%B8%EB%B0%94",
            image: IMAGE_PRESETS[9].url
          },
          {
            name: "정성 한우 오마카세",
            tag: "스테이크 / 고기",
            desc: "입에서 살살 녹는 프라이빗 한우 다이닝 코스",
            mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EC%9A%B0%20%EC%98%A4%EB%A7%88%EC%B9%B4%EC%84%B8",
            image: IMAGE_PRESETS[3].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "혹시 더 하고 싶은 말이나 가고 싶은 곳이 있나요? 💌",
        subtitle: "못 먹는 음식이나 취향이 있다면 편하게 적어줘요!",
        placeholder: "예: 날씨 좋으면 사진 많이 찍고 싶어요!"
      }
    ]
  },

  // 2. 시간대별: 평일 퇴근 후 저녁 & 와인
  after_work: {
    title: "퇴근하고 저랑 맛있는 저녁 먹을래요? 🌙",
    subTitle: "하루의 피로를 사르르 녹여줄 힐링 디너!",
    transitionMain: "퇴근 후 만남 수락 완료! 칼퇴 대기 중 💨\n오늘 하루도 수고 많았어요, 이따 봐요 🌙",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n저녁 메뉴와 가고 싶은 곳을 골라봐요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "퇴근 후 몇 시에 만날까요? ⏰",
        subtitle: "편하신 시간으로 알려주세요",
        multiple: false,
        options: [
          "18:30 칼퇴하고 바로 만나요! 🏃",
          "19:00 여유롭게 퇴근하고 만나요!",
          "19:30 늦은 저녁에 천천히 만나요!"
        ]
      },
      {
        id: "step_dinner",
        type: "places",
        title: "피로를 사르르 녹여줄 저녁 메뉴 🍽️",
        subtitle: "분위기 좋은 다이닝 후보",
        multiple: true,
        places: [
          {
            name: "오스테리아 꼬또",
            tag: "양식 / 파스타",
            desc: "분위기 좋은 테라스에서 즐기는 고급 파스타 & 스테이크",
            mapUrl: "https://map.naver.com/p/search/%EC%98%A4%EC%8A%A4%ED%85%8C%EB%A6%AC%EC%95%84%20%EA%BC%AC%EB%98%90",
            image: IMAGE_PRESETS[1].url
          },
          {
            name: "모즈타파스라운지",
            tag: "스페인요리 / 감바스",
            desc: "따뜻한 감바스와 빠에야, 샹그리아가 맛있는 감성 펍",
            mapUrl: "https://map.naver.com/p/search/%EB%AA%A8%EC%A6%88%ED%83%80%ED%8C%8C%EC%8A%A4",
            image: IMAGE_PRESETS[9].url
          }
        ]
      },
      {
        id: "step_drinks",
        type: "places",
        title: "2차로 가볍게 한잔 어때요? 🍸",
        subtitle: "도란도란 이야기 나누기 좋은 곳",
        multiple: false,
        places: [
          {
            name: "골목 심야 이자카야",
            tag: "나베 / 이자카야",
            desc: "따뜻한 국물 요리와 시원한 하이볼이 있는 아지트",
            mapUrl: "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9D%B4%EC%9E%90%EC%B9%B4%EC%95%BC",
            image: IMAGE_PRESETS[14].url
          },
          {
            name: "도심 루프탑 칵테일 바",
            tag: "와인바 / 칵테일",
            desc: "반짝이는 서울 야경을 내려다보며 하루 마무리 🌃",
            mapUrl: "https://map.naver.com/p/search/%EB%A3%A8%ED%94%84%ED%83%91%20%EC%B9%B5%ED%85%8C%EC%9D%BC%EB%B0%94",
            image: IMAGE_PRESETS[11].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "선호하는 주종이나 피하고 싶은 음식이 있나요? 💌",
        subtitle: "논알콜 칵테일이나 디카페인 음료도 좋아요!",
        placeholder: "예: 가벼운 맥주나 하이볼 좋아해요!"
      }
    ]
  },

  // 3. 시간대별: 오후 나른한 커피 & 산책
  afternoon_cafe: {
    title: "오후에 커피 한잔하면서 산책할래요? ☕",
    subTitle: "부담 없이 편안하고 달콤한 시간!",
    transitionMain: "좋아요! 날씨 좋은 오후에 만나요 ☕🌿\n예쁜 카페 골라둘게요!",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가고 싶은 카페 분위기를 선택해주세요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "오후 몇 시가 가장 편하신가요? ⏰",
        subtitle: "주말 또는 평일 오후 시간대",
        multiple: false,
        options: [
          "14:00 나른한 햇살 가득한 시간 ☀️",
          "15:00 여유롭게 티타임 즐기기 ☕",
          "16:30 늦은 오후 선선할 때 만나요 🍃"
        ]
      },
      {
        id: "step_cafe",
        type: "places",
        title: "가고 싶은 감성 카페 ☕",
        subtitle: "커피와 디저트가 맛있는 곳 (중복 선택 가능)",
        multiple: true,
        places: [
          {
            name: "마일스톤 커피",
            tag: "감성 카페 / 커피",
            desc: "호주식 플랫화이트와 바나나 크럼블이 유명한 커피 성지",
            mapUrl: "https://map.naver.com/p/search/%EB%A7%88%EC%9D%BC%EC%8A%A4%ED%86%A4%20%EC%BB%A4%ED%94%BC",
            image: IMAGE_PRESETS[4].url
          },
          {
            name: "오설록 티하우스",
            tag: "티룸 / 말차 디저트",
            desc: "도심 속 정원에서 즐기는 프리미엄 녹차와 말차 와플 🍵",
            mapUrl: "https://map.naver.com/p/search/%EC%98%A4%EC%84%A4%EB%A1%9D%20%ED%8B%B0%ED%95%98%EC%9A%B0%EC%8A%A4",
            image: IMAGE_PRESETS[5].url
          }
        ]
      },
      {
        id: "step_walk",
        type: "places",
        title: "커피 마시고 가볍게 산책할까요? 🌿",
        subtitle: "바람 쐬며 도란도란 이야기 나누기",
        multiple: false,
        places: [
          {
            name: "덕수궁 돌담길 & 정동길",
            tag: "고궁 / 산책",
            desc: "고즈넉하고 운치 있는 서울 최고의 로맨틱 산책길",
            mapUrl: "https://map.naver.com/p/search/%EB%8D%95%EC%88%98%EA%B6%81%20%EB%8F%8C%EB%8B%B4%EA%B8%B8",
            image: IMAGE_PRESETS[7].url
          },
          {
            name: "청계천 물소리 산책로",
            tag: "도심 / 힐링",
            desc: "징검다리 건너며 선선한 바람과 물소리 즐기기",
            mapUrl: "https://map.naver.com/p/search/%EC%B2%AD%EA%B3%84%EC%B2%9C",
            image: IMAGE_PRESETS[16].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "좋아하는 디저트 취향이 있나요? 💌",
        subtitle: "케이크, 크로플, 소금빵 등 편하게 적어주세요",
        placeholder: "예: 크림 디저트나 소금빵 좋아해요!"
      }
    ]
  },

  // 4. 서울 핫플: 연남동 감성 골목 투어
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
            mapUrl: "https://map.naver.com/p/search/%EC%97%B0%EB%82%A8%EB%8F%99%20%EB%B0%94%EB%9D%BC%ED%8B%B0%EC%97%90",
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

  // 5. 서울 핫플: 성수동 팝업 & 전시 핫플
  seongsu: {
    title: "힙한 성수동에서 데이트할래요? 🎨",
    subTitle: "트렌디한 팝업스토어와 감각적인 맛집 코스!",
    transitionMain: "진짜요?! 너무 신나요!\n성수동 핫플 다 정복하러 가요! 🎨🔥",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n마음에 드는 코스를 골라주세요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "성수동에서 언제 만날까요? ⏰",
        subtitle: "선호하는 시간대를 알려주세요",
        multiple: false,
        options: [
          "11:30 브런치부터 여유롭게!",
          "13:30 점심 먹고 본격 핫플 투어",
          "16:30 노을과 함께 저녁 감성으로"
        ]
      },
      {
        id: "step_lunch",
        type: "places",
        title: "성수동 트렌디 맛집 후보 🍽️",
        subtitle: "인기 많은 곳들로 추려봤어요 (중복 가능)",
        multiple: true,
        places: [
          {
            name: "팩피 (FAGP)",
            tag: "미쉐린 / 파스타",
            desc: "오징어 리가토니와 고수 파스타가 유명한 미쉐린 가이드 맛집",
            mapUrl: "https://map.naver.com/p/search/%ED%8C%A9%ED%94%BC",
            image: IMAGE_PRESETS[1].url
          },
          {
            name: "소문난성수감자탕",
            tag: "한식 / 든든맛집",
            desc: "성수동 줄서서 먹는 백종원 3대천왕 명품 감자탕",
            mapUrl: "https://map.naver.com/p/search/%EC%86%8C%EB%AC%B8%EB%82%9C%EC%84%B1%EC%88%98%EA%B0%90%EC%9E%90%ED%83%95",
            image: IMAGE_PRESETS[12].url
          },
          {
            name: "칙피스 성수점",
            tag: "지중해식 / 샐러드",
            desc: "건강하고 푸짐한 지중해식 피타 샌드위치 & 샐러드볼",
            mapUrl: "https://map.naver.com/p/search/%EC%B9%99%ED%94%BC%EC%8A%A4%20%EC%84%B1%EC%88%98",
            image: IMAGE_PRESETS[2].url
          }
        ]
      },
      {
        id: "step_activity",
        type: "places",
        title: "성수 팝업 & 전시 구경 🎨",
        subtitle: "가보고 싶은 장소를 골라주세요",
        multiple: true,
        places: [
          {
            name: "디뮤지엄 성수 전시",
            tag: "전시 / 미술관",
            desc: "감각적인 사진과 인터랙티브 현대 미술 전시 관람",
            mapUrl: "https://map.naver.com/p/search/%EB%94%94%EB%AE%A4%EC%A7%80%EC%97%84",
            image: IMAGE_PRESETS[6].url
          },
          {
            name: "연무장길 팝업스토어 투어",
            tag: "쇼핑 / 팝업",
            desc: "패션·뷰티 브랜드 팝업스토어 구경하고 포토존 인생샷 남기기",
            mapUrl: "https://map.naver.com/p/search/%EC%84%B1%EC%88%98%EB%8F%99%20%EC%97%B0%EB%AC%B4%EC%9E%A5%EA%B8%B8",
            image: IMAGE_PRESETS[11].url
          }
        ]
      },
      {
        id: "step_cafe",
        type: "places",
        title: "달콤한 디저트와 카페 ☕",
        subtitle: "성수동 필수 카페 코스",
        multiple: false,
        places: [
          {
            name: "어니언 성수",
            tag: "베이커리 / 팡도르",
            desc: "폐공장을 개조한 빈티지 루프탑 감성과 슈가파우더 팡도르",
            mapUrl: "https://map.naver.com/p/search/%EC%96%B4%EB%8B%88%EC%96%B8%20%EC%84%B1%EC%88%98",
            image: IMAGE_PRESETS[15].url
          },
          {
            name: "대림창고 갤러리 카페",
            tag: "갤러리 / 카페",
            desc: "거대한 예술 조형물과 맛있는 커피가 공존하는 성수 랜드마크",
            mapUrl: "https://map.naver.com/p/search/%EB%8C%80%EB%A6%BC%EC%B0%BD%EA%B3%A0",
            image: IMAGE_PRESETS[4].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "성수동에서 꼭 가보고 싶었던 팝업이나 매장이 있나요? 💌",
        subtitle: "자유롭게 적어주시면 코스에 추가할게요!",
        placeholder: "예: 디올 성수 앞 포토존 꼭 가보고 싶어요!"
      }
    ]
  },

  // 6. 서울 핫플: 잠실 & 석촌호수 로맨틱
  jamsil: {
    title: "잠실 석촌호수에서 로맨틱한 데이트할래요? 🦢",
    subTitle: "호숫가 산책과 송리단길 맛집 투어!",
    transitionMain: "와아! 석촌호수 데이트라니 벌써 로맨틱해요 🦢✨\n예쁜 호숫길 같이 걸어요!",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 끌리는 맛집과 장소를 골라주세요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "몇 시에 만날까요? ⏰",
        subtitle: "편한 시간대로 골라주세요",
        multiple: false,
        options: [
          "12:00 송리단길 맛집 오픈런!",
          "14:30 햇살 반짝이는 호수 산책부터",
          "17:30 롯데월드타워 야경 보러 만나요"
        ]
      },
      {
        id: "step_lunch",
        type: "places",
        title: "송리단길 맛집 후보 🍽️",
        subtitle: "송리단길 대표 핫플들 (중복 가능)",
        multiple: true,
        places: [
          {
            name: "배키욘방 잠실본점",
            tag: "일식 / 우동 & 덮밥",
            desc: "쫄깃한 자가제면 우동과 숯불 향 가득한 야키도리동 맛집",
            mapUrl: "https://map.naver.com/p/search/%EB%B0%B0%ED%82%A4%EC%9A%98%EB%B0%A9",
            image: IMAGE_PRESETS[0].url
          },
          {
            name: "콘메 (CONME)",
            tag: "생면 파스타 / 와인",
            desc: "쫀득한 수제 생면 파스타와 고급스러운 유러피안 분위기",
            mapUrl: "https://map.naver.com/p/search/%EC%86%A1%EB%A6%AC%EB%8B%A8%EA%B8%B8%20%EC%BD%98%EB%A9%94",
            image: IMAGE_PRESETS[1].url
          }
        ]
      },
      {
        id: "step_cafe",
        type: "places",
        title: "호수 산책 & 뷰 좋은 카페 ☕",
        subtitle: "석촌호수 둘레길과 감성 디저트",
        multiple: true,
        places: [
          {
            name: "석촌호수 둘레길 산책",
            tag: "산책 / 호수",
            desc: "롯데월드 매직아일랜드와 호수를 바라보며 도란도란 걷기",
            mapUrl: "https://map.naver.com/p/search/%EC%84%9D%EC%B4%8C%ED%98%B8%EC%88%98",
            image: IMAGE_PRESETS[16].url
          },
          {
            name: "앤티크커피 잠실점",
            tag: "디저트 / 크루아상",
            desc: "화려한 꽃장식과 비주얼 폭발 크루아상 디저트 명소",
            mapUrl: "https://map.naver.com/p/search/%EC%95%A4%ED%8B%B0%ED%81%AC%EC%BB%A4%ED%94%BC%20%EC%9E%A0%EC%8B%A4",
            image: IMAGE_PRESETS[5].url
          }
        ]
      },
      {
        id: "step_night",
        type: "places",
        title: "달콤한 저녁 또는 야경 스팟 🌃",
        subtitle: "잠실의 낭만적인 밤을 함께해요",
        multiple: false,
        places: [
          {
            name: "서울스카이 전망대",
            tag: "전망대 / 야경",
            desc: "120층에서 한눈에 내려다보는 서울 360도 환상 야경 파노라마",
            mapUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%EC%8A%A4%EC%B9%B4%EC%9D%B4",
            image: IMAGE_PRESETS[11].url
          },
          {
            name: "소피텔 루프탑 라티튜드32",
            tag: "와인바 / 칵테일",
            desc: "석촌호수 야경이 한눈에 펼쳐지는 고급스러운 칵테일 라운지 바",
            mapUrl: "https://map.naver.com/p/search/%EB%9D%BC%ED%8B%B0%ED%8A%9C%EB%93%9C32",
            image: IMAGE_PRESETS[9].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "잠실에서 해보고 싶었던 것이 있다면 알려주세요! 💌",
        subtitle: "쇼핑, 아쿠아리움, 놀이기구 등 무엇이든 좋아요",
        placeholder: "예: 롯데월드타워 쇼핑몰 구경도 좋아요!"
      }
    ]
  },

  // 7. 서울 핫플: 을지로 & 힙지로 레트로
  euljiro: {
    title: "을지로 힙지로에서 레트로 데이트할래요? 🏮",
    subTitle: "골목 속 숨은 보물 같은 공간들을 찾아서!",
    transitionMain: "힙지로 감성 제대로 느껴봐요! 🏮✨\n골목 구석구석 숨은 핫플로 모실게요!",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 설레는 장소들을 골라주세요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "몇 시에 만날까요? ⏰",
        subtitle: "편한 시간대로 골라주세요",
        multiple: false,
        options: [
          "12:30 익선동 한옥 골목 점심부터 🥢",
          "16:00 을지로 감성 카페 & 소품샵 투어 ☕",
          "18:00 저녁 힙지로 골목 노포 & 와인바 🍷"
        ]
      },
      {
        id: "step_lunch",
        type: "places",
        title: "힙지로 점심 & 저녁 맛집 🍽️",
        subtitle: "레트로 감성 가득한 맛집 (중복 가능)",
        multiple: true,
        places: [
          {
            name: "을지로 보석",
            tag: "한식 주점 / 해산물",
            desc: "들기름 낙지젓 카펠리니와 제철 해산물로 소문난 예약 필수 맛집",
            mapUrl: "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EB%B3%B4%EC%84%9D",
            image: IMAGE_PRESETS[12].url
          },
          {
            name: "온천집 익선동",
            tag: "샤브샤브 / 한옥",
            desc: "일본 료칸 온천 감성의 고즈넉한 한옥 1인 샤브샤브 코스",
            mapUrl: "https://map.naver.com/p/search/%EC%98%A8%EC%B2%9C%EC%A7%91%20%EC%9D%B5%EC%84%A0",
            image: IMAGE_PRESETS[12].url
          }
        ]
      },
      {
        id: "step_cafe",
        type: "places",
        title: "골목 안 빈티지 카페 ☕",
        subtitle: "을지로만의 독특한 매력",
        multiple: true,
        places: [
          {
            name: "커피한약방 & 혜민당",
            tag: "레트로 카페 / 필터커피",
            desc: "조선시대 혜민서 터에서 즐기는 앤틱 필터커피와 달콤 서양과자",
            mapUrl: "https://map.naver.com/p/search/%EC%BB%A4%ED%94%BC%ED%95%9C%EC%95%BD%EB%B0%A9",
            image: IMAGE_PRESETS[4].url
          },
          {
            name: "호랑이커피",
            tag: "감성 카페 / 라떼",
            desc: "고소하고 묵직한 호랑이라떼로 세운상가 명물이 된 곳",
            mapUrl: "https://map.naver.com/p/search/%ED%98%B8%EB%9E%91%EC%9D%B4%20%EC%BB%A4%ED%94%BC",
            image: IMAGE_PRESETS[4].url
          }
        ]
      },
      {
        id: "step_night",
        type: "places",
        title: "감성 넘치는 밤의 을지로 🍷",
        subtitle: "LP 음악과 와인 한잔",
        multiple: false,
        places: [
          {
            name: "평균율 LP 바",
            tag: "음악 / 위스키 / 와인",
            desc: "좋은 바이닐 LP 음악이 흐르는 아늑하고 로맨틱한 청음 공간",
            mapUrl: "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%ED%8F%89%EA%B7%A0%EC%9C%A8",
            image: IMAGE_PRESETS[9].url
          },
          {
            name: "신도시 (Seendosi)",
            tag: "레트로 펍 / 맥주",
            desc: "독특한 예술적 감성과 루프탑이 매력적인 을지로 랜드마크",
            mapUrl: "https://map.naver.com/p/search/%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%8B%A0%EB%8F%84%EC%8B%9C",
            image: IMAGE_PRESETS[11].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "을지로에서 먹고 싶거나 해보고 싶은 게 있다면 적어주세요! 💌",
        subtitle: "노포 감성 삼겹살이나 골뱅이 골목도 환영!",
        placeholder: "예: 노포 분위기도 좋아요!"
      }
    ]
  },

  // 8. 테마: 한강 피크닉 & 노을 라면
  hangang: {
    title: "날씨 좋은 날 한강 피크닉 갈래요? 🌊",
    subTitle: "시원한 강바람 쐬며 힐링하는 하루!",
    transitionMain: "한강 피크닉 당첨! 돗자리랑 간식 챙길게요 🧺✨\n노을 보면서 힐링해요!",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 끌리는 피크닉 코스를 골라주세요!",
    steps: [
      {
        id: "step_location",
        type: "choice",
        title: "어느 한강공원으로 갈까요? 🌊",
        subtitle: "원하는 공원을 선택해주세요",
        multiple: false,
        options: [
          "여의도 한강공원 (접근성 최고 & 배달존)",
          "반포 한강공원 (세빛섬 & 달빛무지개분수)",
          "뚝섬 한강공원 (서울숲 연결 & 잔디광장)"
        ]
      },
      {
        id: "step_picnic",
        type: "places",
        title: "피크닉 필수 코스 & 먹거리 🍜",
        subtitle: "한강에서 꼭 해야 할 것들 (중복 가능)",
        multiple: true,
        places: [
          {
            name: "한강 편의점 뽀글이 라면 & 치맥",
            tag: "피크닉 / 라면치맥",
            desc: "은박지 그릇에 보글보글 끓인 즉석 라면과 시원한 치맥 조합!",
            mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EA%B0%95%20%EB%9D%BC%EB%A9%B4",
            image: IMAGE_PRESETS[8].url
          },
          {
            name: "감성 피크닉 세트 & 텐트 대여",
            tag: "피크닉 / 텐트",
            desc: "감성 매트, 접이식 테이블, 블루투스 스피커와 무드등 풀세트",
            mapUrl: "https://map.naver.com/p/search/%ED%95%9C%EA%B0%95%20%ED%94%BC%ED%81%AC%EB%8B%89%20%EB%8C%80%EC%97%AC",
            image: IMAGE_PRESETS[8].url
          }
        ]
      },
      {
        id: "step_activity",
        type: "places",
        title: "노을 질 때 액티비티 🚲",
        subtitle: "한강의 로맨틱한 황금 시간대",
        multiple: false,
        places: [
          {
            name: "따릉이 강변 라이딩",
            tag: "자전거 / 액티비티",
            desc: "노을빛으로 물든 한강을 따라 시원하게 달리기",
            mapUrl: "https://map.naver.com/p/search/%EB%94%B0%EB%A6%89%EC%9D%B4",
            image: IMAGE_PRESETS[7].url
          },
          {
            name: "반포 달빛무지개분수 야경 감상",
            tag: "야경 / 분수쇼",
            desc: "세계 최장 교량 분수쇼와 잔디밭 음악 감상",
            mapUrl: "https://map.naver.com/p/search/%EB%8B%AC%EB%B9%9B%EB%AC%B4%EC%A7%80%EA%B0%9C%EB%B6%84%EC%88%98",
            image: IMAGE_PRESETS[11].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "피크닉 때 특별히 먹고 싶은 간식이 있나요? 💌",
        subtitle: "좋아하는 과일, 과자, 배달 음식 등 적어주세요!",
        placeholder: "예: 떡볶이랑 순대 배달시켜 먹고 싶어요!"
      }
    ]
  },

  // 9. 테마: 비오는 날 실내 감성 데이트
  rainy_indoor: {
    title: "비오는 날 빗소리 들으며 실내 데이트할래요? ☔",
    subTitle: "비 와도 뽀송뽀송하고 로맨틱하게!",
    transitionMain: "비오는 날의 운치 있는 데이트! ☔🌧️\n비 한 방울 안 맞게 완벽 준비할게요!",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 마음에 드는 실내 코스를 골라봐요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "비오는 날 몇 시에 만날까요? ⏰",
        subtitle: "편한 시간대로 골라주세요",
        multiple: false,
        options: [
          "12:00 따뜻한 점심부터 실내에서 만나요",
          "14:00 나른한 오후 공방이나 전시부터",
          "17:30 빗소리 들으며 저녁 식사부터"
        ]
      },
      {
        id: "step_lunch",
        type: "places",
        title: "비오는 날 딱 맞는 따뜻한 메뉴 🍲",
        subtitle: "국물과 면요리 후보 (중복 가능)",
        multiple: true,
        places: [
          {
            name: "모던샤브하우스",
            tag: "샤브샤브 / 뷔페",
            desc: "고급스러운 인테리어에서 즐기는 무제한 프리미엄 샤브샤브",
            mapUrl: "https://map.naver.com/p/search/%EB%AA%A8%EB%8D%98%EC%83%A4%EB%B8%8C%ED%95%98%EC%9A%B0%EC%8A%A4",
            image: IMAGE_PRESETS[12].url
          },
          {
            name: "멘야하나비",
            tag: "일식 / 마제소바",
            desc: "비오는 날 입맛을 확 돋워주는 중독성 강한 원조 비빔라멘",
            mapUrl: "https://map.naver.com/p/search/%EB%A9%98%EC%95%BC%ED%95%98%EB%82%98%EB%B9%84",
            image: IMAGE_PRESETS[14].url
          }
        ]
      },
      {
        id: "step_activity",
        type: "places",
        title: "뽀송한 실내 감성 놀거리 🎨",
        subtitle: "비 걱정 없이 몰입하는 실내 공간",
        multiple: true,
        places: [
          {
            name: "나만의 시그니처 향수 공방",
            tag: "공방 / 향수",
            desc: "서로의 취향을 담아 세상에 단 하나뿐인 시그니처 향수 제작하기",
            mapUrl: "https://map.naver.com/p/search/%ED%96%A5%EC%88%98%20%EA%B3%B5%EB%B0%A9",
            image: IMAGE_PRESETS[17].url
          },
          {
            name: "그라운드시소 미디어아트 전시",
            tag: "전시 / 실내",
            desc: "날씨 구애 없이 감각적인 영상과 사운드에 흠뻑 빠지는 전시",
            mapUrl: "https://map.naver.com/p/search/%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%8B%9C%EC%86%8C",
            image: IMAGE_PRESETS[6].url
          }
        ]
      },
      {
        id: "step_cafe",
        type: "places",
        title: "창밖 빗소리 들리는 통유리 카페 ☕",
        subtitle: "운치 있는 티타임",
        multiple: false,
        places: [
          {
            name: "통유리창 대형 북카페",
            tag: "북카페 / 커피",
            desc: "넓은 통창으로 빗방울을 구경하며 따뜻한 바닐라 라떼 마시기",
            mapUrl: "https://map.naver.com/p/search/%EB%8C%80%ED%98%95%20%EB%B6%81%EC%B9%B4%ED%8E%98",
            image: IMAGE_PRESETS[4].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "비오는 날 특별히 생각나는 음식이나 하고 싶은 것이 있나요? 💌",
        subtitle: "파전에 막걸리도 언제나 환영이에요!",
        placeholder: "예: 창가 자리에서 도란도란 이야기하고 싶어요!"
      }
    ]
  },

  // 10. 테마: 기념일 로맨틱 파인다이닝
  anniversary: {
    title: "우리 소중한 특별한 날 함께할래요? 🥩✨",
    subTitle: "잊지 못할 가장 로맨틱한 순간을 선물할게요!",
    transitionMain: "우리 둘만의 특별한 기념일! 🥂✨\n세상에서 제일 행복한 하루를 만들어줄게요!",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 행복해요 ✨\n마음에 드는 코스를 선택해주세요!",
    steps: [
      {
        id: "step_time",
        type: "choice",
        title: "기념일 디너 몇 시로 예약할까요? ⏰",
        subtitle: "기념일 예약 시간대 선택",
        multiple: false,
        options: [
          "17:30 노을을 감상하며 1부 디너 🌅",
          "19:30 화려한 야경과 함께하는 2부 디너 🌃",
          "12:30 여유로운 기념일 런치 코스 🍽️"
        ]
      },
      {
        id: "step_dining",
        type: "places",
        title: "로맨틱 파인다이닝 & 스테이크 🥩",
        subtitle: "특별한 날을 빛내줄 최고급 다이닝",
        multiple: false,
        places: [
          {
            name: "울프강 스테이크하우스 청담",
            tag: "뉴욕 정통 스테이크",
            desc: "최고급 드라이에이징 포터하우스와 럭셔리한 분위기",
            mapUrl: "https://map.naver.com/p/search/%EC%9A%B8%ED%94%84%EA%B0%95%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%ED%95%98%EC%9A%B0%EC%8A%A4",
            image: IMAGE_PRESETS[3].url
          },
          {
            name: "테이블34 (그랜드 인터컨티넨탈)",
            tag: "프렌치 다이닝",
            desc: "34층 환상적인 시티뷰와 섬세한 프렌치 코스 요리",
            mapUrl: "https://map.naver.com/p/search/%ED%85%8C%EC%9D%B4%EB%B8%9434",
            image: IMAGE_PRESETS[1].url
          }
        ]
      },
      {
        id: "step_after",
        type: "places",
        title: "로맨틱한 2차 분위기 스팟 🍷",
        subtitle: "음악과 와인으로 기념일 완성하기",
        multiple: false,
        places: [
          {
            name: "라이브 재즈바",
            tag: "라이브 재즈 / 칵테일",
            desc: "감미로운 색소폰과 피아노 선율 속에서 칵테일 한잔 건배 🎷",
            mapUrl: "https://map.naver.com/p/search/%EC%9E%AC%EC%A6%88%EB%B0%94",
            image: IMAGE_PRESETS[9].url
          },
          {
            name: "호텔 스카이라운지 바",
            tag: "스카이라운지 / 샴페인",
            desc: "로맨틱한 샴페인 건배와 오래 기억될 환상적인 서울 야경",
            mapUrl: "https://map.naver.com/p/search/%ED%98%B8%ED%85%94%20%EC%8A%A4%EC%B9%B4%EC%9D%B4%EB%9D%BC%EC%9A%B4%EC%A7%80",
            image: IMAGE_PRESETS[11].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "기념일에 꼭 받고 싶거나 함께 나누고 싶은 이야기가 있다면 적어줘요! 💌",
        subtitle: "선물이나 꽃, 이벤트 취향도 좋아요!",
        placeholder: "예: 사진 예쁘게 남길 수 있는 곳이면 좋겠어요!"
      }
    ]
  },

  // 11. 테마: 서울 근교 힐링 드라이브
  drive_healing: {
    title: "답답한 도시를 벗어나 힐링 드라이브 갈래요? 🚗",
    subTitle: "탁 트인 강변 풍경과 맛있는 베이커리가 기다려요!",
    transitionMain: "드라이브 신청 수락 완료! 🚗💨\n좋은 플레이리스트 틀고 달려봐요!",
    transitionSub: "하늘에서 별이 쏟아지는 것처럼 기뻐요! ✨\n가장 끌리는 드라이브 목적지를 골라주세요!",
    steps: [
      {
        id: "step_route",
        type: "choice",
        title: "드라이브 어디로 떠날까요? 🚗",
        subtitle: "선호하는 코스를 골라주세요",
        multiple: false,
        options: [
          "남양주 / 팔당 (북한강 리버뷰 & 대형 카페)",
          "파주 헤이리마을 (예술마을 & 출판단지 산책)",
          "가평 / 청평 (청평호수 & 와인딩 드라이브)"
        ]
      },
      {
        id: "step_food",
        type: "places",
        title: "근교 유명 맛집 🍽️",
        subtitle: "드라이브 필수 맛집 코스 (중복 가능)",
        multiple: true,
        places: [
          {
            name: "기와집순두부 조안본점",
            tag: "향토 한식 / 순두부",
            desc: "북한강변 고즈넉한 한옥에서 맛보는 부드러운 순두부와 수육",
            mapUrl: "https://map.naver.com/p/search/%EA%B8%B0%EC%99%80%EC%A7%91%EC%88%9C%EB%91%90%EB%B6%80",
            image: IMAGE_PRESETS[12].url
          },
          {
            name: "팔당초계국수 본점",
            tag: "면요리 / 별미",
            desc: "라이더와 드라이버들이 사랑하는 새콤달콤 살얼음 초계국수",
            mapUrl: "https://map.naver.com/p/search/%ED%8C%94%EB%8B%B9%EC%B4%88%EA%B3%84%EA%B5%AD%EC%88%98",
            image: IMAGE_PRESETS[14].url
          }
        ]
      },
      {
        id: "step_cafe",
        type: "places",
        title: "탁 트인 리버뷰 대형 베이커리 ☕",
        subtitle: "강바람 맞으며 힐링하기",
        multiple: false,
        places: [
          {
            name: "나인블럭 북한강점",
            tag: "대형 베이커리 / 리버뷰",
            desc: "바로 앞 북한강 물결을 바라보며 마시는 스페셜티 커피",
            mapUrl: "https://map.naver.com/p/search/%EB%82%98%EC%9D%B8%EB%B8%94%EB%9F%AD%20%EB%B6%81%ED%95%9C%EA%B0%95%EC%A0%90",
            image: IMAGE_PRESETS[15].url
          },
          {
            name: "포러데이 팔당",
            tag: "베이커리 / 야경스팟",
            desc: "밤이 되면 야외 모닥불과 감성 조명이 로맨틱한 팔당 명소",
            mapUrl: "https://map.naver.com/p/search/%ED%8F%AC%EB%9F%AC%EB%8D%B0%EC%9D%B4%20%ED%8C%94%EB%8B%B9",
            image: IMAGE_PRESETS[16].url
          }
        ]
      },
      {
        id: "step_note",
        type: "text",
        title: "차에서 듣고 싶은 음악이나 가보고 싶었던 코스가 있나요? 💌",
        subtitle: "플레이리스트에 미리 넣어둘게요!",
        placeholder: "예: 신나는 팝송이나 잔잔한 어쿠스틱 좋아해요!"
      }
    ]
  },

  // 12. 직접 만들기: 빈 코스
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
  // 카테고리 필터 탭
  const filterTabs = document.querySelectorAll("#presetFilterTabs .tab-btn");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;

      const presetBtns = document.querySelectorAll(".btn-preset");
      presetBtns.forEach((btn) => {
        const cat = btn.dataset.category;
        if (filter === "all" || cat === filter || cat === "all") {
          btn.style.display = "flex";
        } else {
          btn.style.display = "none";
        }
      });
    });
  });

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
