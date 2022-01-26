const loadAlbum = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayAlbum(data))
};
const displayAlbum = data =>{
   // console.log(data);
   for(const photo of data){
       const albumSection = document.getElementById('album-section');
       const div = document.createElement('div');
       div.innerHTML= `
       <div class="col">
       <div class="card">
         <img src="${photo.thumbnailUrl}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${photo.title}</h5>
           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
         </div>
         <button class= "w-25 m-auto bg-primary" onclick="loadDetails(${photo.id})">Details</button>
       </div>
     </div>
       `
       albumSection.appendChild(div);
   }
}
const loadDetails = (id)=>{
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
    .then(res => res.json())
    .then(data => displayDetails(data))
};

const displayDetails = details =>{
    const detailsSection = document.getElementById('details-section');
    detailsSection.innerHTML = ``;
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${details.url}" alt="">
    <h3>${details.title}</h3>
    `;
    detailsSection.appendChild(div);
}