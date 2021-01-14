import React, {Component} from 'react';
import "./editor.css";
import "./Table"
import Table from "./Table";
import Popup from "./Popup";
import EditScene from "./EditScene";

class Editor extends Component {
    render() {
        return (
            <div className="editor">
                <div className="editor__header">Редактор сценариев</div> <hr className="line" />
                <Table></Table>
                <EditScene/>
            </div>
        );
    }
}

export default Editor;