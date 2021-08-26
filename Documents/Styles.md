# Styles
이 문서에서는 에코노 냉장고에서 사용된 css를 기술합니다.
추후 웹 개발의 기회가 있으면 비슷한 레이아웃을 구현할 때 사용하기 위해 제작하였습니다. 사용한 모든 css를 구경하고 싶으시다면 해당 [repository](../src)를 참고하세요.
  - [메인 페이지](#메인-페이지)
  - [재료 선택 페이지](#재료-선택-페이(recommendation))
  - [레시피 검색 페이지](#레시피-검색-페이지)
  - [레시피 페이지](#레시피-페이지)
  - [explore 페이지](#explore-페이지)

## 메인 페이지
랜덤으로 추천해주는 레시피와 재료를 가로로 보여줍니다.
`Home.css`
```css
.home-list-mapping {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-top: 18px;
  padding-left: 3%;
  overflow: hidden;
}

.home-list-mapping:hover {
  overflow: scroll;
}
```
요소들을 가로로 보여주기 위해 `flex` 를 사용하고, `justify-content:flex-start`를 이용해 flex 컨테이너의 앞쪽부터 배치했습니다.

요소들이 화면을 넘어갈 정도로 많아졌을 경우를 대비해 `overflow:hidden` 을 이용해 넘친 요소들은 숨기고,
`home-list-mapping:hover`에서 스크롤이 될 수 있게 구현 하였습니다.

## 재료 선택 페이지(recommendation)
레시피를 만들기 위한 여러가지 재료를 냉장고에 추가하는 페이지입니다.

`IngredientSquare.css`
```css
.ingredient-container {
  display: grid;
  height: calc(100vh - 82px);
  margin-top: 0px;
  padding-top: 30px;
  padding-left: 30px;

  grid-template-rows: repeat(
    5,
    minmax(230px, 230px)
  ); 
  grid-template-columns: repeat(
    auto-fill,
    minmax(250px, 250px)
  );
  gap: 20px;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: scroll;
}
```
`grid`를 사용하여 재료를 격자형으로 보여줄 수 있게 구현하였습니다. page는 브라우저 크기에 맞추기 위해 viewPort를 기준으로 높이를 맞추었습니다.

`Sidebar.css`

```css
.selected-ingredient-list {
  width: 100%;
  height: 63vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-top: 20px;
  overflow: hidden;
}

.selected-ingredient-list:hover {
  overflow-y: scroll;
}
```

사이드바에 구현되어 있는 냉장고는 재료가 많아지면 검색 버튼이 뭍힌다는 설계 오류가 있었습니다. 이는 앞서 [메인 페이지](#메인-페이지) 에서 사용한 `overflow`를 통해 해결하였습니다.

## 레시피 검색 페이지
선택한 재료들을 바탕으로 맞춤 레시피를 추천해주는 페이지입니다. 냉장고 속의 재료들로만 만들 수 있는 레시피들과, 재료를 몇 개 더 추가하면 만들 수 있는 레시피를 구분하여 출력하여 줍니다. 후자의 기능에서는 어떤 재료가 필요한지도 재료에 빨간색 마크를 통해 사용자에게 알려줍니다.

`Search.css`
```css
.search-content {
  width: 100%;
  height: calc(100vh - 82px);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
}
```
페이지 전체가 `scroll`되지 않고 레시피 검색 부분만 `scroll` 되게 구현했습니다. 레시피 목록들이 사용자가 보는 화면을 넘어가버리면, 앞서 여러번 설명했듯이 숨겨지고, `scroll`이 될 수 있게 구현했습니다.

`ResultBox.css`

```css
    .result-box-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  background-color: white;
  border-radius: 20px;
  margin-top: 15px;
  margin-bottom: 5px;
  padding: 20px;
  transition: all 0.35s ease;
}

.result-box-container:hover {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
```
`transition`을 이용하여 레시피 목록에 마우스가 `hover`될 때 hover된 레시피 목록만 확대되게 구현해 동적으로 보입니다.

## 레시피 페이지
레시피 페이지는 사용자가 선택한 레시피를 보여줍니다. 해당 페이지는 특별한 css property를 사용하지 않았습니다. 추천과 댓글을 등록할 때 사용하는 버튼의 디자인은
[material-icon](https://material-ui.com/components/material-icons/)을 사용했습니다. 사용법은 해당 링크를 참고하세요.

`Comment.js`
```javascript
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginTop: 10 }}
          onClick={submitComment}
        >
          Submit
        </Button>
```
## explore 페이지 
explore 페이지는 모든 레시피를 보여줍니다. 더 많은 레시피를 보고 싶다면 `More` 버튼을 클릭하면 됩니다.
