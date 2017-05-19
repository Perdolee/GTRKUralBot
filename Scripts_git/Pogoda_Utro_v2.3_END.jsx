var myProj = app.project;
var ControllLayer = searchCompByName("POGODA_UTRO").layer("CONTROLL");
var ControllThreeLayer = searchCompByName("POGODA_UTRO").layer("CONTROLLTHREE");
var ControllSerov = searchCompByName("POGODA_UTRO").layer("CONTROLLSEROV");
var ControllTagil = searchCompByName("POGODA_UTRO").layer("CONTROLLTAGIL");
var ControllTavda = searchCompByName("POGODA_UTRO").layer("CONTROLLTAVDA");
var ControllKamensk = searchCompByName("POGODA_UTRO").layer("CONTROLLKAMENSK");
var ControllIrbit = searchCompByName("POGODA_UTRO").layer("CONTROLLIRBIT");

var ControllTemperaturaDay = ControllLayer.effect("Temp_Day")("Slider");
var ControllTemperaturaNight = ControllLayer.effect("Temp_Night")("Slider");
var ControllTemperaturaText = searchCompByName("Segodnya").layer("+7...+15°С 2").text.sourceText;
var ControllHumidity = ControllLayer.effect("vlazhnost")("Slider");
var ControllWindSpeedMin = ControllLayer.effect("vetermin")("Slider");
var ControllWindSpeedMax = ControllLayer.effect("vetermax")("Slider");
var ControllPressure = ControllLayer.effect("davlenie")("Slider");
var ControllDayofWeek = ControllLayer.effect("DayWeek")("Slider");
var ControllYasno = searchCompByName("Segodnya").layer("[solnce]");
var ControllDojd = searchCompByName("Segodnya").layer("dozd");
var ControllDojdGroza = searchCompByName("Segodnya").layer("groza");
var ControllSneg = searchCompByName("Segodnya").layer("Sneg");
var ControllMokrSneg = searchCompByName("Segodnya").layer("MokrSneg");
var ControllOblachno = searchCompByName("Segodnya").layer("peremen");
var ControllPasmurno = searchCompByName("Segodnya").layer("[pasmurno]");
var ControllDojdobl = searchCompByName("Segodnya").layer("dojdobl");
var ControllYasnoText = searchCompByName("Segodnya").layer("ЯСНО");
var ControllDojdText = searchCompByName("Segodnya").layer("ДОЖДЬ");
var ControllDojdGrozaText = searchCompByName("Segodnya").layer("ГРОЗА");
var ControllSnegText = searchCompByName("Segodnya").layer("СНЕГ");
var ControllMokrSnegText = searchCompByName("Segodnya").layer("МОКРЫЙ СНЕГ");
var ControllOblachnoText = searchCompByName("Segodnya").layer("ПЕРЕМЕННАЯ ОБЛАЧНОСТЬ");
var ControllPasmurnoText = searchCompByName("Segodnya").layer("ПАСМУРНО");

var ControllDay1Text = searchCompByName("3-DAYS").layer("Четверг 2").text.sourceText;
var ControllDay2Text = searchCompByName("3-DAYS").layer("пятница").text.sourceText;
var ControllDay3Text = searchCompByName("3-DAYS").layer("суббота").text.sourceText;

var ControllTemperaturaDay1 = ControllThreeLayer.effect("Day1_temp_day")("Slider");
var ControllYasnoDay1 = searchCompByName("3-DAYS").layer("solnce_three_days");
var ControllDojdDay1 = searchCompByName("3-DAYS").layer("dozd_three_days");
var ControllDojdGrozaDay1 = searchCompByName("3-DAYS").layer("groza_three_days");
var ControllSnegDay1 = searchCompByName("3-DAYS").layer("sneg_three_days");
var ControllMokrSnegDay1 = searchCompByName("3-DAYS").layer("mokrsneg_three_days");
var ControllOblachnoDay1 = searchCompByName("3-DAYS").layer("Peremen_three_days");
var ControllPasmurnoDay1 = searchCompByName("3-DAYS").layer("pasmurno_three_days");
var ControllDojdObl1 = searchCompByName("3-DAYS").layer("dojdobl_three_days");

var ControllTemperaturaDay2 = ControllThreeLayer.effect("Day2_temp_day")("Slider");
var ControllYasnoDay2 = searchCompByName("3-DAYS").layer("solnce_three_days2");
var ControllDojdDay2 = searchCompByName("3-DAYS").layer("dozd_three_days2");
var ControllDojdGrozaDay2 = searchCompByName("3-DAYS").layer("groza_three_days2");
var ControllMokrSnegDay2 = searchCompByName("3-DAYS").layer("mokrsneg_three_days2");
var ControllSnegDay2 = searchCompByName("3-DAYS").layer("sneg_three_days2");
var ControllOblachnoDay2 = searchCompByName("3-DAYS").layer("Peremen_three_days2");
var ControllPasmurnoDay2 = searchCompByName("3-DAYS").layer("pasmurno_three_days2");
var ControllDojdObl2 = searchCompByName("3-DAYS").layer("dojdobl_three_days2");

var ControllTemperaturaDay3 = ControllThreeLayer.effect("Day3_temp_day")("Slider");
var ControllYasnoDay3 = searchCompByName("3-DAYS").layer("solnce_three_days3");
var ControllDojdDay3 = searchCompByName("3-DAYS").layer("dozd_three_days3");
var ControllDojdGrozaDay3 = searchCompByName("3-DAYS").layer("groza_three_days3");
var ControllSnegDay3 = searchCompByName("3-DAYS").layer("sneg_three_days3");
var ControllMokrSnegDay3 = searchCompByName("3-DAYS").layer("mokrsneg_three_days3");
var ControllOblachnoDay3 = searchCompByName("3-DAYS").layer("Peremen_three_days3");
var ControllPasmurnoDay3 = searchCompByName("3-DAYS").layer("pasmurno_three_days3");
var ControllDojdObl3 = searchCompByName("3-DAYS").layer("dojdobl_three_days3");

var SerovTemper = ControllSerov.effect("serov_temp_day")("Slider");
var SerovYasno = searchCompByName("SEROV").layer("solnce_serov");
var SerovDojd = searchCompByName("SEROV").layer("dozd_serov");
var SerovDojdGroza = searchCompByName("SEROV").layer("groza_serov");
var SerovSneg = searchCompByName("SEROV").layer("sneg_serov");
var SerovMokrSneg = searchCompByName("SEROV").layer("mokrsneg_serov");
var SerovOblachno = searchCompByName("SEROV").layer("peremen_serov");
var SerovPasmurno = searchCompByName("SEROV").layer("pasmurno_serov");
var SerovDojdObl = searchCompByName("SEROV").layer("dojdobl_serov");

var KamenskTemper = ControllKamensk.effect("kamensk_temp_day")("Slider");
var KamenskYasno = searchCompByName("K_URALSKIJ").layer("solnce_kamensk");
var KamenskDojd = searchCompByName("K_URALSKIJ").layer("dozd_kamensk");
var KamenskDojdGroza = searchCompByName("K_URALSKIJ").layer("groza_kamensk");
var KamenskSneg = searchCompByName("K_URALSKIJ").layer("sneg_kamensk");
var KamenskMokrSneg = searchCompByName("K_URALSKIJ").layer("mokrsneg_kamensk");
var KamenskOblachno = searchCompByName("K_URALSKIJ").layer("peremen_kamensk");
var KamenskPasmurno = searchCompByName("K_URALSKIJ").layer("pasmurno_kamensk");
var KamenskDojdObl = searchCompByName("K_URALSKIJ").layer("dojdobl_kamensk");

var TagilTemper = ControllTagil.effect("tagil_temp_day")("Slider");
var TagilYasno = searchCompByName("N_TAGIL").layer("solnce_tagil");
var TagilDojd = searchCompByName("N_TAGIL").layer("dozd_tagil");
var TagilDojdGroza = searchCompByName("N_TAGIL").layer("groza_tagil");
var TagilSneg = searchCompByName("N_TAGIL").layer("sneg_tagil");
var TagilMokrSneg = searchCompByName("N_TAGIL").layer("mokrsneg_tagil");
var TagilOblachno = searchCompByName("N_TAGIL").layer("peremen_tagil");
var TagilPasmurno = searchCompByName("N_TAGIL").layer("pasmurno_tagil");
var TagilDojdObl = searchCompByName("N_TAGIL").layer("dojdobl_tagil");

var TavdaTemper = ControllTavda.effect("tavda_temp_day")("Slider");
var TavdaYasno = searchCompByName("TAVDA").layer("solnce_tavda");
var TavdaDojd = searchCompByName("TAVDA").layer("dozd_tavda");
var TavdaDojdGroza = searchCompByName("TAVDA").layer("groza_tavda");
var TavdaSneg = searchCompByName("TAVDA").layer("sneg_tavda");
var TavdaMokrSneg = searchCompByName("TAVDA").layer("mokrsneg_tavda");
var TavdaOblachno = searchCompByName("TAVDA").layer("peremen_tavda");
var TavdaPasmurno = searchCompByName("TAVDA").layer("pasmurno_tavda");
var TavdaDojdObl = searchCompByName("TAVDA").layer("dojdobl_tavda");

var IrbitTemper = ControllIrbit.effect("irbit_temp_day")("Slider");
var IrbitYasno = searchCompByName("IRBIT").layer("solnce_irbit");
var IrbitDojd = searchCompByName("IRBIT").layer("dozd_irbit");
var IrbitDojdGroza = searchCompByName("IRBIT").layer("groza_irbit");
var IrbitSneg = searchCompByName("IRBIT").layer("sneg_irbit");
var IrbitMokrSneg = searchCompByName("IRBIT").layer("mokrsneg_irbit");
var IrbitOblachno = searchCompByName("IRBIT").layer("peremen_irbit");
var IrbitPasmurno = searchCompByName("IRBIT").layer("pasmurno_irbit");
var IrbitDojdObl = searchCompByName("IRBIT").layer("dojdobl_irbit");

/*--------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Creation_Date---------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var dateTime = new Date();
if ((dateTime.getMonth()+1)<10)
{
   dateMonth = "0" + (dateTime.getMonth()+1);
}    
else {dateMonth = (dateTime.getMonth()+1);}
if ((dateTime.getDate())<10)
{
   dateDayToSegodnya = "0" + (dateTime.getDate()+1);
   dateDayToZavtra = "0" + (dateTime.getDate());
}  
else
{
   dateDayToSegodnya = dateTime.getDate()+1;
   dateDayToZavtra = dateTime.getDate();   
}
/*--------------------------------------------------------------------------------------------------------------------------*/

var CurrentPath = ("/e/000_POGODA/000_GOTOVOE/watch");
var Temp = (Folder (CurrentPath));


/*--------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Creation_Palette------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PCW = new Window ("palette", "Управление погодой", undefined, {closeButton: false}); 
PCW.alignChildren = "right";
PCW.spacing = 8;

/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PLAN1 = PCW.add ("panel", undefined, "Погода в Екатеринбурге");
PLAN1.preferredSize.width = 400;
PLAN1.alignChildren = "left";
/*--------------------------------------------------------------------------------------------------------------------------*/
var PLAN1Tempgroup = PLAN1.add ("group");
PLAN1Tempgroup.add ("statictext", undefined, "Температура день:");
var TemperaturaDay = PLAN1Tempgroup.add ("edittext", undefined, ControllTemperaturaDay.value);TemperaturaDay.active = true;TemperaturaDay.characters = 3;
PLAN1Tempgroup.add ("statictext", undefined, "°C");

PLAN1Tempgroup.add ("statictext", undefined, "|   ночь:");
var TemperaturaNight = PLAN1Tempgroup.add ("edittext", undefined, ControllTemperaturaNight.value);TemperaturaNight.active = true;TemperaturaNight.characters = 3;
PLAN1Tempgroup.add ("statictext", undefined, "°C");
/*--------------------------------------------------------------------------------------------------------------------------*/
var CloudedSkyGroup = PLAN1.add ("group");
CloudedSkyGroup.add ("statictext", undefined, "Облачность:");
var CloudedSkyDrop = CloudedSkyGroup.add ("dropdownlist", undefined, ["Ясно", "Дождь", "Гроза", "Снег", "Переменная", "Пасмурно", "Облачно с дождем", "Мокрый снег", "ВАЩЕ ЖЕСТЬ ГРОЗА ДОЖДЬ СОЛНЦЕ"]);
GrabCloudedSkyStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var PressureGroup = PLAN1.add ("group");
PressureGroup.add ("statictext", undefined, "Давление:");
var Pressure = PressureGroup.add ("edittext", undefined, ControllPressure.value);Pressure.active = true;Pressure.characters = 3;
PressureGroup.add ("statictext", undefined, "мм. рт. ст.");
PressureGroup.add ("statictext", undefined, "|    Влажность:");
var Humidity = PressureGroup.add ("edittext", undefined, ControllHumidity.value);Humidity.active = true;Humidity.characters = 3;
PressureGroup.add ("statictext", undefined, "%");
/*--------------------------------------------------------------------------------------------------------------------------*/
var WindGroup = PLAN1.add ("group");
WindGroup.add ("statictext", undefined, "Скорость Ветра min:");
var WindSpeedmin = WindGroup.add ("edittext", undefined, ControllWindSpeedMin.value);WindSpeedmin.active = true;WindSpeedmin.characters = 3;
WindGroup.add ("statictext", undefined, "м/с");
WindGroup.add ("statictext", undefined, "|  max:");
var WindSpeedmax = WindGroup.add ("edittext", undefined, ControllWindSpeedMax.value);WindSpeedmax.active = true;WindSpeedmax.characters = 3;
WindGroup.add ("statictext", undefined, "м/с");
/*--------------------------------------------------------------------------------------------------------------------------*/
//var HumidityGroup = PLAN1.add ("group")

/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodaNa3Dnya = PCW.add ("panel", undefined, "Погода на 3 дня");
PogodaNa3Dnya.preferredSize.width = 400;
PogodaNa3Dnya.alignChildren = "top";
var DayWeekGroup = PogodaNa3Dnya.add ("group");
var DayWeek = DayWeekGroup.add ("dropdownlist", undefined, ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]);
var Day2Static = DayWeekGroup.add ("statictext",  ["", "" , 110, "15"], "");
var Day3Static = DayWeekGroup.add ("statictext", ["", "" , 110, "15"], "");
GrabDayWeekStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var DayWeekTemperaturaGroup = PogodaNa3Dnya.add ("group");
var TemperaturaDay1 = DayWeekTemperaturaGroup.add ("edittext", undefined, ControllTemperaturaDay1.value);TemperaturaDay1.active = true;TemperaturaDay1.characters = 3;
DayWeekTemperaturaGroup.add ("statictext", undefined, "°C");
DayWeekTemperaturaGroup.add ("statictext", ["", "" , 40, "15"], "");
var TemperaturaDay2 = DayWeekTemperaturaGroup.add ("edittext", undefined, ControllTemperaturaDay2.value);TemperaturaDay2.active = true;TemperaturaDay2.characters = 3;
DayWeekTemperaturaGroup.add ("statictext", undefined, "°C");
DayWeekTemperaturaGroup.add ("statictext", ["", "" , 30, "15"], "");
var TemperaturaDay3 = DayWeekTemperaturaGroup.add ("edittext", undefined, ControllTemperaturaDay3.value);TemperaturaDay3.active = true;TemperaturaDay3.characters = 3;
DayWeekTemperaturaGroup.add ("statictext", undefined, "°C");
/*--------------------------------------------------------------------------------------------------------------------------*/
var CloudedSkyDropDay3Group = PogodaNa3Dnya.add ("group");
var CloudedSkyDropDay1 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
var CloudedSkyDropDay2 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
var CloudedSkyDropDay3 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
GrabCloudedSkyDropDaysStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodavObl = PCW.add ("panel", undefined, "Погода в городах области");
PogodavObl.preferredSize.width = 400;
PogodavObl.alignChildren = "left";
/*--------------------------------------------------------------------------------------------------------------------------*/
var SerovGroup = PogodavObl.add ("group");
SerovGroup.add ("statictext", ["", "" , 110, "15"], "Серов:");
var TemperaturaSerov = SerovGroup.add ("edittext", ["", "" , 40, "22"], SerovTemper.value);TemperaturaSerov.active = true;TemperaturaSerov.characters = 3;
SerovGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//SerovGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropSerov = SerovGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
GrabCloudedSkyDropSerovStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var TagilGroup = PogodavObl.add ("group");
TagilGroup.add ("statictext", ["", "" , 110, "15"], "Тагил:");
var TemperaturaTagil = TagilGroup.add ("edittext", ["", "" , 40, "22"], TagilTemper.value);TemperaturaTagil.active = true;TemperaturaTagil.characters = 3;
TagilGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//TagilGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropTagil = TagilGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
GrabCloudedSkyDropTagilStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var TavdaGroup = PogodavObl.add ("group");
TavdaGroup.add ("statictext", ["", "" , 110, "15"], "Тавда:");
var TemperaturaTavda = TavdaGroup.add ("edittext", ["", "" , 40, "22"], TavdaTemper.value);TemperaturaTavda.active = true;TemperaturaTavda.characters = 3;
TavdaGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//TavdaGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropTavda = TavdaGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
GrabCloudedSkyDropTavdaStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var KamenskGroup = PogodavObl.add ("group");
KamenskGroup.add ("statictext", ["", "" , 110, "15"], "Каменск-Уральский:");
var TemperaturaKamensk = KamenskGroup.add ("edittext", ["", "" , 40, "22"], KamenskTemper.value);TemperaturaKamensk.active = true;TemperaturaKamensk.characters = 3;
KamenskGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//KamenskGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropKamensk = KamenskGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
GrabCloudedSkyDropKamenskStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var IrbitGroup = PogodavObl.add ("group");
IrbitGroup.add ("statictext", ["", "" , 110, "15"], "Ирбит:");
var TemperaturaIrbit = IrbitGroup.add ("edittext", ["", "" , 40, "22"], IrbitTemper.value);TemperaturaIrbit.active = true;TemperaturaIrbit.characters = 3;
IrbitGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//IrbitGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropIrbit = IrbitGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Мокрый снег", "Гроза и Солнце"]);
GrabCloudedSkyDropIrbitStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
PCW.add ("panel", [0,0,400,3]);
var ButtonsGroup2 = PCW.add ("group");

ButtonsGroup2.add ("statictext", undefined, "Путь:");
var PathButton = ButtonsGroup2.add ("button", [-235,15,0,45], CurrentPath);
ButtonsGroup2.add ("statictext", ["", "" , 70, "30"], "");


var ButtonsGroup3 = PCW.add ("group");
var RenderButton = ButtonsGroup3.add ("button", [-275,15,0,45], "Отправить на рендер");
ButtonsGroup3.add ("statictext", ["", "" , 70, "30"], "");


PCW.add ("panel", [0,0,400,3]);
var BottonGroup = PCW.add ("group");
var ApplyButton = BottonGroup.add ("button", [-200,0,100,30], "Применить");
var CloseButton = BottonGroup.add ("button", undefined, "Закрыть");
/*--------------------------------------------------------------------------------------------------------------------------*/
PCW.show();
/*--------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Functions-------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
PathButton.onClick = function () 
{
  CurrentPath = Temp.selectDlg().fullName;
  PathButton.text = CurrentPath;
}

RenderButton.onClick = function () 
{
    myRenderQueue = myProj.renderQueue;
    myQueueItem = myRenderQueue.items.add(searchCompByName("POGODA_UTRO"));              
    myOM = myQueueItem.outputModule(1);
    myOM.applyTemplate("QT_POGODA_UTRO");  
	
    Folder(CurrentPath).create();
    var SRF = Folder(CurrentPath);
    //SRF.execute();
    var Perem = SRF.name;
    var Perem2 = parseInt(Perem.slice(0,2));
    var newPerem = Perem.replace(new RegExp(Perem2,'g'),Perem2 + 1);
	
    SRF.changePath(SRF.fullName+"/" + dateDayToSegodnya + dateMonth+ (dateTime.getFullYear()-2000) + "_POGODA_UTRO");                
    //  SRF.execute();
    myOM.file = SRF;
    PCW.hide();
}
ApplyButton.onClick = function () 
{
    //Текстовые поля
    ControllTemperaturaNight.setValue (TemperaturaNight.text);
    ControllTemperaturaDay.setValue (TemperaturaDay.text);
    if (ControllTemperaturaDay.value>0){TemperaturaDay.text = "+" +ControllTemperaturaDay.value;}
    if (ControllTemperaturaNight.value>0){TemperaturaNight.text = "+" +ControllTemperaturaNight.value;}
    var Tsmdfo = (TemperaturaNight.text + "..." + TemperaturaDay.text + "°С");
    ControllTemperaturaText.setValue (Tsmdfo);
    //(TemperaturaNight + "..." + TemperaturaDay + "°С");
    //alert (TemperaturaNight.text);
    ControllPressure.setValue (Pressure.text);
    ControllWindSpeedMin.setValue (WindSpeedmin.text);
    ControllWindSpeedMax.setValue (WindSpeedmax.text);
    ControllHumidity.setValue (Humidity.text);
    ControllTemperaturaDay1.setValue (TemperaturaDay1.text);
    ControllTemperaturaDay2.setValue (TemperaturaDay2.text);
    ControllTemperaturaDay3.setValue (TemperaturaDay3.text);
    KamenskTemper.setValue (TemperaturaKamensk.text);
    TagilTemper.setValue (TemperaturaTagil.text);
    SerovTemper.setValue (TemperaturaSerov.text);
    IrbitTemper.setValue (TemperaturaIrbit.text);
    TavdaTemper.setValue (TemperaturaTavda.text);
    //Облачность в Екатеринбурге
    ControllYasno.enabled = false;
    ControllDojd.enabled = false;
    ControllDojdGroza.enabled = false;
    ControllSneg.enabled = false;
    ControllOblachno.enabled = false;
    ControllPasmurno.enabled = false;
    ControllDojdobl.enabled = false;
    ControllYasnoText.enabled = false;
    ControllDojdText.enabled = false;
    ControllDojdGrozaText.enabled = false;
    ControllSnegText.enabled = false;
    ControllOblachnoText.enabled = false;
    ControllPasmurnoText.enabled = false;
    ControllMokrSnegText.enabled = false;
    ControllMokrSneg.enabled = false;
    switch (CloudedSkyDrop.selection.index)
    {
        case 0:
            ControllYasno.enabled = true;
            ControllYasnoText.enabled = true;
        break;
        case 1:
            ControllDojd.enabled = true;
            ControllDojdText.enabled = true;
        break;
        case 2:
            ControllDojdGroza.enabled = true;
            ControllDojdGrozaText.enabled = true;
        break;
        case 3:
            ControllSneg.enabled = true;
            ControllSnegText.enabled = true;
        break;
        case 4:
            ControllOblachno.enabled = true;
            ControllOblachnoText.enabled = true;
        break;
        case 5:
            ControllPasmurno.enabled = true;
            ControllPasmurnoText.enabled = true;
        break;
        case 6:
            ControllDojdobl.enabled = true;
            ControllDojdText.enabled = true;
        break;
        case 7:
            ControllMokrSnegText.enabled = true;
            ControllMokrSneg.enabled = true;
        break;
	    case 8:
            ControllDojdGroza.enabled = true;
		   ControllOblachno.enabled = true;	
            ControllDojdGrozaText.enabled = true;
        break;
        default:
            alert ("Облачность для Екатеринбурга не задана");
       break;
    }

          switch (DayWeek.selection.index)
        {
            case 0: 
                    ControllDayofWeek.setValue (6);
            break;
            case 1: 
                    ControllDayofWeek.setValue (7);
            break;
            case 2: 
                    ControllDayofWeek.setValue (8);
            break;
            case 3: 
                    ControllDayofWeek.setValue (9);
            break;
            case 4: 
                    ControllDayofWeek.setValue (10);
            break;
            case 5: 
                    ControllDayofWeek.setValue (11);
            break;
            case 6: 
                    ControllDayofWeek.setValue (12);
            break;           
        }
    switch (DayWeek.selection.index)
        {
            case 0: 
                ControllDay1Text.setValue ("Понедельник");
                ControllDay2Text.setValue ("Вторник");
                ControllDay3Text.setValue ("Среда");
            break;
            case 1: 
                ControllDay1Text.setValue ("Вторник");
                ControllDay2Text.setValue ("Среда");
                ControllDay3Text.setValue ("Четверг");
            break;
            case 2: 
                ControllDay1Text.setValue ("Среда");
                ControllDay2Text.setValue ("Четверг");
                ControllDay3Text.setValue ("Пятница");
            break;
            case 3: 
                ControllDay1Text.setValue ("Четверг");
                ControllDay2Text.setValue ("Пятница");
                ControllDay3Text.setValue ("Суббота");
            break;
            case 4: 
                ControllDay1Text.setValue ("Пятница");
                ControllDay2Text.setValue ("Суббота");
                ControllDay3Text.setValue ("Воскресенье");
            break;
            case 5: 
                ControllDay1Text.setValue ("Суббота");
                ControllDay2Text.setValue ("Воскресенье");
                ControllDay3Text.setValue ("Понедельник");
            break;
            case 6: 
                ControllDay1Text.setValue ("Воскресенье");
                ControllDay2Text.setValue ("Понедельник");
                ControllDay3Text.setValue ("Вторник");
            break;    
        }
    
        ControllYasnoDay1.enabled = false;
        ControllDojdDay1.enabled = false;
        ControllDojdGrozaDay1.enabled = false;
        ControllSnegDay1.enabled = false;
        ControllMokrSnegDay1.enabled = false;
        ControllOblachnoDay1.enabled = false;
        ControllPasmurnoDay1.enabled = false;
        ControllDojdObl1.enabled = false;
        switch (CloudedSkyDropDay1.selection.index) 
        {
            case 0: 
                    ControllYasnoDay1.enabled = true;
            break;
            case 1: 
                    ControllDojdDay1.enabled = true;
            break;
            case 2: 
                    ControllDojdGrozaDay1.enabled = true;
            break;
            case 3: 
                    ControllSnegDay1.enabled = true;
            break;
            case 4: 
                    ControllOblachnoDay1.enabled = true;
            break;
            case 5: 
                    ControllPasmurnoDay1.enabled = true;
            break;
            case 6: 
                    ControllDojdObl1.enabled = true;
            break;
            case 7: 
                    ControllMokrSnegDay1.enabled = true;
            break;
		   case 8: 
                    ControllDojdGrozaDay1.enabled = true;
				  ControllOblachnoDay1.enabled = true;	
            break;
            default:
            alert ("Облачность для 'День 1' не задано");
            break;
        }
    
        ControllYasnoDay2.enabled = false;
        ControllDojdDay2.enabled = false;
        ControllDojdGrozaDay2.enabled = false;
        ControllSnegDay2.enabled = false;
        ControllOblachnoDay2.enabled = false;
        ControllPasmurnoDay2.enabled = false;
        ControllDojdObl2.enabled = false;
        ControllMokrSnegDay2.enabled =false;
        switch (CloudedSkyDropDay2.selection.index) 
        {
            case 0: 
                    ControllYasnoDay2.enabled = true;
            break;
            case 1: 
                    ControllDojdDay2.enabled = true;
            break;
            case 2: 
                    ControllDojdGrozaDay2.enabled = true;
            break;
            case 3: 
                    ControllSnegDay2.enabled = true;
            break;
            case 4: 
                    ControllOblachnoDay2.enabled = true;
            break;
            case 5: 
                    ControllPasmurnoDay2.enabled = true;
            break;
            case 6: 
                    ControllDojdObl2.enabled = true;
            break;
            case 7: 
                    ControllMokrSnegDay2.enabled = true;
            break;
		   case 8: 
                    ControllDojdGrozaDay2.enabled = true;
				  ControllOblachnoDay2.enabled = true;	
            break;
            default:
            alert ("Облачность для 'День 2' не задано");
            break;
        }
    
        ControllYasnoDay3.enabled = false;
        ControllDojdDay3.enabled = false;
        ControllDojdGrozaDay3.enabled = false;
        ControllSnegDay3.enabled = false;
        ControllOblachnoDay3.enabled = false;
        ControllPasmurnoDay3.enabled = false;
        ControllDojdObl3.enabled = false;
        ControllMokrSnegDay3.enabled = false;
        switch (CloudedSkyDropDay3.selection.index) 
        {
            case 0: 
                    ControllYasnoDay3.enabled = true;
            break;
            case 1: 
                    ControllDojdDay3.enabled = true;
            break;
            case 2: 
                    ControllDojdGrozaDay3.enabled = true;
            break;
            case 3: 
                    ControllSnegDay3.enabled = true;
            break;
            case 4: 
                    ControllOblachnoDay3.enabled = true;
            break;
            case 5: 
                    ControllPasmurnoDay3.enabled = true;
            break;
            case 6: 
                    ControllDojdObl3.enabled = true;
            break;
            case 7: 
                    ControllMokrSnegDay3.enabled = true;
            break;
		   case 8: 
                    ControllDojdGrozaDay3.enabled = true;
				  ControllOblachnoDay3.enabled = true;	
            break;
            default:
            alert ("Облачность для 'День 3' не задано");
            break;
        }
    
        SerovYasno.enabled = false;
        SerovDojd.enabled = false;
        SerovDojdGroza.enabled = false;
        SerovSneg.enabled = false;
        SerovMokrSneg.enabled = false;
        SerovOblachno.enabled = false;
        SerovPasmurno.enabled = false;
        SerovDojdObl.enabled = false;
        switch (CloudedSkyDropSerov.selection.index) 
        {
            case 0: 
                    SerovYasno.enabled = true;
            break;
            case 1: 
                    SerovDojd.enabled = true;
            break;
            case 2: 
                    SerovDojdGroza.enabled = true;
            break;
            case 3: 
                    SerovSneg.enabled = true;
            break;
            case 4: 
                    SerovOblachno.enabled = true;
            break;
            case 5: 
                    SerovPasmurno.enabled = true;
            break;
            case 6: 
                    SerovDojdObl.enabled = true;
            break;
            case 7: 
                    SerovMokrSneg.enabled = true;
            break;
            case 8: 
                    SerovDojdGroza.enabled = true;
                    SerovOblachno.enabled = true;
            break;
            default:
            alert ("Облачность для 'Серов' не задана");
            break;
        }
    
        IrbitYasno.enabled = false;
        IrbitDojd.enabled = false;
        IrbitDojdGroza.enabled = false;
        IrbitSneg.enabled = false;
        IrbitMokrSneg.enabled = false;
        IrbitOblachno.enabled = false;
        IrbitPasmurno.enabled = false;
        IrbitDojdObl.enabled = false;
        switch (CloudedSkyDropIrbit.selection.index) 
        {
            case 0: 
                    IrbitYasno.enabled = true;
            break;
            case 1: 
                    IrbitDojd.enabled = true;
            break;
            case 2: 
                    IrbitDojdGroza.enabled = true;
            break;
            case 3: 
                    IrbitSneg.enabled = true;
            break;
            case 4: 
                    IrbitOblachno.enabled = true;
            break;
            case 5: 
                    IrbitPasmurno.enabled = true;
            break;
            case 6: 
                    IrbitDojdObl.enabled = true;
            break;
            case 7: 
                    IrbitMokrSneg.enabled = true;
            break;
		   case 8: 
                    IrbitDojdGroza.enabled = true;
                    IrbitOblachno.enabled = true;
            break;
            default:
            alert ("Облачность для 'Ирбит' не задана");
            break;
        }    
    
        TagilYasno.enabled = false;
        TagilDojd.enabled = false;
        TagilDojdGroza.enabled = false;
        TagilSneg.enabled = false;
        TagilOblachno.enabled = false;
        TagilPasmurno.enabled = false;
        TagilDojdObl.enabled = false;
        TagilMokrSneg.enabled = false;
        switch (CloudedSkyDropTagil.selection.index) 
        {
            case 0: 
                    TagilYasno.enabled = true;
            break;
            case 1: 
                    TagilDojd.enabled = true;
            break;
            case 2: 
                    TagilDojdGroza.enabled = true;
            break;
            case 3: 
                    TagilSneg.enabled = true;
            break;
            case 4: 
                    TagilOblachno.enabled = true;
            break;
            case 5: 
                    TagilPasmurno.enabled = true;
            break;
            case 6: 
                    TagilDojdObl.enabled = true;
            break;
            case 7: 
                    TagilMokrSneg.enabled = true;
            break;
            case 8: 
                    TagilDojdGroza.enabled = true;
                    TagilOblachno.enabled = true;
            break;
            default:
            alert ("Облачность для 'Тагил' не задана");
            break;
        }    
    
    
        TavdaYasno.enabled = false;
        TavdaDojd.enabled = false;
        TavdaDojdGroza.enabled = false;
        TavdaSneg.enabled = false;
        TavdaOblachno.enabled = false;
        TavdaPasmurno.enabled = false;
        TavdaDojdObl.enabled = false;
        TavdaMokrSneg.enabled = false;
        switch (CloudedSkyDropTavda.selection.index) 
        {
            case 0: 
                    TavdaYasno.enabled = true;
            break;
            case 1: 
                    TavdaDojd.enabled = true;
            break;
            case 2: 
                    TavdaDojdGroza.enabled = true;
            break;
            case 3: 
                    TavdaSneg.enabled = true;
            break;
            case 4: 
                    TavdaOblachno.enabled = true;
            break;
            case 5: 
                    TavdaPasmurno.enabled = true;
            break;
            case 6: 
                    TavdaDojdObl.enabled = true;
            break;
            case 7: 
                    TavdaMokrSneg.enabled = true;
            break;
		   case 8: 
                    TavdaDojdGroza.enabled = true;
                    TavdaOblachno.enabled = true;
            break;
            default:
            alert ("Облачность для 'Тавда' не задана");
            break;
        }    
    
        KamenskYasno.enabled = false;
        KamenskDojd.enabled = false;
        KamenskDojdGroza.enabled = false;
        KamenskSneg.enabled = false;
        KamenskOblachno.enabled = false;
        KamenskPasmurno.enabled = false;
        KamenskDojdObl.enabled = false;
        KamenskMokrSneg.enabled = false;
        switch (CloudedSkyDropKamensk.selection.index) 
        {
            case 0: 
                    KamenskYasno.enabled = true;
            break;
            case 1: 
                    KamenskDojd.enabled = true;
            break;
            case 2: 
                    KamenskDojdGroza.enabled = true;
            break;
            case 3: 
                    KamenskSneg.enabled = true;
            break;
            case 4: 
                    KamenskOblachno.enabled = true;
            break;
            case 5: 
                    KamenskPasmurno.enabled = true;
            break;
            case 6: 
                    KamenskDojdObl.enabled = true;
            break;
            case 7: 
                    KamenskMokrSneg.enabled = true;
            break;
            case 8: 
                    KamenskDojdGroza.enabled = true;
                    KamenskOblachno.enabled = true;
            break;
            default:
            alert ("Облачность для 'Каменск-Уральский' не задана");
            break;
        }
    alert("Изменения внесены!");
}
/*--------------------------------------------------------------------------------------------------------------------------*/

CloseButton.onClick = function () 
{
    PCW.hide();
}

/*--------------------------------------------------------------------------------------------------------------------------*/
DayWeek.onChange = function ()
{
    switch (DayWeek.selection.index)
        {
            case 0: 
                Day2Static.text = "           Вторник";
                Day3Static.text = "       Среда";
            break;
            case 1: 
                Day2Static.text = "           Среда";
                Day3Static.text = "       Четверг";
            break;
            case 2: 
                Day2Static.text = "           Четверг";
                Day3Static.text = "       Пятница";
            break;
            case 3: 
                Day2Static.text = "           Пятница";
                Day3Static.text = "       Суббота";
            break;
            case 4: 
                Day2Static.text = "           Суббота";
                Day3Static.text = "       Воскресенье";
            break;
            case 5: 
                Day2Static.text = "           Воскресенье";
                Day3Static.text = "       Понедельник";
            break;
            case 6: 
                Day2Static.text = "           Понедельник";
                Day3Static.text = "       Вторник";
            break;    
  /*          case default:
                Day2Static.text = "           Вторник";
                Day3Static.text = "       Среда";
            break;*/
        }
}

/*--------------------------------------------------------------------------------------------------------------------------*/

function GrabCloudedSkyStatus ()
{
if (ControllDojdobl.enabled==true)
{
    CloudedSkyDrop.selection = 6;
}
 if (ControllPasmurno.enabled==true)
{
    CloudedSkyDrop.selection = 5;
}
if (ControllOblachno.enabled==true)
{
    CloudedSkyDrop.selection = 4;
}
if (ControllSneg.enabled==true)
{
    CloudedSkyDrop.selection = 3;
}
if (ControllDojdGroza.enabled==true)
{
    CloudedSkyDrop.selection = 2;
}
if (ControllDojd.enabled==true)
{
    CloudedSkyDrop.selection = 1;
}

if (ControllYasno.enabled==true)
{
    CloudedSkyDrop.selection = 0;
}
if (ControllMokrSneg.enabled==true)
{
    CloudedSkyDrop.selection = 7;
}
if (ControllDojdGroza.enabled==true&&ControllOblachno.enabled==true)
{
    CloudedSkyDrop.selection = 8;
}

}   

/*--------------------------------------------------------------------------------------------------------------------------*/

function GrabDayWeekStatus ()
{
    while (ControllDayofWeek.value < "6")
    {
            ControllDayofWeek.setValue (ControllDayofWeek.value + 7);       
    }
    while (ControllDayofWeek.value > "12")
    {
            ControllDayofWeek.setValue (ControllDayofWeek.value - 7);       
    }
    switch (ControllDayofWeek.value)
        {
            case 6: 
                DayWeek.selection = 0;
                Day2Static.text = "           Вторник";
                Day3Static.text = "       Среда";
            break;
            case 7: 
                DayWeek.selection = 1;
                Day2Static.text = "           Среда";
                Day3Static.text = "       Четверг";
            break;
            case 8: 
                DayWeek.selection = 2;
                Day2Static.text = "           Четверг";
                Day3Static.text = "       Пятница";
            break;
            case 9: 
                DayWeek.selection = 3;
                Day2Static.text = "           Пятница";
                Day3Static.text = "       Суббота";
            break;
            case 10: 
                DayWeek.selection = 4;
                Day2Static.text = "           Суббота";
                Day3Static.text = "       Воскресенье";
            break;
            case 11: 
                DayWeek.selection = 5;
                Day2Static.text = "           Воскресенье";
                Day3Static.text = "       Понедельник";
            break;
            case 12: 
                DayWeek.selection = 6;
                Day2Static.text = "           Понедельник";
                Day3Static.text = "       Вторник";
            break;           
        }
}    

/*--------------------------------------------------------------------------------------------------------------------------*/

function GrabCloudedSkyDropDaysStatus ()
{
if (ControllDojdGrozaDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 2;
}
if (ControllSnegDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 3;
}
if (ControllMokrSnegDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 7;
}
if (ControllDojdDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 1;
}
 if (ControllPasmurnoDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 5;
}
if (ControllOblachnoDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 4;
}
if (ControllYasnoDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 0;
}
 if (ControllDojdObl1.enabled==true)
{
    CloudedSkyDropDay1.selection = 6;
}

if (ControllDojdGrozaDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 2;
}
if (ControllSnegDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 3;
}
if (ControllMokrSnegDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 7;
}
if (ControllDojdDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 1;
}
 if (ControllPasmurnoDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 5;
}
if (ControllOblachnoDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 4;
}
if (ControllYasnoDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 0;
}
 if (ControllDojdObl2.enabled==true)
{
    CloudedSkyDropDay2.selection = 6;
}


if (ControllDojdGrozaDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 2;
}
if (ControllSnegDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 3;
}
if (ControllMokrSnegDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 7;
}
if (ControllDojdDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 1;
}
 if (ControllPasmurnoDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 5;
}
if (ControllOblachnoDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 4;
}
if (ControllYasnoDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 0;
}
 if (ControllDojdObl3.enabled==true)
{
    CloudedSkyDropDay3.selection = 6;
}

if (ControllDojdGrozaDay1.enabled==true&&ControllOblachnoDay1.enabled==true)
{
    CloudedSkyDropDay1.selection = 8;
}
if (ControllDojdGrozaDay2.enabled==true&&ControllOblachnoDay2.enabled==true)
{
    CloudedSkyDropDay2.selection = 8;
}
if (ControllDojdGrozaDay3.enabled==true&&ControllOblachnoDay3.enabled==true)
{
    CloudedSkyDropDay3.selection = 8;
}

}   

/*--------------------------------------------------------------------------------------------------------------------------*/    

function GrabCloudedSkyDropSerovStatus ()
{
if (SerovDojdGroza.enabled==true)
{
    CloudedSkyDropSerov.selection = 2;
}
if (SerovSneg.enabled==true)
{
    CloudedSkyDropSerov.selection = 3;
}
if (SerovMokrSneg.enabled==true)
{
    CloudedSkyDropSerov.selection = 7;
}
if (SerovDojd.enabled==true)
{
    CloudedSkyDropSerov.selection = 1;
}
 if (SerovPasmurno.enabled==true)
{
    CloudedSkyDropSerov.selection = 5;
}
if (SerovOblachno.enabled==true)
{
    CloudedSkyDropSerov.selection = 4;
}
if (SerovYasno.enabled==true)
{
    CloudedSkyDropSerov.selection = 0;
}
 if (SerovDojdObl.enabled==true)
{
    CloudedSkyDropSerov.selection = 6;
}
if (SerovDojdGroza.enabled==true&&SerovOblachno.enabled==true)
{
    CloudedSkyDropSerov.selection = 8;
}
}   

/*--------------------------------------------------------------------------------------------------------------------------*/

function GrabCloudedSkyDropIrbitStatus ()
{
if (IrbitDojdGroza.enabled==true)
{
    CloudedSkyDropIrbit.selection = 2;
}
if (IrbitSneg.enabled==true)
{
    CloudedSkyDropIrbit.selection = 3;
}
if (IrbitMokrSneg.enabled==true)
{
    CloudedSkyDropIrbit.selection = 7;
}
if (IrbitDojd.enabled==true)
{
    CloudedSkyDropIrbit.selection = 1;
}
 if (IrbitPasmurno.enabled==true)
{
    CloudedSkyDropIrbit.selection = 5;
}
if (IrbitOblachno.enabled==true)
{
    CloudedSkyDropIrbit.selection = 4;
}
if (IrbitYasno.enabled==true)
{
    CloudedSkyDropIrbit.selection = 0;
}
 if (IrbitDojdObl.enabled==true)
{
    CloudedSkyDropIrbit.selection = 6;
}
if (IrbitDojdGroza.enabled==true&&IrbitOblachno.enabled==true)
{
    CloudedSkyDropIrbit.selection = 8;
}
}   

/*--------------------------------------------------------------------------------------------------------------------------*/

function GrabCloudedSkyDropTagilStatus ()
{
if (TagilDojdGroza.enabled==true)
{
    CloudedSkyDropTagil.selection = 2;
}
if (TagilSneg.enabled==true)
{
    CloudedSkyDropTagil.selection = 3;
}
if (TagilMokrSneg.enabled==true)
{
    CloudedSkyDropTagil.selection = 7;
}
if (TagilDojd.enabled==true)
{
    CloudedSkyDropTagil.selection = 1;
}
 if (TagilPasmurno.enabled==true)
{
    CloudedSkyDropTagil.selection = 5;
}
if (TagilOblachno.enabled==true)
{
    CloudedSkyDropTagil.selection = 4;
}
if (TagilYasno.enabled==true)
{
    CloudedSkyDropTagil.selection = 0;
}
 if (TagilDojdObl.enabled==true)
{
    CloudedSkyDropTagil.selection = 6;
}
if (TagilDojdGroza.enabled==true&&TagilOblachno.enabled==true)
{
    CloudedSkyDropTagil.selection = 8;
}
}   

/*--------------------------------------------------------------------------------------------------------------------------*/

function GrabCloudedSkyDropTavdaStatus ()
{
if (TavdaDojdGroza.enabled==true)
{
    CloudedSkyDropTavda.selection = 2;
}
if (TavdaSneg.enabled==true)
{
    CloudedSkyDropTavda.selection = 3;
}
if (TavdaMokrSneg.enabled==true)
{
    CloudedSkyDropTavda.selection = 7;
}
if (TavdaDojd.enabled==true)
{
    CloudedSkyDropTavda.selection = 1;
}
 if (TavdaPasmurno.enabled==true)
{
    CloudedSkyDropTavda.selection = 5;
}
if (TavdaOblachno.enabled==true)
{
    CloudedSkyDropTavda.selection = 4;
}
if (TavdaYasno.enabled==true)
{
    CloudedSkyDropTavda.selection = 0;
}
 if (TavdaDojdObl.enabled==true)
{
    CloudedSkyDropTavda.selection = 6;
}
if (TavdaDojdGroza.enabled==true&&TavdaOblachno.enabled==true)
{
    CloudedSkyDropTavda.selection = 8;
}
}   

/*--------------------------------------------------------------------------------------------------------------------------*/

function GrabCloudedSkyDropKamenskStatus ()
{
if (KamenskDojdGroza.enabled==true)
{
    CloudedSkyDropKamensk.selection = 2;
}
if (KamenskSneg.enabled==true)
{
    CloudedSkyDropKamensk.selection = 3;
}
if (KamenskMokrSneg.enabled==true)
{
    CloudedSkyDropKamensk.selection = 7;
}
if (KamenskDojd.enabled==true)
{
    CloudedSkyDropKamensk.selection = 1;
}
 if (KamenskPasmurno.enabled==true)
{
    CloudedSkyDropKamensk.selection = 5;
}
if (KamenskOblachno.enabled==true)
{
    CloudedSkyDropKamensk.selection = 4;
}
if (KamenskYasno.enabled==true)
{
    CloudedSkyDropKamensk.selection = 0;
}
 if (KamenskDojdObl.enabled==true)
{
    CloudedSkyDropKamensk.selection = 6;
}
if (KamenskDojdGroza.enabled==true&&KamenskOblachno.enabled==true)
{
    CloudedSkyDropKamensk.selection = 8;
}
}   

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
/*--------------------------------------------------------------------------------------------------------------------------*/
