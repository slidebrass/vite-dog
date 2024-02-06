import DogModal from "./DogModal";
import { dog_server_calls } from "../api/dog_server";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

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
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}