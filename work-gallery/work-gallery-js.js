function createGallery(path){
    var div = document.getElementById('gallery');
    var counter = 1;
    var img = document.createElement('img');
    img.src = path + counter + '.jpeg';
    img.onload = function(){loadImg(counter);}
    img.onerror = function(){ this.parentNode.removeChild(this); return false}
    function loadImg(counter){
        var pic = document.createElement('img');
        pic.src = path + counter + '.jpeg';
        div.appendChild(pic);
        img  = pic;
        counter++;
        img.onload = function(){
            loadImg(counter)
        }
        img.onerror = function(){ 
            this.parentNode.removeChild(this);
        }
    }
}
createGallery('work-gallery-images/Новая папка');

//console.log(createGallery('work-gallery-images'));