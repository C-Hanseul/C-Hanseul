function showprice() {
    var Oprice = document.querySelector("#originalprice").value;
    var rate = document.querySelector("#rate").value;
    if (Oprice > 0 && rate >= 0) {
        var savedprice = Oprice * (rate / 100);
        var resultprice = Oprice - savedprice;
        if (resultprice < Oprice) {
            document.querySelector("#showresult").innerHTML = "할인된 가격이 원래 가격보다 작습니다. 올바른 값을 입력해주세요.";
        } else {
            document.querySelector("#showresult").innerHTML = "상품의 원래 가격은 " + Oprice + "원이고, 할인율은 " + rate + "%입니다. 따라서 " + savedprice + "원을 절약한 " + resultprice + "원에 살 수 있습니다.";
        }
    } else {
        document.querySelector("#showresult").innerHTML = "올바른 값을 입력해주세요.";
    }
}