var w = buildUI(this);


function buildUI(thisObj) {
	var win = (thisObj instanceof Panel) ? thisObj:new Window('palette', '',undefined, {resizable: true});
	if (win != null) {
		win.particularLayer = win.add('button', [0,0,220,150], 'ЗАПУСК СКРИПТА \n ТИТРА');  //Create Particular Button
		win.particularLayer.onClick = function()
		    {
				var scriptFile = File('/C/Program Files/Adobe/Adobe After Effects CC 2017/Support Files/Scripts/Alert.jsx');
                  var script;
                  scriptFile.open('r');
                  script = scriptFile.read();
                  scriptFile.close();
                  eval(script);
			}
	}
	return win
}