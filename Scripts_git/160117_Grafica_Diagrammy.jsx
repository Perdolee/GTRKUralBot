var myProj = app.project;
var OUTComp = searchCompByName("RENDER OUT uniframe");
var PoDannymLayer = OUTComp.layer("по данным сайта");
var ZagolovokLayer = OUTComp.layer("Заголовок в одну строк");

var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

var ZagolovokGroup = PCW.add ("group");
ZagolovokGroup.add ("statictext", undefined, "Заголовок:");
var Zagolovok = ZagolovokGroup.add("edittext", ["", "" , 400, "20"], ZagolovokLayer.text.sourceText.value, {multiline:false});

var SiteGroup = PCW.add ("group");
SiteGroup.add ("statictext", undefined, "Источник:");
var Site = SiteGroup.add("edittext", ["", "" , 400, "20"], PoDannymLayer.text.sourceText.value, {multiline:false});

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
        PoDannymLayer.text.sourceText.setValue (Site.text);
        ZagolovokLayer.text.sourceText.setValue (Zagolovok.text);
        alert ("Изменено!");
    
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