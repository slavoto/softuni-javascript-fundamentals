function songs(array) {

    class Songs {
        typeList;
        name;
        time;
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;


        }
    }

    let songs = [];
    let numberOfSongs = array.shift();
    let typeSong = array.pop();

    for(let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = array[i].split('_');
        let song = new Songs(typeList, name, time);
        songs.push(song);
    }
    if(typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

songs([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite']);

songs([4,

    'favourite_DownTown_3:14',
    
    'listenLater_Andalouse_3:24',
    
    'favourite_In To The Night_3:58',
    
    'favourite_Live It Up_3:48',
    
    'listenLater']);

 //   Define a class Song, which holds the following information about songs: typeList, name, and time.

// You will receive the input as an array.

// The first element n will be the number of songs. Next n elements will be the songs data in the following format: 
// "{typeList}_{name}_{time}", and the last element will be typeList / "all".

// Print only the names of the songs, which have the same typeList (obtained as the last parameter). 
// If the value of the last element is "all", print the names of all the songs.