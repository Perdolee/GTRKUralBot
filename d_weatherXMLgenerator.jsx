//Generator XML for Weather
//Created by Perdolee
//Author  - Mikhail Sorokin

var myProj = app.project;
//DayWeek
var d = new Date();
var weekday = new Array(7);
weekday[0] =  "ВС";
weekday[1] = "ПН";
weekday[2] = "ВТ";
weekday[3] = "СР";
weekday[4] = "ЧТ";
weekday[5] = "ПТ";
weekday[6] = "СБ";
var DayToday = weekday[d.getDay()];

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
        dateDayToZavtra = "0" + (dateTime.getDate());
    }
else
    {
   dateDayToZavtra = "0" + (dateTime.getDate());
   }
}  
else
{
   dateDayToZavtra = dateTime.getDate();   
}
dateYear = dateTime.getYear()-100;
var CurrentPath = ("/f/000_POGODA/xml");
var FolderXML = Folder (CurrentPath);
//EkatMainVariable

var tempDay = 0;
var tempNight = 0;
var cloud = 0;
/*
     0 = Ясно
     1 = Дождь
     2 = Гроза
     3 = Снег
     4 = Переменная
     5 = Пасмурно
     6 = Облачно с дождем
     7 = Мокрый снег
     8 = Гроза Дождь Солнце
  */
var pressure = 0;
var windMin = 0;
var windMax = 0;
var windRotation = 0;
var Humidity = 0;

//gorodaMainVar
citys = ['Ivdel', 'Serov', 'Tavda', 'Tagil', 'Kamensk', 'Irbit', 'Krasnouf', 'Verhot'];
citysRU = ['Ивдель', 'Серов', 'Тавда', 'Тагил', 'Каменск', 'Ирбит', 'Красноуфимск', 'Верхотурье'];

for (var i=0; i<citys.length;i++)
{
    eval(citys[i]+"Temp = 0");
    eval(citys[i]+"Cloud = 0");    
 }

for (i = 1; i<4; i++)
{
     eval("TempDay"+i+" = 0");
     eval("CloudDay"+i+" = 0");
}

if (DayToday=="ПТ")
{
    var D1_tempDay = 0;
    var D1_tempNight = 0;
    var D1_cloud = 0;
    var D1_pressure = 0;
    var D1_windMin = 0;
    var D1_windMax = 0;
    var D1_windRotation = 0;
    var D1_Humidity = 0;

    var D2_tempDay = 0;
    var D2_tempNight = 0;
    var D2_cloud = 0;
    var D2_pressure = 0;
    var D2_windMin = 0;
    var D2_windMax = 0;
    var D2_windRotation = 0;
    var D2_Humidity = 0;
}

//var oldXML = File (CurrentPath + dateDayToZavtra + dateMonth+dateYear+".xml");
/*
out = oldXML.open('w', undefined, undefined);
if (oldXML.exists==true)
{
    $.write("Consolka");
    oldXML.encoding = "UTF-8";
    oldXML.lineFeed = "Windows";
    oldXML.write ("New Text");
    oldXML.close();
}
*/
/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------INTERFACE-------------------------------------------------------*/
var PCW = new Window ("palette", "Управление погодой", undefined, {closeButton: false}); 
PCW.alignChildren = "left";
PCW.spacing = 8;

/*
     0 = Ясно
     1 = Дождь
     2 = Гроза
     3 = Снег
     4 = Переменная
     5 = Пасмурно
     6 = Облачно с дождем
     7 = Мокрый снег
     8 = Гроза Дождь Солнце
  */
var CloudedSkyGroup = PCW.add ("group");
CloudedSkyGroup.add ("statictext", undefined, "Облачность:");
var PCloud = CloudedSkyGroup.add ("dropdownlist", undefined, ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Дождь со снегом", "Гроза Дождь Солнце"]);
PCloud.selection = cloud;
/*--------------------------------------------------------------------------------------------------------------------------*/
var TemperaturaGroup = PCW.add ("group");
TemperaturaGroup.add ("statictext", undefined, "Температура день:");
var PtempDay = TemperaturaGroup.add ("edittext", undefined, tempDay);PtempDay.active = true;PtempDay.characters = 3;
TemperaturaGroup.add ("statictext", undefined, "°C");
TemperaturaGroup.add ("statictext", undefined, "|   Температура ночь:");
var PtempNight = TemperaturaGroup.add ("edittext", undefined, tempNight);PtempNight.active = true;PtempNight.characters = 3;
TemperaturaGroup.add ("statictext", undefined, "°C");
/*--------------------------------------------------------------------------------------------------------------------------*/
var PresWindGroup = PCW.add ("group");
PresWindGroup.add ("statictext", undefined, "Давление:");
var PPressure = PresWindGroup.add ("edittext", undefined, pressure);PPressure.active = true;PPressure.characters = 3;
PresWindGroup.add ("statictext", undefined, "мм   рт.  ст.  ");
PresWindGroup.add ("statictext", undefined, "|   Влажность:");
var PHumidity = PresWindGroup.add ("edittext", undefined, Humidity);PHumidity.active = true;PHumidity.characters = 3;
PresWindGroup.add ("statictext", undefined, "%");
/*--------------------------------------------------------------------------------------------------------------------------*/
var WindGroup = PCW.add ("group");
WindGroup.add ("statictext", undefined, "Скорость ветра - ");
WindGroup.add ("statictext", undefined, "Min:");
var PwindMin = WindGroup.add ("edittext", undefined, windMin);PwindMin.active = true;PwindMin.characters = 3;
WindGroup.add ("statictext", undefined, "| ");
WindGroup.add ("statictext", undefined, "Max:");
var PwindMax = WindGroup.add ("edittext", undefined, windMax);PwindMax.active = true;PwindMax.characters = 3;
WindGroup.add ("statictext", undefined, "м/с");
var PwindRotation = WindGroup.add ("dropdownlist", undefined, ["Ю", "ЮВ", "В", "ВС", "С", "СЗ", "З", "ЗВ"]);
PwindRotation.selection = windRotation;
/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodaNa3Dnya = PCW.add ("panel", undefined, "Погода на 3 дня");
PogodaNa3Dnya.preferredSize.width = 400;
var DayWeekGroup = PogodaNa3Dnya.add ("group");
var DayWeek = DayWeekGroup.add ("dropdownlist", undefined, ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]);
var Day2Static = DayWeekGroup.add ("statictext",  ["", "" , 100, "15"], "");
var Day3Static = DayWeekGroup.add ("statictext", ["", "" , 110, "15"], "");
GrabDayWeekStatus ();
/*--------------------------------------------------------------------------------------------------------------------------*/
var DayWeekTemperaturaGroup = PogodaNa3Dnya.add ("group");
var PTempDay1 = DayWeekTemperaturaGroup.add ("edittext", undefined, TempDay1);PTempDay1.active = true;PTempDay1.characters = 3;
DayWeekTemperaturaGroup.add ("statictext", undefined, "°C");
DayWeekTemperaturaGroup.add ("statictext", ["", "" , 40, "15"], "");
var PTempDay2 = DayWeekTemperaturaGroup.add ("edittext", undefined, TempDay2);PTempDay2.active = true;PTempDay2.characters = 3;
DayWeekTemperaturaGroup.add ("statictext", undefined, "°C");
DayWeekTemperaturaGroup.add ("statictext", ["", "" , 30, "15"], "");
var PTempDay3 = DayWeekTemperaturaGroup.add ("edittext", undefined, TempDay3);PTempDay3.active = true;PTempDay3.characters = 3;
DayWeekTemperaturaGroup.add ("statictext", undefined, "°C");
/*--------------------------------------------------------------------------------------------------------------------------*/
var CloudedSkyDropDay3Group = PogodaNa3Dnya.add ("group");
var PCloudDay1 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Дождь со снегом", "Гроза Дождь Солнце"]);
var PCloudDay2 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Дождь со снегом", "Гроза Дождь Солнце"]);
var PCloudDay3 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Облачно с дождем", "Дождь со снегом", "Гроза Дождь Солнце"]);
PCloudDay1.selection = CloudDay1;
PCloudDay2.selection = CloudDay2;
PCloudDay3.selection = CloudDay3;
/*--------------------------------------------------------------------------------------------------------------------------*/

/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodavObl = PCW.add ("panel", undefined, "Погода в городах области");
PogodavObl.preferredSize.width = 400;
PogodavObl.alignChildren = "left";
for (var i=0; i<citys.length;i++)
{
    eval ("var " + citys[i] + "Group = PogodavObl.add ('group');");
    eval ("" + citys[i] + "Group.add ('statictext', ['', '' , 110, '15'], ' " + citysRU[i] + ":');");
    eval ("var Temperatura" + citys[i] + " = " + citys[i] + "Group.add ('edittext', ['', '' , 40, '22'], " + citys[i]+"Temp);Temperatura"+citys[i]+".active = true;Temperatura"+citys[i]+".characters = 3;");
    eval ("" + citys[i] + "Group.add ('statictext', ['', '' , 40, '15'], '°C')");
    eval ("var P" + citys[i] + "Cloud = " + citys[i]+ "Group.add ('dropdownlist', ['', '' , 140, '22'], ['Ясно', 'Дождь', 'Гроза', 'Снег', 'Облачно с прояснениями', 'Пасмурно', 'Дождь со снегом', 'Облачно с дождем']);");
    eval("P" + citys[i] + "Cloud.selection = " + citys[i]+"Cloud;");
}
/*--------------------------------------------------------------------------------------------------------------------------*/

PCW.add ("panel", [0,0,400,3]);
var ButtonsGroup2 = PCW.add ("group");
ButtonsGroup2.add ("statictext", undefined, "Путь:");
var PathButton = ButtonsGroup2.add ("button", [-80,15,140,45], CurrentPath);
var NameButton = ButtonsGroup2.add ("button", [-40,15,90,45],  dateDayToZavtra + dateMonth+dateYear+".xml");
PathButton.enabled = false;
PCW.add ("panel", [0,0,400,3]);
var BottonGroup = PCW.add ("group");
var SaveButton = BottonGroup.add ("button", [-100,0,50,30], "Сохранить");
var LoadButton = BottonGroup.add ("button", [-100,0,50,30], "Загрузить");
var CloseButton = BottonGroup.add ("button", [0,0,80,30], "Закрыть");
/*--------------------------------------------------------------------------------------------------------------------------*/

PCW.show();
/*--------------------------------------------------INTERFACE-------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

if (checkExist(CurrentPath + "/" + NameButton.text))
{
        LoadFromXML(0)
}

/*--------------------------------------------------------------------------------------------------------------------------*/
/*--------------------------------------------------FUNCTIONS-------------------------------------------------------*/
SaveButton.onClick = function () 
{
       var saveFile = new File(CurrentPath + "/" + NameButton.text);
       var out = saveFile.open('w', undefined, undefined);
       if (out == false) {
           alert ("Неудалось записать файл! :c");
           return 0;
       }
        
       saveFile.writeln ("<xml>");
       saveFile.writeln ("  <Ekat>");
       saveFile.writeln ("      <tempDay>" + PtempDay.text + "</tempDay>");
       saveFile.writeln ("      <tempNight>" + PtempNight.text + "</tempNight>");
       saveFile.writeln ("      <cloud>" + PCloud.selection.index + "</cloud>");
       saveFile.writeln ("      <pressure>" + PPressure.text + "</pressure>");
       saveFile.writeln ("      <windMin>" + PwindMin.text + "</windMin>");
       saveFile.writeln ("      <windMax>" + PwindMax.text + "</windMax>");
       saveFile.writeln ("      <windRotation>" + PwindRotation.selection.index + "</windRotation>");
       saveFile.writeln ("      <Humidity>" + PHumidity.text + "</Humidity>");
       saveFile.writeln ("  </Ekat>");
       
       for (var i=0; i<citys.length;i++)
       {
           saveFile.writeln ("  <" + citys[i] + ">");
           temp = eval( "Temperatura" + citys[i] + ".text");
           saveFile.writeln ("      <temp>" + temp + "</temp>");
           cloud = eval( "P" + citys[i] + "Cloud.selection.index");
           saveFile.writeln ("      <cloud>" + cloud + "</cloud>");  
           saveFile.writeln ("  </" + citys[i] + ">");
        }
       saveFile.writeln ("  <dayweek>" + DayWeek.selection.index + "</dayweek>");
       
       saveFile.writeln ("  <Ekat_week1>");
       saveFile.writeln ("      <temp>" + PTempDay1.text + "</temp>");
       saveFile.writeln ("      <cloud>" + PCloudDay1.selection.index + "</cloud>");  
       saveFile.writeln ("  </Ekat_week1>");
       saveFile.writeln ("  <Ekat_week2>");
       saveFile.writeln ("      <temp>" + PTempDay2.text + "</temp>");
       saveFile.writeln ("      <cloud>" + PCloudDay2.selection.index + "</cloud>");  
       saveFile.writeln ("  </Ekat_week2>");
       saveFile.writeln ("  <Ekat_week3>");
       saveFile.writeln ("      <temp>" + PTempDay3.text + "</temp>");
       saveFile.writeln ("      <cloud>" + PCloudDay3.selection.index + "</cloud>");  
       saveFile.writeln ("  </Ekat_week3>");
       saveFile.writeln ("</xml>");
       saveFile.close();
       alert ("Создан файл: " + CurrentPath + "/" + NameButton.text);         
}    

LoadButton.onClick = function () 
{
        if (LoadFromXML(1))
        {
                alert("Файл загружен"); 
        }
        else
        {
                alert ("Файл загружен с ошибкой");
        }
}    



NameButton.onClick = function () 
{
  //CurrentPath = Temp.selectDlg().fullName;
  //CurrentPath = FolderXML.
  //PathButton.text = CurrentPath;
  newPath = File.saveDialog ("Сохранить как...", "XML:*.xml");
  PathButton.text = newPath.path;
  CurrentPath  = newPath.path;
  FolderXML = Folder (CurrentPath);
  NameButton.text = newPath.name;
  //File.
  //CurrentPath  
}

CloseButton.onClick = function () 
{
    PCW.hide();
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

function LoadFromXML (fromFile)
{
        if (fromFile)
        {
        var loadFile = File.openDialog("Выберете файл для загрузки","XML:*.xml", false);  
        }
        else
        {
            var loadFile = File(CurrentPath + "/" + dateDayToZavtra + dateMonth+dateYear+".xml");
        }
        loadFile.open('r', undefined, undefined);
        var loadRead = loadFile.read();
        var xmlString = loadRead.toString();  
        var myXML = new XML(xmlString);  
        myXML.toXMLString();  
        PCloud.selection = parseInt(myXML.Ekat.cloud);
        PtempDay.text = myXML.Ekat.tempDay;
        PtempNight.text = myXML.Ekat.tempNight;
        PPressure.text = myXML.Ekat.pressure;
        PHumidity.text = myXML.Ekat.Humidity;
        PwindMin.text = myXML.Ekat.windMin;
        PwindMax.text = myXML.Ekat.windMax;
        PwindRotation.text = myXML.Ekat.windRotation;
        
        for (var i=0; i<citys.length;i++)
       { 
           eval ("Temperatura"+  citys[i] + ".text = myXML." + citys[i] + ".temp");
           eval ("P"+  citys[i] + "Cloud.selection = parseInt(myXML." + citys[i] + ".cloud)");
       }
        DayWeek.selection = parseInt(myXML.dayweek);
        
        PCloudDay1.selection = parseInt(myXML.Ekat_week1.cloud);
        PCloudDay2.selection = parseInt(myXML.Ekat_week2.cloud);
        PCloudDay3.selection = parseInt(myXML.Ekat_week3.cloud);
        PTempDay1.text =  myXML.Ekat_week1.temp;
        PTempDay2.text =  myXML.Ekat_week2.temp;
        PTempDay3.text =  myXML.Ekat_week3.temp;

        loadFile.close();
        //alert("Файл загружен: " + loadFile.fullName); 
        return 1;
}

function GrabDayWeekStatus ()
{
    switch (d.getDay()+1%7)
        {
            case 0: 
                DayWeek.selection = 0;
                Day2Static.text = "           Вторник";
                Day3Static.text = "       Среда";
            break;
            case 1: 
                DayWeek.selection = 1;
                Day2Static.text = "           Среда";
                Day3Static.text = "       Четверг";
            break;
            case 2: 
                DayWeek.selection = 2;
                Day2Static.text = "           Четверг";
                Day3Static.text = "       Пятница";
            break;
            case 3: 
                DayWeek.selection = 3;
                Day2Static.text = "           Пятница";
                Day3Static.text = "       Суббота";
            break;
            case 4: 
                DayWeek.selection = 4;
                Day2Static.text = "           Суббота";
                Day3Static.text = "       Воскресенье";
            break;
            case 5: 
                DayWeek.selection = 5;
                Day2Static.text = "           Воскресенье";
                Day3Static.text = "       Понедельник";
            break;
            case 6: 
                DayWeek.selection = 6;
                Day2Static.text = "           Понедельник";
                Day3Static.text = "       Вторник";
            break;           
        }
} 

CloseButton.onClick = function () 
{
    PCW.hide();
}

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
    for (var i=0; i<citys.length;i++)
    {
        eval(D1_citys[i]+"Temp = 0");
        eval(D1_citys[i]+"Cloud = 0");    
        eval(D2_citys[i]+"Temp = 0");
        eval(D2_citys[i]+"Cloud = 0");    
     }
}
//alert (daysInMonth(3,2017));
/*--------------------------------------------------FUNCTIONS-------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/
