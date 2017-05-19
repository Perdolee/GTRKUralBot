var myProj = app.project;
var SportComp = searchCompByName("_ANONS_SPORT");
var ImageComp = searchCompByName("IMAGECOMP");
var n=0;
var GorodaStartLayer = SportComp.layer("ГородаНачало"); 
var GorodaEndLayer = SportComp.layer("ГородаКонец"); 
var kolvo = GorodaEndLayer.index-GorodaStartLayer.index-2;
var ImageKolvo = ImageComp.numLayers
var Goroda=[kolvo];
var ImageLayerName = [ImageKolvo];
var allGoroda="";

var DescriptionLayer = SportComp.layer("Описание");
var TitleLayer = SportComp.layer("Заголовок");
var TimeDateLayer = SportComp.layer("Время");

for (var i = 0; i<ImageKolvo;i++)
{
        ImageLayerName [i]=ImageComp.layer(i+1).name;
}
ImageLayerName.sort();
for (var i = 1; i<(GorodaEndLayer.index-GorodaStartLayer.index);i++)
{
        Goroda [n]=SportComp.layer(GorodaStartLayer.index+i).name;
        n++;
}
Goroda.sort();
var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;
//====================COUNTRY SELECT
var SelectorPanel = PCW.add ("panel", undefined, "Спорт:");
SelectorPanel.preferredSize.width = 400;
SelectorPanel.alignChildren = "left";
var SelectorGroup = SelectorPanel.add ("group");
var SelectorDrop = SelectorGroup.add ("dropdownlist", ["", "" , 110, "22"], undefined);
var DopGorod = SelectorGroup.add("edittext", ["", "" , 180, "20"], undefined, {multiline:false});
var AddGorodButton = SelectorGroup.add ("button", [0,0,100,30], "Добавить");
SelectorDrop.selection = 0;
for (var i = 0; i<(GorodaEndLayer.index-GorodaStartLayer.index-1);i++)
{
    SelectorDrop.add('item', Goroda[i]);
    if (SportComp.layer(Goroda[i]).enabled)
    {
         SelectorDrop.selection=i;
    }
}
var CurrentSelection = SelectorDrop.selection.index;
//I=====================MAGE SELECT
var SelectorImageGroup = SelectorPanel.add ("group");
var SelectorImageDrop = SelectorImageGroup.add ("dropdownlist", ["", "" , 300, "22"], undefined);
var RefreshImageButton = SelectorImageGroup.add ("button", [0,0,100,30], "Обновить");
RefreshImageButton.enabled = false;
RefreshImageButton.helpTip = "В следующих версиях :3";  
SelectorImageGroup.selection = 0;
for (var i = 0; i<ImageKolvo;i++)
{
    SelectorImageDrop.add('item', ImageLayerName[i]);
    if (ImageComp.layer
    (ImageLayerName[i]).enabled)
    {
         SelectorImageDrop.selection=i;
    }
}
var CurrentImageSelection = SelectorImageDrop.selection.index;

var TitleGroup = SelectorPanel.add ("group");
TitleGroup.add ("statictext", undefined, "Заголовок:");
var TitleText = TitleGroup.add("edittext", ["", "" , 230, "40"], TitleLayer.text.sourceText.value, {multiline:true});

var DescriptionGroup = SelectorPanel.add ("group");
DescriptionGroup.add ("statictext", undefined, "Описание  :");
var DescriptionText = DescriptionGroup.add("edittext", ["", "" , 230, "20"], DescriptionLayer.text.sourceText.value, {multiline:false});

var TimeDateGroup = SelectorPanel.add ("group");
TimeDateGroup.add ("statictext", undefined, "Время       :");
var TimeDateText = TimeDateGroup.add("edittext", ["", "" , 230, "20"], TimeDateLayer.text.sourceText.value, {multiline:false});


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



/*--------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Functions-------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
    RefreshImageButton.onClick = function () 
{
    ImageKolvo = ImageComp.numLayers;
    for (var i = 0; i<ImageKolvo-1;i++)
    {
    SelectorImageDrop.remove(0);
    }

    for (var i = 0; i<ImageKolvo-1;i++)
    {
            ImageLayerName [i]=ImageComp.layer(i+1).name;       
    }
    ImageLayerName.sort();   
    for (var i = 0; i<ImageKolvo-1;i++)
    {
        SelectorImageDrop.add('item', ImageLayerName[i]); 
    }
    SelectorImageDrop.selection=CurrentImageSelection;
}    








    AddGorodButton.onClick = function () 
{
    var newTextLayer = SportComp.layers.addText(DopGorod.text);
    newTextLayer.name = DopGorod.text;
    newTextLayer.position.setValue([363.094,142]);
    newTextLayer.moveBefore(GorodaEndLayer) ;
    var myTextDocument = newTextLayer.property("ADBE Text Properties").property("ADBE Text Document")
    var textDocument1 = myTextDocument.value;
    textDocument1.fontSize  = 23;
    textDocument1.font = "XXIICentarLight";
    textDocument1.style = "Light";
    myTextDocument.setValue(textDocument1);  
    SelectorDrop.add('item', DopGorod.text);
    SelectorDrop.selection=SelectorDrop.items.length-1;
}        


SelectorDrop.onChange = function ()
{
    SportComp.layer(SelectorDrop.items[CurrentSelection].text).enabled=false; 
    SportComp.layer(SelectorDrop.selection.text).enabled=true;     
    CurrentSelection = SelectorDrop.selection.index;
}

SelectorImageDrop.onChange = function ()
{
    ImageComp.layer(SelectorImageDrop.items[CurrentImageSelection].text).enabled=false; 
    ImageComp.layer(SelectorImageDrop.selection.text).enabled=true;     
    CurrentImageSelection = SelectorImageDrop.selection.index;
}


ApplyButton.onClick = function () 
{
     DescriptionLayer.text.sourceText.setValue(DescriptionText.text); 
     TitleLayer.text.sourceText.setValue(TitleText.text); 
     TimeDateLayer.text.sourceText.setValue(TimeDateText.text); 
}


function WhatIsALayer (Layer)
    {
    if (Layer instanceof TextLayer)
    {
        return "text";
        //alert ("Layer is a text layer");
    }
    else if (Layer instanceof LightLayer)
    {
        return "light";
        //alert ("Layer is a light layer");
    }
    else if (Layer instanceof CameraLayer)
    {
        return "camera";        
        //alert ("Layer is a camera layer");
    }
    else if (Layer.adjustmentLayer)
        {
            return "adjustment";        
            // AV Layer is an adjustment layer or any layer with the Adjustment switch enabled
            // (other layer types can also have the Adjustment switch enabled for them)
        }
   else if (Layer.nullLayer)
        {
            return "nullLayer";
            // AV Layer is a null layer (originally created as a null layer)
        }
   else if (Layer.source instanceof CompItem)
        {
            return "comp";
            // AV Layer is a pre-composition layer
        }
    else if (Layer.hasAudio && Layer.hasVideo)
        {
            return "video";
        }
    else if (Layer.hasAudio && !Layer.hasVideo)
        {
            return "audio";
        }
    else if (Layer.source instanceof FootageItem)
    {
        if (Layer.source.mainSource instanceof SolidSource)
        {
            return "solid";
            //alert ("Layer is a solid layer");
         } 
        else
        return "image";
        //alert ("image");
    }
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