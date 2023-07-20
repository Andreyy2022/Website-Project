function ShowFolderFileList(folderspec)
{
  let fso, f, fc, s;
  fso = new ActiveXObject('Scripting.FileSystemObject');
  f = fso.GetFolder(folderspec);
  fc = new Enumerator(f.files);
  s = '';
  for (; !fc.atEnd(); fc.moveNext())
  {
    s += fc.item();
    s += '';
  }
  return(s);
}
document.write(ShowFolderFileList('work-gallery-images'))
 
//console.log( ShowFolderFileList('work-gallery-images') );