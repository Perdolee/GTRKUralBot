var myProj = app.project;
var OUTComp = searchCompByName("PLAHA_HD");

var OdnaVLayer = OUTComp.layer("ЗАГОЛОВОК ОДНА СТРОКА 17");
var DveVLayer = OUTComp.layer("ЗАГОЛОВОК ДВЕ СТРОКИ 17");
var OdnaZLayer = OUTComp.layer("ЗАГОЛОВОК ОДНА СТРОКА");
var DveZLayer = OUTComp.layer("ЗАГОЛОВОК ДВЕ СТРОКИ");
var TextikLayer = OUTComp.layer("Text");


/*--------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------GUI----------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

//var Stroky = PCW.add ("checkbox", [15,15,100,30], "Две строки?");

var RadioGroup = PCW.add ("group");
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
PCW.add ("panel", [0,0,450,3]);
var TitulGroup = PCW.add ("group");
TitulGroup.add ("statictext", undefined, "Заголовок одна строка:");
var Str1 = TitulGroup.add("edittext", ["", "" , 400, "60"], OdnaZLayer.text.sourceText.value, {multiline:true});

var Titul2Group = PCW.add ("group");
Titul2Group.add ("statictext", undefined, "Заголовок две строки  :");
var Str2 = Titul2Group.add("edittext", ["", "" , 400, "60"], DveZLayer.text.sourceText.value, {multiline:true});

var CytataGroup = PCW.add ("group");
CytataGroup.add ("statictext", undefined, "Текст:" + "(вначале две пустых строки)");

var Cytata = CytataGroup.add("edittext", ["", "" , 400, "140"], TextikLayer.text.sourceText.value, {multiline:true});


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

       alert ("Изменено!");
    
}

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