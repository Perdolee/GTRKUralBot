//loadMode();
function loadMode()
{
    //alert (decodeURI(File($.fileName).parent.parent)  + "/cfg/__ini.xml");
    if (checkExist(decodeURI(File($.fileName).parent.parent)  + "/cfg/__ini.xml"))
    {
            var modeFile = File(decodeURI(File($.fileName).parent.parent)  + "/cfg/__ini.xml");
            //alert (decodeURI(File($.fileName).parent.parent)  + "/cfg/__ini.xml");
            modeFile.open('r', undefined, undefined); 
            var modeRead = modeFile.read();
            var xmlString = modeRead.toString();  
            var myXML = new XML(xmlString);  
            myXML.toXMLString();  
            var CurrentPath = myXML.CurrentPath;
            var xmlPath = myXML.xmlPath; 
            var mode = myXML.mode;
            modeFile.close();
            $.write ("Файл настроек загружен")
    }
    else
    {
            var CurrentPath = ("/e/000_POGODA/000_GOTOVOE/watch/");
            var xmlPath = ("/f/000_POGODA/xml"); 
            var mode = 0;
            var modeFile = File.saveDialog ("Выберете файл для загрузки","XML:*.xml", false);  
            var outMode = modeFile.open('w', undefined, undefined);
            if (outMode == false) {
               alert ("Неудалось записать файл! :c");
               return 0;
            }
            modeFile.writeln ("<xml>");
            modeFile.writeln ("<mode>" + mode + "</mode>");
            modeFile.writeln ("<renderPath>" + CurrentPath + "</renderPath>");
            modeFile.writeln ("<xmlPath>" + xmlPath+ "</xmlPath>");
            modeFile.writeln ("</xml>");
            $.write ("Файл настроек создан")
            modeFile.close();
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