import React from "react";

import './playlist.css';

export class PlayList extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                {/*  <TrackList />  */}
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}