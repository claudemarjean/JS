// Create Object here
// =========================================

class Episode {
    constructor(title,duration,hasBeenWatched){
        this.title = title;
        this.duration = duration,
        this.hasBeenWatched = hasBeenWatched
    }
}

let episode = new Episode('strategy',90,false);
  
  
  // =========================================
  
  document.querySelector('#episode-info').innerText = `Episode: ${episode.title}
  Duration: ${episode.duration} min
  ${episode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`