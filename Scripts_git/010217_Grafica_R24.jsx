var myProj = app.project;
var CytataComp = searchCompByName("CYTATA");
var CytataLogoComp = searchCompByName("CYTATA 2");
var CytataFotoComp = searchCompByName("CYTATA_FOTO");
var HripComp = searchCompByName("HRIP_NOFOTO");
var HripFotoComp = searchCompByName("HRIP+FOTO");

var CytataLayer = CytataComp.layer("Цитата");
var IstochnikLayer = CytataComp.layer("Источник");
var CytataLogoLayer = CytataLogoComp.layer("Цитата");
var IstochnikFotoLayer = CytataFotoComp.layer("Источник");
var CytataFotoLayer = CytataFotoComp.layer("Цитата");

var ImyaLayer = HripComp.layer("Человек");
var GeoLayer = HripComp.layer("Гео");
var TitulLayer = HripComp.layer("Должность");
var ImyaFLayer = HripFotoComp.layer("Человек");
var GeoFLayer = HripFotoComp.layer("Гео");
var TitulFLayer = HripFotoComp.layer("Должность");




var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

var SelectorPanel = PCW.add ("panel", undefined, "Тип графики:");
SelectorPanel.preferredSize.width = 400;
SelectorPanel.alignChildren = "left";
var SelectorGroup = SelectorPanel.add ("group");
var SelectorDrop = SelectorGroup.add ("dropdownlist", ["", "" , 110, "22"], ["Цитата без фото", "Цитата с лого", "Цитата с фото", "Хрип без фото", "Хрип с фото"]);


//-------------------------------------------------------------------------------------------------------------------------------------//
var CytataNoFotoPanel = PCW.add ("panel", undefined, "Поля:");
var CytataNoFotoGroup = CytataNoFotoPanel.add ("group");
CytataNoFotoGroup.add ("statictext", undefined, "Цитата[формат]             :");
var CytataNoFoto = CytataNoFotoGroup.add("edittext", ["", "" , 400, "140"], CytataLayer.text.sourceText.value, {multiline:true});
var IstochnikGroup = CytataNoFotoPanel.add ("group");
IstochnikGroup.add ("statictext", undefined, "Источник[не формат]     :");
var Istochnik = IstochnikGroup.add("edittext", ["", "" , 400, "20"], IstochnikLayer.text.sourceText.value, {multiline:false});

var GeoGroup = CytataNoFotoPanel.add ("group");
GeoGroup.add ("statictext", undefined, "Гео[не формат]               :");
var Geo = GeoGroup.add("edittext", ["", "" , 400, "20"], GeoLayer.text.sourceText.value, {multiline:false});
var ImyaGroup = CytataNoFotoPanel.add ("group");
ImyaGroup.add ("statictext", undefined, "Имя Фамилия[не формат]:");
var Imya = ImyaGroup.add("edittext", ["", "" , 400, "40"], ImyaLayer.text.sourceText.value, {multiline:true});
var TitulGroup = CytataNoFotoPanel.add ("group");
TitulGroup.add ("statictext", undefined, "Должность[не формат]   :");
var Titul = TitulGroup.add("edittext", ["", "" , 400, "60"], TitulLayer.text.sourceText.value, {multiline:true});

GeoGroup.visible=false;
ImyaGroup.visible=false;
TitulGroup.visible=false;
CytataNoFotoGroup.visible=false;
IstochnikGroup.visible=false;
//-------------------------------------------------------------------------------------------------------------------------------------//


SelectorGrab();
PCW.add ("panel", [0,0,450,3]);
var BottonGroup = PCW.add ("group");
//BottonGroup.align = "center";
var ApplyButton = BottonGroup.add ("button", [-200,0,100,30], "Применить");
var CloseButton = BottonGroup.add ("button", [0,0,100,30], "Закрыть");

CloseButton.onClick = function () 
{
    PCW.hide();
}

PCW.show();


ApplyButton.onClick = function () 
{     
        CytataLayer.text.sourceText.setValue (CytataNoFoto.text);
        IstochnikLayer.text.sourceText.setValue (Istochnik.text);
        CytataLogoLayer.text.sourceText.setValue (CytataNoFoto.text);
        CytataFotoLayer.text.sourceText.setValue (CytataNoFoto.text);
        IstochnikFotoLayer.text.sourceText.setValue (Istochnik.text);
        
        ImyaLayer.text.sourceText.setValue (Imya.text);
        GeoLayer.text.sourceText.setValue (Geo.text);
        TitulLayer.text.sourceText.setValue (Titul.text);
        ImyaFLayer.text.sourceText.setValue (Imya.text);
        GeoFLayer.text.sourceText.setValue (Geo.text);
        TitulFLayer.text.sourceText.setValue (Titul.text);
       alert ("Изменено!");
    
}


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

function SelectorGrab ()
{
   var currentComposition = myProj.activeItem.name;
   if (currentComposition == CytataComp.name)
   {
       SelectorDrop.selection = 0;
       CytataNoFotoGroup.visible=true;
       IstochnikGroup.visible=true;
       TitulGroup.visible=false;
       ImyaGroup.visible=false;
       GeoGroup.visible=false;
    }
    if (currentComposition == CytataLogoComp.name)
   {
       SelectorDrop.selection = 1;
       CytataNoFotoGroup.visible=true;
        IstochnikGroup.visible=false;
       TitulGroup.visible=false;
       ImyaGroup.visible=false;
       GeoGroup.visible=false;
    }
 if (currentComposition == CytataFotoComp.name)
   {
       SelectorDrop.selection = 2;
       CytataNoFotoGroup.visible=true;
       IstochnikGroup.visible=true;
       TitulGroup.visible=false;
       ImyaGroup.visible=false;
       GeoGroup.visible=false;
    }
 if (currentComposition == HripComp.name)
   {
       SelectorDrop.selection = 3;
       CytataNoFotoGroup.visible=false;
       IstochnikGroup.visible=false;
       TitulGroup.visible=true;
       ImyaGroup.visible=true;
       GeoGroup.visible=true;
    }
 if (currentComposition == HripFotoComp.name)
   {
       SelectorDrop.selection = 4;
       CytataNoFotoGroup.visible=false;
       IstochnikGroup.visible=false;
       TitulGroup.visible=true;
       ImyaGroup.visible=true;
       GeoGroup.visible=true;
    }
 }

SelectorDrop.onChange = function ()
{
         switch (SelectorDrop.selection.index)
    {
        case 0:
            CytataComp.openInViewer();
            CytataNoFotoGroup.visible=true;
            IstochnikGroup.visible=true;
       TitulGroup.visible=false;
       ImyaGroup.visible=false;
       GeoGroup.visible=false;
        break;
        case 1:
            CytataLogoComp.openInViewer();
            CytataNoFotoGroup.visible=true;
            IstochnikGroup.visible=false;
       TitulGroup.visible=false;
       ImyaGroup.visible=false;
       GeoGroup.visible=false;
        break;
        case 2:
            CytataFotoComp.openInViewer();
            CytataNoFotoGroup.visible=true;
            IstochnikGroup.visible=true;
       TitulGroup.visible=false;
       ImyaGroup.visible=false;
       GeoGroup.visible=false;
        break;
        case 3:
            HripComp.openInViewer();
       CytataNoFotoGroup.visible=false;
       IstochnikGroup.visible=false;
       TitulGroup.visible=true;
       ImyaGroup.visible=true;
       GeoGroup.visible=true;
        break;
        case 4:
       HripFotoComp.openInViewer();
       CytataNoFotoGroup.visible=false;
       IstochnikGroup.visible=false;
       TitulGroup.visible=true;
       ImyaGroup.visible=true;
       GeoGroup.visible=true;
        break;
        default:
            alert ("Неизвестная композиция");
       break;
    }
}