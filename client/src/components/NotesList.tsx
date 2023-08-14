import { trpc } from '../trpc';

export const NotesList = () => {
    const notes = trpc.note.get.useQuery();

    return (
        <div>{JSON.stringify(notes.data)}</div>
    )
};