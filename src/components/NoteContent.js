import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { showFormattedDate } from "../utils/InitialData";

function NoteContent({title, body, id, onDelete, createdAt, onArchived}){
    return( 
        <section>
                <div className="note-item__body">
                <h2 className="note-item__title">{title}</h2>
                <h4 className="note-item__date">{showFormattedDate(createdAt)}</h4>
                <p className="note-item__content">{body}</p>
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} onArchived={onArchived}/>
            </div>  
            
        </section>
    );
}

export default NoteContent;