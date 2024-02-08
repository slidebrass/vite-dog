import DogModal from "./DogModal";
import { dog_server_calls } from "../api/dog_server";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import {}


export default function TitlebarBelowImageList() {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            {dogData.map((dog) => (
                <ImageListItem key={dog.img}>
                    <img
                        srcSet={`${dog.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${dog.img}?w=248&fit=crop&auto=format`}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

/* example from mui website:
function TitlebarBelowImageList() {
    return (
        <ImageList sx={{ width: 500, height: 450 }}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`} 
                        src={`${item.img}?w=248&fit=crop&auto-format`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar 
                        title={item.title}
                        subtitle={<span>by: {item.author}</span>}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
};

const itemData = [
    {
        img: 'url for image here',
        title: 'title here',
        author: 'author here',
    },
    etc.
];
*/