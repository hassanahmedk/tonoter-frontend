import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  populateDisplaySection,
  unpopulateDisplaySection,
} from "../../../redux/display";
import StarIcon from "@mui/icons-material/Star";

import CustomizedMenus from "./NotesMenu";
import { editNote } from "../../../redux/notes";

function Note(props) {
  const dispatch = useDispatch();
  const { themeStyles } = useSelector((state) => state.theme);

  let { id, title, content, tags, author, dateModified, favorite } = props;

  function setTags(tag) {
    let bgColor = "";
    if (tag === "Work" || tag === "work") {
      bgColor = "#52c875";
    } else if (tag === "Study" || tag === "study") {
      bgColor = "#EC7272";
    } else if (tag === "Home" || tag === "home") {
      bgColor = "#FECD70";
    } else {
      //  console.log(tag);
      bgColor = "#00ADB5";
    }


    return (
      <p className="note-tag" style={{ backgroundColor: bgColor }}>
        {tag}
      </p>
    );
  }

  let noteClass = "note " + themeStyles.note.shadowClass;

  let favoriteStarColor = favorite ? "#DAA520" : themeStyles.note.starIconColor;

  return (
    <div
      className={noteClass}
      style={themeStyles.note}
      onClick={(e) => {
        //  props.noteSelected && document.querySelector(".note-selected").setAttribute("class", "note");
        if (e.target.classList.contains("note-selected")) {
          dispatch(unpopulateDisplaySection());
          e.target.setAttribute("class", noteClass);
        } else if (e.target.classList.contains("note")) {
          if (document.querySelector(".note-selected") !== null) {
            document
              .querySelector(".note-selected")
              .setAttribute("class", noteClass);
          }

          e.target.setAttribute("class", "note note-selected");
          //  props.makeNoteSelected();
          dispatch(
            populateDisplaySection({
              id: props.id,
              title: props.title,
              content: props.content,
              tags: props.tags,
              author: props.author,
              dateModified: props.dateModified,
            })
          );
        }
        if (document.querySelector(".note-selected") === null) {
          //props.noNotesSelected();
        }
      }}
    >
      <div className="note-title heading" style={themeStyles.note.title}>
        {props.title}
        {/* {props.title.slice(0,17)}  */}
      </div>

      <div className="note-menu">
        <CustomizedMenus
          id={props.id}
          title={props.title}
          content={props.content}
          tags={props.tags}
          iconColor={themeStyles.note.content.color}
        />
      </div>

      <p className="note-content" style={themeStyles.note.content}>
        {props.content}
        {/* {props.content.slice(0,50) + "..."}  */}
      </p>

      <div className="note-bottom">
        <span className="tags-container">{props.tags.map(setTags)}</span>

        <div className="note-footer">
          <p className="note-date" style={themeStyles.note.date}>
            {dateModified}
          </p>
          <div className="note-footer-star">
            <StarIcon
              sx={{ color: favoriteStarColor }}
              onClick={() => {
                dispatch(
                  editNote(
                    props.id,
                    { id, title, content, tags, author, favorite },
                    "makeFavorite"
                  )
                );
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Note;
