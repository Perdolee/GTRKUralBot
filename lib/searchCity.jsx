var MyCity = "Уфа";
        
function isCity (MyCity)
{
        var loadFile = File("/f/Diplom/repo/GTRKUralBot/cfg/cityRU.xml");   
        loadFile.open('r', undefined, undefined);
        var loadRead = loadFile.read();
        var xmlString = loadRead.toString();  
        var myXML = new XML(xmlString);  
        myXML.toXMLString();  
        for (var i=0; i < myXML.city.length(); i++)
        {
            if (myXML.city[i]==MyCity)
            {
                return 1;
            }
        }
        loadFile.close();
        return 0;
}

alert (isCity (MyCity));