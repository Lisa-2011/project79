var names=[];

function submit() {
    var name_one=document.getElementById("student_1").value;
    var name_two=document.getElementById("student_2").value;
    var name_three=document.getElementById("student_3").value;
    var name_four=document.getElementById("student_4").value;
    names.push(name_one);
    names.push(name_two);
    names.push(name_three);
    names.push(name_four);
    console.log(names);
    document.getElementById("display_name").innerHTML=names;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sort() {
    names.sort();
    console.log(names);
    document.getElementById("display_name").innerHTML=names;
}