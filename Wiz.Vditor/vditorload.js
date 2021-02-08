
function myontabcreate(doc) {

    try {
        //WizAlert(objWindow.CurrentDocument.GUID);
        let doctitle = objDatabase.DocumentFromGUID(objWindow.CurrentDocument.GUID).Title;
        if (doctitle.indexOf(".md") > 0) {
            var pluginPath = objApp.GetPluginPathByScriptFileName("vditorload.js");
            var editorFileName = pluginPath + "index.html" + "?guid=" + objWindow.CurrentDocument.GUID + "&kbguid=" + objWindow.CurrentDocument.Database.KbGUID;
            objWindow.ViewHtml(editorFileName, false);
        }
    } catch (error) {
    }



}
eventsTabCreate.add(myontabcreate);