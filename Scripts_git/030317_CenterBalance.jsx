var myProj = app.project;
var OUTComp = searchCompByName("Testr");
var titrLayer = OUTComp.layer("тутр");
var textikLayer = OUTComp.layer("тукст");

var centerPoint = titrLayer.effect("Center")("Point");

var SizeBoundLayerSize = textikLayer.sourceRectAtTime(10, false).height;    


var textPosition = textikLayer.transform.position;
//textikLayer.transform.position


alert ();
textikLayer.transform.position.setValue([0,centerPoint.value[1]+53+(SizeBoundLayerSize/2)]);
//-53 для центровки



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