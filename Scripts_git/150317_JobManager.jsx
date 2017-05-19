var myProj = app.project;
var my_file = new File("/e/00_VESTI/FONS/solnce.aep");
//openProj(my_file);




















//==============================================================//
//======================Fuctions==================================//
//==============================================================//
function openProj (my_file)
{
    if (my_file.exists)
    {
        var new_project = app.open(my_file);
        if (new_project){
        alert("Проект открыт");
        }
        else
        {
            alert ("Не удалось открыть файл")
        }
    }
    else
    {
        alert ("Не удалось найти файл")
    }
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