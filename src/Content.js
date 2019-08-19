import React, {Component} from 'react';

export default class Content extends Component{
    render() {
        let photoFilter = this.props.photos.filter((photo)=>(photo.albumId === this.props.currentAlbum))
        return (
            <ul>
                {photoFilter.map((photo)=>
                    (<p key={photo.id}>{photo.albumId}  {photo.title}
                        <button onClick={() => {
                            this.props.addBuy(photo.id)
                        }}>
                            Buy
                        </button>
                    </p> ))}
            </ul>
        )
    }
}