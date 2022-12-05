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
    // console.log(li, p); //확인용

    //7. input(memo)입력값 읽기 : value값
    //console.log(memoEl.value);

    //8. p요소에 입력값을 추가
    p.textContent = memoEl.value;
    //console.log(p); 확인용
    memoEl.value = ''; //입력완료 후 내용비움(초기화)

    //9. 삭제버튼 생성
    const delBtn = document.createElement('button');
    delBtn.textContent = '삭제';
    // console.log(delBtn);  확인용 확인 후 주석 달기  

    //10. li요소에 p와 삭제(button)버튼 넣기
    li.appendChild(p);
    li.appendChild(delBtn);
    // console.log(li); //확인용

    //12. li 및 버튼에 부트스트랩 스타일 적용
    li.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
    delBtn.classList.add('btn', 'btn-danger');

    //11. #memoList 목록에 글(li)추가
    document.getElementById('memoList').appendChild(li); //append로 해도 됨

    //13. 삭제버튼 클릭시 삭제 이벤트 추가
     delBtn.addEventListener('click', (event) => {
        // console.log('삭제버튼');  확인용
        //event.target : 사용자가 선택한 요소의 값을 가져와서 원하는 이벤트로 설정
        // console.log(event.target); 확인용
        //li(부모요소) 삭제
        event.target.parentElement.remove();
        //선택한 이벤트 타겟의 부모요소를 지운다는 의미
     });
    
};//handleAdd

//2. 입력버튼 - addBtn 가져오기
const addBtn = document.getElementById('addBtn');

//3. 입력(추가)버튼 이벤트
addBtn.addEventListener('click', () => {
    handleAdd(); //추가함수 호출

});