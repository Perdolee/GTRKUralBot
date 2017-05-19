/*--------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Initialization Grafica---------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var myProj = app.project;

var OUTComp = searchCompByName("RENDER OUT citaty");
var ImyaLayer = OUTComp.layer("Имя героя");
var TitulLayer = OUTComp.layer("Титул героя");
var DataTimeLayer = OUTComp.layer("Дата");
var IstochnikLayer = OUTComp.layer("Источник");
var CytataLayer = OUTComp.layer("Цитата");


/*--------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------GUI----------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

var ImyaGroup = PCW.add ("group");
ImyaGroup.add ("statictext", undefined, "Имя Фамилия[не формат]:");
var Imya = ImyaGroup.add("edittext", ["", "" , 400, "20"], ImyaLayer.text.sourceText.value, {multiline:false});

var TitulGroup = PCW.add ("group");
TitulGroup.add ("statictext", undefined, "Должность[не формат]   :");
var Titul = TitulGroup.add("edittext", ["", "" , 400, "60"], TitulLayer.text.sourceText.value, {multiline:true});

var CytataGroup = PCW.add ("group");
CytataGroup.add ("statictext", undefined, "Цитата[формат]             :");
var Cytata = CytataGroup.add("edittext", ["", "" , 400, "140"], CytataLayer.text.sourceText.value, {multiline:true});

var IstochnikGroup = PCW.add ("group");
IstochnikGroup.add ("statictext", undefined, "Источник[не формат]     :");
var Istochnik = IstochnikGroup.add("edittext", ["", "" , 400, "20"], IstochnikLayer.text.sourceText.value, {multiline:false});

var DateTimeGroup = PCW.add ("group");
DateTimeGroup.add ("statictext", undefined, "Дата[не формат]           :");
var DataTime = DateTimeGroup.add("edittext", ["", "" , 400, "20"], DataTimeLayer.text.sourceText.value, {multiline:false});

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
        ImyaLayer.text.sourceText.setValue (Imya.text);
        TitulLayer.text.sourceText.setValue (Titul.text);
        DataTimeLayer.text.sourceText.setValue (DataTime.text);
        IstochnikLayer.text.sourceText.setValue (Istochnik.text);
        CytataLayer.text.sourceText.setValue (Cytata.text);

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