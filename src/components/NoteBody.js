import React from "react";
import NoteList from "./NoteList";
import { getInitialData } from "../utils/InitialData";
import NoteInput from "./NoteInput";


class NoteBody extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            
        }
    
  
        
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);

    }
    onArchiveNoteHandler(id){
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => 
                note.id === id ? {...note, archived: !note.archived} : note),
            }
        })
    }

    onAddNoteHandler({title, body,archived}){
        this.setState((prevState)=>{
            return{
                notes:[
                    ...prevState.notes,
                    {
                        id:+new Date(),
                        title,
                        body,
                        archived,

                    }
                ],
                
            }
            
        });
    }


    onDeleteHandler(id){
        const notes  = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }


    render (){
        return(
            <div className="note-app__body">
                
                <h1>Input Notes</h1>
                <NoteInput addNote={this.onAddNoteHandler}/>      
                <h1>Personal Notes</h1>
                <NoteList notes={this.state.notes.filter((notes)=>notes.archived === false)} onDelete={this.onDeleteHandler} onArchived={this.onArchiveNoteHandler}/>
                <h1>Archived Notes</h1>
                <NoteList notes={this.state.notes.filter((notes)=>notes.archived === true)} onDelete={this.onDeleteHandler} onArchived={this.onArchiveNoteHandler}/>
                
            </div>
        );
    }
    
}

export default NoteBody;