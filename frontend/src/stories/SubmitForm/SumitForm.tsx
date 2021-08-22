import React, { useEffect, useState } from "react";
import { FormHelperText, Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { } from "@material-ui/core/styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import {PROJECT, PAGE_INFO, STUDENT} from "../../api/fragments";
import {ADD_PROJECT} from "../../api/mutations";
import {STUDENTS} from "../../api/queries";


const SubmitForm = () =>{

    const [addProject] = useMutation(ADD_PROJECT);
    const [name, setName] = useState("");
    const [url,setUrl] = useState("");

    const {loading, data, error} = useQuery(STUDENTS);

    useEffect( () =>{
        console.log(data);
    }, [data]);

    const handNameUpdate = (event : any) =>{  
        setName(event.target.value);
    }

    const handUrlUpdate = (event : any) =>{
        setUrl(event.target.value);
    }

    const nameControl = <FormControl>
    <InputLabel htmlFor="my-input">Project Name</InputLabel>
    <Input id="project-input" aria-describeby="The project name" onChange={handNameUpdate}/>
    <FormHelperText id="The project name">The Github project name</FormHelperText>
    </FormControl>

    const urlControl = <FormControl>
    <InputLabel htmlFor="my-input">GitHub Url</InputLabel>
    <Input id="url-input" aria-describeby="The GitHub Url" onChange={handUrlUpdate}/>
    <FormHelperText id="The project name">The Github project Url</FormHelperText>
    </FormControl>

    const handleSubmit = async() => {
            try {
                await addProject({variables: {
                    name: name,
                    description: "",
                    link: url,
                    year: "2021",
                }})
            } catch(e) {
                console.log(e)
            }
        };


    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display:'flex', flexGrow: 1, alignContent: 'center', justifyContent: 'center'}}>
        {nameControl}
        {urlControl}
        </div>
        <Button onClick={handleSubmit}>Submit</Button>
    </div>
};


export default SubmitForm;