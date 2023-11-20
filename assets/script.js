const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez vos éléments HTML
    var banner = document.getElementById('banner');
    var arrowLeft = document.querySelector('.arrow_left');
    var arrowRight = document.querySelector('.arrow_right');
    var dotsContainer = document.querySelector('.dots');

    // Définissez une variable pour suivre l'index de la diapositive actuelle
    var currentSlideIndex = 0;

    // Fonction pour afficher la diapositive en fonction de l'index
    function showSlide(index) {
        var slide = slides[index];
        var image = slide.image;
        var tagLine = slide.tagLine;

        // Mettez à jour l'image et le texte dans le HTML
        document.querySelector('.banner-img').src = './assets/images/slideshow/' + image;
        document.querySelector('p').innerHTML = tagLine;

        // Mettez à jour les points
        updateDots(index);
    }

    // Fonction pour mettre à jour l'état des points
    function updateDots(index) {
        var dots = document.querySelectorAll('.dot');

        // Supprimez la classe "dot_selected" de tous les points
        dots.forEach(function (dot) {
            dot.classList.remove('dot_selected');
        });

        // Ajoutez la classe "dot_selected" au point correspondant à la diapositive actuelle
        dots[index].classList.add('dot_selected');
    }

    // Créez les points en fonction du nombre d'images dans le slider
    slides.forEach(function (slide, index) {
        var dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);

        // Ajoutez un écouteur d'événements pour chaque point
        dot.addEventListener('click', function () {
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
        });
    });

    // Ajoutez un écouteur d'événements pour la flèche gauche
    arrowLeft.addEventListener('click', function () {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        showSlide(currentSlideIndex);
    });

    // Ajoutez un écouteur d'événements pour la flèche droite
    arrowRight.addEventListener('click', function () {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
    });

    // Appellez cette fonction pour initialiser les points
    updateDots(currentSlideIndex);
});
