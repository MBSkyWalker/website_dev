function ScrollingAnimation(){
    
}



function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    // document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    // document.getElementById("main").style.marginLeft= "0";
}


const authors = ['static/authors/author1.jpg', 'static/authors/author2.jpg', 'static/authors/author3.jpg'];
let currentImageIndex = 0;


function prevImage(){
    currentImageIndex = (currentImageIndex === 0) ? authors.length - 1: currentImageIndex - 1;
    updateImage();
}

function nextImage(){
    currentImageIndex = (currentImageIndex == authors.length - 1) ? 0: currentImageIndex + 1;
    updateImage();
}


function updateImage() {
    const imgElement = document.getElementById("slider-image");
    
    
    // Додаємо клас для плавної зміни
    imgElement.classList.add("hidden");
    
    // Зміна зображення після завершення переходу
    setTimeout(() => {
        imgElement.src = authors[currentImageIndex];
        imgElement.classList.remove("hidden");
    }, 1000); // Тривалість переходу (1 секунда)
    
}


setInterval(nextImage, 3000)


const books = ['static/book1/Книга 1 Обкл.jpg', 'static/book1/Книга 1-1.jpg', 'static/book1/Книга 1-1.jpg', 'static/book1/Книга 1-2.jpg', 'static/book1/Книга 1-3.jpg' ]
let currentImageIndex2 = 0

function prevImage2(){
    currentImageIndex2 = (currentImageIndex2 === 0) ? books.length - 1: currentImageIndex2 - 1;
    updateImage2();
}

function nextImage2(){
    currentImageIndex2 = (currentImageIndex2 == books.length - 1) ? 0: currentImageIndex2 + 1;
    updateImage2();
}


function updateImage2() {
    const imgElement = document.getElementById("slider-image2");
    
    
    
    imgElement.src = books[currentImageIndex2]
   
}


const books2 = ['static/book2/Книга 2 Обкл.jpg', 'static/book2/Книга 2-1.jpg',
     '                      static/book2/Книга 2-2.jpg', 'static/book2/Книга 2-3.jpg',
                                                                        'static/book2/Книга2-4.jpg' ]
let currentImageIndex3 = 0

function prevImage3(){
    currentImageIndex3 = (currentImageIndex3 === 0) ? books2.length - 1: currentImageIndex3 - 1;
    updateImage3();
}

function nextImage3(){
    currentImageIndex3 = (currentImageIndex3 == books2.length - 1) ? 0: currentImageIndex3 + 1;
    updateImage3();
}


function updateImage3() {
    const imgElement = document.getElementById("slider-image3");
    
    
    // Додаємо клас для плавної зміни
    imgElement.src = books2[currentImageIndex3]
}


let time_of_popup_appear = 2000;

let popupTimeout = setTimeout(OpenPopup, time_of_popup_appear);

function OpenPopup(){
    document.getElementById('popup').style.display = 'flex'
}

function ClosePopup(){
    document.getElementById('popup').style.display = 'none';
    time_of_popup_appear = 1000000;
    clearTimeout(popupTimeout);
    popupTimeout = setTimeout(OpenPopup, time_of_popup_appear)
}




function ShowPhoto(photo_id) {
    // document.getElementById(photo_id).style.width = '200';
    // document.getElementById(photo_id).style.height = '200;
    let photo = document.getElementById(String(photo_id));
    if (photo.style.display == 'none') {
        photo.style.display = 'flex';
    
    }
    else{
        photo.style.display = 'none';
    }
    
    
}

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('yosimoto_text');
    const photoElement = document.getElementById('yosimoto_photo');

    const textElement2 = document.getElementById('morita_text');
    const photoElement2 = document.getElementById('morita_photo');

    const textElement3 = document.getElementById('reinolds_text');
    const photoElement3 = document.getElementById('reinolds_photo');

    // Перевірка, чи елементи існують
    if (textElement && photoElement) {
        // Наводимо на текст
        textElement.addEventListener('mouseover', function() {
            photoElement.style.display = 'block'; // Показати фото при наведенні
        });

        // Виходимо з тексту
        textElement.addEventListener('mouseout', function() {
            photoElement.style.display = 'none'; // Прибираємо фото при виході
        });
    } else {
        console.error('Елемент з ID не знайдено.');

    }
    if (textElement2 && photoElement2) {
        // Наводимо на текст
        textElement2.addEventListener('mouseover', function() {
            photoElement2.style.display = 'block'; // Показати фото при наведенні
        });

        // Виходимо з тексту
        textElement2.addEventListener('mouseout', function() {
            photoElement2.style.display = 'none'; // Прибираємо фото при виході
        });
    } else {
        console.error('Елемент з ID не знайдено.');
    }
    if (textElement3 && photoElement3) {
        // Наводимо на текст
        textElement3.addEventListener('mouseover', function() {
            photoElement3.style.display = 'block'; // Показати фото при наведенні
        });

        // Виходимо з тексту
        textElement3.addEventListener('mouseout', function() {
            photoElement3.style.display = 'none'; // Прибираємо фото при виході
        });
    } else {
        console.error('Елемент з ID не знайдено.');
    }
});


