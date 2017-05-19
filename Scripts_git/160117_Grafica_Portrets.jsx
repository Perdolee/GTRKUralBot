var myProj = app.project;
var OUTComp = searchCompByName("RENDER fullHD");

var chel1Layer = OUTComp.layer("1 человек");
var chel2Layer = OUTComp.layer("2 человека");
var chel3Layer = OUTComp.layer("3 человека");
var chel4Layer = OUTComp.layer("4 человека");

var Reg1Comp = searchCompByName("REGALII 1");
var Reg2Comp = searchCompByName("REGALII 2");
var Reg3Comp = searchCompByName("REGALII 3");
var Reg4Comp = searchCompByName("REGALII 4");

var chel1ImyaLayer = Reg1Comp.layer("Имя");
var chel1FamiliyaLayer = Reg1Comp.layer("Фамилия");
var chel1TitulLayer = Reg1Comp.layer("Титул");

var chel2ImyaLayer = Reg2Comp.layer("Имя");
var chel2FamiliyaLayer = Reg2Comp.layer("Фамилия");
var chel2TitulLayer = Reg2Comp.layer("Титул");

var chel3ImyaLayer = Reg3Comp.layer("Имя");
var chel3FamiliyaLayer = Reg3Comp.layer("Фамилия");
var chel3TitulLayer = Reg3Comp.layer("Титул");

var chel4ImyaLayer = Reg4Comp.layer("Имя");
var chel4FamiliyaLayer = Reg4Comp.layer("Фамилия");
var chel4TitulLayer = Reg4Comp.layer("Титул");


/*--------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------GUI----------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PCW = new Window ("palette", "Управление графикой", undefined, undefined); 
PCW.alignChildren = "left";
//PCW.spacing = 8;
PCW.preferredSize.width = 500;

//var Stroky = PCW.add ("checkbox", [15,15,100,30], "Две строки?");
var RadioPanel = PCW.add ("panel", undefined, "Количество людишек");
var RadioGroup = RadioPanel.add ("group");
var radiobuttonOne = RadioGroup.add("radiobutton", [10,60,100,80], "1");
var radiobuttonTwo = RadioGroup.add("radiobutton", [10,60,100,80], "2");
var radiobuttonThree = RadioGroup.add("radiobutton", [10,60,100,80], "3");
var radiobuttonFour = RadioGroup.add("radiobutton", [10,60,100,80], "4");




var Chel1Panel = PCW.add ("panel", undefined, "Человек 1");

var Imya1Group = Chel1Panel.add ("group");
Imya1Group.add ("statictext", undefined, "Имя[не формат]:");
var Imya1 = Imya1Group.add("edittext", ["", "" , 400, "20"], chel1ImyaLayer.text.sourceText.value, {multiline:false});

var Familiya1Group = Chel1Panel.add ("group");
Familiya1Group.add ("statictext", undefined, "Фамилия[не формат]:");
var Familiya1 = Familiya1Group.add("edittext", ["", "" , 400, "40"], chel1FamiliyaLayer.text.sourceText.value, {multiline:true});
Chel1Panel.add ("statictext", undefined, "ОСТОРОЖНО! Отступ перед фамилией не стирать");
var Titul1Group = Chel1Panel.add ("group");
Titul1Group.add ("statictext", undefined, "Должность[не формат]   :");
var Titul1 = Titul1Group.add("edittext", ["", "" , 400, "60"], chel1TitulLayer.text.sourceText.value, {multiline:true});

var Chel2Panel = PCW.add ("panel", undefined, "Человек 2");

var Imya2Group = Chel2Panel.add ("group");
Imya2Group.add ("statictext", undefined, "Имя[не формат]:");
var Imya2 = Imya2Group.add("edittext", ["", "" , 400, "20"], chel2ImyaLayer.text.sourceText.value, {multiline:false});
var Familiya2Group = Chel2Panel.add ("group");
Familiya2Group.add ("statictext", undefined, "Фамилия[не формат]:");
var Familiya2 = Familiya2Group.add("edittext", ["", "" , 400, "40"], chel2FamiliyaLayer.text.sourceText.value, {multiline:true});
Chel2Panel.add ("statictext", undefined, "ОСТОРОЖНО! Отступ перед фамилией не стирать");
var Titul2Group = Chel2Panel.add ("group");
Titul2Group.add ("statictext", undefined, "Должность[не формат]   :");
var Titul2 = Titul2Group.add("edittext", ["", "" , 400, "60"], chel2TitulLayer.text.sourceText.value, {multiline:true});

var Chel3Panel = PCW.add ("panel", undefined, "Человек 3");

var Imya3Group = Chel3Panel.add ("group");
Imya3Group.add ("statictext", undefined, "Имя[не формат]:");
var Imya3 = Imya3Group.add("edittext", ["", "" , 400, "20"], chel3ImyaLayer.text.sourceText.value, {multiline:false});

var Familiya3Group = Chel3Panel.add ("group");
Familiya3Group.add ("statictext", undefined, "Фамилия[не формат]:");
var Familiya3 = Familiya3Group.add("edittext", ["", "" , 400, "40"], chel3FamiliyaLayer.text.sourceText.value, {multiline:true});
Chel3Panel.add ("statictext", undefined, "ОСТОРОЖНО! Отступ перед фамилией не стирать");

var Titul3Group = Chel3Panel.add ("group");
Titul3Group.add ("statictext", undefined, "Должность[не формат]   :");
var Titul3 = Titul3Group.add("edittext", ["", "" , 400, "60"], chel3TitulLayer.text.sourceText.value, {multiline:true});

var Chel4Panel = PCW.add ("panel", undefined, "Человек 4");

var Imya4Group = Chel4Panel.add ("group");
Imya4Group.add ("statictext", undefined, "Имя[не формат]:");
var Imya4 = Imya4Group.add("edittext", ["", "" , 400, "20"], chel4ImyaLayer.text.sourceText.value, {multiline:false});

var Familiya4Group = Chel4Panel.add ("group");
Familiya4Group.add ("statictext", undefined, "Фамилия[не формат]:");
var Familiya4 = Familiya4Group.add("edittext", ["", "" , 400, "40"], chel4FamiliyaLayer.text.sourceText.value, {multiline:true});
Chel4Panel.add ("statictext", undefined, "ОСТОРОЖНО! Отступ перед фамилией не стирать");
var Titul4Group = Chel4Panel.add ("group");
Titul4Group.add ("statictext", undefined, "Должность[не формат]   :");
var Titul4 = Titul4Group.add("edittext", ["", "" , 400, "60"], chel4TitulLayer.text.sourceText.value, {multiline:true});

if (chel1Layer.enabled==true)
{
        radiobuttonOne.value = true;
        Chel1Panel.visible = true;
        Chel2Panel.visible = false;
        Chel3Panel.visible = false;
        Chel4Panel.visible = false;
}
else if (chel2Layer.enabled==true)
{
        radiobuttonTwo.value = true;
        Chel1Panel.visible = true;
        Chel2Panel.visible = true;
        Chel3Panel.visible = false;
        Chel4Panel.visible = false;
}
else if (chel3Layer.enabled==true)
{
        radiobuttonThree.value = true;
        Chel1Panel.visible = true;
        Chel2Panel.visible = true;
        Chel3Panel.visible = true;
        Chel4Panel.visible = false;
}
else 
{
        radiobuttonFour.value = true;
        Chel1Panel.visible = true;
        Chel2Panel.visible = true;
        Chel3Panel.visible = true;
        Chel4Panel.visible = true;
}



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
        chel1ImyaLayer.text.sourceText.setValue (Imya1.text);
        chel1FamiliyaLayer.text.sourceText.setValue (Familiya1.text);
        chel1TitulLayer.text.sourceText.setValue (Titul1.text);
        
        chel2ImyaLayer.text.sourceText.setValue (Imya2.text);
        chel2FamiliyaLayer.text.sourceText.setValue (Familiya2.text);
        chel2TitulLayer.text.sourceText.setValue (Titul2.text);
        
        chel3ImyaLayer.text.sourceText.setValue (Imya3.text);
        chel3FamiliyaLayer.text.sourceText.setValue (Familiya3.text);
        chel3TitulLayer.text.sourceText.setValue (Titul3.text);
        
        chel4ImyaLayer.text.sourceText.setValue (Imya4.text);
        chel4FamiliyaLayer.text.sourceText.setValue (Familiya4.text);
        chel4TitulLayer.text.sourceText.setValue (Titul4.text);

       alert ("Изменено!");
    
}

radiobuttonOne.onClick = function () 
{     
        chel1Layer.enabled = true;
        chel2Layer.enabled = false; 
        chel3Layer.enabled = false; 
        chel4Layer.enabled = false; 
        Chel1Panel.visible = true;
        Chel2Panel.visible = false;
        Chel3Panel.visible = false;
        Chel4Panel.visible = false;
                
}
radiobuttonTwo.onClick = function () 
{     
        chel1Layer.enabled = false;
        chel2Layer.enabled = true; 
        chel3Layer.enabled = false; 
        chel4Layer.enabled = false; 
        Chel1Panel.visible = true;
        Chel2Panel.visible = true;
        Chel3Panel.visible = false;
        Chel4Panel.visible = false;
}
radiobuttonThree.onClick = function () 
{     
        chel1Layer.enabled = false;
        chel2Layer.enabled = false; 
        chel3Layer.enabled = true; 
        chel4Layer.enabled = false; 
        Chel1Panel.visible = true;
        Chel2Panel.visible = true;
        Chel3Panel.visible = true;
        Chel4Panel.visible = false;
}
radiobuttonFour.onClick = function () 
{     
        chel1Layer.enabled = false;
        chel2Layer.enabled = false; 
        chel3Layer.enabled = false; 
        chel4Layer.enabled = true; 
        Chel1Panel.visible = true;
        Chel2Panel.visible = true;
        Chel3Panel.visible = true;
        Chel4Panel.visible = true;
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