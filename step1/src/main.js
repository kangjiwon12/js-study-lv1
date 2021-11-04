document.forms.appendForm.onsubmit= function(event){
    event.preventDefault();

    var $newItem= document.createElement('li');
    $newItem.innerHTML='
    <p>
      ${event.target.querySelector('input').value}
   </p>
   <button type="button">완료</button>
   <button type="button">수정</button>
   <button type="button">삭제</button> 
   ';
    
  
    document.getElementBYId("todolist").appendChild($newItem);
}
