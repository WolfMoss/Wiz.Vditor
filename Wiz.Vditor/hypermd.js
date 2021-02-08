var objApp = WizExplorerApp;
var objWindow = objApp.Window;
var objDocument = objWindow.CurrentDocument;

var objCommon = objApp.CreateWizObject("WizKMControls.WizCommonUI");
var tempPath = objCommon.GetSpecialFolder("TemporaryFolder");
tempPath += "wiz_vditor_temp/";
objCommon.CreateDirectory(tempPath);
tempPath += objDocument.GUID + "/";
objCommon.CreateDirectory(tempPath);
objCommon.CreateDirectory(tempPath + "index_files/");


var tempFile = tempPath + "index.html";
objDocument.SaveToHtml(tempFile, 0);

var pluginPath = objApp.GetPluginPathByScriptFileName("hypermd.js");
objCommon.CopyFile(pluginPath + "index.html", tempFile);
objCommon.CopyFile(pluginPath + "config.json", tempPath+ "config.json");

var tempText = objCommon.LoadTextFromFile(tempFile);
tempText = tempText.replace(/(<script src=")/g, "$1" + pluginPath)
                   .replace(/(<link rel="stylesheet" href=")/g, "$1" + pluginPath);
objCommon.SaveTextToFile(tempFile, tempText, "utf-8-bom");

var editorFileName = tempFile + "?guid=" + objDocument.GUID + "&kbguid=" + objDocument.Database.KbGUID;
objWindow.ViewHtml(editorFileName, false);