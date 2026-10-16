import { useState } from 'react'
import './App.css'

function App() {
    const [taches, setTaches] = useState([])
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (text.trim() === '') return

        setTaches([...taches, { text: text, done: false }])
        setText('')
    }

    const removeTask = (index) => {
        setTaches(taches.filter((_, i) => i !== index))
    }

    const toggleTask = (index) => {
        setTaches(
            taches.map((tache, i) =>
                i === index ? { ...tache, done: !tache.done } : tache
            )
        )
    }

    const tachesNonValidees = taches.filter((taches) => !taches.done).length

    return (
        <>
            <h1>Ma Todo List</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Ajouter une tâche..."
                />
                <button type="submit">Ajouter</button>
            </form>

            <h2>Tâches restantes : {tachesNonValidees}</h2>

            <ul>
                {taches.length > 0 ? (
                    taches.map((tache, index) => (
                        <li key={index}>
                            <input
                                type="checkbox"
                                checked={tache.done}
                                onChange={() => toggleTask(index)}
                            />

                            {tache.done ? <s>{tache.text}</s> : tache.text}

                            <button
                                type="button"
                                onClick={() => removeTask(index)}
                            >
                                Supprimer
                            </button>
                        </li>
                    ))
                ) : (
                    <li>Aucune tâche pour le moment</li>
                )}
            </ul>
        </>
    )
}

export default App
