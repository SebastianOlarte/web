$(function() {
    /*Algunas funciones para Clases
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    $("#div1").addClass("header");
    $("div").removeClass("red");
    
    $("#button1").click(function() {
        $("#p1").toggleClass("red");
    });
    
    /*Algunas funciones para CSS
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    /*alert($("p.clase1").css("background-color"));*/
    $("p.clase1").css("background-color", "blue");
    $("p.clase1").css("text-transformation", "uppercase");
    
    $("p.clase2").css({"background-color": "red", "font-size": "200%", "color":"yellow"});
    
    $("#div1").css("background-color", "greenyellow");
    $("#div1").width(400);
    $("#div1").height(200);
    
    var txt = "";
    txt += "width: " + $("#div2").width() + " ";
    txt += "height: " + $("#div2").height() + "<br/>";
    txt += "innerWidth: " + $("#div2").innerWidth() + " ";
    txt += "innerHeight: " + $("#div2").innerHeight() + "<br/>";
    txt += "outerWidth: " + $("#div2").outerWidth() + " ";
    txt += "outerHeight: " + $("#div2").outerHeight();
    $("#div2").html(txt);
    
    /*Algunas funciones para manipular el DOM
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    var e = $("p.clase3").parent();
    e.css("border", "2px solid red");
    console.log("Soy el padre de p.clase3", e);

    var parents = $("p.clase4").parents();
    parents.css("border", "2px solid green");
    console.log("Soy los antecesores de p.clase4", parents);

    $("p.clase5").eq(1).remove();

    $("div.clase2").empty();

    /*Algunas funciones para el manejo de eventos
    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
    $("#p1").click(function() {
        $("#div3").toggle();
        $("#div3").toggle(5000);
        console.log($("#p1"));
    });
    
});