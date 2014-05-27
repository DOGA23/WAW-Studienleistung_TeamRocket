/**
 * Created by DO on 23.05.2014.
 */


/*-------------------------------------------------------------------------------------*/
// FUNKTIONEN FUER DAS EVENTHANDLING
/*-------------------------------------------------------------------------------------*/

function kostenTabelle() {
    // Einfaerbung des ausgewaehlten Tabs des Header-Menues
    document.getElementById("messekosten").style.backgroundColor = "blue";
    document.getElementById("messekosten").style.color = "white";
    document.getElementById("teilnehmer").style.backgroundColor = "transparent";
    document.getElementById("teilnehmer").style.color = "black";

    // Ausblenden des Subheader-Menues
    document.getElementById("subheader").style.visibility = "hidden";
    document.getElementById("kosten").style.visibility = "visible";

    // Ausblenden der Teilnehmer-Tabellen
    document.getElementById("messetabellen").style.visibility = "hidden";
    document.getElementById("teilnehmerCebit").style.visibility = "hidden";
    document.getElementById("teilnehmerConhit").style.visibility = "hidden";
    document.getElementById("teilnehmerWebtech").style.visibility = "hidden";

    /**document.getElementById("cebitTab").style.visibility = "hidden";
    document.getElementById("conhitTab").style.visibility = "hidden";
    document.getElementById("webtechTab").style.visibility = "hidden";
     */
};


function teilnehmerTabelle() {
    // Einfaerbung des ausgewaehlten Tabs des Header-Menues
    document.getElementById("messekosten").style.backgroundColor = "transparent";
    document.getElementById("messekosten").style.color = "black";
    document.getElementById("teilnehmer").style.backgroundColor = "blue";
    document.getElementById("teilnehmer").style.color = "white";

    // Anzeigen des Subheader-Menues
    document.getElementById("subheader").style.visibility = "visible";


    //Hintergrund aller Elemente des Subheaders transparent machen

    document.getElementById("cebitTab").style.backgroundColor = "transparent";
    document.getElementById("conhitTab").style.backgroundColor = "transparent";
    document.getElementById("webtechTab").style.backgroundColor = "transparent";

    // Standardmaessig Ausblenden der einzelnen Tabellen
    document.getElementById("teilnehmerCebit").style.visibility = "hidden";
    document.getElementById("teilnehmerConhit").style.visibility = "hidden";
    document.getElementById("teilnehmerWebtech").style.visibility = "hidden";
    document.getElementById("kosten").style.visibility="hidden";

};


function cebitTabelle() {
    // Anzeigen der Subheader-Auswahl
    document.getElementById("cebitTab").style.backgroundColor = "deepskyblue";
    document.getElementById("conhitTab").style.backgroundColor = "transparent";
    document.getElementById("webtechTab").style.backgroundColor = "transparent";

    // Ein- bzw. Ausblenden der einzelnen Tabellen
    document.getElementById("messetabellen").style.visibility = "visible";
    document.getElementById("teilnehmerCebit").style.visibility = "visible";
    document.getElementById("teilnehmerConhit").style.visibility = "hidden";
    document.getElementById("teilnehmerWebtech").style.visibility = "hidden";
};


function conhitTabelle() {
    // Anzeigen der Subheader-Auswahl
    document.getElementById("cebitTab").style.backgroundColor = "transparent";
    document.getElementById("conhitTab").style.backgroundColor = "deepskyblue";
    document.getElementById("webtechTab").style.backgroundColor = "transparent";

    // Ein- bzw. Ausblenden der einzelnen Tabellen
    document.getElementById("teilnehmerCebit").style.visibility = "hidden";
    document.getElementById("teilnehmerConhit").style.visibility = "visible";
    document.getElementById("teilnehmerWebtech").style.visibility = "hidden";
};


function webtechTabelle() {
    // Anzeigen der Subheader-Auswahl
    document.getElementById("cebitTab").style.backgroundColor = "transparent";
    document.getElementById("conhitTab").style.backgroundColor = "transparent";
    document.getElementById("webtechTab").style.backgroundColor = "deepskyblue";

    // Ein- bzw. Ausblenden der einzelnen Tabellen
    document.getElementById("teilnehmerCebit").style.visibility = "hidden";
    document.getElementById("teilnehmerConhit").style.visibility = "hidden";
    document.getElementById("teilnehmerWebtech").style.visibility = "visible";
};

/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------*/
// JSON-Objekte fuer die Daten der Tabellen
/*-------------------------------------------------------------------------------------*/

// Kosten der Messen
var messekosten = { "mkosten" : [
    {
        "name": "CeBit",
        "preis": "15,00 EUR"
    },

    {
        "name": "ConHit",
        "preis": "30,00 EUR"
    },

    {
        "name": "WebTechCon",
        "preis": "300,00 EUR"
    }]
};

// CeBit-Teilnehmer
var teilnehmerCebit = { "cebit" : [
    {
        "name": "Ent",
        "vorname": "Thilo",
        "studiengang": "IB",
        "mail": "t.ent@gmail.de"
    },

    {
        "name": "Kraus",
        "vorname": "Martina",
        "studiengang": "IB",
        "mail": "m.Kraus@hs-mannheim.de"
    },

    {
        "name": "Smits",
        "vorname": "Thomas",
        "studiengang": "UIB",
        "mail": "t.smits@hs-mannheim.de"
    },

    {
        "name": "Groeschel",
        "vorname": "Michael",
        "studiengang": "UIB",
        "mail": "m.groeschel@hs-mannheim.de"
    }]
};

// ConhIT-Teilnehmer
var teilnehmerConhit = { "conhit" : [
    {
        "name": "Schmuecker",
        "vorname": "Paul",
        "studiengang": "IMB",
        "mail": "p.schmuecker@hs-mannheim.de"
    },

    {
        "name": "Felsenheimer",
        "vorname": "Jan",
        "studiengang": "IB",
        "mail": "j.felsenheimerl@diebestebandderwelt.de"
    }]
};

//Webtech-Teilnehmer
var teilnehmerWebtech = { "webtech" : [
    {
        "name": "Hoppe",
        "vorname": "Johannes",
        "studiengang": "UIB",
        "mail": "j.hoppe@gmx.de"
    },

    {
        "name": "Hofmeister",
        "vorname": "Johannes",
        "studiengang": "UIB",
        "mail": "cessor@gmail.de"
    }]
};

/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------*/
// FUNKTIONEN ZUM GENERIEREN DER TABELLEN ZUR LAUFZEIT
/*-------------------------------------------------------------------------------------*/

function genKostenTabelle() {
    // Generieren der Tabelle inklusive Ueberschriften
    document.write('<table class = "messekosten" border="1" align="center" width="500px">');
    document.write('<tr><th>Messe</th><th>Selbstkosten</th></tr>');

    // Generieren der Zelleninhalte
    for (var i = 0; i < messekosten.mkosten.length; i++) {
        document.write('<tr><td>' + messekosten.mkosten[i].name + '</td><td>' + messekosten.mkosten[i].preis + '</td></tr>');
    };
    document.write('</table>');
};


function genCebitTabelle() {
    // Generieren der Tabelle inklusive Ueberschriften
    document.write('<table class = "messetabellen" border="1"width="500px">');
    document.write('<tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>E-Mail</th></tr>');

    // Generieren der Zelleninhalte
    for (var i = 0; i < teilnehmerCebit.cebit.length; i++) {
        document.write('<tr><td>' + teilnehmerCebit.cebit[i].name + '</td><td>' +
            teilnehmerCebit.cebit[i].vorname + '</td><td>' +
            teilnehmerCebit.cebit[i].studiengang + '</td><td>' +
            teilnehmerCebit.cebit[i].mail + '</td></tr>');
    };
    document.write('</table>');
};


function genConhitTabelle() {
    // Generieren der Tabelle inklusive Ueberschriften
    document.write('<table class = "messetabellen" border="1"width="500px">');
    document.write('<tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>E-Mail</th></tr>');

    // Generieren der Zelleninhalte
    for (var i = 0; i < teilnehmerConhit.conhit.length; i++) {
        document.write('<tr><td>' + teilnehmerConhit.conhit[i].name + '</td><td>' +
            teilnehmerConhit.conhit[i].vorname + '</td><td>' +
            teilnehmerConhit.conhit[i].studiengang + '</td><td>' +
            teilnehmerConhit.conhit[i].mail + '</td></tr>');
    };
    document.write('</table>');
};


function genWebtechTabelle() {
    // Generieren der Tabelle inklusive Ueberschriften
    document.write('<table class = "messetabellen" border="1"width="500px">');
    document.write('<tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>E-Mail</th></tr>');

    // Generieren der Zelleninhalte
    for (var i = 0; i < teilnehmerWebtech.webtech.length; i++) {
        document.write('<tr><td>' + teilnehmerWebtech.webtech[i].name + '</td><td>' +
            teilnehmerWebtech.webtech[i].vorname + '</td><td>' +
            teilnehmerWebtech.webtech[i].studiengang + '</td><td>' +
            teilnehmerWebtech.webtech[i].mail + '</td></tr>');
    };
    document.write('</table>');
};

/*-------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------*/