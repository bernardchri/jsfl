// Christophe Bernard présente !
// createExportsFolder
// cree en fonction des dossiers ouverts
// ----- un dossier Export à la racine
// ----- un dossier du même nom que le fichier .fla
// 
function createExportFolders(){

var openDocs = fl.documents;
var fichierExport = "Export";



for(var i=0;i<openDocs.length;i++){
	fl.trace('//');
	
	var documentPath = openDocs[i].path; 
	var nameFile = openDocs[i].name;
	var nameFodler = nameFile.replace('.fla',''); 
	//afficher l'url
	//fl.trace (documentPath);
	//fl.trace(nameFile);
	var folderURL = documentPath.replace(nameFile,"");
	//fl.trace(folderURL);
	var exportURL = "file:///"+folderURL+"Export";
	//fl.trace(exportURL);
	//creer le dossier export
	FLfile.createFolder(exportURL);
	//creer le dossier corresspondant au nom du fichier
	FLfile.createFolder(exportURL+"/"+nameFodler);

}

}


createExportFolders();

