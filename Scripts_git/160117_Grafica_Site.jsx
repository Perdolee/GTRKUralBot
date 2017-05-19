var myProj = app.project;
var OUTComp = searchCompByName("PLAHA_HD");
var WWWComp = searchCompByName("site_www");
var OdnaVLayer = OUTComp.layer("ЗАГОЛОВОК ОДНА СТРОКА 17");
var DveVLayer = OUTComp.layer("ЗАГОЛОВОК ДВЕ СТРОКИ 17");
var OdnaZLayer = OUTComp.layer("ЗАГОЛОВОК ОДНА СТРОКА");
var DveZLayer = OUTComp.layer("ЗАГОЛОВОК ДВЕ СТРОКИ");
var TextikLayer = OUTComp.layer("Text");


var wwwLayer = WWWComp.layer("www");
//var wwwSizeLayer = WWWComp.layer("size").mask("Mask").maskPath.value;
var wwwSizeLayer = WWWComp.layer("size").mask("Mask").maskPath.value.vertices[1][0];
var wwwSizeLayer2 = WWWComp.layer("size").mask("Mask").maskPath.value.vertices[2][0];
var proverochka = WWWComp.layer("size").mask("Mask").maskPath;
var wwwSizeBoundLayer = WWWComp.layer("wwww.vesti.ru").sourceRectAtTime(10, false).width;





/*--------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------GUI----------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

//var Stroky = PCW.add ("checkbox", [15,15,100,30], "Две строки?");

var WWWGroup = PCW.add ("group");
WWWGroup.add ("statictext", undefined, "Имя[не формат]:");
var www = WWWGroup.add("edittext", ["", "" , 400, "20"], wwwLayer.text.sourceText.value, {multiline:false});
var wwwCorrect = WWWGroup.add("edittext", ["", "" , 60, "20"], 0, {multiline:false});


var PlashkaPanel = PCW.add ("panel", undefined, "Плашка");
var RadioGroup = PlashkaPanel.add ("group");
var radiobuttonOne = RadioGroup.add("radiobutton", [10,60,180,80], "Одна строка");
var radiobuttonTwo = RadioGroup.add("radiobutton", [10,60,180,80], "Две строки");
if (OdnaVLayer.enabled==true)
{
        radiobuttonOne.value = true;
}
else
{
        radiobuttonTwo.value = true;    
}
PlashkaPanel.add ("panel", [0,0,450,3]);
var TitulGroup = PlashkaPanel.add ("group");
TitulGroup.add ("statictext", undefined, "Заголовок одна строка:");
var Str1 = TitulGroup.add("edittext", ["", "" , 400, "60"], OdnaZLayer.text.sourceText.value, {multiline:true});

var Titul2Group = PlashkaPanel.add ("group");
Titul2Group.add ("statictext", undefined, "Заголовок две строки  :");
var Str2 = Titul2Group.add("edittext", ["", "" , 400, "60"], DveZLayer.text.sourceText.value, {multiline:true});

var CytataGroup = PlashkaPanel.add ("group");
CytataGroup.add ("statictext", undefined, "Текст:" + "(вначале две пустых строки)");
var Cytata = CytataGroup.add("edittext", ["", "" , 400, "140"], TextikLayer.text.sourceText.value, {multiline:true});

//

PCW.add ("panel", [0,0,450,3]);

var BottonGroup = PCW.add ("group");
//BottonGroup.align = "center";
var ApplyButton = BottonGroup.add ("button", [-200,0,100,30], "Применить");
var CloseButton = BottonGroup.add ("button", [0,0,100,30], "Закрыть");

CloseButton.onClick = function () 
{
    PCW.hide();
}

ApplyButton.onClick = function () 
{     
       
        OdnaZLayer.text.sourceText.setValue (Str1.text);
        DveZLayer.text.sourceText.setValue (Str2.text);
        TextikLayer.text.sourceText.setValue (Cytata.text);
        wwwLayer.text.sourceText.setValue (www.text);
       var wwwSizeBoundLayer = WWWComp.layer("wwww.vesti.ru").sourceRectAtTime(10, false).width;    
       
       
       //alert (300-wwwSizeBoundLayer*1.1);
       //чем больше тем правее
        newLimit = 670-Math.abs (wwwSizeBoundLayer)+parseFloat(wwwCorrect.text);
        myMaskShape = WWWComp.layer("size").mask("Mask").property("maskShape");
        myShape = myMaskShape.value;
        myShape.vertices = [[720,360],[newLimit,360],[newLimit,576],[720,576]];
        myShape.closed = true;
        myMaskShape.setValue(myShape);
        
       alert(WWWComp.layer("size").mask("Mask").maskPath.value.vertices);
       //alert (wwwSizeBoundLayer);
}
//720,360,450,360,450,576,720,576
radiobuttonOne.onClick = function () 
{     
        OdnaVLayer.enabled = true;
        OdnaZLayer.enabled = true; 
        DveZLayer.enabled = false; 
        DveVLayer.enabled = false; 
}

radiobuttonTwo.onClick = function () 
{     
        OdnaVLayer.enabled = false;
        OdnaZLayer.enabled = false; 
        DveZLayer.enabled = true; 
        DveVLayer.enabled = true; 
}


PCW.show();



radiobuttonTwo.value




/*--------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Functions-------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
function searchCompByName (nameComp)
{
    var ContComp;
    var ProjLength = 1;
    var successSt = 0;
    while (ProjLength < myProj.items.length)
        {
            if (myProj.item(ProjLength).name == nameComp)
                {                    
                    ContComp = myProj.item(ProjLength);
                    successSt = 1;
                    break;
                }
            ProjLength++;       
       }
   if (successSt == 1)
   {
        return ContComp;
   }
   else 
   {
       return alert("Ошибка. Композиция " + nameComp + " не найдена");
   }
}