import {Injectable} from '@angular/core';
import {GameState} from '../domain';

@Injectable({
    providedIn: 'root'
})

export class PersistenceService {

    public persist(state: GameState[]) {
        const statesJson = JSON.stringify(state);
        localStorage.setItem('triominos', statesJson);
    }

    public restore(): GameState[] {
        const statesJson = localStorage.getItem('triominos');
        return (statesJson !== null) ? JSON.parse(statesJson) : [];
    }
}
