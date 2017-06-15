/*--------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Initialization Zavtra_---------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
//Говорим что работаем с текущим проектом
var myProj = app.project;
//Находим композицию контроллера
//Находим слой контроллера
var ControllLayer = searchCompByName("ADD DATA").layer("CONTROLLER");
var KamenskLayer = searchCompByName("ADD DATA").layer("KAMENSK");
var IvdelLayer = searchCompByName("ADD DATA").layer("IVDEL");
var TagilLayer = searchCompByName("ADD DATA").layer("TAGIL");
var TavdaLayer = searchCompByName("ADD DATA").layer("TAVDA");
var SerovLayer = searchCompByName("ADD DATA").layer("SEROV");
var IrbitLayer = searchCompByName("ADD DATA").layer("IRBIT");

//Инициализируем переменные контроллера
var ControllTemperaturaDay = ControllLayer.effect("Температура на завтра")("Slider");
var ControllPressure = ControllLayer.effect("Давление")("Slider");
var ControllWindSpeed = ControllLayer.effect("Скорость ветра")("Slider");
var ControllHumidity = ControllLayer.effect("Влажность")("Slider");


var ControllTemperaturaDay1 = ControllLayer.effect("1 день Температура")("Slider");
var ControllTemperaturaDay2 = ControllLayer.effect("2 день Температура")("Slider");
var ControllTemperaturaDay3 = ControllLayer.effect("3 день Температура")("Slider");

var IvdelTemper = IvdelLayer.effect("Temp")("Slider");
var UralskyTemper = KamenskLayer.effect("Temp")("Slider");
var TagilTemper = TagilLayer.effect("Temp")("Slider");
var TavdaTemper = TavdaLayer.effect("Temp")("Slider");
var SerovTemper = SerovLayer.effect("Temp")("Slider");
var IrbitTemper = IrbitLayer.effect("Temp")("Slider");

var ControllYasno = ControllLayer.effect("Ясно")("Checkbox");
var ControllDojd = ControllLayer.effect("Дождь")("Checkbox");
var ControllDojdGroza = ControllLayer.effect("Дождь Гроза")("Checkbox");
var ControllSneg = ControllLayer.effect("Снег")("Checkbox");
var ControllOblachno = ControllLayer.effect("Облачно с прояснениями")("Checkbox");
var ControllPasmurno = ControllLayer.effect("Пасмурно")("Checkbox");

var ControllYasnoDay1 = ControllLayer.effect("1 день Ясно")("Checkbox");
var ControllDojdDay1 = ControllLayer.effect("1 день Дождь")("Checkbox");
var ControllDojdGrozaDay1 = ControllLayer.effect("1 день Гроза")("Checkbox");
var ControllSnegDay1 = ControllLayer.effect("1 день Снег")("Checkbox");
var ControllOblachnoDay1 = ControllLayer.effect("1 день Переменная облачность")("Checkbox");
var ControllPasmurnoDay1 = ControllLayer.effect("1 день Пасмурно")("Checkbox");
var ControllSunToSnowDay1 = ControllLayer.effect("1 день Солнце к снегу")("Checkbox");


var ControllYasnoDay2 = ControllLayer.effect("2 день Ясно")("Checkbox");
var ControllDojdDay2 = ControllLayer.effect("2 день Дождь")("Checkbox");
var ControllDojdGrozaDay2 = ControllLayer.effect("2 день Гроза")("Checkbox");
var ControllSnegDay2 = ControllLayer.effect("2 день Снег")("Checkbox");
var ControllOblachnoDay2 = ControllLayer.effect("2 день Переменная облачность")("Checkbox");
var ControllPasmurnoDay2 = ControllLayer.effect("2 день Пасмурно")("Checkbox");
var ControllSunToSnowDay2 = ControllLayer.effect("2 день Солнце к снегу")("Checkbox");

var ControllYasnoDay3 = ControllLayer.effect("3 день Ясно")("Checkbox");
var ControllDojdDay3 = ControllLayer.effect("3 день Дождь")("Checkbox");
var ControllDojdGrozaDay3 = ControllLayer.effect("3 день Гроза")("Checkbox");
var ControllSnegDay3 = ControllLayer.effect("3 день Снег")("Checkbox");
var ControllOblachnoDay3 = ControllLayer.effect("3 день Переменная")("Checkbox");
var ControllPasmurnoDay3 = ControllLayer.effect("3 день Пасмурно")("Checkbox");
var ControllSunToSnowDay3 = ControllLayer.effect("3 день Солнце к снегу")("Checkbox");

var KamenskYasno = KamenskLayer.effect("Yasno")("Checkbox");
var KamenskDojd = KamenskLayer.effect("Dogd")("Checkbox");
var KamenskDojdGroza = KamenskLayer.effect("Dogd Groza")("Checkbox");
var KamenskSneg = KamenskLayer.effect("Sneg")("Checkbox");
var KamenskOblachno = KamenskLayer.effect("Peremen")("Checkbox");
var KamenskPasmurno = KamenskLayer.effect("Pasmurno")("Checkbox");
var KamenskSunToSnow = KamenskLayer.effect("SnegSun")("Checkbox");
var TavdaYasno = TavdaLayer.effect("Yasno")("Checkbox");
var TavdaDojd = TavdaLayer.effect("Dogd")("Checkbox");
var TavdaDojdGroza = TavdaLayer.effect("Dogd Groza")("Checkbox");
var TavdaSneg = TavdaLayer.effect("Sneg")("Checkbox");
var TavdaOblachno = TavdaLayer.effect("Peremen")("Checkbox");
var TavdaPasmurno = TavdaLayer.effect("Pasmurno")("Checkbox");
var TavdaSunToSnow = TavdaLayer.effect("SnegSun")("Checkbox");
var IrbitYasno = IrbitLayer.effect("Yasno")("Checkbox");
var IrbitDojd = IrbitLayer.effect("Dogd")("Checkbox");
var IrbitDojdGroza = IrbitLayer.effect("Dogd Groza")("Checkbox");
var IrbitSneg = IrbitLayer.effect("Sneg")("Checkbox");
var IrbitOblachno = IrbitLayer.effect("Peremen")("Checkbox");
var IrbitPasmurno = IrbitLayer.effect("Pasmurno")("Checkbox");
var IrbitSunToSnow = IrbitLayer.effect("SnegSun")("Checkbox");
var TagilYasno = TagilLayer.effect("Yasno")("Checkbox");
var TagilDojd = TagilLayer.effect("Dogd")("Checkbox");
var TagilDojdGroza = TagilLayer.effect("Dogd Groza")("Checkbox");
var TagilSneg = TagilLayer.effect("Sneg")("Checkbox");
var TagilOblachno = TagilLayer.effect("Peremen")("Checkbox");
var TagilPasmurno = TagilLayer.effect("Pasmurno")("Checkbox");
var TagilSunToSnow = TagilLayer.effect("SnegSun")("Checkbox");
var IvdelYasno = IvdelLayer.effect("Yasno")("Checkbox");
var IvdelDojd = IvdelLayer.effect("Dogd")("Checkbox");
var IvdelDojdGroza = IvdelLayer.effect("Dogd Groza")("Checkbox");
var IvdelSneg = IvdelLayer.effect("Sneg")("Checkbox");
var IvdelOblachno = IvdelLayer.effect("Peremen")("Checkbox");
var IvdelPasmurno = IvdelLayer.effect("Pasmurno")("Checkbox");
var IvdelSunToSnow = IvdelLayer.effect("SnegSun")("Checkbox");
var SerovYasno = SerovLayer.effect("Yasno")("Checkbox");
var SerovDojd = SerovLayer.effect("Dogd")("Checkbox");
var SerovDojdGroza = SerovLayer.effect("Dogd Groza")("Checkbox");
var SerovSneg = SerovLayer.effect("Sneg")("Checkbox");
var SerovOblachno = SerovLayer.effect("Peremen")("Checkbox");
var SerovPasmurno = SerovLayer.effect("Pasmurno")("Checkbox");
var SerovSunToSnow = SerovLayer.effect("SnegSun")("Checkbox");

var ControllWindRotation= ControllLayer.effect("Направление ветра шаг 45 градусов")("Angle");  

var ControllDayofWeek = ControllLayer.effect("День недели заполнения - Цифрой")("Slider");

/*--------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Initialization_Segodnya---------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
//Находим композицию контроллера
//Находим слой контроллера
var ControllLayer2 = searchCompByName("ADD DATA 2").layer("CONTROLLER");

var ControllYasno2 = ControllLayer2.effect("Ясно")("Checkbox");
var ControllDojd2 = ControllLayer2.effect("Дождь")("Checkbox");
var ControllDojdGroza2 = ControllLayer2.effect("Дождь Гроза")("Checkbox");
var ControllSneg2 = ControllLayer2.effect("Снег")("Checkbox");
var ControllOblachno2 = ControllLayer2.effect("Облачно с прояснениями")("Checkbox");
var ControllPasmurno2 = ControllLayer2.effect("Пасмурно")("Checkbox");

var KamenskLayer2 = searchCompByName("ADD DATA 2").layer("KAMENSK");
var IvdelLayer2 = searchCompByName("ADD DATA 2").layer("IVDEL");
var TagilLayer2 = searchCompByName("ADD DATA 2").layer("TAGIL");
var TavdaLayer2 = searchCompByName("ADD DATA 2").layer("TAVDA");
var SerovLayer2 = searchCompByName("ADD DATA 2").layer("SEROV");
var IrbitLayer2 = searchCompByName("ADD DATA 2").layer("IRBIT");

//Инициализируем переменные контроллера
var ControllTemperaturaDayS2 = ControllLayer2.effect("Температура на завтра")("Slider");
var ControllPressure2 = ControllLayer2.effect("Давление")("Slider");
var ControllWindSpeed2 = ControllLayer.effect("Скорость ветра")("Slider");
var ControllHumidity2 = ControllLayer2.effect("Влажность")("Slider");
var ControllTemperaturaDay12 = ControllLayer2.effect("1 день Температура")("Slider");
var ControllTemperaturaDay22 = ControllLayer2.effect("2 день Температура")("Slider");
var ControllTemperaturaDay32 = ControllLayer2.effect("3 день Температура")("Slider");

var IvdelTemper2 = IvdelLayer2.effect("Temp")("Slider");
var UralskyTemper2 = KamenskLayer2.effect("Temp")("Slider");
var TagilTemper2 = TagilLayer2.effect("Temp")("Slider");
var TavdaTemper2 = TavdaLayer2.effect("Temp")("Slider");
var SerovTemper2 = SerovLayer2.effect("Temp")("Slider");
var IrbitTemper2 = IrbitLayer2.effect("Temp")("Slider");

var ControllYasnoDay12 = ControllLayer2.effect("1 день Ясно")("Checkbox");
var ControllDojdDay12 = ControllLayer2.effect("1 день Дождь")("Checkbox");
var ControllDojdGrozaDay12 = ControllLayer2.effect("1 день Гроза")("Checkbox");
var ControllSnegDay12 = ControllLayer2.effect("1 день Снег")("Checkbox");
var ControllOblachnoDay12 = ControllLayer2.effect("1 день Переменная облачность")("Checkbox");
var ControllPasmurnoDay12 = ControllLayer2.effect("1 день Пасмурно")("Checkbox");
var ControllSunToSnowDay12 = ControllLayer2.effect("1 день Солнце к снегу")("Checkbox");

var ControllYasnoDay22 = ControllLayer2.effect("2 день Ясно")("Checkbox");
var ControllDojdDay22 = ControllLayer2.effect("2 день Дождь")("Checkbox");
var ControllDojdGrozaDay22 = ControllLayer2.effect("2 день Гроза")("Checkbox");
var ControllSnegDay22 = ControllLayer2.effect("2 день Снег")("Checkbox");
var ControllOblachnoDay22 = ControllLayer2.effect("2 день Переменная облачность")("Checkbox");
var ControllPasmurnoDay22 = ControllLayer2.effect("2 день Пасмурно")("Checkbox");
var ControllSunToSnowDay22 = ControllLayer2.effect("2 день Солнце к снегу")("Checkbox");

var ControllYasnoDay32 = ControllLayer2.effect("3 день Ясно")("Checkbox");
var ControllDojdDay32 = ControllLayer2.effect("3 день Дождь")("Checkbox");
var ControllDojdGrozaDay32 = ControllLayer2.effect("3 день Гроза")("Checkbox");
var ControllSnegDay32 = ControllLayer2.effect("3 день Снег")("Checkbox");
var ControllOblachnoDay32 = ControllLayer2.effect("3 день Переменная")("Checkbox");
var ControllPasmurnoDay32 = ControllLayer2.effect("3 день Пасмурно")("Checkbox");
var ControllSunToSnowDay32 = ControllLayer2.effect("3 день Солнце к снегу")("Checkbox");

var KamenskYasno2 = KamenskLayer2.effect("Yasno")("Checkbox");
var KamenskDojd2 = KamenskLayer2.effect("Dogd")("Checkbox");
var KamenskDojdGroza2 = KamenskLayer2.effect("Dogd Groza")("Checkbox");
var KamenskSneg2 = KamenskLayer2.effect("Sneg")("Checkbox");
var KamenskOblachno2 = KamenskLayer2.effect("Peremen")("Checkbox");
var KamenskPasmurno2 = KamenskLayer2.effect("Pasmurno")("Checkbox");
var KamenskSunToSnow2 = KamenskLayer2.effect("SnegSun")("Checkbox");
var TavdaYasno2 = TavdaLayer2.effect("Yasno")("Checkbox");
var TavdaDojd2 = TavdaLayer2.effect("Dogd")("Checkbox");
var TavdaDojdGroza2 = TavdaLayer2.effect("Dogd Groza")("Checkbox");
var TavdaSneg2 = TavdaLayer2.effect("Sneg")("Checkbox");
var TavdaOblachno2 = TavdaLayer2.effect("Peremen")("Checkbox");
var TavdaPasmurno2 = TavdaLayer2.effect("Pasmurno")("Checkbox");
var TavdaSunToSnow2 = TavdaLayer2.effect("SnegSun")("Checkbox");
var IrbitYasno2 = IrbitLayer2.effect("Yasno")("Checkbox");
var IrbitDojd2 = IrbitLayer2.effect("Dogd")("Checkbox");
var IrbitDojdGroza2 = IrbitLayer2.effect("Dogd Groza")("Checkbox");
var IrbitSneg2 = IrbitLayer2.effect("Sneg")("Checkbox");
var IrbitOblachno2 = IrbitLayer2.effect("Peremen")("Checkbox");
var IrbitPasmurno2 = IrbitLayer2.effect("Pasmurno")("Checkbox");
var IrbitSunToSnow2 = IrbitLayer2.effect("SnegSun")("Checkbox");
var TagilYasno2 = TagilLayer2.effect("Yasno")("Checkbox");
var TagilDojd2 = TagilLayer2.effect("Dogd")("Checkbox");
var TagilDojdGroza2 = TagilLayer2.effect("Dogd Groza")("Checkbox");
var TagilSneg2 = TagilLayer2.effect("Sneg")("Checkbox");
var TagilOblachno2 = TagilLayer2.effect("Peremen")("Checkbox");
var TagilPasmurno2 = TagilLayer2.effect("Pasmurno")("Checkbox");
var TagilSunToSnow2 = TagilLayer2.effect("SnegSun")("Checkbox");
var IvdelYasno2 = IvdelLayer2.effect("Yasno")("Checkbox");
var IvdelDojd2 = IvdelLayer2.effect("Dogd")("Checkbox");
var IvdelDojdGroza2 = IvdelLayer2.effect("Dogd Groza")("Checkbox");
var IvdelSneg2 = IvdelLayer2.effect("Sneg")("Checkbox");
var IvdelOblachno2 = IvdelLayer2.effect("Peremen")("Checkbox");
var IvdelPasmurno2 = IvdelLayer2.effect("Pasmurno")("Checkbox");
var IvdelSunToSnow2 = IvdelLayer2.effect("SnegSun")("Checkbox");
var SerovYasno2 = SerovLayer2.effect("Yasno")("Checkbox");
var SerovDojd2 = SerovLayer2.effect("Dogd")("Checkbox");
var SerovDojdGroza2 = SerovLayer2.effect("Dogd Groza")("Checkbox");
var SerovSneg2 = SerovLayer2.effect("Sneg")("Checkbox");
var SerovOblachno2 = SerovLayer2.effect("Peremen")("Checkbox");
var SerovPasmurno2 = SerovLayer2.effect("Pasmurno")("Checkbox");
var SerovSunToSnow2 = SerovLayer2.effect("SnegSun")("Checkbox");

var ControllWindRotation2= ControllLayer2.effect("Направление ветра шаг 45 градусов")("Angle");  

var ControllDayofWeek2 = ControllLayer2.effect("День недели заполнения - Цифрой")("Slider");

/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Creation_Date------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var dateTime = new Date();
if ((dateTime.getMonth()+1)<10)
{
   dateMonth = "0" + (dateTime.getMonth()+1);
}    
else {dateMonth = (dateTime.getMonth()+1);}
if ((dateTime.getDate())<10)
{
    if (dateTime.getDate()==9)
    {
        dateDayToSegodnya = (dateTime.getDate()+1);
        dateDayToZavtra = "0" + (dateTime.getDate());
    }
else
    {
   dateDayToSegodnya = "0" + (dateTime.getDate()+1);
   dateDayToZavtra = "0" + (dateTime.getDate());
   }
}  
else
{
   dateDayToSegodnya = dateTime.getDate()+1;
   dateDayToZavtra = dateTime.getDate();   
}
/*--------------------------------------------------------------------------------------------------------------------------*/

var dateYear = dateTime.getYear()-100;
var CurrentPath = ("/e/000_POGODA/000_GOTOVOE/watch/");
var xmlPath = ("/e/000_POGODA/xml"); 
var mode = 0;
var Temp = (Folder (CurrentPath));
$.evalFile(decodeURI(File($.fileName).parent)  + "/lib/loadMode.jsx");
loadMode();


/*--------------------------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------Creation_Palette------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
//Создаем окно с именем ZavtraTab
var PCW = new Window ("palette", "Управление погодой", undefined, {closeButton: false}); 
PCW.alignChildren = "right";
PCW.spacing = 8;

/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
//Создаем панель для управления Погодой
var PogodaInEkb = PCW.add ("panel", undefined, "Погода в Екатеринбурге");
PogodaInEkb.preferredSize.width = 400;
//Выравниваем по левому краю содержимое этой панели
PogodaInEkb.alignChildren = "left";
//Создаем группу, чтобы отображать в строку
var CloudedSkyGroup = PogodaInEkb.add ("group");
CloudedSkyGroup.add ("statictext", undefined, "Облачность:");

var CloudedSkyDrop = CloudedSkyGroup.add ("dropdownlist", undefined, ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно"]);
GrabCloudedSkyStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var TemperaturaGroup = PogodaInEkb.add ("group");
TemperaturaGroup.add ("statictext", undefined, "Температура:");
var TemperaturaDay = TemperaturaGroup.add ("edittext", undefined, ControllTemperaturaDay.value);TemperaturaDay.active = true;TemperaturaDay.characters = 3;
TemperaturaGroup.add ("statictext", undefined, "°C");
/*--------------------------------------------------------------------------------------------------------------------------*/

TemperaturaGroup.add ("statictext", undefined, "|      Давление:");
var Pressure = TemperaturaGroup.add ("edittext", undefined, ControllPressure.value);Pressure.active = true;Pressure.characters = 3;
TemperaturaGroup.add ("statictext", undefined, "мм. рт. ст.");
/*--------------------------------------------------------------------------------------------------------------------------*/
var WiindGroup2 = PogodaInEkb.add ("group");
WiindGroup2.add ("statictext", undefined, "Ветер:");
var WindRotation = WiindGroup2.add ("dropdownlist", undefined, ["Север", "Северо-Восток", "Восток", "Юго-Восток", "Юг", "Юго-Запад", "Запад", "Северо-Запад"]);
GrabWindRotationStatus ();
WiindGroup2.add ("statictext", ["", "" , 80, "30"], "Скорость:");
var WindSpeed = WiindGroup2.add ("edittext", undefined, ControllWindSpeed.value);WindSpeed.active = true;WindSpeed.characters = 3;
WiindGroup2.add ("statictext", undefined, "м/с");

/*--------------------------------------------------------------------------------------------------------------------------*/
var HumidityGroup = PogodaInEkb.add ("group")
HumidityGroup.add ("statictext", undefined, "Влажность:");
var Humidity = HumidityGroup.add ("edittext", undefined, ControllHumidity.value);Humidity.active = true;Humidity.characters = 3;
HumidityGroup.add ("statictext", undefined, "%");
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
var TabsPanel = PCW.add ("tabbedpanel"); 
TabsPanel.margins = [0,0,0,0];
var ZavtraTab = TabsPanel.add ("tab", undefined, "Завтра");
var SegodnyaTab = TabsPanel.add ("tab", undefined, "Сегодня");
/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodaNa3Dnya = ZavtraTab.add ("panel", undefined, "Погода на 3 дня");
//PogodaNa3Dnya.preferredSize.width = 400;
//Выравниваем по левому краю содержимое этой панели
PogodaNa3Dnya.alignChildren = "top";
//Создаем группу, чтобы отображать в строку
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
var CloudedSkyDropDay1 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
var CloudedSkyDropDay2 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
var CloudedSkyDropDay3 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);

GrabCloudedSkyDropDaysStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodaNa3Dnya2 = SegodnyaTab.add ("panel", undefined, "Погода на 3 дня");
//PogodaNa3Dnya2.preferredSize.width = 400;
//Выравниваем по левому краю содержимое этой панели
PogodaNa3Dnya2.alignChildren = "top";
//Создаем группу, чтобы отображать в строку
var DayWeekGroup2 = PogodaNa3Dnya2.add ("group");
var DayWeek2 = DayWeekGroup2.add ("dropdownlist", undefined, ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]);
var Day2Static2 = DayWeekGroup2.add ("statictext",  ["", "" , 110, "15"], "");
var Day3Static2 = DayWeekGroup2.add ("statictext", ["", "" , 110, "15"], "");
GrabDayWeekStatus2 ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var DayWeekTemperaturaGroup2 = PogodaNa3Dnya2.add ("group");
var TemperaturaDay12 = DayWeekTemperaturaGroup2.add ("edittext", undefined, TemperaturaDay2.text);TemperaturaDay12.active = true;TemperaturaDay12.characters = 3;
DayWeekTemperaturaGroup2.add ("statictext", undefined, "°C");
DayWeekTemperaturaGroup2.add ("statictext", ["", "" , 40, "15"], "");
var TemperaturaDay22 = DayWeekTemperaturaGroup2.add ("edittext", undefined, TemperaturaDay3.text);TemperaturaDay22.active = true;TemperaturaDay22.characters = 3;
DayWeekTemperaturaGroup2.add ("statictext", undefined, "°C");
DayWeekTemperaturaGroup2.add ("statictext", ["", "" , 30, "15"], "");
var TemperaturaDay32 = DayWeekTemperaturaGroup2.add ("edittext", undefined, ControllTemperaturaDay32.value);TemperaturaDay32.active = true;TemperaturaDay32.characters = 3;
DayWeekTemperaturaGroup2.add ("statictext", undefined, "°C");
/*--------------------------------------------------------------------------------------------------------------------------*/
var CloudedSkyDropDay3Group2 = PogodaNa3Dnya2.add ("group");
var CloudedSkyDropDay12 = CloudedSkyDropDay3Group2.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
var CloudedSkyDropDay22 = CloudedSkyDropDay3Group2.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
var CloudedSkyDropDay32 = CloudedSkyDropDay3Group2.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
GrabCloudedSkyDropDay32Status ();
CloudedSkyDropDay12.selection = CloudedSkyDropDay2.selection.index;
CloudedSkyDropDay22.selection = CloudedSkyDropDay3.selection.index;
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/



/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodavObl = PCW.add ("panel", undefined, "Погода в городах области");
PogodavObl.preferredSize.width = 400;

//Выравниваем по левому краю содержимое этой панели
PogodavObl.alignChildren = "left";
/*--------------------------------------------------------------------------------------------------------------------------*/
//Создаем группу, чтобы отображать в строку
var IvdelGroup = PogodavObl.add ("group");
IvdelGroup.add ("statictext", ["", "" , 110, "15"], "Ивдель:");
var TemperaturaIvdel = IvdelGroup.add ("edittext", ["", "" , 40, "22"], IvdelTemper.value);TemperaturaIvdel.active = true;TemperaturaIvdel.characters = 3;
IvdelGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//IvdelGroup.add ("statictext", ["", "" , 30, "15"], "");
var CloudedSkyDropIvdel = IvdelGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
GrabCloudedSkyDropIvdelStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var SerovGroup = PogodavObl.add ("group");
SerovGroup.add ("statictext", ["", "" , 110, "15"], "Серов:");
var TemperaturaSerov = SerovGroup.add ("edittext", ["", "" , 40, "22"], SerovTemper.value);TemperaturaSerov.active = true;TemperaturaSerov.characters = 3;
SerovGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//SerovGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropSerov = SerovGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
GrabCloudedSkyDropSerovStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var TagilGroup = PogodavObl.add ("group");
TagilGroup.add ("statictext", ["", "" , 110, "15"], "Тагил:");
var TemperaturaTagil = TagilGroup.add ("edittext", ["", "" , 40, "22"], TagilTemper.value);TemperaturaTagil.active = true;TemperaturaTagil.characters = 3;
TagilGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//TagilGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropTagil = TagilGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
GrabCloudedSkyDropTagilStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var TavdaGroup = PogodavObl.add ("group");
TavdaGroup.add ("statictext", ["", "" , 110, "15"], "Тавда:");
var TemperaturaTavda = TavdaGroup.add ("edittext", ["", "" , 40, "22"], TavdaTemper.value);TemperaturaTavda.active = true;TemperaturaTavda.characters = 3;
TavdaGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//TavdaGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropTavda = TavdaGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
GrabCloudedSkyDropTavdaStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var UralskyGroup = PogodavObl.add ("group");
UralskyGroup.add ("statictext", ["", "" , 110, "15"], "Каменск-Уральский:");
var TemperaturaUralsky = UralskyGroup.add ("edittext", ["", "" , 40, "22"], UralskyTemper.value);TemperaturaUralsky.active = true;TemperaturaUralsky.characters = 3;
UralskyGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//UralskyGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropUralsky = UralskyGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
GrabCloudedSkyDropUralskyStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var IrbitGroup = PogodavObl.add ("group");
IrbitGroup.add ("statictext", ["", "" , 110, "15"], "Ирбит:");
var TemperaturaIrbit = IrbitGroup.add ("edittext", ["", "" , 40, "22"], IrbitTemper.value);TemperaturaIrbit.active = true;TemperaturaIrbit.characters = 3;
IrbitGroup.add ("statictext", ["", "" , 40, "15"], "°C");
//IrbitGroup.add ("statictext", ["", "" , 30, "30"], "");
var CloudedSkyDropIrbit = IrbitGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Дождь Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Солнце к снегу", "Облачно с дождем"]);
GrabCloudedSkyDropIrbitStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
//Создаем кнопки


var ButtonsGroup2 = PCW.add ("group");
ButtonsGroup2.add ("statictext", undefined, "Путь:");
var PathButton = ButtonsGroup2.add ("button", [-235,15,0,45], CurrentPath);
ButtonsGroup2.add ("statictext", ["", "" , 10, "30"], "");
var RendChSegodnya = ButtonsGroup2.add ("checkbox", [15,15,100,30], "Сегодня");

var ButtonsGroup3 = PCW.add ("group");
var RenderButton = ButtonsGroup3.add ("button", [-275,15,0,45], "Отправить на рендер");
ButtonsGroup3.add ("statictext", ["", "" , 10, "30"], "");
var RendChZavtra = ButtonsGroup3.add ("checkbox", [15,15,100,30], "Завтра");

PCW.add ("panel", [0,0,400,3]);
var BottonGroup4 = PCW.add ("group");
var XmlButton = BottonGroup4.add ("button", [-300,15,100,45], "Загрузить XML");

PCW.add ("panel", [0,0,400,3]);
var BottonGroup = PCW.add ("group");
var ApplyButton = BottonGroup.add ("button", [-200,0,100,30], "Применить");
var CloseButton = BottonGroup.add ("button", undefined, "Закрыть");
/*--------------------------------------------------------------------------------------------------------------------------*/




/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------Action for Button.onClick------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

CloudedSkyDropDay2.onChange = function ()
{
      CloudedSkyDropDay12.selection = CloudedSkyDropDay2.selection.index;
}

CloudedSkyDropDay3.onChange = function ()
{
      CloudedSkyDropDay22.selection = CloudedSkyDropDay3.selection.index;
}

TemperaturaDay.onChange = function ()
{
      TemperaturaDay1.text  = TemperaturaDay.text;
}

TemperaturaDay2.onChange = function ()
{
      TemperaturaDay12.text  = TemperaturaDay2.text;
}    

TemperaturaDay3.onChange = function ()
{   
      TemperaturaDay22.text  = TemperaturaDay3.text;
}    

PathButton.onClick = function () 
{
  CurrentPath = Temp.selectDlg().fullName;
  PathButton.text = CurrentPath;
}

RenderButton.onClick = function () 
{
      if ((RendChSegodnya.value==0) && (RendChZavtra.value==0)) {alert ("Необходимо выбрать хоть одну из композиций!");}
    else
    {
            myRenderQueue = myProj.renderQueue;
            if ((RendChSegodnya.value==1) && (RendChZavtra.value==1))
            {
                myQueueItem = myRenderQueue.items.add(searchCompByName("Pogoda Render Segodnya"));               
                myOM = myQueueItem.outputModule(1);
                myOM.applyTemplate("QT_ST_AUDIO");
                Folder(CurrentPath).create();
                var SRF = Folder(CurrentPath);
                var SRF2 = SRF;
                var Perem = SRF.name;
                var Perem2 = parseInt(Perem.slice(0,2));
			  var Perem3 = Perem.slice(0,4);
                var newPerem = Perem3.replace(new RegExp(Perem2,'g'),Perem2 + 1)
				newPerem = newPerem +  (dateTime.getFullYear()-2000);
				
                SRF.changePath(SRF.fullName+"/"  + dateDayToSegodnya + dateMonth+ (dateTime.getFullYear()-2000) + "_POGODA_SEGODNYA");                   
                myOM.file = SRF;
                myQueueItem2 = myRenderQueue.items.add(searchCompByName("Pogoda Render Zavtra"));
                myOM2 = myQueueItem2.outputModule(1);
                myOM2.applyTemplate("QT_ST_AUDIO");
                SRF2.changePath(SRF2.path);
                SRF2.changePath(SRF2.fullName + "/" + dateDayToZavtra + dateMonth+ (dateTime.getFullYear()-2000) + "_POGODA_ZAVTRA");
                myOM2.file = SRF2;
                PCW.hide();
            }
            else
            {
                if ((RendChSegodnya.value==1) && (RendChZavtra.value==0))
                {
                    myQueueItem = myRenderQueue.items.add(searchCompByName("Pogoda Render Segodnya"));              
                    myOM = myQueueItem.outputModule(1);
                    myOM.applyTemplate("QT_ST_AUDIO");  
                    Folder(CurrentPath).create();
                    var SRF = Folder(CurrentPath);
                    //SRF.execute();
                var Perem = SRF.name;
                var Perem2 = parseInt(Perem.slice(0,2));
			  var Perem3 = Perem.slice(0,4);
                var newPerem = Perem3.replace(new RegExp(Perem2,'g'),Perem2 + 1)
				newPerem = newPerem +  (dateTime.getFullYear()-2000);
				
                SRF.changePath(SRF.fullName+"/"  + dateDayToSegodnya + dateMonth+ (dateTime.getFullYear()-2000) + "_POGODA_SEGODNYA");                
                 //  SRF.execute();
                    myOM.file = SRF;
                    PCW.hide();
                }
                else 
                {
                    myQueueItem = myRenderQueue.items.add(searchCompByName("Pogoda Render Zavtra"));              
                    myOM = myQueueItem.outputModule(1);
                    myOM.applyTemplate("QT_ST_AUDIO");  
                    Folder(CurrentPath).create();
                    var SRF = Folder(CurrentPath);
                    //SRF.execute();
                var Perem = SRF.name;
                var Perem2 = parseInt(Perem.slice(0,2));
			  var Perem3 = Perem.slice(0,4);
                var newPerem = Perem3.replace(new RegExp(Perem2,'g'),Perem2)
				newPerem = newPerem +  (dateTime.getFullYear()-2000);
				
                SRF.changePath(SRF.fullName+"/"  + dateDayToZavtra + dateMonth+ (dateTime.getFullYear()-2000) + "_POGODA_ZAVTRA");                
                 //  SRF.execute();
                    myOM.file = SRF;
                    PCW.hide();
                }
            }
    }
}    
ApplyButton.onClick = function () 
{
    //Текстовые поля
    ControllTemperaturaDay.setValue (TemperaturaDay.text);
    ControllPressure.setValue (Pressure.text);
    ControllWindSpeed.setValue (WindSpeed.text);

    ControllHumidity.setValue (Humidity.text);
    ControllTemperaturaDay1.setValue (TemperaturaDay1.text);
    ControllTemperaturaDay2.setValue (TemperaturaDay2.text);
    ControllTemperaturaDay3.setValue (TemperaturaDay3.text);
    IvdelTemper.setValue (TemperaturaIvdel.text);
    UralskyTemper.setValue (TemperaturaUralsky.text);
    TagilTemper.setValue (TemperaturaTagil.text);
    TavdaTemper.setValue (TemperaturaTavda.text);
    SerovTemper.setValue (TemperaturaSerov.text);
    IrbitTemper.setValue (TemperaturaIrbit.text);
        
    //ДропБоксы для главного
    ControllYasno.setValue (false);
    ControllDojd.setValue (false);
    ControllDojdGroza.setValue (false);
    ControllSneg.setValue (false);
    ControllOblachno.setValue (false);
    ControllPasmurno.setValue (false);
    
    //Облачность в Екатеринбурге
    switch (CloudedSkyDrop.selection.index)
    {
        case 0:
            ControllYasno.setValue (true);
        break;
        case 1:
            ControllDojd.setValue (true);
        break;
        case 2:
            ControllDojdGroza.setValue (true);
        break;
        case 3:
            ControllSneg.setValue (true);
        break;
        case 4:
            ControllOblachno.setValue (true);
        break;
        case 5:
            ControllPasmurno.setValue (true);
        break;
        default:
            alert ("Облачность для Екатеринбурга не задана");
       break;
    }

    //Направление ветра
    switch (WindRotation.selection.index)
    {
        case 0:
            ControllWindRotation.setValue (0);
        break;
        case 1:
            ControllWindRotation.setValue (45);
        break;
        case 2:
            ControllWindRotation.setValue (90);
        break;
        case 3:
            ControllWindRotation.setValue (135);
        break;
        case 4:
            ControllWindRotation.setValue (180);
        break;
        case 5:
            ControllWindRotation.setValue (225);
        break;
        case 6:
            ControllWindRotation.setValue (270);
        break;
        case 7:
            ControllWindRotation.setValue (315);
        break;
        case 8:
            ControllWindRotation.setValue (360);
        break;
        default:
            alert ("Направление ветра не задано!");
        break;
    }
    //День недели
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
            ControllSunToSnowDay3.setValue(false);
            
    //3 Дня облачность
    //День первый
        ControllYasnoDay1.setValue (false);
        ControllDojdDay1.setValue (false);
        ControllDojdGrozaDay1.setValue (false);
        ControllSnegDay1.setValue (false);
        ControllOblachnoDay1.setValue (false);
        ControllPasmurnoDay1.setValue (false);
        ControllSunToSnowDay1.setValue(false);
      
          switch (CloudedSkyDropDay1.selection.index) 
        {
            case 0: 
                    ControllYasnoDay1.setValue (true);
            break;
            case 1: 
                    ControllDojdDay1.setValue (true);
            break;
            case 2: 
                    ControllDojdGrozaDay1.setValue (true);
            break;
            case 3: 
                    ControllSnegDay1.setValue (true);
            break;
            case 4: 
                    ControllOblachnoDay1.setValue (true);
            break;
            case 5: 
                    ControllPasmurnoDay1.setValue (true);
            break;
            case 6: 
                    ControllSunToSnowDay1.setValue (true);
                    ControllSnegDay1.setValue (true);
            break;
            case 7: 
                    ControllDojdDay1.setValue (true);
                    ControllOblachnoDay1.setValue (true);
            break;
            default:
            alert ("Облачность для 'День 1' не задано");
            break;
        }          
      

        //День Второй
        ControllYasnoDay2.setValue (false);
        ControllDojdDay2.setValue (false);
        ControllDojdGrozaDay2.setValue (false);
        ControllSnegDay2.setValue (false);
        ControllOblachnoDay2.setValue (false);
        ControllPasmurnoDay2.setValue (false);
        ControllSunToSnowDay2.setValue(false);
        switch (CloudedSkyDropDay2.selection.index) 
        {
            case 0: 
                    ControllYasnoDay2.setValue (true);
            break;
            case 1: 
                    ControllDojdDay2.setValue (true);
            break;
            case 2:  
                    ControllDojdGrozaDay2.setValue (true);
            break;
            case 3: 
                    ControllSnegDay2.setValue (true);
            break;
            case 4: 
                    ControllOblachnoDay2.setValue (true);
            break;
            case 5: 
                    ControllPasmurnoDay2.setValue (true);
            break;
            case 6: 
                    ControllSunToSnowDay2.setValue (true);
                    ControllSnegDay2.setValue (true);
				  ControllSunToSnowDay2.setValue (true);
            break;           
            case 7: 
                    ControllDojdDay2.setValue (true);
                    ControllOblachnoDay2.setValue (true);
            break;
            default:
            alert ("Облачность для 'День 2' не задано");
            break;
        }
        //День Третий
        ControllYasnoDay3.setValue (false);
        ControllDojdDay3.setValue (false);
        ControllDojdGrozaDay3.setValue (false);
        ControllSnegDay3.setValue (false);
        ControllOblachnoDay3.setValue (false);
        ControllPasmurnoDay3.setValue (false);

        switch (CloudedSkyDropDay3.selection.index) 
        {
            case 0: 
                    ControllYasnoDay3.setValue (true);
            break;
            case 1: 
                    ControllDojdDay3.setValue (true);
            break;
            case 2: 
                    ControllDojdGrozaDay3.setValue (true);
            break;
            case 3: 
                    ControllSnegDay3.setValue (true);
            break;
            case 4: 
                    ControllOblachnoDay3.setValue (true);
            break;
            case 5: 
                    ControllPasmurnoDay3.setValue (true);
            break;
            case 6: 
                    ControllSunToSnowDay3.setValue (true);
                    ControllSnegDay3.setValue (true);
            break;
            case 7: 
                    ControllDojdDay3.setValue (true);
                    ControllOblachnoDay3.setValue (true);
            break;
            default:
            alert ("Облачность для 'День 3' не задано");
            break;
        }
     //Облачность в области
    //Каменск-Уральский
        KamenskYasno.setValue (false);
        KamenskDojd.setValue (false);
        KamenskDojdGroza.setValue (false);
        KamenskSneg.setValue (false);
        KamenskOblachno.setValue (false);
        KamenskPasmurno.setValue (false);
        KamenskSunToSnow.setValue(false);
        switch (CloudedSkyDropUralsky.selection.index) 
        {
            case 0: 
                    KamenskYasno.setValue (true);
            break;
            case 1: 
                    KamenskDojd.setValue (true);
            break;
            case 2: 
                    KamenskDojdGroza.setValue (true);
            break;
            case 3: 
                    KamenskSneg.setValue (true);
            break;
            case 4: 
                    KamenskOblachno.setValue (true);
            break;
            case 5: 
                    KamenskPasmurno.setValue (true);
            break;
            case 6: 
                    KamenskSunToSnow.setValue (true);
                    KamenskSneg.setValue (true);
            break;
            case 7: 
                    KamenskDojd.setValue (true);
                    KamenskOblachno.setValue (true);
            break;
            default:
            alert ("Облачность для 'Каменск-Уральского' не задана");
            break;
        }
         //Тавда
        TavdaYasno.setValue (false);
        TavdaDojd.setValue (false);
        TavdaDojdGroza.setValue (false);
        TavdaSneg.setValue (false);
        TavdaOblachno.setValue (false);
        TavdaPasmurno.setValue (false);
        TavdaSunToSnow.setValue(false);
        switch (CloudedSkyDropTavda.selection.index) 
        {
            case 0: 
                    TavdaYasno.setValue (true);
            break;
            case 1: 
                    TavdaDojd.setValue (true);
            break;
            case 2: 
                    TavdaDojdGroza.setValue (true);
            break;
            case 3: 
                    TavdaSneg.setValue (true);
            break;
            case 4: 
                    TavdaOblachno.setValue (true);
            break;
            case 5: 
                    TavdaPasmurno.setValue (true);
            break;
            case 6: 
                    TavdaSunToSnow.setValue (true);
                    TavdaSneg.setValue (true);
            break;
            case 7: 
                    TavdaDojd.setValue (true);
                    TavdaOblachno.setValue (true);
            break;
            default:
            alert ("Облачность для 'Тавды' не задана");
            break;
        }
        //Ирбит
        IrbitYasno.setValue (false);
        IrbitDojd.setValue (false);
        IrbitDojdGroza.setValue (false);
        IrbitSneg.setValue (false);
        IrbitOblachno.setValue (false);
        IrbitPasmurno.setValue (false);
        IrbitSunToSnow.setValue(false);
        switch (CloudedSkyDropIrbit.selection.index) 
        {
            case 0: 
                    IrbitYasno.setValue (true);
            break;
            case 1: 
                    IrbitDojd.setValue (true);
            break;
            case 2: 
                    IrbitDojdGroza.setValue (true);
            break;
            case 3: 
                    IrbitSneg.setValue (true);
            break;
            case 4: 
                    IrbitOblachno.setValue (true);
            break;
            case 5: 
                    IrbitPasmurno.setValue (true);
            break;
            case 6: 
                    IrbitSunToSnow.setValue (true);
                    IrbitSneg.setValue (true);
            break;
            case 7: 
                    IrbitDojd.setValue (true);
                    IrbitOblachno.setValue (true);
            break;
            default:
            alert ("Облачность для 'Ирбита' не задана");
            break;
        }
            //Тагил
        TagilYasno.setValue (false);
        TagilDojd.setValue (false);
        TagilDojdGroza.setValue (false);
        TagilSneg.setValue (false);
        TagilOblachno.setValue (false);
        TagilPasmurno.setValue (false);
        TagilSunToSnow.setValue(false);
        switch (CloudedSkyDropTagil.selection.index) 
        {
            case 0: 
                    TagilYasno.setValue (true);
            break;
            case 1: 
                    TagilDojd.setValue (true);
            break;
            case 2: 
                    TagilDojdGroza.setValue (true);
            break;
            case 3: 
                    TagilSneg.setValue (true);
            break;
            case 4: 
                    TagilOblachno.setValue (true);
            break;
            case 5: 
                    TagilPasmurno.setValue (true);
            break;
            case 6: 
                    TagilSunToSnow.setValue (true);
                    TagilSneg.setValue (true);
            break;
            case 7: 
                    TagilDojd.setValue (true);
                    TagilOblachno.setValue (true);
            break;
            default:
            alert ("Облачность для 'Тагила' не задана");
            break;
        }
                //Ивдель
        IvdelYasno.setValue (false);
        IvdelDojd.setValue (false);
        IvdelDojdGroza.setValue (false);
        IvdelSneg.setValue (false);
        IvdelOblachno.setValue (false);
        IvdelPasmurno.setValue (false);
        IvdelSunToSnow.setValue(false);
        switch (CloudedSkyDropIvdel.selection.index) 
        {
            case 0: 
                    IvdelYasno.setValue (true);
            break;
            case 1: 
                    IvdelDojd.setValue (true);
            break;
            case 2: 
                    IvdelDojdGroza.setValue (true);
            break;
            case 3: 
                    IvdelSneg.setValue (true);
            break;
            case 4: 
                    IvdelOblachno.setValue (true);
            break;
            case 5: 
                    IvdelPasmurno.setValue (true);
            break;
            case 6: 
                    IvdelSunToSnow.setValue (true);
                    IvdelSneg.setValue (true);
            break;
            case 7: 
                    IvdelDojd.setValue (true);
                    IvdelOblachno.setValue (true);
            break;
            default:
            alert ("Облачность для 'Ивделя' не задана");
            break;
        }
                    //Серов
        SerovYasno.setValue (false);
        SerovDojd.setValue (false);
        SerovDojdGroza.setValue (false);
        SerovSneg.setValue (false);
        SerovOblachno.setValue (false);
        SerovPasmurno.setValue (false);
        SerovSunToSnow.setValue(false);
        switch (CloudedSkyDropSerov.selection.index) 
        {
            case 0: 
                    SerovYasno.setValue (true);
            break;
            case 1: 
                    SerovDojd.setValue (true);
            break;
            case 2: 
                    SerovDojdGroza.setValue (true);
            break;
            case 3: 
                    SerovSneg.setValue (true);
            break;
            case 4: 
                    SerovOblachno.setValue (true);
            break;
            case 5: 
                    SerovPasmurno.setValue (true);
            break;
            case 6: 
                    SerovSunToSnow.setValue (true);
                    SerovSneg.setValue (true);
            break;
            case 7: 
                    SerovDojd.setValue (true);
                    SerovOblachno.setValue (true);
            break;
            default:
            alert ("Облачность для 'Серов' не задана");
            break;
        }

//Текстовые поля
    ControllTemperaturaDayS2.setValue (TemperaturaDay.text);
    ControllPressure2.setValue (Pressure.text);
    ControllWindSpeed2.setValue (WindSpeed.text);
    ControllHumidity2.setValue (Humidity.text);
    ControllTemperaturaDay12.setValue (TemperaturaDay12.text);
    ControllTemperaturaDay22.setValue (TemperaturaDay22.text);
    ControllTemperaturaDay32.setValue (TemperaturaDay32.text);
    IvdelTemper2.setValue (TemperaturaIvdel.text);
    UralskyTemper2.setValue (TemperaturaUralsky.text);
    TagilTemper2.setValue (TemperaturaTagil.text);
    TavdaTemper2.setValue (TemperaturaTavda.text);
    SerovTemper2.setValue (TemperaturaSerov.text);
    IrbitTemper2.setValue (TemperaturaIrbit.text);
    //ДропБоксы для главного
    ControllYasno2.setValue (false);

    ControllDojd2.setValue (false);
    ControllDojdGroza2.setValue (false);

    ControllSneg2.setValue (false);
    ControllOblachno2.setValue (false);
    ControllPasmurno2.setValue (false);
    //Облачность в Екатеринбурге
    switch (CloudedSkyDrop.selection.index)
    {
        case 0:
            ControllYasno2.setValue (true);
        break;
        case 1:
            ControllDojd2.setValue (true);
        break;
        case 2:
            ControllDojdGroza2.setValue (true);
        break;
        case 3:
            ControllSneg2.setValue (true);
        break;
        case 4:
            ControllOblachno2.setValue (true);
        break;
        case 5:
            ControllPasmurno2.setValue (true);
        break;

        default:
            alert ("Облачность для Екатеринбурга не задана");
       break;
    }
    //Направление ветра
    switch (WindRotation.selection.index)
    {
        case 0:
            ControllWindRotation2.setValue (0);
        break;
        case 1:
            ControllWindRotation2.setValue (45);
        break;
        case 2:
            ControllWindRotation2.setValue (90);
        break;
        case 3:
            ControllWindRotation2.setValue (135);
        break;
        case 4:
            ControllWindRotation2.setValue (180);
        break;
        case 5:
            ControllWindRotation2.setValue (225);
        break;
        case 6:
            ControllWindRotation2.setValue (270);
        break;
        case 7:
            ControllWindRotation2.setValue (315);
        break;
        case 8:
            ControllWindRotation2.setValue (360);
        break;
        default:
            alert ("Направление ветра не задано!");
        break;
    }

    //День недели
      switch (DayWeek2.selection.index)
        {
            case 0: 
                    ControllDayofWeek2.setValue (6);
            break;
            case 1: 
                    ControllDayofWeek2.setValue (7);
            break;
            case 2: 
                    ControllDayofWeek2.setValue (8);
            break;
            case 3: 
                    ControllDayofWeek2.setValue (9);
            break;
            case 4: 
                    ControllDayofWeek2.setValue (10);
            break;
            case 5: 
                    ControllDayofWeek2.setValue (11);
            break;
            case 6: 
                    ControllDayofWeek2.setValue (12);
            break;           
        }
    
    //3 Дня облачность
    //День первый
        ControllYasnoDay12.setValue (false);
        ControllDojdDay12.setValue (false);
        ControllDojdGrozaDay12.setValue (false);
        ControllSnegDay12.setValue (false);
        ControllOblachnoDay12.setValue (false);
        ControllPasmurnoDay12.setValue (false);
        ControllSunToSnowDay12.setValue(false);
        switch (CloudedSkyDropDay12.selection.index) 
        {
            case 0: 
                    ControllYasnoDay12.setValue (true);
            break;
            case 1: 
                    ControllDojdDay12.setValue (true);
            break;
            case 2: 
                    ControllDojdGrozaDay12.setValue (true);
            break;
            case 3: 
                    ControllSnegDay12.setValue (true);
            break;
            case 4: 
                    ControllOblachnoDay12.setValue (true);
            break;
            case 5: 
                    ControllPasmurnoDay12.setValue (true);
            break;
            case 6: 
                    ControllSunToSnowDay12.setValue (true);
                    ControllSnegDay12.setValue (true);
            break;
            case 7: 
                    ControllDojdDay12.setValue (true);
                    ControllOblachnoDay12.setValue (true);
            break;
            default:
            alert ("Облачность для 'День 1' не задано");
            break;
        }
    
        //День Второй
        ControllYasnoDay22.setValue (false);
        ControllDojdDay22.setValue (false);
        ControllDojdGrozaDay22.setValue (false);
        ControllSnegDay22.setValue (false);
        ControllOblachnoDay22.setValue (false);
        ControllPasmurnoDay22.setValue (false);
        ControllSunToSnowDay22.setValue(false);
        switch (CloudedSkyDropDay22.selection.index) 
        {
            case 0: 
                    ControllYasnoDay22.setValue (true);
            break;
            case 1: 
                    ControllDojdDay22.setValue (true);
            break;
            case 2: 
                    ControllDojdGrozaDay22.setValue (true);
            break;
            case 3: 
                    ControllSnegDay22.setValue (true);
            break;
            case 4: 
                    ControllOblachnoDay22.setValue (true);
            break;
            case 5: 
                    ControllPasmurnoDay22.setValue (true);
            break;
            case 6: 
                    ControllSunToSnowDay22.setValue (true);
                    ControllSnegDay22.setValue (true);
            break;           
            case 7: 
                    ControllDojdDay22.setValue (true);
                    ControllOblachnoDay22.setValue (true);
            break;
            default:
            alert ("Облачность для 'День 2' не задано");
            break;
        }
    
        //День Третий
        ControllYasnoDay32.setValue (false);
        ControllDojdDay32.setValue (false);
        ControllDojdGrozaDay32.setValue (false);
        ControllSnegDay32.setValue (false);
        ControllOblachnoDay32.setValue (false);
        ControllPasmurnoDay32.setValue (false);
        ControllSunToSnowDay32.setValue(false);
        switch (CloudedSkyDropDay32.selection.index) 
        {
            case 0: 
                    ControllYasnoDay32.setValue (true);
            break;
            case 1: 
                    ControllDojdDay32.setValue (true);
            break;
            case 2: 
                    ControllDojdGrozaDay32.setValue (true);
            break;
            case 3: 
                    ControllSnegDay32.setValue (true);
            break;
            case 4: 
                    ControllOblachnoDay32.setValue (true);
            break;
            case 5: 
                    ControllPasmurnoDay32.setValue (true);
            break;
            case 6: 
                    ControllSunToSnowDay32.setValue (true);
                    ControllSnegDay32.setValue (true);
            break;
            case 7: 
                    ControllDojdDay32.setValue (true);
                    ControllOblachnoDay32.setValue (true);
            break;
            default:
            alert ("Облачность для 'День 3' не задано");
            break;
        }
     //Облачность в области
    //Каменск-Уральский
        KamenskYasno2.setValue (false);
        KamenskDojd2.setValue (false);
        KamenskDojdGroza2.setValue (false);
        KamenskSneg2.setValue (false);
        KamenskOblachno2.setValue (false);
        KamenskPasmurno2.setValue (false);
        KamenskSunToSnow2.setValue(false);
        switch (CloudedSkyDropUralsky.selection.index) 
        {
            case 0: 
                    KamenskYasno2.setValue (true);
            break;
            case 1: 
                    KamenskDojd2.setValue (true);
            break;
            case 2: 
                    KamenskDojdGroza2.setValue (true);
            break;
            case 3: 
                    KamenskSneg2.setValue (true);
            break;
            case 4: 
                    KamenskOblachno2.setValue (true);
            break;
            case 5: 
                    KamenskPasmurno2.setValue (true);
            break;
            case 6: 
                    KamenskSunToSnow2.setValue (true);
                    KamenskSneg2.setValue (true);
            break;
            case 7: 
                    KamenskDojd2.setValue (true);
                    KamenskOblachno2.setValue (true);
            break;
            default:
            alert ("Облачность для 'Каменск-Уральского' не задана");
            break;
        }
         //Тавда
        TavdaYasno2.setValue (false);
        TavdaDojd2.setValue (false);
        TavdaDojdGroza2.setValue (false);
        TavdaSneg2.setValue (false);
        TavdaOblachno2.setValue (false);
        TavdaPasmurno2.setValue (false);
        TavdaSunToSnow2.setValue(false);
        switch (CloudedSkyDropTavda.selection.index) 
        {
            case 0: 
                    TavdaYasno2.setValue (true);
            break;
            case 1: 
                    TavdaDojd2.setValue (true);
            break;
            case 2: 
                    TavdaDojdGroza2.setValue (true);
            break;
            case 3: 
                    TavdaSneg2.setValue (true);
            break;
            case 4: 
                    TavdaOblachno2.setValue (true);
            break;
            case 5: 
                    TavdaPasmurno2.setValue (true);
            break;
            case 6: 
                    TavdaSunToSnow2.setValue (true);
                    TavdaSneg2.setValue (true);
            break;
           case 7: 
                    TavdaDojd2.setValue (true);
                    TavdaOblachno2.setValue (true);
            break;
            default:
            alert ("Облачность для 'Тавды' не задана");
            break;
        }
        //Ирбит
        IrbitYasno2.setValue (false);
        IrbitDojd2.setValue (false);
        IrbitDojdGroza2.setValue (false);
        IrbitSneg2.setValue (false);
        IrbitOblachno2.setValue (false);
        IrbitPasmurno2.setValue (false);
        IrbitSunToSnow2.setValue(false);
        switch (CloudedSkyDropIrbit.selection.index) 
        {
            case 0: 
                    IrbitYasno2.setValue (true);
            break;
            case 1: 
                    IrbitDojd2.setValue (true);
            break;
            case 2: 
                    IrbitDojdGroza2.setValue (true);
            break;
            case 3: 
                    IrbitSneg2.setValue (true);
            break;
            case 4: 
                    IrbitOblachno2.setValue (true);
            break;
            case 5: 
                    IrbitPasmurno2.setValue (true);
            break;
            case 6: 
                    IrbitSunToSnow2.setValue (true);
                    IrbitSneg2.setValue (true);
            break;
            case 7: 
                    IrbitDojd2.setValue (true);
                    IrbitOblachno2.setValue (true);
            break;
            default:
            alert ("Облачность для 'Ирбита' не задана");
            break;
        }
            //Тагил
        TagilYasno2.setValue (false);
        TagilDojd2.setValue (false);
        TagilDojdGroza2.setValue (false);
        TagilSneg2.setValue (false);
        TagilOblachno2.setValue (false);
        TagilPasmurno2.setValue (false);
        TagilSunToSnow2.setValue(false);
        switch (CloudedSkyDropTagil.selection.index) 
        {
            case 0: 
                    TagilYasno2.setValue (true);
            break;
            case 1: 
                    TagilDojd2.setValue (true);
            break;
            case 2: 
                    TagilDojdGroza2.setValue (true);
            break;
            case 3: 
                    TagilSneg2.setValue (true);
            break;
            case 4: 
                    TagilOblachno2.setValue (true);
            break;
            case 5: 
                    TagilPasmurno2.setValue (true);
            break;
            case 6: 
                    TagilSunToSnow2.setValue (true);
                    TagilSneg2.setValue (true);
            break;
            default:
            alert ("Облачность для 'Тагила' не задана");
            break;
            case 7: 
                    TagilDojd2.setValue (true);
                    TagilOblachno2.setValue (true);
            break;
        }
                //Ивдель
        IvdelYasno2.setValue (false);
        IvdelDojd2.setValue (false);
        IvdelDojdGroza2.setValue (false);
        IvdelSneg2.setValue (false);
        IvdelOblachno2.setValue (false);
        IvdelPasmurno2.setValue (false);
        IvdelSunToSnow2.setValue(false);
        switch (CloudedSkyDropIvdel.selection.index) 
        {
            case 0: 
                    IvdelYasno2.setValue (true);
            break;
            case 1: 
                    IvdelDojd2.setValue (true);
            break;
            case 2: 
                    IvdelDojdGroza2.setValue (true);
            break;
            case 3: 
                    IvdelSneg2.setValue (true);
            break;
            case 4: 
                    IvdelOblachno2.setValue (true);
            break;
            case 5: 
                    IvdelPasmurno2.setValue (true);
            break;
            case 6: 
                    IvdelSunToSnow2.setValue (true);
                    IvdelSneg2.setValue (true);
            break;
            case 7: 
                    IvdelDojd2.setValue (true);
                    IvdelOblachno2.setValue (true);
            break;
            default:
            alert ("Облачность для 'Ивделя' не задана");
            break;
        }
                    //Серов
        SerovYasno2.setValue (false);
        SerovDojd2.setValue (false);
        SerovDojdGroza2.setValue (false);
        SerovSneg2.setValue (false);
        SerovOblachno2.setValue (false);
        SerovPasmurno2.setValue (false);
        SerovSunToSnow2.setValue(false);
        switch (CloudedSkyDropSerov.selection.index) 
        {
            case 0: 
                    SerovYasno2.setValue (true);
            break;
            case 1: 
                    SerovDojd2.setValue (true);
            break;
            case 2: 
                    SerovDojdGroza2.setValue (true);
            break;
            case 3: 
                    SerovSneg2.setValue (true);
            break;
            case 4: 
                    SerovOblachno2.setValue (true);
            break;
            case 5: 
                    SerovPasmurno2.setValue (true);
            break;
            case 6: 
                    SerovSunToSnow2.setValue (true);
				  SerovSneg2.setValue (true);
            break;
            case 7: 
                    SerovDojd2.setValue (true);
                    SerovOblachno2.setValue (true);
            break;
            default:
            alert ("Облачность для 'Серов' не задана");
            break;
        }    
    
    
    alert ("Изменения внесены!");
}
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
    if (DayWeek.selection.index !=  6)
    {
        DayWeek2.selection  = DayWeek.selection.index+1;
    }
    else
    {
        DayWeek2.selection  = 0;
    }
}

DayWeek2.onChange = function ()
{
    switch (DayWeek2.selection.index)
        {
            case 0: 
                Day2Static2.text = "           Вторник";
                Day3Static2.text = "       Среда";
            break;
            case 1: 
                Day2Static2.text = "           Среда";
                Day3Static2.text = "       Четверг";
            break;
            case 2: 
                Day2Static2.text = "           Четверг";
                Day3Static2.text = "       Пятница";
            break;
            case 3: 
                Day2Static2.text = "           Пятница";
                Day3Static2.text = "       Суббота";
            break;
            case 4: 
                Day2Static2.text = "           Суббота";
                Day3Static2.text = "       Воскресенье";
            break;
            case 5: 
                Day2Static2.text = "           Воскресенье";
                Day3Static2.text = "       Понедельник";
            break;
            case 6: 
                Day2Static2.text = "           Понедельник";
                Day3Static2.text = "       Вторник";
            break;           
        }
   // DayWeek.selection  = DayWeek2.selection.index-1;
}
/*--------------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------Show_out_Palette----------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
PCW.show();
/*--------------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Functions-------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
//Поиск Композиции по имени в открытом проекте
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

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyStatus ()
{
 if (ControllPasmurno2.value==true)
{
    CloudedSkyDrop.selection = 5;
}
if (ControllOblachno2.value==true)
{
    CloudedSkyDrop.selection = 4;
}
if (ControllSneg2.value==true)
{
    CloudedSkyDrop.selection = 3;
}
if (ControllDojdGroza2.value==true)
{
    CloudedSkyDrop.selection = 2;
}
if (ControllDojd2.value==true)
{
    CloudedSkyDrop.selection = 1;
}

if (ControllYasno2.value==true)
{
    CloudedSkyDrop.selection = 0;
}
}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropUralskyStatus ()
{
if (KamenskDojdGroza.value==true)
{
    CloudedSkyDropUralsky.selection = 2;
}
if (KamenskSneg.value==true)
{
    CloudedSkyDropUralsky.selection = 3;
}
if (KamenskDojd.value==true)
{
    CloudedSkyDropUralsky.selection = 1;
}
 if (KamenskPasmurno.value==true)
{
    CloudedSkyDropUralsky.selection = 5;
}
if (KamenskOblachno.value==true)
{
    CloudedSkyDropUralsky.selection = 4;
}
if (KamenskYasno.value==true)
{
    CloudedSkyDropUralsky.selection = 0;
}
 if (KamenskSunToSnow.value==true)
{
   CloudedSkyDropUralsky.selection = 6;
}
 if (KamenskDojd.value==true && KamenskOblachno.value==true)
{
    CloudedSkyDropUralsky.selection = 7;
}
}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropSerovStatus ()
{
if (SerovDojdGroza.value==true)
{
    CloudedSkyDropSerov.selection = 2;
}
if (SerovSneg.value==true)
{
    CloudedSkyDropSerov.selection = 3;
}
if (SerovDojd.value==true)
{
    CloudedSkyDropSerov.selection = 1;
}
 if (SerovPasmurno.value==true)
{
    CloudedSkyDropSerov.selection = 5;
}
if (SerovOblachno.value==true)
{
    CloudedSkyDropSerov.selection = 4;
}
if (SerovYasno.value==true)
{
    CloudedSkyDropSerov.selection = 0;
}
 if (SerovDojd.value==true && SerovOblachno.value==true)
{
    CloudedSkyDropSerov.selection = 7;
}
 if (SerovSunToSnow.value==true)
{
   CloudedSkyDropSerov.selection = 6;
}
}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropTavdaStatus ()
{
if (TavdaDojdGroza.value==true)
{
    CloudedSkyDropTavda.selection = 2;
}
if (TavdaSneg.value==true)
{
    CloudedSkyDropTavda.selection = 3;
}
if (TavdaDojd.value==true)
{
    CloudedSkyDropTavda.selection = 1;
}
 if (TavdaPasmurno.value==true)
{
    CloudedSkyDropTavda.selection = 5;
}
if (TavdaOblachno.value==true)
{
    CloudedSkyDropTavda.selection = 4;
}
if (TavdaYasno.value==true)
{
    CloudedSkyDropTavda.selection = 0;
}
 if (TavdaDojd.value==true && TavdaOblachno.value==true)
{
    CloudedSkyDropTavda.selection = 7;
}
 if (TavdaSunToSnow.value==true)
{
   CloudedSkyDropTavda.selection = 6;
}
}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropIrbitStatus ()
{
if (IrbitDojdGroza.value==true)
{
    CloudedSkyDropIrbit.selection = 2;
}
if (IrbitSneg.value==true)
{
    CloudedSkyDropIrbit.selection = 3;
}
if (IrbitDojd.value==true)
{
    CloudedSkyDropIrbit.selection = 1;
}
 if (IrbitPasmurno.value==true)
{
    CloudedSkyDropIrbit.selection = 5;
}
if (IrbitOblachno.value==true)
{
    CloudedSkyDropIrbit.selection = 4;
}
if (IrbitYasno.value==true)
{
    CloudedSkyDropIrbit.selection = 0;
}
 if (IrbitDojd.value==true && IrbitOblachno.value==true)
{
    CloudedSkyDropIrbit.selection = 7;
}
 if (IrbitSunToSnow.value==true)
{
   CloudedSkyDropIrbit.selection = 6;
}
}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropTagilStatus ()
{
if (TagilDojdGroza.value==true)
{
    CloudedSkyDropTagil.selection = 2;
}
if (TagilSneg.value==true)
{
    CloudedSkyDropTagil.selection = 3;
}
if (TagilDojd.value==true)
{
    CloudedSkyDropTagil.selection = 1;
}
 if (TagilPasmurno.value==true)
{
    CloudedSkyDropTagil.selection = 5;
}
if (TagilOblachno.value==true)
{
    CloudedSkyDropTagil.selection = 4;
}
if (TagilYasno.value==true)
{
    CloudedSkyDropTagil.selection = 0;
    
}
 if (TagilDojd.value==true && TagilOblachno.value==true)
{
    CloudedSkyDropTagil.selection = 7;
}
 if (TagilSunToSnow.value==true)
{
   CloudedSkyDropTagil.selection = 6;
}
}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropIvdelStatus ()
{
if (IvdelDojdGroza.value==true)
{
    CloudedSkyDropIvdel.selection = 2;
}

if (IvdelSneg.value==true)
{
    CloudedSkyDropIvdel.selection = 3;
}
if (IvdelDojd.value==true)
{
    CloudedSkyDropIvdel.selection = 1;
}
 if (IvdelPasmurno.value==true)
{
    CloudedSkyDropIvdel.selection = 5;
}
if (IvdelOblachno.value==true)
{
    CloudedSkyDropIvdel.selection = 4;
}
if (IvdelYasno.value==true)
{
    CloudedSkyDropIvdel.selection = 0;
}
 if (IvdelDojd.value==true && IvdelOblachno.value==true)
{
    CloudedSkyDropIvdel.selection = 7;
}
 if (IvdelSunToSnow.value==true)
{
   CloudedSkyDropIvdel.selection = 6;
}
}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropDaysStatus ()
{
if (ControllDojdGrozaDay1.value==true)
{
    CloudedSkyDropDay1.selection = 2;
}
if (ControllSnegDay1.value==true)
{
    CloudedSkyDropDay1.selection = 3;
}
if (ControllDojdDay1.value==true)
{
    CloudedSkyDropDay1.selection = 1;
}
 if (ControllPasmurnoDay1.value==true)
{
    CloudedSkyDropDay1.selection = 5;
}
if (ControllOblachnoDay1.value==true)
{
    CloudedSkyDropDay1.selection = 4;
}
if (ControllYasnoDay1.value==true)
{
    CloudedSkyDropDay1.selection = 0;
}
 if (ControllDojdDay1.value==true && ControllOblachnoDay1.value==true)
{
    CloudedSkyDropDay1.selection = 7;
}
 if (ControllSunToSnowDay1.value==true)
{
    CloudedSkyDropDay1.selection = 6;
}

if (ControllDojdGrozaDay2.value==true)
{
    CloudedSkyDropDay2.selection = 2;
}
if (ControllSnegDay2.value==true)
{
    CloudedSkyDropDay2.selection = 3;
}
if (ControllDojdDay2.value==true)
{
    CloudedSkyDropDay2.selection = 1;
}
 if (ControllPasmurnoDay2.value==true)
{
    CloudedSkyDropDay2.selection = 5;
}
if (ControllOblachnoDay2.value==true)
{
    CloudedSkyDropDay2.selection = 4;
}
if (ControllYasnoDay2.value==true)
{
    CloudedSkyDropDay2.selection = 0;
}
 if (ControllDojdDay2.value==true && ControllOblachnoDay2.value==true)
{
    CloudedSkyDropDay2.selection = 7;
}
 if (ControllSunToSnowDay2.value==true)
{
    CloudedSkyDropDay2.selection = 6;
}


if (ControllDojdGrozaDay3.value==true)
{
    CloudedSkyDropDay3.selection = 2;
}
if (ControllSnegDay3.value==true)
{
    CloudedSkyDropDay3.selection = 3;
}
if (ControllDojdDay3.value==true)
{
    CloudedSkyDropDay3.selection = 1;
}
 if (ControllPasmurnoDay3.value==true)
{
    CloudedSkyDropDay3.selection = 5;
}
if (ControllOblachnoDay3.value==true)
{
    CloudedSkyDropDay3.selection = 4;
}
if (ControllYasnoDay3.value==true)
{
    CloudedSkyDropDay3.selection = 0;
}
 if (ControllDojdDay3.value==true && ControllOblachnoDay3.value==true)
{
    CloudedSkyDropDay3.selection = 7;
}
 if (ControllSunToSnowDay3.value==true)
{
    CloudedSkyDropDay3.selection = 6;
}

}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabCloudedSkyDropDay32Status ()
{

if (ControllDojdGrozaDay32.value==true)
{
    CloudedSkyDropDay32.selection = 2;
}
if (ControllSnegDay32.value==true)
{
    CloudedSkyDropDay32.selection = 3;
}
if (ControllDojdDay32.value==true)
{
    CloudedSkyDropDay32.selection = 1;
}
 if (ControllPasmurnoDay32.value==true)
{
    CloudedSkyDropDay32.selection = 5;
}
if (ControllOblachnoDay32.value==true)
{
    CloudedSkyDropDay32.selection = 4;
}
if (ControllYasnoDay32.value==true)
{
    CloudedSkyDropDay32.selection = 0;
}
 if (ControllDojdDay32.value==true && ControllOblachnoDay32.value==true)
{
    CloudedSkyDropDay32.selection = 7;
}
 if (ControllSunToSnowDay32.value==true)
{
    CloudedSkyDropDay32.selection = 6;
}

}   
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabWindRotationStatus ()
{
  
    switch (ControllWindRotation.value) 
    {
        case 0: 
            WindRotation.selection = 0;
        break;
        case 45: 
            WindRotation.selection = 1;
        break;
        case 90: 
            WindRotation.selection = 2;
        break;
        case 135: 
            WindRotation.selection = 3;
        break;
        case 180: 
            WindRotation.selection = 4;
        break;
        case 225: 
            WindRotation.selection = 5;
        break;
        case 270: 
            WindRotation.selection = 6;
        break;
        case 315: 
            WindRotation.selection = 7;
        break;
        case 360: 
            WindRotation.selection = 8;
        break;
    } 
}
/*--------------------------------------------------------------------------------------------------------------------------*/


/*--------------------------------------------------------------------------------------------------------------------------*/
function GrabDayWeekStatus2 ()
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
            case 12: 
                DayWeek2.selection = 0;
                Day2Static2.text = "           Вторник";
                Day3Static2.text = "       Среда";
            break;
            case 6: 
                DayWeek2.selection = 1;
                Day2Static2.text = "           Среда";
                Day3Static2.text = "       Четверг";
            break;
            case 7: 
                DayWeek2.selection = 2;
                Day2Static2.text = "           Четверг";
                Day3Static2.text = "       Пятница";
            break;
            case 8: 
                DayWeek2.selection = 3;
                Day2Static2.text = "           Пятница";
                Day3Static2.text = "       Суббота";
            break;
            case 9: 
                DayWeek2.selection = 4;
                Day2Static2.text = "           Суббота";
                Day3Static2.text = "       Воскресенье";
            break;
            case 10: 
                DayWeek2.selection = 5;
                Day2Static2.text = "           Воскресенье";
                Day3Static2.text = "       Понедельник";
            break;
            case 11: 
                DayWeek2.selection = 6;
                Day2Static2.text = "           Понедельник";
                Day3Static2.text = "       Вторник";
            break;           
        }
}    
/*--------------------------------------------------------------------------------------------------------------------------*/    

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

function checkExist (CheckPath)
{
    var checkFile = File(CheckPath);
    if (checkFile.exists)
    {
            return 1;
    }
    return 0;
}

XmlButton.onClick = function () 
{
  LoadFromXML();
}

function LoadFromXML ()
{
    if (checkExist(xmlPath + "/" + dateDayToZavtra + dateMonth+dateYear+".xml"))
    {
        var loadFile = File(xmlPath + "/" + dateDayToZavtra + dateMonth+dateYear+".xml");
        $.write ("Файл найден")
    }
    else 
    {
        var loadFile = File.openDialog("Выберете файл для загрузки","XML:*.xml", false);  
        $.write ("Файл выбран")
    }
        loadFile.open('r', undefined, undefined);
        var loadRead = loadFile.read();
        var xmlString = loadRead.toString();  
        var myXML = new XML(xmlString);  
        myXML.toXMLString();  
        $.write ("Файл распарсен")
        CloudedSkyDrop.selection = parseInt(myXML.Ekat.cloud);
        TemperaturaDay.text = myXML.Ekat.tempDay;
        TemperaturaNight.text = myXML.Ekat.tempNight;
        Pressure.text = myXML.Ekat.pressure;
        Humidity.text = myXML.Ekat.Humidity;
        midWind = (parseInt(myXML.Ekat.windMin)+parseInt(myXML.Ekat.windMax))/2
        WindSpeed.text = parseInt(midWind);
        DayWeek.selection = parseInt(myXML.dayweek);
        
        for (var i=0; i<citys.length;i++)
       { 
           eval ("Temperatura"+  citys[i] + ".text = myXML." + citys[i] + ".temp");
           eval ("CloudedSkyDrop"+  citys[i] + ".selection = parseInt(myXML." + citys[i] + ".cloud)");
       }
        
        CloudedSkyDropDay1.selection = parseInt(myXML.Ekat_week1.cloud);
        CloudedSkyDropDay2.selection = parseInt(myXML.Ekat_week2.cloud);
        CloudedSkyDropDay3.selection = parseInt(myXML.Ekat_week3.cloud);
        TemperaturaDay1.text =  myXML.Ekat_week1.temp;
        TemperaturaDay2.text =  myXML.Ekat_week2.temp;
        TemperaturaDay3.text =  myXML.Ekat_week3.temp;

        loadFile.close();
        return 1;
}
/*--------------------------------------------------------------------------------------------------------------------------*/    
//               for fix strings