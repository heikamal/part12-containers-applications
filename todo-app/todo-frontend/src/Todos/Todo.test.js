import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react"
import Todo from "./Todo"

describe('Testing single Todo component', () => {
  const todoNot = {
    text: 'Test frontend',
    done: false
  }

  const todoDone = {
    text: 'Code the app',
    done: true
  }

  test('Shows the right content for todo not yet done', () => {
    const handleOnClickComplete = jest.fn()
    const handleOnClickDelete = jest.fn()

    render(<Todo todo={todoNot} onClickComplete={handleOnClickComplete} onClickDelete={handleOnClickDelete}/>)

    const testText = screen.getByText('Test frontend')
    const testDone = screen.getByText('This todo is not done')

    expect(testText).toBeDefined()
    expect(testDone).toBeDefined()
  })

  test('Shows the right content for todo already done', () => {
    const handleOnClickComplete = jest.fn()
    const handleOnClickDelete = jest.fn()

    render(<Todo todo={todoDone} onClickComplete={handleOnClickComplete} onClickDelete={handleOnClickDelete}/>)

    const testText = screen.getByText('Code the app')
    const testDone = screen.getByText('This todo is done')

    expect(testText).toBeDefined()
    expect(testDone).toBeDefined()
  })
})