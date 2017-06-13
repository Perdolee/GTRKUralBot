main ()

function main ()
{
  var myCities = new Array(2504);
  var myCities = loadCities(function(num){$.write(num);})
  var myNames = new Array(708);
  var myNames = loadNames(function(num){$.write(num);});
  var MyCity = "Уфа";
  var MyCity2 = "Уфы";
  var MyName = "Михаил";
  var MyName2 = "Михаилы";
  alert (isInArray (MyCity, myCities) + isInArray (MyName, myNames));
  alert (isInArray (MyCity2, myCities) + isInArray (MyName2, myNames));
  return 0;
}
        
function isInArray (MyCity, myCities)
{
        for (var i=0; i < myCities.length; i++)
        {
            if (myCities[i]==MyCity)
            {
                return 1;
            }
        }
        return 0;
}



function loadCities (callback)
{
      var loadFile = File("/f/Diplom/repo/GTRKUralBot/cfg/cityRU.xml");   
      loadFile.open('r', undefined, undefined);
      var loadRead = loadFile.read();
      var xmlString = loadRead.toString();  
      var myXML = new XML(xmlString); 
      var myCities = new Array(myXML.city.length()-1);
      for (var i=0; i < myXML.city.length(); i++)
      {
         myCities[i] = myXML.city[i];
         //$.write(i+" из " + (myXML.city.length()-1) + " городов загружено \n");
         callback(i+" из " + (myXML.city.length()-1) + " городов загружено \n");
      }
    loadFile.close();
    return myCities;
}



function loadNames (callback)
{
      var loadFile = File("/f/Diplom/repo/GTRKUralBot/cfg/namesRU_50k.xml");   
      loadFile.open('r', undefined, undefined);
      var loadRead = loadFile.read();
      var xmlString = loadRead.toString();  
      var myXML = new XML(xmlString); 
      var myNames = new Array(myXML.name.length()-1);
      for (var i=0; i < myXML.name.length(); i++)
      {
         myNames[i] = myXML.name[i]
         //$.write(i+" из " + (myXML.name.length()-1) + " имён загружено \n");
         callback(i+" из " + (myXML.name.length()-1) + " имён загружено \n");
      }
    loadFile.close();
    return myNames;
}