// Create Object here
// =========================================
let episode = {
    title : 'strategy',
    duration : 90,
    haBeenWatched : false
  }
  
  
  // =========================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
  Duration: ${episode.duration} min
  ${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`