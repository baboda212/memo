//index.js
//1. 추가(입력)버튼을 클릭시 실행될 함수(추가함수)
function handleAdd() {
    //console.log('추가'); //확인용
    //4. memo입력요소
    const memoEl = document.getElementById('memo');
    
    //5. li 문서객체생성
    const li = document.createElement('li');

    //6. p 생성
    const p = document.createElement('p');
    console.log(li, p); //확인용

    //7. input(memo)입력값 읽기 : value값
    console.log(memoEl.value);

    //8. p요소에 입력값을 추가
    p.textContent = memoEl.value;
    console.log(p);
    memoEl.value = ''; //입력완료 후 내용비움(초기화)

    //9. 삭제버튼 생성
    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';
    console.log(delBtn);    

    //10. li요소에 p와 삭제버튼 넣기
    li.appendChild(p);
    li.appendChild(delBtn);
    console.log(li); //확인용


};



//2. 입력버튼 - addBtn 가져오기
const addBtn = document.getElementById('addBtn');

//3. 입력(추가)버튼 이벤트
addBtn.addEventListener('click', () => {
    handleAdd(); //추가함수 호출

});