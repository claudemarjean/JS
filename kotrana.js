// Create Object here
// =========================================

class Episode {
    constructor(title,duration,hasBeenWatched){
        this.title = title;
        this.duration = duration,
        this.hasBeenWatched = hasBeenWatched
    }
}

let firstepisode = new Episode('strategy',21,true);
let secondEpisode = new Episode('strategy',20,false);
let thirdEpisode = new Episode('strategy',25,false);
  
  
  // =========================================
  
  document.querySelector('#episode-info-first').innerText = `Episode: ${firstepisode.title}
  Duration: ${firstepisode.duration} min
  ${firstepisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

  document.querySelector('#episode-info-second').innerText = `Episode: ${secondEpisode.title}
  Duration: ${secondEpisode.duration} min
  ${secondEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

  document.querySelector('#episode-info-third').innerText = `Episode: ${thirdEpisode.title}
  Duration: ${thirdEpisode.duration} min
  ${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

