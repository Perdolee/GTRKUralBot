var myProj = app.project;
var OUTComp = searchCompByName("titr");
var NameComp = searchCompByName("name");
var RazhifrovkaComp = searchCompByName("rashifrovka");
var hotLineComp = searchCompByName("hotLine");
var dataComp = searchCompByName("data");
var istochnikComp = searchCompByName("istochnik");
var GeoLayer = OUTComp.layer("Geo");
var GeoNameLayer = NameComp.layer("Geo");
var DolzhnostLayer = OUTComp.layer("Dolznost");
var NameLayer = OUTComp.layer("Name");
var NameNameLayer = NameComp.layer("Name");
var PODLOGA_TITR_L_NEWLayer = OUTComp.layer("PODLOGA_TITR_L_NEW");
var PODLOGA_TITR_S_NEWLayer = OUTComp.layer("PODLOGA_TITR_S_NEW");
var PODLOGA_NAME_L_NEWLayer = NameComp.layer("PODLOGA_NAME_L_NEW");
var PODLOGA_NAME_S_NEWLayer = NameComp.layer("PODLOGA_NAME_S_NEW");
var rashifrovka2Layer = RazhifrovkaComp.layer("RASSHIFROVKA_2.mov");
var rashifrovka3Layer = RazhifrovkaComp.layer("RASSHIFROVKA_3.mov");
var rashifrovka4Layer = RazhifrovkaComp.layer("RASSHIFROVKA_4.mov");
var PoyasnLayer = RazhifrovkaComp.layer("Poyasn");
var HotLineLayer = hotLineComp.layer("HotLine");
var NumberLayer = hotLineComp.layer("Number");
var dataLayer = dataComp.layer("Data");
var istochnikLayer = istochnikComp.layer("Istochnik");
var newTextik = "";




/*--------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------GUI----------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PCW = new Window ("palette", "Управление титрами", undefined, undefined); 
PCW.alignChildren = "center";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

var GeoPanel = PCW.add ("panel", undefined, "ГЕО");
var RadioGroup = GeoPanel.add ("group");
GeoPanel.alignChildren = "right";
RadioGroup.add ("statictext", undefined, "Длина геотитра:");
var radiobuttonOne = RadioGroup.add("radiobutton", undefined, "Длинный");
var radiobuttonTwo = RadioGroup.add("radiobutton", undefined, "Короткий");
if (PODLOGA_TITR_L_NEWLayer.enabled==true)
{
        radiobuttonOne.value = true;
}
else
{
        radiobuttonTwo.value = true;    
}
var GeoTextGroup = GeoPanel.add ("group");


GeoTextGroup.add ("statictext", ["",  "", 110, "fill"], "SPACE");


GeoTextGroup.add ("statictext", undefined, "Гео:");
var geo = GeoTextGroup.add("edittext", ["", "" , 300, "20"], GeoLayer.text.sourceText.value, {multiline:false});
var ImyaPanel = PCW.add ("panel", undefined, "Имя Должность");
ImyaPanel.alignChildren = "right";
var ImyaGroup = ImyaPanel.add ("group");
ImyaGroup.add ("statictext", ["",  "", 43, "fill"], "SPACE");

ImyaGroup.add ("statictext", undefined, "Имя [не формат]:");
var imya = ImyaGroup.add("edittext", ["", "" , 300, "40"], NameLayer.text.sourceText.value, {multiline:true});

var DolzhnostGroup = ImyaPanel.add ("group");
DolzhnostGroup.add ("statictext", undefined, "Должность [формат]:");
var dolzhnost = DolzhnostGroup.add("edittext", ["", "" , 300, "80"], DolzhnostLayer.text.sourceText.value, {multiline:true});

var ShivrPanel = PCW.add ("panel", undefined, "Расшифровка");
ShivrPanel.alignChildren = "right";
var ShivrGroup = ShivrPanel.add ("group");
ShivrGroup.add ("statictext", ["",  "", 5, "fill"], "SPACE");

ShivrGroup.add ("statictext", undefined, "Расшифровка [формат]:");
var shivrText = ShivrGroup.add("edittext", ["", "" , 300, "80"], PoyasnLayer.text.sourceText.value, {multiline:true});

var hotLinePanel = PCW.add ("panel", undefined, "Горячая линия");
hotLinePanel.alignChildren = "right";
var hotLineGroup = hotLinePanel.add ("group");
hotLineGroup.add ("statictext", undefined, "Горячая линия [не формат]:");
var hotLineText = hotLineGroup.add("edittext", ["", "" , 300, "20"], HotLineLayer.text.sourceText.value, {multiline:false});
var hotLineGroup2 = hotLinePanel.add ("group");
hotLineGroup2.add ("statictext", undefined, "Номер [не формат]:");
var numberText = hotLineGroup2.add("edittext", ["", "" , 300, "20"], NumberLayer.text.sourceText.value, {multiline:false});

var DataPanel = PCW.add ("panel", undefined, "Дата:");
DataPanel.alignChildren = "right";
var DataGroup = DataPanel.add ("group");
DataGroup.add ("statictext", ["",  "", 44, "fill"], "SPACE");
DataGroup.add ("statictext", undefined, "Дата [не формат]:");
var DataText = DataGroup.add("edittext", ["", "" , 300, "20"], dataLayer.text.sourceText.value, {multiline:false});

var IstochnikPanel = PCW.add ("panel", undefined, "Источник:");
IstochnikPanel.alignChildren = "right";
var IstochnikGroup = IstochnikPanel.add ("group");
IstochnikGroup.add ("statictext", ["",  "", 44, "fill"], "SPACE");
IstochnikGroup.add ("statictext", undefined, "Источник [формат]:");
var IstochnikText = IstochnikGroup.add("edittext", ["", "" , 300, "40"], istochnikLayer.text.sourceText.value, {multiline:true});


PCW.add ("panel", [0,0,450,3]);

var BottonGroup = PCW.add ("group");
//BottonGroup.align = "center";
//var ApplyButton = BottonGroup.add ("button", [-200,0,100,30], "Применить");
var CloseButton = BottonGroup.add ("button", [0,0,400,30], "ЗАКРЫТЬ");

CloseButton.onClick = function () 
{
    PCW.hide();
}



PCW.show();

geo.onChange =  function () 
{
        GeoLayer.text.sourceText.setValue (geo.text);
        GeoNameLayer.text.sourceText.setValue (geo.text);
}





//==============================================================
shivrText.onChange =  function () 
{
        PoyasnLayer.text.sourceText.setValue (shivrText.text);
        var sizeBoundLayer = PoyasnLayer.sourceRectAtTime(10, false).height;
        //alert (sizeBoundLayer);
        //DolzhnostLayer.transform.anchorPoint.setValue([0,sizeBoundLayer/(-2.5)]);
        if (sizeBoundLayer>62)
        {
            PoyasnLayer.transform.anchorPoint.setValue([0,0]);
            rashifrovka4Layer.enabled = true;
            rashifrovka3Layer.enabled = false;
            rashifrovka2Layer.enabled = false;  
            //alert ("ЧОТЫРИ");
        }
        else if (sizeBoundLayer>43)
        {
            PoyasnLayer.transform.anchorPoint.setValue([0,-18.8]);
            rashifrovka4Layer.enabled = false;
            rashifrovka3Layer.enabled = true;
            rashifrovka2Layer.enabled = false;
            //alert ("ТРИ");
        }
            else if (sizeBoundLayer>24)
        {
            PoyasnLayer.transform.anchorPoint.setValue([0,-36]);
            //alert ("ДВЕ");
            rashifrovka4Layer.enabled = false;
            rashifrovka3Layer.enabled = false;
            rashifrovka2Layer.enabled = true;
        }
        else 
        {
            PoyasnLayer.transform.anchorPoint.setValue([0,-46]);
            rashifrovka4Layer.enabled = false;
            rashifrovka3Layer.enabled = false;
            rashifrovka2Layer.enabled = true;
            //alert ("АДНА");
        }
}
//==============================================================

//==============================================================
IstochnikText.onChange =  function () 
{
        istochnikLayer.text.sourceText.setValue (IstochnikText.text);
        var sizeBoundLayer = istochnikLayer.sourceRectAtTime(10, false).height;
        //alert (sizeBoundLayer);
        //DolzhnostLayer.transform.anchorPoint.setValue([0,sizeBoundLayer/(-2.5)]);

        if (sizeBoundLayer>24)
        {
            istochnikLayer.transform.anchorPoint.setValue([285,0]);
            
            //alert ("ДВЕ");
        }
        else 
        {
            istochnikLayer.transform.anchorPoint.setValue([285,-8]);
            
            //alert ("АДНА");
        }
}
//==============================================================

//==============================================================
dolzhnost.onChange =  function () 
{
        DolzhnostLayer.text.sourceText.setValue (dolzhnost.text);
        var sizeBoundLayer = DolzhnostLayer.sourceRectAtTime(10, false).height;
        //alert (sizeBoundLayer);
        //DolzhnostLayer.transform.anchorPoint.setValue([0,sizeBoundLayer/(-2.5)]);
        if (sizeBoundLayer>62)
        {
            DolzhnostLayer.transform.anchorPoint.setValue([0,-1.8]);
            
            //alert ("ЧОТЫРИ");
        }
        else if (sizeBoundLayer>43)
        {
            DolzhnostLayer.transform.anchorPoint.setValue([0,-9.8]);
            
            //alert ("ТРИ");
        }
            else if (sizeBoundLayer>24)
        {
            DolzhnostLayer.transform.anchorPoint.setValue([0,-19]);
            
            //alert ("ДВЕ");
        }
        else 
        {
            DolzhnostLayer.transform.anchorPoint.setValue([0,-27]);
            
            //alert ("АДНА");
        }
}
//==============================================================

hotLineText.onChange =  function () 
{
        HotLineLayer.text.sourceText.setValue (hotLineText.text);
}

numberText.onChange =  function () 
{
        NumberLayer.text.sourceText.setValue (numberText.text);
}

DataText.onChange =  function () 
{
        dataLayer.text.sourceText.setValue (DataText.text);
}

imya.onChange =  function () 
{
        NameLayer.text.sourceText.setValue (imya.text);
        data = imya.text.split("\n");
        NameNameLayer.text.sourceText.setValue (data[0] + " " + data[1]);
}

radiobuttonOne.onClick = function () 
{     
        PODLOGA_TITR_L_NEWLayer.enabled = true;
        PODLOGA_TITR_S_NEWLayer.enabled = false; 
        PODLOGA_NAME_L_NEWLayer.enabled = true;
        PODLOGA_NAME_S_NEWLayer.enabled = false; 
}
radiobuttonTwo.onClick = function () 
{     
        PODLOGA_TITR_S_NEWLayer.enabled = true;
        PODLOGA_TITR_L_NEWLayer.enabled = false; 
        PODLOGA_NAME_S_NEWLayer.enabled = true;
        PODLOGA_NAME_L_NEWLayer.enabled = false; 
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