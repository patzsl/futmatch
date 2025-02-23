"use client"

import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import LoginPage from "@/app/login/page"

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe("LoginPage", () => {
  it("renders login form", () => {
    render(<LoginPage />)

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument()
  })

  it("shows validation errors for invalid email", async () => {
    render(<LoginPage />)

    const emailInput = screen.getByLabelText(/email/i)
    const submitButton = screen.getByRole("button", { name: /entrar/i })

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "invalid-email" } })
      fireEvent.click(submitButton)
    })

    expect(await screen.findByText(/email inválido/i)).toBeInTheDocument()
  })

  it("shows validation errors for short password", async () => {
    render(<LoginPage />)

    const passwordInput = screen.getByLabelText(/senha/i)
    const submitButton = screen.getByRole("button", { name: /entrar/i })

    await act(async () => {
      fireEvent.change(passwordInput, { target: { value: "123" } })
      fireEvent.click(submitButton)
    })

    expect(await screen.findByText(/senha deve ter no mínimo 6 caracteres/i)).toBeInTheDocument()
  })

  it("submits form with valid data", async () => {
    render(<LoginPage />)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/senha/i)
    const submitButton = screen.getByRole("button", { name: /entrar/i })

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } })
      fireEvent.change(passwordInput, { target: { value: "123456" } })
      fireEvent.click(submitButton)
    })

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /entrar/i })).toBeDisabled()
    })
  })
})

