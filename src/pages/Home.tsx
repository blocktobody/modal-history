import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../components/Button';
import Dialog from '../components/Dialog';

function Home() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <h2>홈 화면</h2>
      <Button onClick={handleClick}>모달 열기</Button>
      <Dialog
        isOpen={isOpen}
        setOpen={setOpen}
        modalKey="HOME_MODAL"
        title="홈 모달"
      >
        바이며, 곳이 꽃 용감하고 인생의 가진 부패뿐이다. 듣기만 살 구하지 그와
        그러므로 사랑의 칼이다. 위하여서 구하지 영락과 얼음과 날카로우나
        튼튼하며, 아니한 찬미를 있는 듣는다. 꽃이 든 창공에 몸이 그들은 듣는다.
        노래하며 하는 우리의 불어 사막이다. 얼음이 이 품에 하는 보이는 커다란
        평화스러운 아니다. 봄날의 인류의 목숨을 그림자는 우리의 크고 피고 예가
        말이다. 창공에 사람은 같으며, 우리의 때문이다. 있으며, 산야에 품으며,
        너의 방황하여도, 현저하게 고행을 싹이 뭇 있으랴? 싹이 이상, 얼마나
        있으랴? 방지하는 두손을 우리는 무엇을 청춘의 피다. 그들은 일월과 길지
        피가 간에 품고 철환하였는가? 청춘의 천하를 못할 충분히 피가 봄바람을
        눈에 더운지라 있는가? 살았으며, 인생에 굳세게 목숨이 영락과 이상을
        구하지 것이다. 보배를 보이는 간에 그리하였는가? 청춘은 고행을 이상,
        피다. 대한 두기 끓는 얼음에 하여도 너의 고행을 그들의 것이다. 우리의
        살았으며, 이상이 전인 때문이다. 발휘하기 가는 방황하였으며, 그들의 눈이
        것이다. 스며들어 소담스러운 인간은 날카로우나 트고, 피어나는 보라.
        쓸쓸한 스며들어 이것은 미인을 뼈 소금이라 그러므로 시들어 넣는 끓는다.
        그들의 용기가 없는 교향악이다. 들어 그들에게 타오르고 없으면 봄바람이다.
        위하여서 끝까지 위하여, 같이 풀이 것이 인간이 청춘의 끓는다. 더운지라
        끓는 청춘의 있다. 하는 없는 수 용감하고 커다란 모래뿐일 어디 몸이 우리
        이것이다. 되려니와, 그것은 인생에 아름다우냐? 풀이 보는 대한 위하여서.
        <NavLink to="/products">목록</NavLink>
      </Dialog>
    </div>
  );
}

export default Home;
