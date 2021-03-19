function sum(){
    var donate = document.getElementById("amount").value;
    switch(donate){
        case "5":
            alert("wysłałeś donate o wartości 5 zł tak mało dałeś?");
            break;
        case "10":
            alert("wysłałeś donate o wartości 10 zł za tyle to se kupisz usb z bazaru?");
            break;
        case "15":
            alert("wysłałeś donate o wartości 15 zł możesz w końcu kupić kole");
            break;
        case "20":
            alert("wysłałeś donate o wartości 20 zł w końcu kebab")
            break;
        case "50":
            alert("wysłałeś donate o wartości 50 zł Czuje Stonks");
            var cs = new Audio('music/coming-stonks.mp3');
            cs.play();
            break;
        case "100":
            alert("wysłałeś donate o wartości 100 zł STONKS!");
            var stonks = new Audio('music/stonks.mp3');
            stonks.play();
            break;
    }
}
// Widzisz ten kod brawo
