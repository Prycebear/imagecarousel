import './ImageCard.css';

function ImageCard(props){

    
        return(
            <div id = "ImageCard">
                    <div id = "buttons">
                        <img id = "AnimalImg" src = {props.animal}/>
                    </div>
            </div>
        )
}

export default ImageCard;