import React, { useState } from 'react';

import Button from '../components/Button';
import Dialog from '../components/Dialog';

function List() {
  const [isOpen1, setOpen1] = useState<boolean>(false);
  const [isOpen2, setOpen2] = useState<boolean>(false);

  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClick2 = () => {
    setOpen2(true);
  };

  return (
    <div>
      <h2>목록 화면</h2>
      <Button onClick={handleClick1}>모달 1 열기</Button>
      <Dialog
        isOpen={isOpen1}
        setOpen={setOpen1}
        modalKey="LIST_MODAL_1"
        title="목록 모달 1"
      >
        <button onClick={handleClick2}>모달 2 열기</button>
      </Dialog>
      <Dialog
        isOpen={isOpen2}
        setOpen={setOpen2}
        modalKey="LIST_MODAL_2"
        title="목록 모달 2"
      >
        까닭이요, 파란 나는 너무나 하나에 봅니다. 가난한 마리아 별에도 없이 위에
        부끄러운 파란 어머니, 새워 듯합니다. 가슴속에 이국 계절이 이런
        버리었습니다. 잠, 아침이 그리고 가을로 너무나 별빛이 별이 계십니다. 쉬이
        아이들의 보고, 덮어 계절이 헤는 나의 그리고 봅니다. 이제 봄이 별 마리아
        말 동경과 별들을 까닭입니다. 북간도에 별이 때 릴케 어머니 헤일 우는
        보고, 나의 계십니다. 하나에 덮어 어머니, 시인의 별 청춘이 봅니다. 별
        불러 노새, 계절이 이름과, 다 오는 하나에 청춘이 까닭입니다. 별 못
        하늘에는 거외다. 토끼, 불러 아무 까닭입니다. 이름자 같이 멀듯이,
        있습니다. 나는 겨울이 당신은 이국 아스라히 버리었습니다. 당신은 이제 별
        파란 프랑시스 사랑과 있습니다. 멀듯이, 이름과, 않은 북간도에 있습니다.
        했던 아침이 불러 하나에 자랑처럼 걱정도 밤을 벌써 거외다. 한 너무나
        이름과, 보고, 쓸쓸함과 멀리 같이 계십니다. 이네들은 위에도 밤이 없이
        이름을 경, 새워 봅니다. 내 시와 별에도 쓸쓸함과 봅니다. 나는 다
        계집애들의 옥 위에 어머니, 못 듯합니다. 동경과 아이들의 묻힌 별 경, 아무
        무엇인지 벌써 어머님, 버리었습니다. 별 벌써 별이 비둘기, 까닭입니다.
        이름과, 위에 하나에 경, 언덕 까닭입니다. 시인의 헤일 보고, 그러나 당신은
        이름과, 있습니다. 벌레는 무성할 패, 나는 했던 아이들의 다하지
        까닭입니다. 때 이름자를 하나에 가득 노루, 봅니다. 벌써 까닭이요, 멀리
        멀듯이, 위에 별 이름과, 거외다. 시와 지나고 차 이네들은 있습니다. 밤을
        별 별 거외다. 위에도 하나의 가득 프랑시스 봄이 라이너 슬퍼하는 노루,
        너무나 봅니다. 별이 계집애들의 겨울이 내 나의 그리워 이름을 봅니다.
      </Dialog>
    </div>
  );
}

export default List;
