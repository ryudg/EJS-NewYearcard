# 모바일 연하장
> EJS-NewYearcard
> 클라우드타입 : https://port-0-ejs-newyearcard-1b5xkk2flddunong.gksl2.cloudtype.app/
- 모바일 화면에서 최적화
- pc화면에서도 구동 가능함
![merge_from_ofoct (1)](https://user-images.githubusercontent.com/103430498/209250166-661b0dc3-6edb-4c35-ac78-088f7cf83bb5.jpg)

# 앱 소개
- 2023년 새해를 맞이하여 연하장을 제작
- 사용자가 덕담 글을 작성할 수 있는 섹션을 제작함

# Description
- node.js와 템플릿엔진(ejs) 기반으로 클라이언트 + 백엔드 웹앱 제작
- ejs : Embedded Javascript
- url : https://ejs.co/
- 템플릿 엔진 : 템플릿 양식과 특정 데이터 모델에 따른 입력 자료를 합성하여 결과 문서를 출력하는 소프트웨어
- `<% %>` : 자바스크립트를 실행할 수 있음, `<%= %>` : 변수 값을 내장시킬 수 있음
- 페이지를 동적으로 생성되도록 더 효율적으로 코드를 작성할 수 있고, 서버에서 보낸 변수를 가져와서 사용할 수 있음.

##  글쓰기 기능은 file DB를 생성하여 구현

- 사용자가 글 작성을 하게되면 json파일의 배열 안에 작성자명, 작성 내용, 작성 날짜가 한 객체로 저장되어 화면에 출력됨 
- 삭제 버튼을 누르면 json파일의 배열에서 값이 삭제되고 화면에서도 삭제됨
- 글 목록은 내림차순, 최신글부터 표시됨


##  SEO 최적화를 수행

- favicon, meta data 등 SEO 최적화

![화면 캡처 2022-12-23 091602](https://user-images.githubusercontent.com/103430498/209246429-cdc57526-375b-4725-aba3-990fa07a81f5.png)

## 해당 앱은 클라우드타입을 이용하여 배포됨
![화면 캡처 2022-12-23 100120](https://user-images.githubusercontent.com/103430498/209250474-0620455c-8711-4640-a936-46a111154142.png)
https://port-0-new-year-card-3pblc2flbyuajzq.gksl2.cloudtype.app/

#### 사용 라이브러리

- swiper : https://swiperjs.com/
- AOS : https://michalsnik.github.io/aos/

