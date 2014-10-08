//Script pour publier tous les fichiers .fla ouvert dans flash


//on crée une variable avec tous les documents ouverts
var openDocs = fl.documents;

//pour tous les documents ouverts
for(var i=0;i<openDocs.length;i++){
	//on publie les documents 
	openDocs[i].publish();
}
