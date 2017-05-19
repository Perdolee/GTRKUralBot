var myProj = app.project;
var UrfoEndComp = searchCompByName("URFO_END");
var UrfoAllComp = searchCompByName("URFO_ALL");
var OknoComp = searchCompByName("OKNO 2");

var ControllOpacitySlider = UrfoAllComp.layer("ControllOpacity").effect("CurrentSelection")("Slider");

var GorodMetka1 = UrfoEndComp.layer("метка под доп город");
var GorodImya1 = UrfoEndComp.layer("Дополнительный город");
var GorodPlashka1 = UrfoEndComp.layer("Подлога под доп город");
var GorodMetka2 = UrfoEndComp.layer("метка под доп город 2");
var GorodImya2 = UrfoEndComp.layer("Дополнительный город 2");
var GorodPlashka2 = UrfoEndComp.layer("Подлога под доп город 2");

var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

var SelectorPanel = PCW.add ("panel", undefined, "Область:");
SelectorPanel.preferredSize.width = 400;
SelectorPanel.alignChildren = "left";
var SelectorGroup = SelectorPanel.add ("group");
var SelectorDrop = SelectorGroup.add ("dropdownlist", ["", "" , 110, "22"], ["ЯНАО", "ХМАО", "Тюмень", "Курган", "Челябинск", "Екатеринбург"]);
SelectorDrop.selection = ControllOpacitySlider.value;

SelectorPanel.add ("statictext", undefined, "Количество доп. городов:");
var RadioGroup = SelectorPanel.add ("group");
var radiobuttonOne = RadioGroup.add("radiobutton", [10,60,100,80], "0");
var radiobuttonTwo = RadioGroup.add("radiobutton", [10,60,100,80], "1");
var radiobuttonThree = RadioGroup.add("radiobutton", [10,60,100,80], "2");

//Checkbox
var DopGorodPanel1 = PCW.add ("panel", undefined, "Дополнительный город#1:");
var DopGorod1 = DopGorodPanel1.add("edittext", ["", "" , 350, "20"], GorodImya1.text.sourceText.value, {multiline:false});

var DopGorodPanel2 = PCW.add ("panel", undefined, "Дополнительный город#2:");
var DopGorod2 = DopGorodPanel2.add("edittext", ["", "" , 350, "20"], GorodImya2.text.sourceText.value, {multiline:false});


if (GorodMetka1.enabled==true && GorodMetka2.enabled==true)
{
        radiobuttonThree.value = true;
        DopGorodPanel1.enabled = true;
        DopGorodPanel2.enabled = true;
}
else if (GorodMetka1.enabled==false && GorodMetka2.enabled==false)
{
        radiobuttonOne.value = true;
        DopGorodPanel1.enabled = false;
        DopGorodPanel2.enabled = false;
}
else 
{
        radiobuttonTwo.value = true;
        DopGorodPanel1.enabled = true;
        DopGorodPanel2.enabled = false;
}

PCW.add ("panel", [0,0,350,3]);
var BottonGroup = PCW.add ("group");
//BottonGroup.align = "center";
var ApplyButton = BottonGroup.add ("button", [-200,0,100,30], "Применить");
var CloseButton = BottonGroup.add ("button", [0,0,100,30], "Закрыть");

CloseButton.onClick = function () 
{
    PCW.hide();
}

PCW.show();


/*--------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Functions-------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
radiobuttonOne.onClick = function () 
{     
        GorodMetka1.enabled = false;
        GorodImya1.enabled = false; 
        GorodPlashka1.enabled = false; 
        GorodMetka2.enabled = false;
        GorodImya2.enabled = false; 
        GorodPlashka2.enabled = false; 
        DopGorodPanel1.enabled = false;
        DopGorodPanel2.enabled = false;
}
radiobuttonTwo.onClick = function () 
{     
        GorodMetka1.enabled = true;
        GorodImya1.enabled = true; 
        GorodPlashka1.enabled = true; 
        GorodMetka2.enabled = false;
        GorodImya2.enabled = false; 
        GorodPlashka2.enabled = false; 
        DopGorodPanel1.enabled = true;
        DopGorodPanel2.enabled = false;
}
radiobuttonThree.onClick = function () 
{     
        GorodMetka1.enabled = true;
        GorodImya1.enabled = true; 
        GorodPlashka1.enabled = true; 
        GorodMetka2.enabled = true;
        GorodImya2.enabled = true; 
        GorodPlashka2.enabled = true; 
        DopGorodPanel1.enabled = true;
        DopGorodPanel2.enabled = true;
}


SelectorDrop.onChange = function ()
{
    ControllOpacitySlider.setValue(SelectorDrop.selection.index); 
}

DopGorod1.onChange = function ()
{
    GorodImya1.text.sourceText.setValue(DopGorod1.text); 
        var wwwSizeBoundLayer = GorodImya1.sourceRectAtTime(1, false).width; 
        newLimit = wwwSizeBoundLayer + 200;
        myMaskShape = GorodPlashka1.mask("Mask 1").property("maskShape");
        myShape = myMaskShape.value;
        myShape.vertices = [[93,492],[newLimit,492],[newLimit,682],[93,682]];
        myShape.closed = true;
        myMaskShape.setValue(myShape);
}

DopGorod2.onChange = function ()
{
    GorodImya2.text.sourceText.setValue(DopGorod2.text); 
        var wwwSizeBoundLayer = GorodImya2.sourceRectAtTime(1, false).width; 
        newLimit = wwwSizeBoundLayer + 200;
        myMaskShape = GorodPlashka2.mask("Mask 1").property("maskShape");
        myShape = myMaskShape.value;
        myShape.vertices = [[93,492],[newLimit,492],[newLimit,682],[93,682]];
        myShape.closed = true;
        myMaskShape.setValue(myShape);
}

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