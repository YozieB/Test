import {create} from "zustand";
import {IPeople, IPeopleStore} from "../interfaces";

export const usePeopleStore = create<IPeopleStore>((set, get) => ({
    people: [],
    page: 1,
    activePeople: <IPeople>{},
    setActivePeople: (value: IPeople) => {
        set(() => ({
            activePeople: value
        }))
    },
    isPeopleLoading: false,
    fetchPeople: () => {
        set(() => ({
            isPeopleLoading: true,
        }))
        fetch(`https://swapi.dev/api/people/?page=${get().page}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                set(state => ({
                    people: [...state.people, ...data.results],
                    page: Number(data.next[data.next.length - 1]),
                }))
            })
            .finally(() => set(() => ({isPeopleLoading: false})))
    }
}))