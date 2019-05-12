# team-blog

안녕하세요 `탈주닌자`팀입니다.

저희 기본적으로 CRA(create-react-app)이 아닌 Parcel로 처음부터 모든 걸 설정하고 빌드했습니다.

## Prettier 설정

```
{
  문자열은 `'`로 사용
  "singleQuote": true,
	코드는 세미콜론으로 마무리
  "semi": true,
	탭 대신에 스페이스를 사용
  "useTabs": false,
	들여쓰기 크기는 2
  "tabWidth": 2,
	객체나 배열을 작성할때 마지막 원소 혹은 키에도 쉼표를 붙이는것
  "trailingComma": "all",
	한 줄이 80칸을 넘지 않도록
  "printWidth": 80
}

```

## git remote 추가하기

`git remote add [upstream address]`

## npm version 관리

완전한 페이지를 작성한 경우 minor 업데이트

짜짤한 기능 추가나 업데이트 할 경우 patch 업데이트

```
npm version patch 1.0.1
npm version minor 1.1.0
```

## git commit 메세지 작성

Git Commit log
예시

```
feat: add hat wobble
^--^ ^------------^
| |
| +-> Summary in present tense.
|
+-------> Type: docs, feat, fix, refactor, style.
```

feat: 새로운 기능을 만들었을 때 (new feature for the user, not a new feature for build script)

fix: 버그 수정할 때 (bug fix for the user, not a fix to a build script)

docs: 문서 변경할 때 (changes to the documentation)

style: 코드 스타일 변경 (formatting, missing semi colons, etc; no production code change)

refactor: 리팩토링 했을때 (refactoring production code, eg. renaming a variable)

## 참고 사이트

[Typescript](https://medium.com/@dors718/linting-your-react-typescript-project-with-eslint-and-prettier-2423170c3d42)
