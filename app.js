const carouselInner = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const itemWidth = carouselInner.children[0].offsetWidth;

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
    carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
});

function toggleDescription(productId) {
    const description = document.getElementById(`description-${productId}`);
    description.classList.toggle('show');
}


   <div class="product">
       <img src="product-image.jpg" alt="Product Image"></img>
       <h3>Product Name</h3>
       <p>Click to view description</p>
       <button onclick="toggleDescription(1)">Show/Hide Description</button>
       <div id="description-1" class="hidden">
           <p>Detailed product description</p>
       </div>
   </div>


