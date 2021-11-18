document.addEventListener("DOMContentLoaded", function(){
		
    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 200) {
            document.getElementById('navbar_main').classList.add('fixed-top','shadow');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
             document.getElementById('navbar_main').classList.remove('fixed-top','shadow');
             // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
}); 