import React from "react";
import NoteContent from "./NoteContent";


function NoteList({notes, onDelete, onArchived}){
    return(
        <>
        { notes.length === 0?(<div className="notes-list">
            <h2>Empty Notes</h2>
        </div>):(
        <div className="notes-list">
                {
                    notes.map((note)=>(
                        <NoteContent 
                        key={note.id} 
                        id={note.id} 
                        onDelete={onDelete} 
                        createdAt={note.id}
                        onArchived={onArchived}
                      {...note}/>
                    ))
                }
                
          </div>
            )}
          </>
    
        );
}

export default NoteList;