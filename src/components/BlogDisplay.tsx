import * as React from "react";
import Typography from "@mui/material/Typography";
//import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
//import CardActionArea from '@mui/material/CardActionArea';
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
//import CardMedia from '@mui/material/CardMedia'

export function PostDisplay({ post }) {
  return (
    <Box
      height={250}
      width={450}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: "2px solid grey" }}
    >
      <Card sx={{ display: "flex" }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            <b>{post.Title}</b>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {post.Date}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.Body}
          </Typography>
          <Typography variant="subtitle2" color="string" align="right">
            ~{post.Author}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
