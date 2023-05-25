function calc() {
    var currentyear = 2023;
    var birthyear = prompt('태어난 년도를 입력하세요.','yyyy');
    var age = 0;
    age = currentyear - birthyear + 1;
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";
}