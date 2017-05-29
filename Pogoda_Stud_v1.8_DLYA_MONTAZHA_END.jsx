//~ Copyright 2017-2017 Mikhail Sorokin
//~  Original sources are available at 

//~  Licensed under the Apache License, Version 2.0 (the "License");
//~  you may not use this file except in compliance with the License.
//~  You may obtain a copy of the License at

//~  http://www.apache.org/licenses/LICENSE-2.0

//~  Unless required by applicable law or agreed to in writing, software
//~  distributed under the License is distributed on an "AS IS" BASIS,
//~  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//~  See the License for the specific language governing permissions and
//~  limitations under the License.
//СКРИПТ ДЛЯ МОНТАЖА студийной погоды!!111!!1
//temp = mask("Mask 1").maskPath;

var myProj = app.project;
var ControllLayer = searchCompByName("POGODA_DATA").layer("CONTROLL");
citys = ['Ivdel', 'Serov', 'Tavda', 'Tagil', 'Kamensk', 'Irbit', 'Krasnoufimsk', 'Verhotur'];
citysRU = ['Ивдель', 'Серов', 'Тавда', 'Тагил', 'Каменск', 'Ирбит', 'Красноуфимск', 'Верхотурье'];
SegodnyaLayer = searchCompByName("POGODA_DATA").layer("Segodnya");
Setka1Layer = searchCompByName("POGODA_DATA").layer("SETKA_BLUE_1");
Setka2Layer = searchCompByName("POGODA_DATA").layer("SETKA_BLUE_2");
Setka3Layer = searchCompByName("POGODA_DATA").layer("SETKA_BLUE_3");
Setka4Layer = searchCompByName("POGODA_DATA").layer("SETKA_BLUE_4");
Goroda1Layer = searchCompByName("POGODA_DATA").layer("GORODA_1");
Goroda2Layer = searchCompByName("POGODA_DATA").layer("GORODA_2");
DnyLayer = searchCompByName("POGODA_DATA").layer("3-DAYS");
EndLayer = searchCompByName("POGODA_DATA").layer("endl");

var ControllTemperaturaNight = ControllLayer.effect("Температура_Ночь")("Slider");
var ControllTemperaturaDay = ControllLayer.effect("Температура_День")("Slider");
var ControllPressure = ControllLayer.effect("Давление")("Slider");
var ControllWindSpeed = ControllLayer.effect("Ветер")("Slider");
var ControllHumidity = ControllLayer.effect("Влажность")("Slider");
var ControllOblachnost = ControllLayer.effect("Облачность")("Slider");

var ControllDayofWeek = ControllLayer.effect("День_недели")("Slider");
var ControllTemperaturaDay1 = ControllLayer.effect("День1_Температура")("Slider");
var ControllTemperaturaDay2 = ControllLayer.effect("День2_Температура")("Slider");
var ControllTemperaturaDay3 = ControllLayer.effect("День3_Температура")("Slider");
var ControllOblachnostDay1 = ControllLayer.effect("День1_Облачность")("Slider");
var ControllOblachnostDay2 = ControllLayer.effect("День2_Облачность")("Slider");
var ControllOblachnostDay3 = ControllLayer.effect("День3_Облачность")("Slider");

var Ivdel_ControllTemperatura = ControllLayer.effect("Ивдель_Температура")("Slider");
var Serov_ControllTemperatura = ControllLayer.effect("Серов_Температура")("Slider");
var Verhotur_ControllTemperatura = ControllLayer.effect("Верхотурье_Температура")("Slider");
var Tagil_ControllTemperatura = ControllLayer.effect("Тагил_Температура")("Slider");
var Kamensk_ControllTemperatura = ControllLayer.effect("Каменск_Температура")("Slider");
var Krasnoufimsk_ControllTemperatura = ControllLayer.effect("Красноуфимск_Температура")("Slider");
var Tavda_ControllTemperatura = ControllLayer.effect("Тавда_Температура")("Slider");
var Irbit_ControllTemperatura = ControllLayer.effect("Ирбит_Температура")("Slider");
var Ivdel_ControllOblachnost = ControllLayer.effect("Ивдель_Облачность")("Slider");
var Serov_ControllOblachnost = ControllLayer.effect("Серов_Облачность")("Slider");
var Verhotur_ControllOblachnost = ControllLayer.effect("Верхотурье_Облачность")("Slider");
var Tagil_ControllOblachnost = ControllLayer.effect("Тагил_Облачность")("Slider");
var Kamensk_ControllOblachnost = ControllLayer.effect("Каменск_Облачность")("Slider");
var Krasnoufimsk_ControllOblachnost = ControllLayer.effect("Красноуфимск_Облачность")("Slider");
var Tavda_ControllOblachnost = ControllLayer.effect("Тавда_Облачность")("Slider");
var Irbit_ControllOblachnost = ControllLayer.effect("Ирбит_Облачность")("Slider");


//===================Коэффициент для длины===================
var koeff=0.25;
//============================================================


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
var dateYear = dateTime.getYear()-100;
var CurrentPath = ("/e/000_POGODA/000_GOTOVOE/watch/");
var xmlPath = ("/f/000_POGODA/xml"); 
var mode = 0;
var Temp = (Folder (CurrentPath));
$.evalFile(decodeURI(File($.fileName).parent)  + "/lib/loadMode.jsx");
loadMode();

var PCW = new Window ("palette", "Управление погодой", undefined, {closeButton: false}); 
PCW.alignChildren = "left";
PCW.spacing = 8;

var CloudedSkyGroup = PCW.add ("group");
CloudedSkyGroup.add ("statictext", undefined, "Облачность:");
var CloudedSkyDrop = CloudedSkyGroup.add ("dropdownlist", undefined, ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDrop.selection = ControllOblachnost.value;
CloudedSkyGroup.add ("statictext", undefined, "Влажность:");
var Humidity = CloudedSkyGroup.add ("edittext", undefined, ControllHumidity.value);Humidity.active = true;Humidity.characters = 3;
CloudedSkyGroup.add ("statictext", undefined, "%");
/*--------------------------------------------------------------------------------------------------------------------------*/
var TemperaturaGroup = PCW.add ("group");
TemperaturaGroup.add ("statictext", undefined, "Температура день:");
var TemperaturaDay = TemperaturaGroup.add ("edittext", undefined, ControllTemperaturaDay.value);TemperaturaDay.active = true;TemperaturaDay.characters = 3;
TemperaturaGroup.add ("statictext", undefined, "°C");
TemperaturaGroup.add ("statictext", undefined, "|   Температура ночь:");
var TemperaturaNight = TemperaturaGroup.add ("edittext", undefined, ControllTemperaturaNight.value);TemperaturaNight.active = true;TemperaturaNight.characters = 3;
TemperaturaGroup.add ("statictext", undefined, "°C");
/*--------------------------------------------------------------------------------------------------------------------------*/
var PresWindGroup = PCW.add ("group");
PresWindGroup.add ("statictext", undefined, "Давление:");
var Pressure = PresWindGroup.add ("edittext", undefined, ControllPressure.value);Pressure.active = true;Pressure.characters = 3;
PresWindGroup.add ("statictext", undefined, "мм. рт. ст.");
PresWindGroup.add ("statictext", undefined, "|   Скорость ветра:");
var WindSpeed = PresWindGroup.add ("edittext", undefined, ControllWindSpeed.value);WindSpeed.active = true;WindSpeed.characters = 3;
PresWindGroup.add ("statictext", undefined, "м/с");
/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodaNa3Dnya = PCW.add ("panel", undefined, "Погода на 3 дня");
PogodaNa3Dnya.preferredSize.width = 400;
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
var CloudedSkyDropDay1 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
var CloudedSkyDropDay2 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
var CloudedSkyDropDay3 = CloudedSkyDropDay3Group.add ("dropdownlist", ["", "" , 110, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);

CloudedSkyDropDay1.selection = ControllOblachnostDay1.value;
CloudedSkyDropDay2.selection = ControllOblachnostDay2.value;
CloudedSkyDropDay3.selection = ControllOblachnostDay3.value;
/*--------------------------------------------------------------------------------------------------------------------------*/
var PogodavObl = PCW.add ("panel", undefined, "Погода в городах области");
PogodavObl.preferredSize.width = 400;
PogodavObl.alignChildren = "left";

var IvdelGroup = PogodavObl.add ("group");
IvdelGroup.add ("statictext", ["", "" , 110, "15"], "Ивдель:");
var TemperaturaIvdel = IvdelGroup.add ("edittext", ["", "" , 40, "22"], Ivdel_ControllTemperatura.value);TemperaturaIvdel.active = true;TemperaturaIvdel.characters = 3;
IvdelGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropIvdel = IvdelGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropIvdel.selection = Ivdel_ControllOblachnost.value;

var SerovGroup = PogodavObl.add ("group");
SerovGroup.add ("statictext", ["", "" , 110, "15"], "Серов:");
var TemperaturaSerov = SerovGroup.add ("edittext", ["", "" , 40, "22"], Serov_ControllTemperatura.value);TemperaturaSerov.active = true;TemperaturaSerov.characters = 3;
SerovGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropSerov = SerovGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropSerov.selection = Serov_ControllOblachnost.value;

var VerhoturGroup = PogodavObl.add ("group");
VerhoturGroup.add ("statictext", ["", "" , 110, "15"], "Верхотурье:");
var TemperaturaVerhotur = VerhoturGroup.add ("edittext", ["", "" , 40, "22"], Verhotur_ControllTemperatura.value);TemperaturaVerhotur.active = true;TemperaturaVerhotur.characters = 3;
VerhoturGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropVerhotur = VerhoturGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropVerhotur.selection = Verhotur_ControllOblachnost.value;

var TagilGroup = PogodavObl.add ("group");
TagilGroup.add ("statictext", ["", "" , 110, "15"], "Тагил:");
var TemperaturaTagil = TagilGroup.add ("edittext", ["", "" , 40, "22"], Tagil_ControllTemperatura.value);TemperaturaTagil.active = true;TemperaturaTagil.characters = 3;
TagilGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropTagil = TagilGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropTagil.selection = Tagil_ControllOblachnost.value;

var KamenskGroup = PogodavObl.add ("group");
KamenskGroup.add ("statictext", ["", "" , 110, "15"], "Каменск:");
var TemperaturaKamensk = KamenskGroup.add ("edittext", ["", "" , 40, "22"], Kamensk_ControllTemperatura.value);TemperaturaKamensk.active = true;TemperaturaKamensk.characters = 3;
KamenskGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropKamensk = KamenskGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropKamensk.selection = Kamensk_ControllOblachnost.value;

var KrasnoufimskGroup = PogodavObl.add ("group");
KrasnoufimskGroup.add ("statictext", ["", "" , 110, "15"], "Красноуфимск:");
var TemperaturaKrasnoufimsk = KrasnoufimskGroup.add ("edittext", ["", "" , 40, "22"], Krasnoufimsk_ControllTemperatura.value);TemperaturaKrasnoufimsk.active = true;TemperaturaKrasnoufimsk.characters = 3;
KrasnoufimskGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropKrasnoufimsk = KrasnoufimskGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropKrasnoufimsk.selection = Krasnoufimsk_ControllOblachnost.value;

var TavdaGroup = PogodavObl.add ("group");
TavdaGroup.add ("statictext", ["", "" , 110, "15"], "Тавда:");
var TemperaturaTavda = TavdaGroup.add ("edittext", ["", "" , 40, "22"], Tavda_ControllTemperatura.value);TemperaturaTavda.active = true;TemperaturaTavda.characters = 3;
TavdaGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropTavda = TavdaGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropTavda.selection = Tavda_ControllOblachnost.value;

var IrbitGroup = PogodavObl.add ("group");
IrbitGroup.add ("statictext", ["", "" , 110, "15"], "Ирбит:");
var TemperaturaIrbit = IrbitGroup.add ("edittext", ["", "" , 40, "22"], Irbit_ControllTemperatura.value);TemperaturaIrbit.active = true;TemperaturaIrbit.characters = 3;
IrbitGroup.add ("statictext", ["", "" , 40, "15"], "°C");
var CloudedSkyDropIrbit = IrbitGroup.add ("dropdownlist", ["", "" , 140, "22"], ["Ясно", "Дождь", "Гроза", "Снег", "Облачно с прояснениями", "Пасмурно", "Дождь со снегом", "Облачно с дождем"]);
CloudedSkyDropIrbit.selection = Irbit_ControllOblachnost.value;
/*--------------------------------------------------------------------------------------------------------------------------*/

var KeyMovesPanel = PCW.add ("panel", undefined, "Ключи");
KeyMovesPanel.preferredSize.width = 400;
KeyMovesPanel.alignChildren = "left";

var startTimeKey = 16.44;
var KeysChapter1Group = KeyMovesPanel.add ("group");

KeysChapter1Group.add ("statictext", undefined, "1:");
var KeysChapter1 = KeysChapter1Group.add ("edittext", ["", "" , 40, "22"], PsevdoToRealTime (Setka1Layer.mask("Mask 1").maskPath.keyTime(4)-Setka1Layer.mask("Mask 1").maskPath.keyTime(1))); KeysChapter1.active = true; KeysChapter1.characters = 3;
KeysChapter1Group.add ("statictext", undefined, "2:");
var KeysChapter2 = KeysChapter1Group.add ("edittext", ["", "" , 40, "22"], PsevdoToRealTime (Goroda1Layer.opacity.keyTime(4)-Goroda1Layer.opacity.keyTime(1)+0.48)); KeysChapter2.active = true; KeysChapter2.characters = 3;
KeysChapter1Group.add ("statictext", undefined, "3:");
var KeysChapter3 = KeysChapter1Group.add ("edittext", ["", "" , 40, "22"], PsevdoToRealTime (Goroda2Layer.opacity.keyTime(4)-Goroda2Layer.opacity.keyTime(1)+0.48)); KeysChapter3.active = true; KeysChapter3.characters = 3;
KeysChapter1Group.add ("statictext", undefined, "End:");
var EndText = KeysChapter1Group.add ("edittext", undefined, PsevdoToRealTime(EndLayer.opacity.keyTime(1))-PsevdoToRealTime(DnyLayer.opacity.keyTime(1))+1.13); EndText.active = true; EndText.characters = 3;
var MoveKeyButton  = KeysChapter1Group.add ("button", undefined, "Двигай");
/*--------------------------------------------------------------------------------------------------------------------------*/

PCW.add ("panel", [0,0,400,3]);
var ButtonsGroup2 = PCW.add ("group");
ButtonsGroup2.add ("statictext", undefined, "Путь:");
var PathButton = ButtonsGroup2.add ("button", [-140,15,100,45], CurrentPath);
ButtonsGroup2.add ("statictext", ["", "" , 10, "30"], "");
var RenderButton = ButtonsGroup2.add ("button", [-300,15,-220,45], "Рендер");
PCW.add ("panel", [0,0,400,3]);
var BottonGroup3 = PCW.add ("group");
var XmlButton = BottonGroup3.add ("button", [-300,15,100,45], "Загрузить XML");
PCW.add ("panel", [0,0,400,3]);
var BottonGroup = PCW.add ("group");
var ApplyButton = BottonGroup.add ("button", [-200,0,100,30], "Применить");
var CloseButton = BottonGroup.add ("button", undefined, "Закрыть");
/*--------------------------------------------------------------------------------------------------------------------------*/

PCW.show();


MoveKeyButton.onClick = function()
{
   var laysel = Setka1Layer;
   var hsdf =startTimeKey+RealToPsevdoTime(KeysChapter1.text);
   if (laysel.mask("Mask 1").maskPath.keyTime(4)<hsdf) 
      { 
      MoveKeyMask (laysel, 4, hsdf);
      MoveKeyMask (laysel, 3, hsdf-0.48);
      }
  else
  {
      MoveKeyMask (laysel, 3, hsdf-0.48);
      MoveKeyMask (laysel, 4, hsdf);
  }

    laysel = Setka2Layer;
   if (laysel.mask("Mask 1").maskPath.keyTime(4)<hsdf) 
      { 
      MoveKeyMask (laysel, 4, hsdf);
      MoveKeyMask (laysel, 3, hsdf-0.48);
      }
  else
  {
      MoveKeyMask (laysel, 3, hsdf-0.48);
      MoveKeyMask (laysel, 4, hsdf);
  }

   laysel = SegodnyaLayer;
   if (laysel.opacity.keyTime(4)<hsdf-0.48) 
      { 
      MoveKeyOpa (laysel, 4, hsdf-0.48);
      MoveKeyOpa (laysel, 3, hsdf-0.96);
      }
  else
  {
      MoveKeyOpa (laysel, 3, hsdf-0.96);
      MoveKeyOpa (laysel, 4, hsdf-0.48);
  }

    laysel = Setka3Layer;
   if (laysel.mask("Mask 1").maskPath.keyTime(1)<hsdf) 
      { 
      MoveKeyMask (laysel, 2, hsdf+0.48);
      MoveKeyMask (laysel, 1, hsdf);
      }
  else
  {
      MoveKeyMask (laysel, 1, hsdf);
      MoveKeyMask (laysel, 2, hsdf+0.48);
  }

   laysel = Goroda1Layer;
   if (laysel.opacity.keyTime(1)<hsdf+0.48) 
      { 
      MoveKeyOpa (laysel, 2, hsdf+0.96);
      MoveKeyOpa (laysel, 1, hsdf+0.48);
      }
  else
  {
      MoveKeyOpa (laysel, 1, hsdf+0.48);
      MoveKeyOpa (laysel, 2, hsdf+0.96);
  }
    hsdf =Setka3Layer.mask("Mask 1").maskPath.keyTime(1)+RealToPsevdoTime(KeysChapter2.text)+RealToPsevdoTime(KeysChapter3.text);
    laysel = Setka3Layer;
   if (laysel.mask("Mask 1").maskPath.keyTime(4)<hsdf) 
      { 
      MoveKeyMask (laysel, 4, hsdf);
      MoveKeyMask (laysel, 3, hsdf-0.48);
      }
  else
  {
      MoveKeyMask (laysel, 3, hsdf-0.48);
      MoveKeyMask (laysel, 4, hsdf);
  }


    hsdf =Setka3Layer.mask("Mask 1").maskPath.keyTime(1)+RealToPsevdoTime(KeysChapter2.text);
    laysel = Goroda1Layer;
   if (laysel.opacity.keyTime(4)<hsdf) 
      { 
      MoveKeyOpa (laysel, 4, hsdf);
      MoveKeyOpa (laysel, 3, hsdf-0.48);
      }
  else
  {
      MoveKeyOpa (laysel, 3, hsdf-0.48);
      MoveKeyOpa (laysel, 4, hsdf);
  }

    laysel = Goroda2Layer;
   if (laysel.opacity.keyTime(1)<hsdf+0.48) 
      { 
      MoveKeyOpa (laysel, 2, hsdf+0.48);
      MoveKeyOpa (laysel, 1, hsdf);
      }
  else
  {
      MoveKeyOpa (laysel, 1, hsdf);
      MoveKeyOpa (laysel, 2, hsdf+0.48);
  }
    hsdf =Setka3Layer.mask("Mask 1").maskPath.keyTime(4);
    laysel = Goroda2Layer;
   if (laysel.opacity.keyTime(4)<hsdf-0.48) 
      { 
      MoveKeyOpa (laysel, 4, hsdf-0.48);
      MoveKeyOpa (laysel, 3, hsdf-0.96);
      }
  else
  {
      MoveKeyOpa (laysel, 3, hsdf-0.96);
      MoveKeyOpa (laysel, 4, hsdf-0.48);
  }

   laysel = Setka4Layer;
   if (laysel.mask("Mask 1").maskPath.keyTime(1)<hsdf) 
      { 
      MoveKeyMask (laysel, 2, hsdf+0.48);
      MoveKeyMask (laysel, 1, hsdf);
      }
  else
      {
      MoveKeyMask (laysel, 1, hsdf);
      MoveKeyMask (laysel, 2, hsdf+0.48);
     }
 
   laysel = DnyLayer;
   if (laysel.opacity.keyTime(1)<hsdf+0.48) 
      { 
      MoveKeyOpa (laysel, 2, hsdf+0.96);
      MoveKeyOpa (laysel, 1, hsdf+0.48);
      }
  else
  {
      MoveKeyOpa (laysel, 1, hsdf+0.48);
      MoveKeyOpa (laysel, 2, hsdf+0.96);
  }

//alert (DnyLayer.opacity.keyTime(1));

 laysel = EndLayer;
 hsdf =DnyLayer.opacity.keyTime(1)+RealToPsevdoTime(EndText.text-2);
   if (laysel.opacity.keyTime(1)<hsdf+1.8) 
      { 
      MoveKeyOpa (laysel, 2, hsdf+2.28);
      MoveKeyOpa (laysel, 1, hsdf+0.48);
      }
  else
  {
      MoveKeyOpa (laysel, 1, hsdf+0.48);
      MoveKeyOpa (laysel, 2, hsdf+2.28);
  }

Goroda2Layer.opacity.setValueAtKey(2, 100);
Goroda2Layer.opacity.setValueAtKey(3, 100);
Goroda1Layer.opacity.setValueAtKey(2, 100);
Goroda1Layer.opacity.setValueAtKey(3, 100);
alert ("Подвинуто!");
}

XmlButton.onClick = function () 
{
  LoadFromXML();
}

PathButton.onClick = function () 
{
  CurrentPath = Temp.selectDlg().fullName;
  PathButton.text = CurrentPath;
}

ApplyButton.onClick = function () 
{
    
    ControllTemperaturaNight.setValue (TemperaturaNight.text);
    ControllTemperaturaDay.setValue (TemperaturaDay.text);
    ControllPressure.setValue (Pressure.text);
    ControllWindSpeed.setValue (WindSpeed.text);
    ControllHumidity.setValue (Humidity.text);
    ControllOblachnost.setValue (CloudedSkyDrop.selection.index);
    
    ControllTemperaturaDay1.setValue (TemperaturaDay1.text);
    ControllTemperaturaDay2.setValue (TemperaturaDay2.text);
    ControllTemperaturaDay3.setValue (TemperaturaDay3.text);
    ControllOblachnostDay1.setValue (CloudedSkyDropDay1.selection.index);    
    ControllOblachnostDay2.setValue (CloudedSkyDropDay2.selection.index);    
    ControllOblachnostDay3.setValue (CloudedSkyDropDay3.selection.index);    
    
    Ivdel_ControllTemperatura.setValue (TemperaturaIvdel.text);    
    Serov_ControllTemperatura.setValue (TemperaturaSerov.text);  
    Verhotur_ControllTemperatura.setValue (TemperaturaVerhotur.text);  
    Tagil_ControllTemperatura.setValue (TemperaturaTagil.text);  
    Kamensk_ControllTemperatura.setValue (TemperaturaKamensk.text);  
    Krasnoufimsk_ControllTemperatura.setValue (TemperaturaKrasnoufimsk.text);  
    Tavda_ControllTemperatura.setValue (TemperaturaTavda.text);  
    Irbit_ControllTemperatura.setValue (TemperaturaIrbit.text);  
    
    Ivdel_ControllOblachnost.setValue (CloudedSkyDropIvdel.selection.index);    
    Serov_ControllOblachnost.setValue (CloudedSkyDropSerov.selection.index);    
    Verhotur_ControllOblachnost.setValue (CloudedSkyDropVerhotur.selection.index);    
    Tagil_ControllOblachnost.setValue (CloudedSkyDropTagil.selection.index);    
    Kamensk_ControllOblachnost.setValue (CloudedSkyDropKamensk.selection.index);    
    Krasnoufimsk_ControllOblachnost.setValue (CloudedSkyDropKrasnoufimsk.selection.index);    
    Tavda_ControllOblachnost.setValue (CloudedSkyDropTavda.selection.index);    
    Irbit_ControllOblachnost.setValue (CloudedSkyDropIrbit.selection.index);    
    ControllDayofWeek.setValue (DayWeek.selection.index);   
    alert ("Изменения успешно внесены!");
}

RenderButton.onClick = function () 
{
    myRenderQueue = myProj.renderQueue;
    myQueueItem = myRenderQueue.items.add(searchCompByName("POGODA_DATA"));              
    myOM = myQueueItem.outputModule(1);
    myOM.applyTemplate("QT_ST_AUDIO");  
    Folder(CurrentPath).create();
    var SRF = Folder(CurrentPath);
    //SRF.execute();
    var Perem = SRF.name;
    var Perem2 = parseInt(Perem.slice(0,2));
    var newPerem = Perem.replace(new RegExp(Perem2,'g'),Perem2);
    SRF.changePath(SRF.fullName +"/"+  dateDayToZavtra + dateMonth+ (dateTime.getFullYear()-2000)+ "_POGODA_STUDIA");
    //  SRF.execute();
    myOM.file = SRF;
    PCW.hide();
}


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

    

CloseButton.onClick = function () 
{
    PCW.hide();
}

function MoveKeyOpa (ContrLayer, KeyIdx, NewTime)
{
    var Temp = ContrLayer.opacity.keyValue(KeyIdx); 
    ContrLayer.opacity.removeKey(KeyIdx); 
    ContrLayer.opacity.addKey(NewTime); 
    ContrLayer.opacity.setValueAtKey(KeyIdx, Temp)
    return 0;
}

function MoveKeyMask (ContrLayer, KeyIdx, NewTime)
{
    var TempMask = ContrLayer.mask("Mask 1").maskPath.keyValue(KeyIdx); 
    ContrLayer.mask("Mask 1").maskPath.removeKey(KeyIdx); 
    ContrLayer.mask("Mask 1").maskPath.addKey(NewTime); 
    ContrLayer.mask("Mask 1").maskPath.setValueAtKey(KeyIdx, TempMask)
    return 0;
}

function PsevdoToRealTime (PsevdoTime)
{
        return (PsevdoTime-(PsevdoTime%1))+(PsevdoTime%1)/4;
}

function RealToPsevdoTime (RealTime)
{
        return (RealTime-(RealTime%1))+(RealTime%1)*4;
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

function checkExist (CheckPath)
{
    var checkFile = File(CheckPath);
    if (checkFile.exists)
    {
            return 1;
    }
    return 0;
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


function GrabDayWeekStatus ()
{
    switch (ControllDayofWeek.value)
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