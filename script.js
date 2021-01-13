function searchFunction() {
    let input, filter, ul, li, a, i; //تعريف بالمتغيرات 
    input = document.getElementById('myinput');//ياخذ المعلومات من الشريط البحث
    filter = input.value.toUpperCase();//يسمح باخذ اي حالة من حالات الاحرف الكبيره او الصغيره
    ul = document.getElementById('wrapper');//ياخذ المعلومات من اللسته 
    li = ul.getElementsByTagName('li');//اسوي array 

    for(i=0 ; i< li.length; i++){
        a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
        }

        else{
            li[i].style.display = 'none';
        }
    }
}
