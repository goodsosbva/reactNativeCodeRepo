# reactNativeCodeRepo

리액트네이티브 공부용 저장소

각 폴더마다 여러 주제로 리액티 네이티브 앱을 만듬

## 1. LearnReacNative - HelloWorld 출력

- ### 환경 설정 - 에러
  - 환경설정 관련하여 많은 에러를 겪음. JDK, SDK 오류 등 꽤 많은 문제를 겪어서 Hello Wolrd! 이거 출력하는데 시간이 걸림
  - 구글 서칭 과정에 괜찮은 해결 방법이 있었는데 그건 바로
  - npx @react-native-community/cli doctor 임 해당 명령을 하면 내가 리액트 네이티브 관련하여 세팅하는 과정 중 문제점을 체크리스트 형태로 보여줌 많은 도움이 되었음.
  - 새부 사항 독스에 있음 -> https://reactnative.dev/blog/2019/11/18/react-native-doctor

## 2. TodoApp - 투두리스트 앱

- ### 구현 중 문제점

  - Unable to resolve module 'react-native-vector-icons/FontAwesome 에러

    -> 해결 방법: react-native start --reset-cache (https://github.com/oblador/react-native-vector-icons/issues/544)


  - NativeModule: AsyncStorage is null 에러

    -> 해결 방법: (https://github.com/react-native-async-storage/async-storage/issues/768)

    The most common issue with AsyncStorage is null is because the app was not rebuild after installing the library. And I don't mean to restart bundler, but rather install an app on the device/simulator. So best way to handle this is:

    - Remove app from simulator/device
    - Install app again
   
## 3. 네비게이션 어러 개념 학습

 - ### 구현 중 문제
    - 에러: Property 'require' doesn't exist react native metro bundler
    - 해결 방법:
        In .eslintrc.js file write the next:
      ```javaSacript
              module.exports = {
              root: true,
              parser: '@babel/eslint-parser',
              requireConfigFile: false,
              extends: '@react-native-community',
              };
      
              In babel.config.js file write the next:
              module.exports = {
              presets: ['module:metro-react-native-babel-preset'],
              };
      ```
              Then restart the project with clearing the cache with the next command:
              npm start -- --reset-cache
      - 출처: https://github.com/facebook/react-native/issues/34828
     
      - 에러: Error: Failed to create a worklet. Did you forget to add Reanimated Babel plugin in babel.config.js? See installation docs at https://docs.swmansion.com/react-native-              
              reanimated/docs/fundamentals/installation#babel-plugin., js engine: hermes LOG Running "learnNavigation" with {"rootTag":11}
      - 해결 방법:
          #### 1. 발생 상황
              react-native-reanimated 패키지를 추가하면서 발생
          #### 2. 발생 원인
          babel.config.js에 reanimated 플러그인을 추가해주지않아서 발생
          #### 3. 해결 방안
          ```javaScript
            module.exports = {
            presets: ['module:metro-react-native-babel-preset'],
            plugins: ['react-native-reanimated/plugin'], // 추가
            };
          ```

## Getting Started

```bash
## using npm
npm start

## OR using Yarn
yarn start
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
## using npm
npm run android

## OR using Yarn
yarn android
```

#### For iOS

```bash
## using npm
npm run ios

## OR using Yarn
yarn ios
```
