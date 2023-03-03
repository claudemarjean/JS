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
let thirdEpisode = ['strategy',25,false];
  


let episodes = [];

episodes.push(firstepisode);
episodes.push(secondEpisode);
episodes.push(secondEpisode);
episodes.pop();
episodes.push(thirdEpisode);
//comme  let episodes = [firstepisode, secondEpisode, thirdEpisode];
  // =========================================
  
 // ====================================

const body = document.querySelector('body');

for(let i = 0; i < 12; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');

  let newTitle = document.createElement('h2');
  newTitle.innerText = 'The Story of Tau';

  let newParagraph = document.createElement('p');
  newParagraph.innerText = `${episodes[i].title}
          ${episodes[i].duration} minutes
          ${episodes[i].hasBeenWatched ? 'Already been watched' : 'Not yet watched'}`;
          
  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  body.append(newDiv);
}