# modal-history
store the state of open modals in URL query (stack + history API)

## 앱 열기

```
yarn install
yarn start
```

또는 [데모](https://codesandbox.io/s/history-api-modal-stack-n1wou)를 참고해 주세요.

## 왜 만들었나요?

안드로이드 기기에는 물리적인 뒤로가기 버튼이 존재하는데, 모달이 열렸을 때 이 버튼을 눌러서 닫기를 시도하는 사용자들이 많습니다. 이때 아예 페이지가 이동하면서 기대 결과와 다른 동작을 하게 됩니다. 이러한 사용자 불편을 해결하기 위해 열려 있는 모달 상태를 쿼리에 보관하고, 뒤로가기 동작시 페이지 이동이 아닌 모달이 닫히도록 구현해 보았습니다. 물론 이 앱에서의 화면은 컨셉 증명을 위한 데모 화면이지만 기능은 서비스 코드와 동일하게 재현되었습니다.

## 어떻게 동작하나요?

- `OpenModalStack` : 열려있는 모달의 키값을 저장하는 stack 생성
  - 모달에 고유 키값을 부여하고, 모달이 열리거나 닫힐 때 스택에 이 키값을 push 또는 pop 한다.
  - 브라우저 popstate 이벤트가 일어날 때도 스택에서 마지막 키값을 pop한다.
- `useModalHistory` : 모달 stack을 참조하여 history API로 쿼리 갱신
  - 모달 stack에 push 또는 pop이 일어날 때 스택 결과값을 참조하여 쿼리에 반영한다.
