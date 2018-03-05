// import dispatch from 'redux';
import axios from 'axios';

import { apiPrefics } from '../../etc/config.json';
import ACTIONS from '../constants';


export function loadNotes() {
    return (dispatch) => {
        dispatch({
            type: ACTIONS.FETCH_NOTES_REQUEST
        });

        axios.get(`${apiPrefics}/notes`)
            .then(({data}) => {
                dispatch({
                    type: ACTIONS.FETCH_NOTES_SUCCESS,
                    notes: data
                })
            })
            .catch(err => {
                dispatch({
                    type:ACTIONS.FETCH_NOTES_FAILURE,
                    error: err
                })
        })
    }
};


export function createNote(note) {
    return (dispatch) => {
    
        dispatch({
            type: ACTIONS.FETCH_NOTES_REQUEST
        });
        
        axios.post(`${apiPrefics}/notes`, note )
            .then(() => {
                dispatch({
                    type:ACTIONS.REMOVE_NOTE_SUCCESS,
                    note
                })
            })
            .catch(err => {
                dispatch({
                    type:ACTIONS.FETCH_NOTES_FAILURE,
                    error: err
                })
            })
    }
};


export function deleteNote(noteId) {
    return (dispatch) => {
    
        dispatch({
            type: ACTIONS.REMOVE_NOTE_REQUEST
        });

        axios.delete(`${apiPrefics}/notes`, noteId)
            .then(() => {
                dispatch({
                    type:ACTIONS.REMOVE_NOTE_SUCCESS,
                    noteId
                })
            })
            .catch(err => {
                dispatch({
                    type:ACTIONS.FETCH_NOTES_FAILURE,
                    error: err
                })
            })
    }
};