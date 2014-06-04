function formularUeberpruefen(formular){

    var anzahlFehler = [];

    if(!(document.getElementById(formular).elements['vorname'].value.match("[A-Za-z]{1,}"))){
        anzahlFehler.push('vorname')
    }

    if(!document.getElementById(formular).elements['name'].value.match("[A-Za-z]{1,}")){
        anzahlFehler.push('name')
    }

    if(!document.getElementById(formular).elements['email'].value.match("[a-zA-Z0-9]+[a-zA-Z0-9._-]*@[a-zA-Z0-9]+.[A-Z,a-z]{2,}")){
        anzahlFehler.push('email')
    }

    if(!document.getElementById(formular).elements['matrikelnr'].value.match("[0-9]{1,}")){
        anzahlFehler.push('matrikelnr')
    }

    if(!document.getElementById(formular).elements['handy'].value.match("0{1}[1-9]{1,}[0-9]{1,}")){
        anzahlFehler.push('handy')
    }

    if(anzahlFehler.length != 0){
        document.getElementById(formular).elements[anzahlFehler[0]].focus() ;
        for(var i=0; i < anzahlFehler.length; i++){
            document.getElementById(formular).elements[anzahlFehler[i]].style.borderColor ="red";
        }

        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
        return false;
    }
    else{
        return true;
    }
}

function faerben(id){
    document.getElementById(id).style.borderColor ="transparent";
}