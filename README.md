# idiaFactory_RemoteSwitch_re
- 아이디어팩토리의 리모트스위치 프로젝트 재 생성
- 중국에서 firebase 를 연동할수 없는관계로 네비게이션 실습으로 만족
- react-native-vector-icons 라이브러리는 rn 6.1.5 에서의 auto link에 문제가 있어 적용안함.
- 디비연동은 추후 aws 와 연동하기로 함.

## 설치된 라이브러리

#### react-navigation
```js
npm install --save react-navigation
yarn add react-native-gesture-handler
yarn add react-navigation-stack
$ cd ios/ && pod install
```

#### @react-native-community/async-storage
리액트 기본 api인 async-storage 가 deprecated 됨
이 라이브러리는 본 예제에서 아직 사용안함.
```js
$ yarn add @react-native-community/async-storage
$ cd ios/ && pod install
```
