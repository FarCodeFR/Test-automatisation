import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('App', () => {
    it('Affiche le titre', () => {
        render(<App />)
        expect(screen.getByText('Todo List')).toBeInTheDocument()
    })
    it('Affiche le button ajouter', () => {
        render(<App />)
        expect(screen.getByText('Ajouter')).toBeInTheDocument()
    })
    it("Ajout d'une nouvelle tâche", async () => {
        const user = userEvent.setup()
        render(<App />)

        const messageTache = screen.getByRole('textbox')
        const buttonAjouter = screen.getByRole('button', {
            name: /Ajouter/i,
        })
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: /Tâches restantes : 0/i,
            })
        )
        await user.type(messageTache, 'Test')
        await user.click(buttonAjouter)
        expect(
            screen.getByRole('heading', {
                level: 2,
                name: /Tâches restantes : 1/i,
            })
        )
    })
})
