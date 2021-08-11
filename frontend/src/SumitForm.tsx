import React, { useState } from "react";
import { FormHelperText, Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { } from "@material-ui/core/styles";

const SubmitForm = () =>{

    const handleClick = () => {
        alert("Submit Form Clicked!");
    }

    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display:'flex', flexGrow: 1, alignContent: 'center', justifyContent: 'center'}}>
            <FormControl>
                <InputLabel htmlFor="my-input">Project Name</InputLabel>
                <Input id="my-input" aria-describeby="The project name"/>
                <FormHelperText id="The project name">The Github project name</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">GitHub Url</InputLabel>
                <Input id="my-input" aria-describeby="The GitHub Url"/>
                <FormHelperText id="The project name">The Github project Url</FormHelperText>
            </FormControl>
        </div>
        <Button onClick={handleClick}>Submit</Button>
    </div>
};


export default SubmitForm;