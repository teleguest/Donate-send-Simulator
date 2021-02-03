function suma(){
    var donate = document.getElementById("kwota").value;
    if (donate == "5"){
        alert("wysłałeś donate o wartości 5 zł tak mało dałeś?")
    }
    if (donate == "10"){
        alert("wysłałeś donate o wartości 10 zł za tyle to se kupisz usb z bazaru");
    }
    if (donate == "15"){
        alert("wysłałeś donate o wartości 15 zł możesz w końcu kupić kole");
    }
    if (donate == "20"){
        alert("wysłałeś donate o wartości 20 zł w końcu kebab");
    }
    if (donate == "50"){
        alert("wysłałeś donate o wartości 50 zł Czuje Stonks");
        var cs = new Audio('music/coming-stonks.mp3');
        cs.play();
    }
    if (donate == "100"){
        alert("wysłałeś donate o wartości 100 zł STONKS!");
        var stonks = new Audio('music/stonks.mp3');
        stonks.play();
        document.getElementById("imgstonks").src = "image/stonks.jpeg";
    }
    function dalatestonks(){
    document.getElementById("imgstonks").src = "";
}
}
// Widzisz ten kod brawo
