import React, {Component} from 'react';

export default class Sidebar extends Component{
    render() {
        return (
            <ul>
                {this.props.albums.map((album)=>
                    (<p key={album.id}>{album.albumId}
                        <button onClick={() => {this.props.setCurrentAlbum(album.id)}}>
                            {album.title}
                        </button>
                    </p> ))}
            </ul>
        )
    }
}