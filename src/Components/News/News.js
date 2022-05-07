import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    const {title,urlToImage,description}=props.article
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        R
                    </Avatar>
                }
                title={title}
            />

            <CardMedia
                component="img"
                height="194"
                image={urlToImage}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default News;