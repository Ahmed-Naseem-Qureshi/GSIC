function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };

    // Add the number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

 make_album("Artist1", "Album1");
 make_album("Artist2", "Album2", 12); 
 make_album("Artist3", "Album3", 8);  


