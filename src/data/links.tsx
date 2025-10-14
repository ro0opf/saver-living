import type { LinkItem, ProfileData } from '../types';
import profileImage from '../assets/profile.png';
import showerHeadImage from '../assets/1.jpg';
import blowerImage from '../assets/2.png';

export const profileData: ProfileData = {
  name: '돈버는 살림',
  description: '',
  imageUrl: profileImage,
};

export const links: LinkItem[] = [
  {
    id: '1',
    title: '0001 고압 샤워기 헤드',
    url: 'https://link.coupang.com/a/cVTBGz',
    image: showerHeadImage,
    description:
      '고압 미스트 샤워기로 틀자마자 느껴지는 확실한 수압 차이. 집중분사모드로 시원하게, 안개 분사모드로 부드럽게, 혼합 분사모드로 둘 다 잡았습니다. 버튼 한 번에 기분까지 바꾸는 ‘맞춤 샤워’ 완성.',
  },
  {
    id: '2',
    title: '0002 초강력 송풍기',
    url: 'https://link.coupang.com/a/cVWbva',
    image: blowerImage,
    description:
      '최대 10m 직진 바람과 고출력 팬 구조로 넓고 빠른 건조, 무선 ONE 버튼 즉시 작동, 복잡한 조작 없이 어디서나 사용, 인체공학적 그립·열배출 설계로 장시간도 안정적 운용',
  },
  {
    id: '3',
    title: '0003 전자식 스마트 오목판',
    url: 'https://link.coupang.com/a/cV0JQl',
    image:
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/db5b/1bfb51c5a25ca88993bee352750d0ac946bb68e341a287d76f73359059a5.png',
    description:
      '터치·LED로 직관 플레이, 9가지 게임 한판에! 난이도·타이머 탑재로 혼자도 친구와도 PK 꿀잼. 집중·기억력 쑥↑, 선물·가족모임 핵인싸템.',
  },
  {
    id: '4',
    title: '0004 무타공 욕실코너 선반',
    url: 'https://link.coupang.com/a/cV3G1Y',
    image:
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/62af/2aad744c46fd9d2d8d4dc8e3e5e15568b8affddb7c0bc3c1fb0a2f5c14f7.jpg',
    description:
      '최대 10kg 버티는 초강력 접착으로 떨어짐 걱정 끝입니다. 넓어진 코너 선반과 두꺼운 알루미늄, 물기에도 튼튼합니다. 수건걸이·다용도 고리 포함, 욕실 수납을 한 번에 정리하세요.',
  },
  {
    id: '5',
    title: '0005 감성 인테리어 사료통',
    url: 'https://link.coupang.com/a/cV4l7w',
    image:
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/5eb6/fbbe208ba1f5c6e346f8f8faa08d5c614d2a96973c3d34b84a5da720797c.jpg',
    description:
      '손잡이 당김 한 번에 정량 급여 끝. 창문형 저장통으로 사료 잔량 한눈에. 모던 블랙 디자인으로 집 분위기까지 업!',
  },
  {
    id: '6',
    title: '0006 코코넛향 남성용 립밤',
    url: 'https://link.coupang.com/a/cWxDmP',
    image:
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/630515115038135-51a57bf1-34a7-410f-a581-db4fc785b51d.jpg',
    description:
      '자연스러운 발색에 입술 본연의 혈색을 살립니다. 꿀·시어버터·오일 블렌드로 오래 촉촉하며 끈적임이 없습니다. 은은한 향과 플럼핑 효과로 남자도 부담 없이 세련된 인상을 완성합니다.',
  },
  {
    id: '7',
    title: '0007 미끄럼방지 욕실화',
    url: 'https://link.coupang.com/a/cWx3WW',
    image:
      'https://thumbnail.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/1733878429059784-15f90ef3-d388-4723-90e4-747256b66421.jpg',
    description:
      '강력한 미끄럼방지와 두툼한 쿠션으로 욕실에서도 안전하고 편안합니다. EVA 방수 소재와 배수구 설계로 물기 제거가 빨라 위생적입니다. 가볍고 유연해 오래 신어도 부담 없고, 집·업장 다용도로 딱입니다.',
  },
];
