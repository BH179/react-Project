import React from "react";


class NoteInput extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            title:'',
            body:'',
            archived:false,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }




        onTitleChangeEventHandler(Event) {
            this.setState(() => {
              return {
                title: Event.target.value,
              }
            });
          }
          
          onBodyChangeEventHandler(Event) {
            this.setState(() => {
              return {
                body: Event.target.value,
              }
            });
          }
          
          onSubmitEventHandler(Event) {
            Event.preventDefault();
            this.props.addNote(this.state);
          }

          
    

    render() {
        return (
            
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <p className="note-input__char-limit">title-character:{50 - this.state.title.length}</p>
            <p className="note-item__date">{this.state.createdAt}</p>
            <input id='title' type="text" placeholder="Title" maxLength={50} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <p className="note-input__char-limit">character:{150 - this.state.body.length}</p>
            <input  id='body' className="note-input__body" type="text" maxLength={150} placeholder="Describe..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Submit</button>
          </form>
        )
      }
}

export default NoteInput;