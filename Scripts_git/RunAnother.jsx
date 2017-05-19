//C:\Program Files\Adobe\Adobe After Effects CC 2017\Support Files\Scripts

var scriptFile = File('/C/Program Files/Adobe/Adobe After Effects CC 2017/Support Files/Scripts/Alert.jsx');
var script;
scriptFile.open('r');
script = scriptFile.read();
scriptFile.close();
eval(script);