<<<<<<< HEAD
/**
 * Created by DO on 20.05.14.
 */


/*------------------------------------------------------------------------*/
/* Funktionen*/
/*------------------------------------------------------------------------*/

/*Funktion zum Aufrufen der Teilnehmertabelle*/
=======
>>>>>>> 690ba10d13ff1ca1c1198a8c607e15ebd98f7655
function teilnehmerTab(){
    document.getElementById("kosten").style.backgroundColor="transparent";
    document.getElementById("kosten").style.color="black";
    document.getElementById("teilnehmer").style.color="whitesmoke";
    document.getElementById("teilnehmer").style.backgroundColor="blue";
    document.getElementById("messeAuswahlTable").style.visibility="visible";
    document.getElementById("messeTables").style.visibility="visible";
    document.getElementById("tableCebit").style.visibility="visible";
    document.getElementById("tableCebit").style.backgroundColor="rgb(153,217,234)";
    document.getElementById("tableConhit").style.visibility="hidden";
    document.getElementById("tableConhit").style.backgroundColor="transparent";
    document.getElementById("tableWebtechcon").style.visibility="hidden";
    document.getElementById("tableWebtechcon").style.backgroundColor="transparent";
    document.getElementById("tabelleMessekosten").style.visibility="hidden";
}

function kostenTab(){
    document.getElementById("kosten").style.backgroundColor="blue";
    document.getElementById("kosten").style.color="whitesmoke";
    document.getElementById("messeAuswahlTable").style.visibility="hidden";
    document.getElementById("teilnehmer").style.color="black";
    document.getElementById("teilnehmer").style.backgroundColor="transparent";
    document.getElementById("messeTables").style.visibility="hidden";
    document.getElementById("tabelleMesseKosten").style.visibility="visible";
}

function cebitTable(){
    document.getElementById("cebitTab").style.backgroundColor="deepskyblue";
    document.getElementById("conhitTab").style.backgroundColor="transparent";
    document.getElementById("webtechTab").style.backgroundColor="transparent";
    document.getElementById("tableCebit").style.visibility="visible";
    document.getElementById("tableCebit").style.backgroundColor="rgb(153,217,234)";
    document.getElementById("tableConhit").style.visibility="hidden";
    document.getElementById("tableConhit").style.backgroundColor="transparent";
    document.getElementById("tableWebtechcon").style.visibility="hidden";
    document.getElementById("tableWebtechcon").style.backgroundColor="transparent";
    document.getElementById("tabelleMessekosten").style.visibility="hidden";
}

function conhitTable(){
    document.getElementById("conhitTab").style.backgroundColor="deepskyblue";
    document.getElementById("cebitTab").style.backgroundColor="transparent";
    document.getElementById("webtechTab").style.backgroundColor="transparent";
    document.getElementById("tableConhit").style.visibility="visible";
    document.getElementById("tableConhit").style.backgroundColor="rgb(153,217,234)";
    document.getElementById("tableCebit").style.visibility="hidden";
    document.getElementById("tableCebit").style.backgroundColor="transparent";
    document.getElementById("tableWebtechcon").style.visibility="hidden";
    document.getElementById("tableWebtechcon").style.backgroundColor="transparent";
    document.getElementById("tabelleMessekosten").style.visibility="hidden";
}

function webtechTable(){
    document.getElementById("webtechTab").style.backgroundColor="deepskyblue";
    document.getElementById("conhitTab").style.backgroundColor="transparent";
    document.getElementById("cebitTab").style.backgroundColor="transparent";
    document.getElementById("tableWebtechcon").style.visibility="visible";
    document.getElementById("tableWebtechcon").style.backgroundColor="rgb(153,217,234)";
    document.getElementById("tableConhit").style.visibility="hidden";
    document.getElementById("tableConhit").style.backgroundColor="transparent";
    document.getElementById("tableCebit").style.visibility="hidden";
    document.getElementById("tableCebit").style.backgroundColor="transparent";
    document.getElementById("tabelleMessekosten").style.visibility="hidden";

<<<<<<< HEAD
}

/*Funktion zum Ausgeben der Teilnehmer an der CeBit*/
function teilnehmerCebit() {
    document.write('<table class="messeTables" border="1" width="100%"');
    document.write(' <tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>E-Mail</th></tr>');

    for (var i = 0; i < cebitTeilnehmer.cebit.length; i++) {
        document.write(' <tr><td>' + cebitTeilnehmer.cebit[i].name + '</td><td>' +
            cebitTeilnehmer.cebit[i].vorname +'</td><td>' + cebitTeilnehmer.cebit[i].studiengang + '</td><td>' +
                cebitTeilnehmer.cebit[i].mail + '</td></tr>');
    }
    document.write('</table>');
}


/*Funktion zum Ausgeben der Teilnehmer an der ConHIT*/
function teilnehmerConhit() {
    document.write('<table class="messeTables" border="1" width="100%"');
    document.write(' <tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>E-Mail</th></tr>');
    for (var i = 0; i < conhitTeilnehmer.conhit.length; i++) {
        document.write(' <tr><td>' + conhitTeilnehmer.conhit[i].name + '</td><td>' +
            conhitTeilnehmer.conhit[i].vorname +'</td><td>' + conhitTeilnehmer.conhit[i].studiengang + '</td><td>' +
                conhitTeilnehmer.conhit[i].mail + '</td></tr>');
    }
    document.write('</table>');
}


/*Funktion zum Ausgeben der Teilnehmer an der WebTech*/
function teilnehmerWebtech() {
    document.write('<table class="messeTables" border="1" width="100%"');
    document.write(' <tr><th>Name</th><th>Vorname</th><th>Studiengang</th><th>E-Mail</th></tr>');
    for (var i = 0; i < webtechTeilnehmer.webtech.length; i++) {
        document.write(' <tr><td>' + webtechTeilnehmer.webtech[i].name + '</td><td>' +
            webtechTeilnehmer.webtech[i].vorname +'</td><td>' + webtechTeilnehmer.webtech[i].studiengang + '</td><td>' +
                webtechTeilnehmer.webtech[i].mail + '</td></tr>');
    }
    document.write('</table>');
}


/*-----------------------------------------------------------------------*/
/*JSON Objekte fuer Teilnehmerliste*/
/*-----------------------------------------------------------------------*/

/*CeBIT*/
var cebitTeilnehmer = { "cebit" : [
    {
        "name": "Ent",
        "vorname": "Thlo",
        "studiengang": "IB",
        "mail": "tDOTentATgmailDOTde"
    },

    {
        "name": "Kraus",
        "vorname": "Martina",
        "studiengang": "IB",
        "mail": "mDOTKrausAThs-mannheim.de"
    },

    {
        "name": "Smits",
        "vorname": "Thomas",
        "studiengang": "UIB",
        "mail": "tDOTsmitsAThs-mannheim.de"
    },

    {
        "name": "Groeschel",
        "vorname": "Michael",
        "studiengang": "UIB",
        "mail": "mDOTgroeschelAThs-mannheim.de"
    }]
};

/*-----------------------------------------------------------------------*/
/*conHIT*/
var conhitTeilnehmer = { "conhit" : [
    {
        "name": "Schmuecker",
        "vorname": "Paul",
        "studiengang": "IMB",
        "mail": "pDOTschmueckerAThs-mannheim.de"
    },

    {
        "name": "Felsenheimer",
        "vorname": "Jan",
        "studiengang": "IB",
        "mail": "jDOTfelsenheimerlATdiebestebandderwelt.de"
    }]
}

/*-----------------------------------------------------------------------*/
/*webTech*/
var webtechTeilnehmer = { "webtech" : [
    {
        name: "Hoppe",
        vorname: "Johannes",
        studiengang: "UIB",
        mail: "jDOThoppeATgmx.de"
    },

    {
        name: "Hofmeister",
        vorname: "Johannes",
        studiengang: "UIB",
        mail: "cessorATgmail.de"
    }]
}



=======
}
>>>>>>> 690ba10d13ff1ca1c1198a8c607e15ebd98f7655
