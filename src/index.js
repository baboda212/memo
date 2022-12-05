//index.js
//추가(입력)버튼을 클릭시 실행될 함수(추가함수)
function handleAdd() {
    //console.log('추가'); //확인용
    //memo입력요소
    const memoEl = document.getElementById('memo');
    
    //li 문서객체생성
    const li = document.createElement('li');

    //p 생성
    const p = document.createElement('p');
    console.log(li, p); //확인용

    //input(memo)입력값 읽기 : value값
    console.log(memoEl.value);

    //p요소에 입력값을 추가
    p.textContent = memoEl.value;
    console.log(p);
    memoEl.value = ''; //입력완료 후 내용비움(초기화)

    

};



//입력버튼 - addBtn 가져오기
const addBtn = document.getElementById('addBtn');

//입력(추가)버튼 이벤트
addBtn.addEventListener('click', () => {
    handleAdd(); //추가함수 호출

});