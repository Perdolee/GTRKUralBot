        var loadFile = File("/f/Diplom/repo/GTRKUralBot/cfg/russian_names.xml");   
        loadFile.open('r', undefined, undefined);
        var loadRead = loadFile.read();
        var xmlString = loadRead.toString();  
        var myXML = new XML(xmlString);  
        myXML.toXMLString();  
        var MyCities = new Array(myXML.rocid.city.length()-1);
        for (var i=0; i < myXML.rocid.city.length(); i++)
        {
            MyCities[i] = myXML.rocid.city[i].name;  
        }
        
            var modeFile = File.saveDialog ("Выберете файл для загрузки","XML:*.xml", false);  
            var outMode = modeFile.open('w', undefined, undefined);
            if (outMode == false) {
               alert ("Неудалось записать файл! :c");
            }
            modeFile.writeln ("<xml>");
            for (var i=0; i < myXML.rocid.city.length(); i++)
            {
                if (myXML.rocid.city[i].country_id=="3159") 
                {
                modeFile.writeln ("<city>" + MyCities[i] + "</city>");
                }
            }
            modeFile.writeln ("</xml>");
            $.write ("Файл настроек создан")
            modeFile.close();
        
        
        //var Akek = myXML.rocid.city[1].name;
        alert ("Готово");
        loadFile.close();