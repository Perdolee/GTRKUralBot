var myProj = app.project;
var C4x3Comp = searchCompByName("4x3");
var C16x9Comp = searchCompByName("16x9");
var CComp = C4x3Comp;
var Goroda = [];
var StartLayer = CComp.layer("StartLayer"); 
var EndLayer = CComp.layer("EndLayer");
var GorodaKolvo = ((EndLayer.index-StartLayer.index-1)/2);
var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
PCW.spacing = 8;
PCW.preferredSize.width = 500;

var CompGroup = PCW.add ("group");
CompGroup.add ("statictext", undefined, "Композиция:");
var SelectorCompDrop = CompGroup.add ("dropdownlist", ["", "" , 110, "22"], ["4х3", "16х9"]);

var TextPanel = PCW.add ("panel", undefined, "Тексты");
TextPanel.enabled = false;
var GorodGroup = TextPanel.add ("group");
GorodGroup.add ("statictext", undefined, "Город:");
var GorodaDrop = GorodGroup.add ("dropdownlist", ["", "" , 200, "22"], undefined);
var PlaceGroup = TextPanel.add ("group");
PlaceGroup.add ("statictext", undefined, "Место:");
var PlaceText = PlaceGroup.add("edittext", ["", "" , 300, "60"], undefined, {multiline:true});

PCW.add ("panel", [0,0,450,3]);
var BottonGroup = PCW.add ("group");
var ApplyButton = BottonGroup.add ("button", [-100,0,100,30], "Применить");
var ResetButton = BottonGroup.add ("button", [0,0,100,30], "Сброс");
var CloseButton = BottonGroup.add ("button", [0,0,100,30], "Закрыть");
//ApplyButton.enabled = false;
CloseButton.onClick = function () 
{
    PCW.hide();
}

PCW.show();

SelectorCompDrop.onChange = function ()
{
         var StartLayer = CComp.layer("StartLayer"); 
         var EndLayer = CComp.layer("EndLayer");
         var GorodaKolvo = ((EndLayer.index-StartLayer.index-1)/2);
         switch (SelectorCompDrop.selection.index)
    {
        case 0:
        C4x3Comp.openInViewer();
        CComp = C4x3Comp;
        break;
        case 1:
        C16x9Comp.openInViewer();
        CComp = C16x9Comp;
        break;
        default:
            alert ("Неизвестная композиция");
       break;
    }
    for (var i = 0; i<(GorodaKolvo);i++)
    {
            Goroda [i]=CComp.layer(StartLayer.index+1+i*2).name;
    }
    Goroda.sort();
    TextPanel.enabled = true;
    GorodaDrop.selection = 0;
    GorodaDrop.removeAll();
    var currentSelectionGorod = 0;
    for (var i = 0; i<(GorodaKolvo);i++)
    {
        GorodaDrop.add('item', Goroda[i]);
        if (CComp.layer(Goroda[i]).enabled)
        {
             GorodaDrop.selection=i;
             currentSelectionGorod = Goroda[i];     
        }
    }
    currentGorodLayer = CComp.layer(currentSelectionGorod);
	for (var i = 0; i<(GorodaKolvo);i++)
    {
      CComp.layer(currentGorodLayer).enabled = false;
	 CComp.layer(currentGorodLayer.index+1).enabled = false;
    }
	 CComp.layer(Goroda[i]).enabled = true;
	 CComp.layer(CComp.layer(Goroda[i]).index+1).enabled = true;
     
}


GorodaDrop.onChange = function ()
{
    currentGorodLayer.enabled = false;
    CComp.layer(currentGorodLayer.index+1).enabled = false;
    newGorodLayer = CComp.layer(GorodaDrop.selection.text);
    newGorodLayer.enabled = true;
    CComp.layer(newGorodLayer.index+1).enabled = true;
    currentGorodLayer = CComp.layer(GorodaDrop.selection.text);
    PlaceText.text = CComp.layer(currentGorodLayer.index+1).text.sourceText.value;
}

ResetButton.onClick = function () 
{     
	for (var i = 0; i<(GorodaKolvo);i++)
    {
     CComp.layer(Goroda[i]).enabled = false;
	 CComp.layer(CComp.layer(Goroda[i]).index+1).enabled = false;
    }
}

ApplyButton.onClick = function () 
{     
    CComp.layer(currentGorodLayer.index+1).text.sourceText.setValue (PlaceText.text);
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
