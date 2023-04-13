import React from "react";
import { Avatar, Card, CardContent, CardHeader, Typography, } from "@mui/material";

export default function FriendNoteCard({ user }) {
    return (
        <div>
            <Card>
                <CardHeader 
                    action={
                        <Avatar>

                        </Avatar>
                    }
                    title='Friend Name' 
                />
                {/*CONTENT DISPLAY on line 17 where " title='Card Title' " is */}
                <CardContent>
                    <Typography variant="p"

                    >
                        Card Content {/* CONTENT DISPLAY */}
                    </Typography>
                
                </CardContent>
            </Card>

        </div>
    )
}