import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";

const Registration = () => {
    const [id, setId] = useState()
    const [name, setName] = useState()
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: "#fff",
                marginBottom: "30px",
                display: "block",
            }}
        >
            <Grid item xs={12}>
                <Typography component={"h1"} sx={{ color: "black" }}>
                    User Form
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                <Typography
                    component={"label"}
                    htmlFor="id"
                    sx={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: "400px" }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: "flex" }}>
                <Typography
                    component={"label"}
                    htmlFor="name"
                    sx={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: "400px" }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            <Button
                sx={{
                    margin: "auto",
                    marginTop: "20px",
                    backgroundColor: "#00c6e6",
                    color: "#000000",
                    marginLeft: "15px",
                    marginBottom: "20px",
                    "&:hover": {
                        opacity: "0.7",
                        backgroundColor: "00c6e6",
                    },
                }}
            >
                Add
            </Button>
        </Grid>
    );
};

export default Registration;
