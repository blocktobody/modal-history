import React, { useState } from 'react';

import Button from '../components/Button';
import Dialog from '../components/Dialog';

interface Props {
  productId: string;
}

function Detail({ productId }: Props) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <h2>{`상세 화면: ${productId}`}</h2>
      <Button onClick={handleClick}>모달 열기</Button>
      <Dialog
        isOpen={isOpen}
        setOpen={setOpen}
        modalKey="DETAIL_MODAL"
        title="상세 모달"
      >
        미묘한 인간의 끓는 길지 사막이다. 바이며, 가진 그들의 아니다. 그들에게
        따뜻한 풍부하게 위하여 일월과 장식하는 없으면, 그와 있으랴? 동산에는
        못하다 기관과 실로 미묘한 청춘에서만 것은 것이다. 지혜는 찬미를 같으며,
        그림자는 아니더면, 꽃이 끓는다. 소금이라 이상의 꽃이 되는 만물은 가진
        그림자는 피고 이것이다. 그것을 같이, 뜨고, 천지는 얼음과 풀밭에 꽃이
        사막이다. 보는 날카로우나 청춘을 피에 위하여, 것이다. 군영과 그들은
        위하여서 실현에 주며, 그림자는 커다란 것이다. 인생을 청춘 뼈 설산에서
        희망의 철환하였는가? 무엇을 이상이 인간의 찾아 용기가 영락과 청춘이
        때까지 인간에 것이다. 보는 있는 아니한 있으랴? 이상은 청춘의 무엇을
        할지니, 그들은 것이다. 아니한 이상은 곧 동산에는 위하여, 곳으로 소금이라
        그들에게 때문이다. 노래하며 몸이 피가 평화스러운 뛰노는 풍부하게 것이다.
        아니한 얼음과 끓는 힘있다. 유소년에게서 동력은 가지에 위하여, 우리 트고,
        운다. 놀이 석가는 곧 우리 있는 수 밝은 것이다. 부패를 보이는 청춘의
        못하다 아니다. 오아이스도 고동을 과실이 말이다. 긴지라 능히 인간의
        날카로우나 피가 철환하였는가? 현저하게 긴지라 같은 거친 심장은 구할
        것이다. 사라지지 더운지라 눈이 꽃이 설레는 것이다. 얼음 목숨이 밝은
        구하지 같은 너의 든 안고, 있는가? 속에 내려온 봄날의 되려니와, 가슴이
        웅대한 피어나는 사막이다. 과실이 청춘을 때에, 힘차게 있다. 이것을 이상이
        속에 들어 이상 같이, 이것이다. 보내는 같이, 목숨이 풀이 예수는 때까지
        원질이 무엇을 보라. 너의 것은 얼음이 지혜는 불어 우는 사막이다. 싹이
        불어 커다란 광야에서 주며, 속에서 구하지 인생의 힘있다.
      </Dialog>
    </div>
  );
}

export default Detail;
