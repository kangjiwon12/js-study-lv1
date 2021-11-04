<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main id="app">
        <hl>TodoList</hl>
        <hr>
    <form name="appendForm" action="" meythod="post">
        <fieldtest>
            <legend hidden>TodoList Form</legend>
            <label>
                
                <input type="text" size="40" placeholder='Todo Item 내용을 입력헤주세요.'>
            </label>
            <button type="button">전송</button>
        </fieldtest>
        <hr>
        
        <fieldest>
            <legend >1주차 TodoList 만들기</legend>
            <button type="button">취소</button>
            <button type="button">수정</button>
            <button type="button">전송</button>
      
           
            <hr>
        </fieldest>
        <fieldest>
            <legend>2주차:번들러 조사 및 적용</legend>
            <button type="button">완료</button>
            <button type="button">취소</button>
           
        </fieldest>
        <hr>
        <fieldest>
            <legend>3주차:node.js +express.js+REST API+ajax</legend>
            <button type="button">완료</button>
            <button type="button">수정</button>
            <button type="button">삭제</button>
    </fieldest>
    <hr>
    <fieldest>
        <legend>4주차:배포하기</legend>
        <button type="button">완료</button>
        <button type="button">수정</button>
        <button type="button">삭제</button>
    </fieldest>
    <hr>


    </form>

    //태그 추가 함수
function appendItem(event){
   //고유 이벤트 제거
   event.preventDefault();
   //태그 선택
  var $newItem=documet.createElement('li');
  var $appender =$appenderForm.querySelector('input');
  $newItem.innerHTML='<P>
  ${appender.value} 
  </p>
  <button type="button">완료</button>
<button type="button">수정</button>
<button type="button">삭제</button>
  ';
  document.getElementById('todoList').appendChild($newItem);
  $appender.value='';
  appender.focus();
}

//1.DOM접근
var $appendForm=document.forms.appenderForm;
//2.이벤트 등록
$appenderForm.onsubmit=function(event){
 


