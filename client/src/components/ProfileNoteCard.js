import React from "react";
import { Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { DeleteForeverTwoTone } from "@mui/icons-material";

// Must link data using ({ post })

export default function ProfileNoteCard({ post }) {
    return (
        <div>
            <Card>
                <CardHeader 
                    action={
                        <IconButton aria-label="delete">  {/* Delete button */}
                            <DeleteForeverTwoTone/> 
                        </IconButton>
                    }
                    title='Card Title' 
                />
                {/*CONTENT DISPLAY on line 17 where " title='Card Title' " is */}
                <CardContent>
                    <Typography variant="p"

                    >
                        Card Content {/* CONTENT DISPLAY */}
                    </Typography>
                    <IconButton aria-label="">
                        
                    </IconButton>
                </CardContent>
            </Card>

        </div>
    )
}