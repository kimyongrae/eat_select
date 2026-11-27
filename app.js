const categories = [
  { id:'all', name:'완전 랜덤', emoji:'✦' }, { id:'korean', name:'한식', emoji:'🍚' }, { id:'japanese', name:'일식', emoji:'🍣' }, { id:'chinese', name:'중식', emoji:'🥟' },
  { id:'western', name:'양식', emoji:'🍝' }, { id:'chicken', name:'치킨', emoji:'🍗' }, { id:'cafe', name:'카페·디저트', emoji:'🍰' }, { id:'meat', name:'고기·구이', emoji:'🥩' },
  { id:'snack', name:'분식', emoji:'🍢' }, { id:'asian', name:'아시안', emoji:'🍛' }, { id:'seafood', name:'해산물·회', emoji:'🦐' }, { id:'night', name:'야식·술', emoji:'🍺' },
];
const menuPool = [
  ['korean','김치찌개','든든한 한 끼','🍚'],['korean','제육볶음','밥도둑 메뉴','🍚'],['korean','비빔밥','깔끔하고 건강하게','🥗'],['korean','냉면','시원한 한 그릇','🍜'],['korean','순두부찌개','뜨끈한 국물','🍲'],['korean','돼지국밥','든든한 국밥','🍚'],
  ['japanese','초밥','오늘은 깔끔하게','🍣'],['japanese','돈까스','바삭한 한 접시','🍱'],['japanese','라멘','뜨끈한 국물','🍜'],['japanese','우동','편안한 한 그릇','🍜'],['japanese','텐동','바삭하게 즐기기','🍤'],['japanese','규동','간단하고 든든하게','🍚'],
  ['chinese','짜장면','실패 없는 선택','🥢'],['chinese','짬뽕','얼큰한 국물','🍜'],['chinese','마라탕','얼얼한 매력','🌶️'],['chinese','탕수육','바삭달콤한 메뉴','🥡'],['chinese','볶음밥','든든한 중식','🍚'],['chinese','꿔바로우','쫀득바삭 별미','🥢'],
  ['western','파스타','기분 전환','🍝'],['western','햄버거','오늘은 간단하게','🍔'],['western','피자','함께 먹기 좋은 메뉴','🍕'],['western','스테이크','제대로 먹는 날','🥩'],['western','리조또','부드러운 한 접시','🍚'],['western','샐러드','가볍게 즐기기','🥗'],
  ['chicken','양념치킨','달콤매콤 국민 메뉴','🍗'],['chicken','후라이드치킨','바삭함의 정석','🍗'],['chicken','간장치킨','짭짤달콤한 맛','🍗'],['chicken','닭강정','간식처럼 즐기기','🍗'],['chicken','순살치킨','깔끔하게 먹기','🍗'],['chicken','치킨·떡볶이','둘 다 포기 못할 때','🍗'],
  ['cafe','아메리카노','잠깐의 휴식','☕'],['cafe','크로플','요즘 당기는 맛','🧇'],['cafe','빙수','시원한 달콤함','🍧'],['cafe','케이크','달콤하게 마무리','🍰'],['cafe','마카롱','작은 디저트','🧁'],['cafe','베이커리','갓 구운 빵','🥐'],
  ['meat','삼겹살','오늘은 고기','🥩'],['meat','소고기 구이','제대로 먹는 날','🥩'],['meat','갈비','가족과 함께','🍖'],['meat','곱창','쫄깃한 별미','🔥'],['meat','닭갈비','매콤한 철판구이','🍗'],['meat','오겹살','두툼하게 즐기기','🥓'],
  ['korean','된장찌개','구수한 집밥','🍲'],['korean','부대찌개','푸짐한 한 냄비','🍲'],['korean','불고기','달콤짭짤한 정석','🥩'],['korean','삼계탕','든든한 보양식','🍲'],['korean','칼국수','후루룩 한 그릇','🍜'],['korean','감자탕','얼큰한 뼈해장','🍲'],['korean','설렁탕','진하고 깊은 국물','🍲'],['korean','갈비탕','깔끔한 보양','🍲'],['korean','찜닭','달콤짭짤 푸짐하게','🍗'],['korean','닭볶음탕','얼큰하고 푸짐하게','🍗'],['korean','쌈밥','건강한 한 상','🥬'],['korean','곰탕','맑고 진한 국물','🍲'],['korean','육개장','얼큰 든든','🌶️'],
  ['japanese','소바','시원하고 깔끔하게','🍜'],['japanese','일본 카레','진한 카레 한 접시','🍛'],['japanese','샤브샤브','따뜻하게 즐기기','🍲'],['japanese','가츠동','바삭한 덮밥','🍱'],['japanese','오코노미야키','철판 별미','🥞'],
  ['chinese','마파두부','매콤한 감칠맛','🌶️'],['chinese','깐풍기','달콤매콤 바삭','🍗'],['chinese','유린기','상큼한 소스','🍗'],['chinese','양꼬치','향긋한 별미','🍢'],['chinese','딤섬','한입 가득','🥟'],['chinese','울면','걸쭉한 국물','🍜'],
  ['western','샌드위치','가볍게 한 끼','🥪'],['western','브런치','여유로운 오전','🍳'],['western','감바스','와인과 함께','🍤'],['western','폭립','달콤한 바비큐','🍖'],['western','함박스테이크','부드러운 한 접시','🍖'],
  ['chicken','마늘치킨','알싸한 맛','🍗'],['chicken','반반치킨','고민될 땐 반반','🍗'],['chicken','파닭','상큼한 파 올려서','🍗'],
  ['cafe','카페라떼','부드러운 한 잔','☕'],['cafe','와플','따끈달콤하게','🧇'],['cafe','소금빵','겉바속촉','🥐'],['cafe','아이스크림','시원한 달콤함','🍨'],['cafe','토스트','든든한 간식','🍞'],['cafe','티라미수','부드러운 디저트','🍰'],
  ['meat','목살','쫄깃 고소하게','🥩'],['meat','차돌박이','얇고 고소하게','🥩'],['meat','막창','쫄깃한 별미','🔥'],['meat','항정살','쫀득 고소하게','🥓'],
  ['snack','떡볶이','매콤달콤 국민 간식','🌶️'],['snack','김밥','간편한 한 끼','🍙'],['snack','순대','쫄깃한 간식','🍢'],['snack','튀김','바삭 고소하게','🍤'],['snack','라볶이','라면과 떡볶이','🍜'],['snack','쫄면','새콤매콤하게','🍜'],['snack','라면','분식집 라면','🍜'],
  ['asian','쌀국수','깔끔한 국물','🍜'],['asian','팟타이','새콤달콤 볶음면','🍝'],['asian','분짜','상큼한 베트남식','🥗'],['asian','반미','바삭한 샌드위치','🥖'],['asian','인도 커리','향신료 가득','🍛'],['asian','나시고렝','동남아 볶음밥','🍚'],['asian','똠얌꿍','새콤 얼큰하게','🍲'],
  ['seafood','모둠회','신선한 한 접시','🍣'],['seafood','회덮밥','간단하고 푸짐하게','🍚'],['seafood','물회','시원새콤하게','🥣'],['seafood','연어','부드러운 고소함','🍣'],['seafood','조개구이','구워 먹는 재미','🐚'],['seafood','해물탕','시원 얼큰하게','🦞'],['seafood','생선구이','집밥 느낌','🐟'],['seafood','아구찜','매콤 쫄깃하게','🦑'],['seafood','낙지볶음','맵고 쫄깃하게','🐙'],
  ['night','족발','쫄깃한 야식','🍖'],['night','보쌈','촉촉 부드럽게','🥬'],['night','닭발','불맛 매운맛','🔥'],['night','골뱅이무침','맥주 안주','🍺'],['night','어묵탕','따끈한 안주','🍢'],['night','닭똥집','바삭 쫄깃하게','🍗'],['night','두부김치','술안주 정석','🍶'],
].map(([category, menu, label, emoji]) => ({ category, menu, label, emoji, type:`${categories.find(c => c.id === category).name} · ${menu}` }));

const MENU_DESC = {
  '김치찌개':['푹 익은 김치의 칼칼하고 깊은 국물','밥이 당기고 든든해야 하는 평일 점심'],
  '제육볶음':['매콤달콤한 양념에 밥이 술술 넘어가요','점심을 빠르고 푸짐하게 먹고 싶은 날'],
  '비빔밥':['나물과 고추장으로 담백하게 비벼 먹는 한 그릇','과식이 부담되거나 가볍게 먹고 싶은 날'],
  '냉면':['차갑고 시원한 육수와 쫄깃한 면','더워서 입맛이 없는 여름날'],
  '순두부찌개':['부드러운 순두부에 얼큰한 국물','쌀쌀한 날이나 해장이 필요한 아침'],
  '돼지국밥':['진하게 우린 돼지 육수에 밥을 말아 먹는 국밥','속을 든든히 채우고 싶은 추운 날'],
  '된장찌개':['구수하고 담백한 집밥 스타일 국물','자극적인 음식이 부담스러운 날'],
  '부대찌개':['햄과 소시지, 라면사리가 어우러진 푸짐한 냄비','여럿이 모이거나 얼큰한 게 당기는 날'],
  '불고기':['달짝지근한 간장 양념의 부드러운 고기','입맛이 다양한 가족이나 손님과 함께하는 날'],
  '삼계탕':['닭 한 마리를 푹 고아낸 보양식','기력이 떨어졌거나 복날에 몸보신하고 싶은 날'],
  '칼국수':['담백한 국물에 후루룩 넘어가는 면','비 오는 날이나 가볍게 한 그릇 하고 싶은 날'],
  '감자탕':['뼈에서 우러난 얼큰한 국물과 부드러운 살코기','술 마신 다음 날 해장이나 늦은 저녁 모임'],
  '설렁탕':['뽀얗게 우린 진한 사골 국물','속이 허하고 담백하게 든든해지고 싶은 날'],
  '갈비탕':['큼직한 갈비가 들어간 맑고 깊은 국물','부모님과 식사하거나 기운을 보충하고 싶은 날'],
  '찜닭':['달콤짭짤한 간장 양념에 당면이 푹 배어 있어요','2~3명이 푸짐하게 나눠 먹고 싶은 날'],
  '닭볶음탕':['감자와 함께 얼큰하게 졸인 닭 요리','밥 비벼 먹을 얼큰한 요리가 당기는 날'],
  '쌈밥':['신선한 쌈 채소와 쌈장으로 먹는 한 상','채소가 먹고 싶고 건강한 식사가 필요한 날'],
  '곰탕':['맑고 진한 고기 국물이 깔끔해요','과음 후거나 속이 편한 음식이 필요한 날'],
  '육개장':['푹 삶은 소고기와 고사리가 들어간 얼큰한 국','몸이 으슬으슬하고 땀 빼고 싶은 날'],
  '초밥':['신선한 생선을 한 입에 즐기는 깔끔한 식사','기분 전환이나 특별히 대접하고 싶은 날'],
  '돈까스':['바삭한 튀김옷과 부드러운 고기','남녀노소 실패 없는 메뉴가 필요한 날'],
  '라멘':['진한 육수에 꼬들한 면','쌀쌀한 날이나 혼자 든든하게 먹고 싶은 날'],
  '우동':['쫄깃한 굵은 면과 따뜻한 국물','속이 편하고 부담 없는 한 그릇이 필요한 날'],
  '텐동':['갓 튀긴 튀김을 밥 위에 올린 덮밥','바삭한 튀김을 한 그릇으로 끝내고 싶은 날'],
  '규동':['달짝지근하게 졸인 소고기 덮밥','빠르고 간단하게 한 끼 해결하고 싶은 날'],
  '소바':['차갑게 먹는 메밀면과 깔끔한 쯔유','더운 날이나 느끼한 음식 뒤에 가볍게 먹고 싶은 날'],
  '일본 카레':['부드럽고 진한 소스의 카레 라이스','무난하면서 든든한 한 접시가 필요한 날'],
  '샤브샤브':['얇게 썬 고기와 채소를 육수에 데쳐 먹어요','건강하게 푸짐히 먹고 싶은 추운 날이나 모임'],
  '가츠동':['돈까스에 달걀을 입혀 덮밥으로 즐겨요','든든한 한 그릇으로 간단히 먹고 싶은 날'],
  '오코노미야키':['양배추와 해산물을 부쳐낸 일본식 철판 요리','맥주나 하이볼과 가볍게 즐기고 싶은 날'],
  '짜장면':['달콤짭짤한 춘장 소스에 비빈 면','고민될 때 실패 없는 선택이 필요한 날'],
  '짬뽕':['얼큰한 국물과 해물이 가득','비 오는 날이나 해장이 필요한 날'],
  '마라탕':['얼얼하고 매콤한 마라 국물에 재료를 골라 먹어요','스트레스를 풀고 싶은 날'],
  '탕수육':['바삭한 튀김에 새콤달콤한 소스','여럿이 나눠 먹거나 기념일 같은 날'],
  '볶음밥':['불맛 나는 고슬고슬한 밥','빠르게 든든한 한 그릇이 필요한 날'],
  '꿔바로우':['찹쌀 튀김옷이 쫀득하고 바삭한 탕수육','쫀득한 식감을 좋아하고 여럿이 나눠 먹는 날'],
  '마파두부':['부드러운 두부와 매콤한 소스를 밥에 올려요','밥과 함께 칼칼한 맛이 필요한 날'],
  '깐풍기':['바삭한 닭튀김에 매콤달콤한 소스','술안주나 모임 요리가 필요한 날'],
  '유린기':['바삭한 닭튀김에 상큼한 간장 소스','튀김은 먹고 싶지만 느끼한 건 싫은 날'],
  '양꼬치':['쯔란 향신료를 찍어 먹는 구이 꼬치','술 한잔과 함께 색다른 모임을 하고 싶은 날'],
  '딤섬':['한 입 크기로 쪄낸 다양한 만두','가볍게 여러 가지를 맛보고 싶은 날'],
  '울면':['걸쭉하고 담백한 국물의 중식 면','자극적이지 않고 따뜻한 국물이 필요한 날'],
  '파스타':['소스를 골라 즐기는 다양한 면 요리','분위기 있는 식사나 데이트가 있는 날'],
  '햄버거':['패티와 번, 채소를 한 번에 먹는 간편식','바쁘고 빠르게 먹고 싶은 날'],
  '피자':['치즈가 늘어나는 나눠 먹기 좋은 메뉴','친구나 가족과 함께 모이는 날'],
  '스테이크':['육즙 가득한 고기를 제대로 즐겨요','기념일이나 나에게 보상하고 싶은 날'],
  '리조또':['쌀을 크림이나 토마토 소스에 부드럽게 익힌 요리','부드럽고 든든한 한 접시가 필요한 날'],
  '샐러드':['신선한 채소와 단백질로 가볍게','과식 후이거나 가볍게 먹고 싶은 날'],
  '샌드위치':['빵 사이에 재료를 가득 채운 간편식','바쁜 점심이나 가벼운 브런치가 필요한 날'],
  '브런치':['에그, 빵, 샐러드가 어우러진 여유로운 한 끼','주말 늦은 아침을 여유롭게 보내고 싶은 날'],
  '감바스':['올리브유에 새우와 마늘을 끓여 빵과 곁들여요','와인이나 맥주와 가볍게 한잔하고 싶은 날'],
  '폭립':['달콤한 소스를 바른 부드러운 돼지갈비','여럿이 나눠 먹으며 맥주 한잔하는 날'],
  '함박스테이크':['부드러운 다진 고기 패티와 소스','아이와 함께거나 부드러운 고기가 당기는 날'],
  '양념치킨':['달콤매콤한 양념이 입에 착 붙어요','야식이나 모임, 스트레스 풀고 싶은 날'],
  '후라이드치킨':['겉은 바삭, 속은 촉촉한 기본기','맥주 한잔과 함께하는 편안한 저녁'],
  '간장치킨':['짭짤달콤한 간장 양념과 은은한 마늘향','매운 건 싫지만 치킨이 먹고 싶은 날'],
  '닭강정':['한입 크기의 바삭하고 달콤한 튀김','간식처럼 가볍게 집어 먹고 싶은 날'],
  '순살치킨':['뼈 없이 먹기 편한 치킨','영화나 경기를 보며 편하게 먹는 날'],
  '치킨·떡볶이':['바삭한 치킨과 매콤한 떡볶이 조합','어느 쪽도 포기하기 싫은 야식 날'],
  '마늘치킨':['알싸한 마늘 향이 올라간 치킨','느끼함을 덜고 향이 좋은 치킨이 당기는 날'],
  '반반치킨':['두 가지 맛을 한 번에 즐겨요','취향이 갈리는 모임에서 고민될 때'],
  '파닭':['신선한 파와 소스를 올려 상큼해요','치킨이 느끼할 것 같은 날'],
  '아메리카노':['깔끔하고 쌉싸름한 기본 커피','잠깐 쉬어가거나 식후에 입가심하고 싶은 날'],
  '크로플':['바삭한 크루아상 와플에 아이스크림을 곁들여요','달콤한 디저트가 당기는 오후'],
  '빙수':['곱게 간 얼음에 팥이나 과일을 올려요','더위를 식히고 싶은 여름날'],
  '케이크':['달콤한 한 조각의 여유','기념일이나 기분 좋게 마무리하고 싶은 날'],
  '마카롱':['작고 쫀득한 프랑스식 디저트','선물이나 가볍게 달콤한 게 필요한 날'],
  '베이커리':['갓 구운 빵 냄새와 다양한 종류','아침 식사나 간식을 고민할 때'],
  '카페라떼':['우유가 부드럽게 어우러진 커피','커피는 마시고 싶지만 쓴 건 부담스러운 날'],
  '와플':['따끈하고 바삭한 반죽에 토핑을 올려요','수다 떨며 디저트를 즐기고 싶은 날'],
  '소금빵':['겉은 바삭, 속은 촉촉한 짭짤한 빵','달지 않은 간식이 필요한 아침이나 오후'],
  '아이스크림':['차갑고 달콤한 즉석 디저트','더운 날이나 식후에 시원한 게 당길 때'],
  '토스트':['따끈하게 구운 빵에 재료를 가득 채워요','간단한 아침이나 가벼운 간식이 필요한 날'],
  '티라미수':['커피향이 나는 부드러운 이탈리아 케이크','커피와 함께 천천히 즐기고 싶은 날'],
  '삼겹살':['노릇하게 구운 고소한 돼지고기','회식이나 친구와 소주 한잔하는 날'],
  '소고기 구이':['육즙과 풍미가 진한 고급 구이','기념일이나 특별히 대접하고 싶은 날'],
  '갈비':['양념에 재운 달콤한 갈비를 구워 먹어요','가족 모임이나 푸짐히 먹고 싶은 날'],
  '곱창':['쫄깃하고 고소한 부속 구이','술자리나 색다른 모임이 있는 날'],
  '닭갈비':['매콤한 양념을 철판에 볶아 먹어요','볶음밥까지 마무리하고 싶은 친구와의 식사'],
  '오겹살':['두툼한 고기의 식감이 좋은 구이','푸짐하게 고기를 즐기고 싶은 날'],
  '목살':['적당한 기름기에 쫄깃고소한 부위','삼겹살이 느끼할 때 담백한 고기가 당기는 날'],
  '차돌박이':['얇게 썰어 살짝 구워 먹는 소고기','빠르게 구워 고소한 고기를 즐기고 싶은 날'],
  '막창':['쫄깃한 식감의 부속 구이','특별한 안주로 술자리를 즐기는 날'],
  '항정살':['쫀득하고 고소한 돼지 목 부위','삼겹살보다 쫀득한 고기가 당기는 날'],
  '떡볶이':['매콤달콤한 국민 간식','출출한 오후나 스트레스 풀고 싶은 날'],
  '김밥':['한 줄로 간편하게 먹는 한 끼','바쁘거나 나들이 도시락이 필요한 날'],
  '순대':['쫄깃한 식감의 분식 대표 간식','떡볶이와 함께 분식 세트를 즐기고 싶은 날'],
  '튀김':['바삭한 튀김을 떡볶이 국물에 찍어요','가볍게 군것질하고 싶은 날'],
  '라볶이':['라면과 떡볶이를 한 번에','푸짐하고 매콤한 분식이 필요한 날'],
  '쫄면':['쫄깃한 면에 새콤매콤한 양념','입맛이 없거나 새콤한 게 당기는 날'],
  '라면':['분식집 특유의 얼큰한 라면','간단하게 때우거나 김밥과 함께 먹고 싶은 날'],
  '쌀국수':['맑고 깊은 육수에 부드러운 쌀면','해장이나 부담 없이 따뜻한 국물이 당기는 날'],
  '팟타이':['새콤달콤하게 볶은 태국식 볶음 쌀국수','색다른 동남아 맛을 가볍게 즐기고 싶은 날'],
  '분짜':['구운 고기와 쌀국수, 새콤한 소스','상큼하고 가벼운 베트남 음식이 필요한 날'],
  '반미':['바삭한 바게트에 고기와 채소를 채운 샌드위치','가볍고 개성 있는 점심이 필요한 날'],
  '인도 커리':['향신료가 풍부한 걸쭉한 커리와 난','색다른 맛을 경험하고 싶은 날'],
  '나시고렝':['향신료로 볶은 인도네시아식 볶음밥','익숙한 볶음밥에 이국적인 변화를 주고 싶은 날'],
  '똠얌꿍':['새콤하고 매콤한 태국식 해산물 수프','입맛이 없고 얼큰상큼한 국물이 필요한 날'],
  '모둠회':['여러 가지 생선회를 한 접시에','모임이나 기념일, 신선한 안주가 필요한 날'],
  '회덮밥':['신선한 회와 채소를 초고추장에 비벼요','회는 먹고 싶지만 한 그릇으로 간단히 하고 싶은 날'],
  '물회':['차가운 육수에 신선한 회를 말아 먹어요','무더워서 시원한 음식이 필요한 날'],
  '연어':['부드럽고 고소한 맛','가볍게 고소한 회를 즐기고 싶은 날'],
  '조개구이':['불에 구워 입을 벌린 조개의 시원한 맛','바다 분위기를 내며 술 한잔하는 날'],
  '해물탕':['여러 해산물이 우러난 시원 얼큰한 국물','모임이 있거나 속을 풀고 싶은 날'],
  '생선구이':['노릇하게 구운 담백한 생선과 밥','집밥 같은 편안한 한 끼가 필요한 날'],
  '아구찜':['매콤한 양념에 쫄깃한 아귀를 쪄낸 요리','여럿이 얼큰하게 즐기고 싶은 날'],
  '낙지볶음':['쫄깃한 낙지를 매콤하게 볶아요','매운맛으로 기운을 내고 싶은 날'],
  '족발':['쫀득한 껍질과 부드러운 살코기','야식이나 모임, 술안주가 필요한 날'],
  '보쌈':['삶은 돼지고기를 김치와 함께 싸 먹어요','담백한 고기가 먹고 싶은 모임이나 야식'],
  '닭발':['불맛 나는 매운 양념','스트레스를 날리고 싶은 술자리'],
  '골뱅이무침':['새콤달콤 매콤한 양념에 소면을 곁들여요','맥주 안주가 필요한 날'],
  '어묵탕':['따뜻한 국물과 어묵','쌀쌀한 날 가볍게 한잔하거나 속을 풀 때'],
  '닭똥집':['쫄깃하고 고소한 식감','바삭하게 튀긴 안주가 필요한 술자리'],
  '두부김치':['볶은 김치와 부드러운 두부','막걸리 한잔하고 싶은 비 오는 날'],
};
const menuDescHtml = item => { const d = MENU_DESC[item.menu]; return d ? `<aside class="menu-desc"><p><b>특징</b><span>${esc(d[0])}</span></p><p><b>이런 날</b><span>${esc(d[1])}</span></p></aside>` : ''; };

let selected = 'all'; let pickedMenu = null; let currentMenu = menuPool.find(item => item.menu === '양념치킨'); let currentCoords = { lat:37.4979, lng:127.0276 };
let history = JSON.parse(localStorage.getItem('eatSelectHistory') || '[]').map(item => typeof item === 'string' ? { menu:item, location:'이전 추천' } : item);
let map; let currentMarker; let restaurantMarkers = []; let kakaoPlaces; let kakaoGeocoder; let searchRequestId = 0; let activeInfoWindow = null; let featuredPlace = null;
const $ = selector => document.querySelector(selector); const locationText = () => $('#locationInput').value.trim() || '강남역';

function categoryMenus() { return selected === 'all' ? menuPool : menuPool.filter(item => item.category === selected); }
function renderCategories() { $('#categoryGrid').innerHTML = categories.map(category => `<button class="category ${category.id === selected ? 'active' : ''}" data-category="${category.id}"><span class="emoji">${category.emoji}</span><span>${category.name}</span></button>`).join(''); }
function renderMenuChips() { const list = selected === 'all' ? categories.filter(category => category.id !== 'all').map(category => menuPool.find(item => item.category === category.id)).filter(Boolean) : categoryMenus(); $('#menuChips').innerHTML = list.map(item => `<button class="menu-chip ${pickedMenu?.menu === item.menu ? 'active' : ''}" data-menu="${item.menu}">${item.emoji} ${item.menu}</button>`).join(''); }
function searchLinks(query) { const place = encodeURIComponent(`${locationText()} ${query}`); return `<a target="_blank" rel="noopener" href="https://map.kakao.com/?q=${place}">카카오맵</a>`; }
function renderRestaurant(item, animate = false) { const card = $('#restaurantCard'); if (animate) card.animate([{ opacity:.2, transform:'scale(.98)' }, { opacity:1, transform:'scale(1)' }], { duration:420, easing:'ease-out' }); const colors = { korean:'linear-gradient(135deg,#5a3b31,#b07855)', japanese:'linear-gradient(135deg,#29483d,#7a9a6d)', chinese:'linear-gradient(135deg,#7b3f37,#c88961)', western:'linear-gradient(135deg,#604d2e,#c09a62)', chicken:'linear-gradient(135deg,#4e4330,#b38b4c)', cafe:'linear-gradient(135deg,#5c4054,#b8879b)', meat:'linear-gradient(135deg,#4b302b,#a66e58)', snack:'linear-gradient(135deg,#7a3b3b,#d1785a)', asian:'linear-gradient(135deg,#2f5a4a,#6fae8c)', seafood:'linear-gradient(135deg,#27495e,#6aa0b8)', night:'linear-gradient(135deg,#3a3550,#8a79b3)' }; card.style.background = colors[item.category]; const desc = menuDescHtml(item); card.innerHTML = `<div class="card-content ${desc ? '' : 'solo'}"><div class="card-main"><span class="tag">${item.label}</span><div class="card-title"><div class="food-emoji" aria-hidden="true">${item.emoji}</div><div class="card-title-text"><h3>${esc(item.menu)}</h3><div class="meta"><span>${item.type}</span><span>·</span><span>${esc(locationText())} 주변</span></div></div></div><div class="place-highlight" id="featuredPlace">📍 <span>가까운 ${esc(item.menu)} 매장을 찾고 있어요…</span></div><div class="card-bottom"><div class="map-links">${searchLinks(item.menu)}</div></div></div>${desc}</div>`; }
function renderHistory() { $('#historyList').innerHTML = history.length ? history.map((item,index) => `<div class="history-row"><span>${index + 1}</span><strong>${item.menu}</strong><span>${item.location}</span></div>`).join('') : '<div class="history-empty">아직 뽑은 메뉴가 없어요.<br>오늘의 메뉴를 하나 뽑아보세요!</div>'; }
function setStatus(message) { $('#locationStatus').textContent = message; }

/* ===== 위치 선택 UI: 인기 지역 · 최근 위치 · 마지막 위치 기억 ===== */
const SAVED_KEY = 'eatSavedLocation'; const RECENT_KEY = 'eatRecentLocations';
const POPULAR_AREAS = [
  { label:'강남역', lat:37.4979, lng:127.0276 }, { label:'홍대입구', lat:37.5572, lng:126.9245 }, { label:'신촌', lat:37.5551, lng:126.9368 },
  { label:'건대입구', lat:37.5404, lng:127.0692 }, { label:'성수동', lat:37.5446, lng:127.0557 }, { label:'잠실', lat:37.5133, lng:127.1001 },
  { label:'여의도', lat:37.5216, lng:126.9243 }, { label:'광화문', lat:37.5717, lng:126.9768 }, { label:'서울역', lat:37.5547, lng:126.9707 },
  { label:'이태원', lat:37.5345, lng:126.9946 }, { label:'사당', lat:37.4765, lng:126.9816 }, { label:'가산디지털단지', lat:37.4813, lng:126.8826 },
  { label:'연남동', lat:37.5620, lng:126.9255 }, { label:'을지로', lat:37.5663, lng:126.9926 }, { label:'익선동', lat:37.5742, lng:126.9905 },
  { label:'왕십리', lat:37.5612, lng:127.0379 }, { label:'영등포', lat:37.5156, lng:126.9074 }, { label:'신림', lat:37.4843, lng:126.9297 },
  { label:'노원', lat:37.6556, lng:127.0613 }, { label:'판교역', lat:37.3948, lng:127.1112 }, { label:'수원 인계동', lat:37.2646, lng:127.0298 },
  { label:'대구 동성로', lat:35.8687, lng:128.5944 }, { label:'서면', lat:35.1579, lng:129.0595 }, { label:'해운대', lat:35.1640, lng:129.1589 },
];
const AREA_COLLAPSED_COUNT = 12; let areaExpanded = false;
let areaList = [];
const esc = text => String(text).replace(/[&<>"']/g, ch => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[ch]));
function loadJson(key, fallback) { try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback; } catch { return fallback; } }
function saveJson(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
function validArea(area) { return area && area.label && Number.isFinite(area.lat) && Number.isFinite(area.lng); }
function restoreSavedLocation() { if (new URLSearchParams(location.search).get('location')) return; const saved = loadJson(SAVED_KEY, null); if (validArea(saved)) { $('#locationInput').value = saved.label; currentCoords = { lat:saved.lat, lng:saved.lng }; } }
function rememberLocation(lat, lng, label) { saveJson(SAVED_KEY, { lat, lng, label }); if (!POPULAR_AREAS.some(area => area.label === label)) { const recents = loadJson(RECENT_KEY, []).filter(area => validArea(area) && area.label !== label); recents.unshift({ label, lat, lng }); saveJson(RECENT_KEY, recents.slice(0, 5)); } renderAreaChips(); }
function renderAreaChips() {
  const current = locationText(); const popularLabels = new Set(POPULAR_AREAS.map(area => area.label));
  const recents = loadJson(RECENT_KEY, []).filter(area => validArea(area) && !popularLabels.has(area.label));
  const visible = areaExpanded ? POPULAR_AREAS : POPULAR_AREAS.slice(0, AREA_COLLAPSED_COUNT);
  areaList = [...recents, ...visible];
  const chip = (area, index) => `<button type="button" class="area-chip ${area.label === current ? 'active' : ''}" data-i="${index}">${esc(area.label)}</button>`;
  const toggle = `<button type="button" class="area-chip area-more" data-more="1">${areaExpanded ? '접기 ▴' : `더보기 +${POPULAR_AREAS.length - AREA_COLLAPSED_COUNT}`}</button>`;
  const group = (title, items, offset, extra = '', cls = '') => `<div class="area-group"><span class="area-title">${title}</span><div class="area-row ${cls}">${items.map((area, i) => chip(area, offset + i)).join('')}${extra}</div></div>`;
  $('#areaChips').innerHTML = (recents.length ? group('최근', recents, 0, '', 'scroll') : '') + group('주요 지역', visible, recents.length, toggle);
}
function pickArea(area) { $('#locationInput').value = area.label; setCenter(area.lat, area.lng, area.label); rememberLocation(area.lat, area.lng, area.label); renderAreaChips(); toast(`${area.label}(으)로 바꿨어요.`); }
function setLocationManually(lat, lng) { setCenter(lat, lng); setAddressFromCoordinates(lat, lng, { remember:true }); toast('선택한 위치로 바꿨어요.'); }

function selectMenu(item, shouldDraw = false) { pickedMenu = item; currentMenu = item; renderMenuChips(); renderRestaurant(item); searchPlaces(); if (shouldDraw) draw(); }
function draw(scroll = true) { const pool = pickedMenu ? [pickedMenu] : categoryMenus(); currentMenu = pool[Math.floor(Math.random() * pool.length)]; renderRestaurant(currentMenu, true); history.unshift({ menu:currentMenu.menu, location:locationText() }); history = history.filter((item,index,array) => index === array.findIndex(other => other.menu === item.menu && other.location === item.location)).slice(0,12); localStorage.setItem('eatSelectHistory', JSON.stringify(history)); $('#historyCount').textContent = history.length; searchPlaces(); if (scroll) $('#resultSection').scrollIntoView({ behavior:'smooth', block:'start' }); }
function clearRestaurantMarkers() { if (activeInfoWindow) activeInfoWindow.close(); activeInfoWindow = null; restaurantMarkers.forEach(entry => entry.marker.setMap(null)); restaurantMarkers = []; }
function renderFallbackNearby() { featuredPlace = null; clearRestaurantMarkers(); const items = pickedMenu ? [pickedMenu] : categoryMenus().slice(0,4); $('#nearbyCount').textContent = ''; $('#nearbyLocationLabel').textContent = `${locationText()} 주변 · ${currentMenu.menu} 추천`; const featured = $('#featuredPlace'); if (featured) featured.innerHTML = `🔎 <span>카카오맵에서 <strong>${currentMenu.menu}</strong> 매장을 다시 검색해보세요.</span>`; $('#nearbyList').innerHTML = items.map(item => `<article class="nearby-item"><h3>${item.emoji} ${item.menu}</h3><div class="nearby-meta"><span>${item.type}</span><span class="nearby-rating">카카오 검색</span></div><a target="_blank" rel="noopener" href="https://map.kakao.com/?q=${encodeURIComponent(`${locationText()} ${item.menu}`)}">상세 검색 →</a></article>`).join(''); }
let nearbyPlaces = [];
/* 평점 제공자: 카카오 로컬 API는 평점을 주지 않아요. 아래에 (place) => ({ rating, count }) 형태의 async 함수를 넣으면 자동으로 평점순 정렬돼요. */
const RATING_PROVIDER = null;
const detailUrl = place => String(place?.place_url || '').replace(/^http:\/\//, 'https://');
const ratingText = place => place.rating ? `<span class="nearby-rating">★ ${place.rating.toFixed(1)}${place.ratingCount ? ` (${place.ratingCount})` : ''}</span>` : '';
const sortByRating = list => list.some(place => place.rating) ? [...list].sort((a,b) => (b.rating || 0) - (a.rating || 0) || (Number(a.distance) || 0) - (Number(b.distance) || 0)) : list;
async function enrichRatings(places, requestId) { if (!RATING_PROVIDER) return; await Promise.all(places.map(async place => { try { const result = await RATING_PROVIDER(place); if (result?.rating) { place.rating = Number(result.rating); place.ratingCount = result.count; } } catch {} })); if (requestId !== searchRequestId || !places.some(place => place.rating)) return; renderNearby(places); }
function renderNearby(results) { if (!results?.length) return renderFallbackNearby(); const visible = sortByRating(results).slice(0,10); nearbyPlaces = visible; featuredPlace = visible[0]; $('#nearbyCount').textContent = ''; $('#nearbyLocationLabel').textContent = `${locationText()} 주변 · ${currentMenu.menu} 검색 결과${visible.some(place => place.rating) ? ' · 평점순' : ''}`; const top = visible[0]; const featured = $('#featuredPlace'); if (featured) featured.innerHTML = `📍 <span>${top.rating ? '평점 추천' : '가까운 추천'}: <strong>${esc(top.place_name)}</strong>${top.rating ? ` · ★ ${top.rating.toFixed(1)}` : top.distance ? ` · ${top.distance}m` : ''}</span>`; $('#nearbyList').innerHTML = visible.map((place,index) => `<article class="nearby-item" data-place-index="${index}"><div class="nearby-head"><h3><span class="result-number">${index + 1}</span>${esc(place.place_name)}</h3>${ratingText(place)}</div><div class="nearby-meta"><span>${esc(place.category_name.split(' > ').at(-1) || '음식점')} · ${place.distance ? `${place.distance}m` : '거리 확인'}</span><a class="detail-btn" target="_blank" rel="noopener" href="${detailUrl(place)}" aria-label="${esc(place.place_name)} 카카오맵 상세 보기">상세 보기 ›</a></div></article>`).join(''); updateKakaoMarkers(visible); }
function markerImage(number) { const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="43" viewBox="0 0 34 43"><path fill="#ff6d4d" stroke="white" stroke-width="3" d="M17 1.5C8.6 1.5 2 8 2 16.2 2 27.5 17 40.8 17 40.8S32 27.5 32 16.2C32 8 25.4 1.5 17 1.5z"/><text x="17" y="21" text-anchor="middle" fill="white" font-family="Arial,sans-serif" font-size="14" font-weight="700">${number}</text></svg>`; return new kakao.maps.MarkerImage(`data:image/svg+xml;base64,${btoa(svg)}`,new kakao.maps.Size(34,43),{ offset:new kakao.maps.Point(17,43) }); }
function openPlaceInfo(entry) { if (activeInfoWindow && activeInfoWindow !== entry.info) activeInfoWindow.close(); entry.info.open(map,entry.marker); activeInfoWindow = entry.info; }
function updateKakaoMarkers(places) { clearRestaurantMarkers(); restaurantMarkers = places.map((place,index) => { const marker = new kakao.maps.Marker({ map, position:new kakao.maps.LatLng(place.y,place.x), title:`${index + 1}. ${place.place_name}`, image:markerImage(index + 1) }); const info = new kakao.maps.InfoWindow({ content:`<div style="padding:9px 11px;font-size:13px;white-space:nowrap"><strong>${index + 1}. ${place.place_name}</strong><br><span>${currentMenu.menu}${place.distance ? ` · ${place.distance}m` : ''}${place.rating ? ` · ★ ${place.rating.toFixed(1)}` : ''}</span><br><a href="${detailUrl(place)}" target="_blank" rel="noopener" style="color:#e9573b;font-size:12px;font-weight:700">상세보기 ›</a></div>` }); const entry = { marker,info }; kakao.maps.event.addListener(marker,'click',() => openPlaceInfo(entry)); return entry; }); }
/* ===== 장소 검색: 세션 캐시 · 호출 합치기 · 재시도 축소 ===== */
const PLACE_CACHE_KEY = 'eatPlaceCache'; const PLACE_CACHE_TTL = 30 * 60 * 1000; const PLACE_CACHE_MAX = 40; let searchTimer = null;
const placeCacheKey = menu => `${currentCoords.lat.toFixed(4)},${currentCoords.lng.toFixed(4)}|${menu}`;
const slimPlace = place => ({ id:place.id, place_name:place.place_name, category_name:place.category_name || '', address_name:place.address_name || '', place_url:place.place_url, x:place.x, y:place.y, distance:place.distance });
function readPlaceCache(key) { try { const hit = JSON.parse(sessionStorage.getItem(PLACE_CACHE_KEY) || '{}')[key]; return hit && Date.now() - hit.t < PLACE_CACHE_TTL ? hit.d : null; } catch { return null; } }
function writePlaceCache(key, data) { try { const all = JSON.parse(sessionStorage.getItem(PLACE_CACHE_KEY) || '{}'); all[key] = { t:Date.now(), d:data }; Object.keys(all).sort((a,b) => all[b].t - all[a].t).slice(PLACE_CACHE_MAX).forEach(k => delete all[k]); sessionStorage.setItem(PLACE_CACHE_KEY, JSON.stringify(all)); } catch {} }
const PLACE_ALIASES = { '소고기 구이':['소고기구이','한우','소고기'], '치킨·떡볶이':['치킨','떡볶이'], '아메리카노':['카페'], '순살치킨':['치킨'], '후라이드치킨':['치킨'], '돼지국밥':['국밥'], '일본 카레':['카레'], '모둠회':['횟집','회'], '회덮밥':['횟집','회덮밥 전문'], '물회':['횟집'], '연어':['연어 전문점','횟집'], '조개구이':['조개'], '아구찜':['아귀찜'], '낙지볶음':['낙지'], '인도 커리':['인도 음식','커리'], '카페라떼':['카페'], '소금빵':['베이커리'], '아이스크림':['아이스크림 전문점'], '브런치':['브런치 카페'], '감바스':['스페인 음식','와인바'], '폭립':['바비큐'], '쌀국수':['베트남 쌀국수','베트남 음식'], '반미':['베트남 음식'], '분짜':['베트남 음식'], '팟타이':['태국 음식'], '똠얌꿍':['태국 음식'], '나시고렝':['인도네시아 음식'], '오코노미야키':['일본식 철판요리'], '골뱅이무침':['골뱅이'], '어묵탕':['오뎅','어묵'], '라볶이':['분식'], '쫄면':['분식'], '라면':['분식'], '튀김':['분식'], '두부김치':['술집'], '닭똥집':['닭똥집'] };
function searchPlaces(force = false) { clearTimeout(searchTimer); searchTimer = setTimeout(() => runSearch(force === true), 150); }
function runSearch(force) {
  if (!map || !kakaoPlaces) return renderFallbackNearby();
  const menu = currentMenu.menu; const requestId = ++searchRequestId; const key = placeCacheKey(menu);
  const terms = [...new Set([menu, ...(PLACE_ALIASES[menu] || [])])].filter(Boolean).slice(0, 2);
  const finish = places => { if (places.length) { renderNearby(places); enrichRatings(places, requestId); setStatus(`“${locationText()} ${menu}” 실제 매장 ${places.length}곳을 지도에 표시했어요.`); } else { renderFallbackNearby(); setStatus(`“${menu}” 실제 매장을 찾지 못해 카카오 검색 링크를 보여드려요.`); } };
  if (!force) { const cached = readPlaceCache(key); if (cached) return finish(cached); }
  const options = { location:new kakao.maps.LatLng(currentCoords.lat, currentCoords.lng), radius:5000, size:15, sort:kakao.maps.services.SortBy.DISTANCE };
  let lastStatus = null;
  const attempt = index => {
    if (index >= terms.length) { if (requestId !== searchRequestId) return; if (lastStatus === kakao.maps.services.Status.ZERO_RESULT) writePlaceCache(key, []); return finish([]); }
    kakaoPlaces.keywordSearch(terms[index], (data, status) => {
      if (requestId !== searchRequestId) return; lastStatus = status;
      if (status === kakao.maps.services.Status.OK && data?.length) { const places = data.map(slimPlace); writePlaceCache(key, places); return finish(places); }
      attempt(index + 1);
    }, options);
  };
  attempt(0);
}
function setCenter(lat,lng,label) { currentCoords = { lat,lng }; if (!map) return; const position = new kakao.maps.LatLng(lat,lng); map.setCenter(position); currentMarker.setPosition(position); if (label) { $('#locationInput').value = label; renderAreaChips(); setStatus(`${label} 기준으로 주변 맛집을 찾고 있어요.`); renderRestaurant(currentMenu); } searchPlaces(); }
function resolveAddress(fromUser = false) { const query = locationText(); if (!kakaoGeocoder || !query) return; setStatus('입력한 장소를 찾고 있어요…'); const done = (lat,lng,message) => { setCenter(lat,lng,query); if (fromUser) rememberLocation(lat,lng,query); toast(message); }; kakaoGeocoder.addressSearch(query,(result,status) => { if (status === kakao.maps.services.Status.OK) return done(Number(result[0].y),Number(result[0].x),'입력한 주소 주변으로 지도를 이동했어요.'); kakaoPlaces.keywordSearch(query,(places,keywordStatus) => { if (keywordStatus === kakao.maps.services.Status.OK) done(Number(places[0].y),Number(places[0].x),'입력한 장소 주변으로 지도를 이동했어요.'); else { setStatus('장소를 찾지 못했어요. 정확한 주소나 장소명을 입력해주세요.'); toast('장소를 찾지 못했어요.'); } }); }); }
function setAddressFromCoordinates(lat,lng,{ remember = false } = {}) { if (!kakaoGeocoder || !map) return; const apply = label => { $('#locationInput').value = label; setStatus(`선택한 위치: ${label}`); if (remember) rememberLocation(lat,lng,label); else renderAreaChips(); renderRestaurant(currentMenu); searchPlaces(); }; kakaoGeocoder.coord2Address(lng,lat,(result,status) => { const address = status === kakao.maps.services.Status.OK && result?.[0] ? result[0].road_address?.address_name || result[0].address?.address_name : ''; if (address) return apply(address); kakaoGeocoder.coord2RegionCode(lng,lat,(regions,regionStatus) => { const region = regionStatus === kakao.maps.services.Status.OK && regions?.[0] ? [regions[0].region_1depth_name,regions[0].region_2depth_name,regions[0].region_3depth_name].filter(Boolean).join(' ') : ''; if (region) apply(region); else setStatus('선택한 위치의 주소를 찾지 못했어요.'); }); }); }

function recommendationLink() {
  if (featuredPlace?.place_url) return { url:featuredPlace.place_url.replace(/^http:\/\//, 'https://'), name:featuredPlace.place_name };
  return { url:`https://map.kakao.com/?q=${encodeURIComponent(`${locationText()} ${currentMenu.menu}`)}`, name:null };
}
async function copyText(text) { try { if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(text); return true; } const input = document.createElement('textarea'); input.value = text; input.style.position = 'fixed'; input.style.opacity = '0'; document.body.append(input); input.select(); const ok = document.execCommand('copy'); input.remove(); return Boolean(ok); } catch { return false; } }
async function shareRecommendation() { const { url, name } = recommendationLink(); if (await copyText(url)) toast(name ? `“${name}” 링크를 복사했어요.` : '근처 매장을 아직 못 찾아 카카오맵 검색 링크를 복사했어요.'); else window.prompt('링크를 복사해서 공유하세요', url); }

function applySharedState() { const params = new URLSearchParams(location.search); const sharedLocation = params.get('location'); const sharedMenu = params.get('menu'); if (sharedLocation) $('#locationInput').value = sharedLocation; if (sharedMenu) { const item = menuPool.find(menu => menu.menu === sharedMenu); if (item) { selected = item.category; pickedMenu = item; currentMenu = item; } } }
function initKakaoMap() { if (!window.kakao || !kakao.maps) { $('#map').innerHTML = '<div class="map-loading">카카오 지도 SDK를 불러오지 못했어요.<br>카카오 개발자 콘솔의 Web 도메인을 확인해주세요.</div>'; renderFallbackNearby(); setStatus('지도를 불러오지 못해 기본 지역을 사용해요.'); return; } kakao.maps.load(() => { map = new kakao.maps.Map($('#map'),{ center:new kakao.maps.LatLng(currentCoords.lat,currentCoords.lng),level:4 }); kakaoPlaces = new kakao.maps.services.Places(); kakaoGeocoder = new kakao.maps.services.Geocoder(); currentMarker = new kakao.maps.Marker({ map,position:map.getCenter(),title:'선택한 위치',draggable:true }); kakao.maps.event.addListener(map,'click',event => { if (activeInfoWindow) { activeInfoWindow.close(); activeInfoWindow = null; return; } setLocationManually(event.latLng.getLat(),event.latLng.getLng()); }); kakao.maps.event.addListener(currentMarker,'dragend',() => { const position = currentMarker.getPosition(); setLocationManually(position.getLat(),position.getLng()); }); searchPlaces(); if (new URLSearchParams(location.search).get('location')) resolveAddress(false); }); }
function toast(message) { const element = $('#toast'); element.textContent = message; element.classList.add('show'); setTimeout(() => element.classList.remove('show'),1800); }

applySharedState(); restoreSavedLocation(); renderAreaChips(); renderCategories(); renderMenuChips(); renderRestaurant(currentMenu); $('#historyCount').textContent = history.length; initKakaoMap();
$('#categoryGrid').addEventListener('click',event => { const button = event.target.closest('[data-category]'); if (!button) return; selected = button.dataset.category; pickedMenu = null; renderCategories(); renderMenuChips(); });
$('#menuChips').addEventListener('click',event => { const button = event.target.closest('[data-menu]'); if (!button) return; if (pickedMenu?.menu === button.dataset.menu) { pickedMenu = null; renderMenuChips(); return; } const item = menuPool.find(menu => menu.menu === button.dataset.menu); if (item) selectMenu(item); });
$('#drawButton').addEventListener('click',() => draw(true)); $('#refreshButton').addEventListener('click',() => { pickedMenu = null; renderMenuChips(); draw(true); }); $('#refreshNearby').addEventListener('click',() => searchPlaces(true)); $('#searchLocation').addEventListener('click',() => resolveAddress(true)); $('#locationInput').addEventListener('keydown',event => { if (event.key === 'Enter') { event.preventDefault(); resolveAddress(true); } }); $('#shareButton').addEventListener('click',shareRecommendation); $('#historyButton').addEventListener('click',() => { renderHistory(); $('#historyModal').classList.add('open'); }); $('#infoButton').addEventListener('click',() => toast('지역을 고르거나, 주소를 검색하거나, 지도를 클릭해 위치를 바꿔보세요.'));
$('#areaChips').addEventListener('click',event => { const button = event.target.closest('[data-i],[data-more]'); if (!button) return; if (button.dataset.more) { areaExpanded = !areaExpanded; renderAreaChips(); return; } const area = areaList[Number(button.dataset.i)]; if (area) pickArea(area); });
$('#nearbyList').addEventListener('click',event => { if (event.target.closest('a')) return; const item = event.target.closest('[data-place-index]'); if (!item) return; const entry = restaurantMarkers[Number(item.dataset.placeIndex)]; if (!entry || !map) return; document.querySelectorAll('.nearby-item.active').forEach(element => element.classList.remove('active')); item.classList.add('active'); map.panTo(entry.marker.getPosition()); openPlaceInfo(entry); $('#map').scrollIntoView({ behavior:'smooth', block:'nearest' }); });
$('#closeHistory').addEventListener('click',() => $('#historyModal').classList.remove('open')); $('#historyModal').addEventListener('click',event => { if (event.target.id === 'historyModal') event.currentTarget.classList.remove('open'); });
