const loadAlbum = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayAlbum(data))
};
const displayAlbum = data =>{
    console.log(data);
}