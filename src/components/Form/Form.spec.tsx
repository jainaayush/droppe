import React from "react";
import Form from "./Form";
import { render, screen } from "@testing-library/react";
import * as ReactDOM from "react-dom";
import { fireEvent } from '@testing-library/react'

describe("Initial render with fields", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Form on-submit={function (payload: { title: string; description: string; price: string; rate: string; }): void {
            throw new Error("Function not implemented.");
        }} />, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove()
    })

    it("Render correctly check", () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(screen.getByTestId("productAdd-form")).toBeInTheDocument();
        expect(screen.getByTestId("title")?.getAttribute('name')).toBe('title')
        expect(screen.getByTestId("price")?.getAttribute('name')).toBe('price')
        expect(screen.getByTestId("rating")?.getAttribute('name')).toBe('rating')
        expect(screen.getByTestId("description")?.getAttribute('name')).toBe('description')
        expect(screen.getByText('Product title: *')).toBeVisible()
        expect(screen.getByText('Product details: *')).toBeVisible()
        expect(screen.getByTestId("title")).toBeVisible()
        expect(screen.getByTestId("price")).toBeVisible()
        expect(screen.getByTestId("rating")).toBeVisible()
        expect(screen.getByTestId("description")).toBeVisible()
        expect(screen.getByTestId("button").textContent).toBe('Add a product')


    })

    it('should call handleChange for title field', () => {
        const event = {
            preventDefault() { },
            target: {
                value: "title"
            }
        }
        const titleInput = screen.getByTestId("title");
        fireEvent.change(titleInput, event)
    })

    it('should call handleChange for price field', () => {
        const event = {
            preventDefault() { },
            target: {
                value: 20
            }
        }
        const priceInput = screen.getByTestId("price");
        fireEvent.change(priceInput, event)

    })


    it('should call handleChange for ratings field', () => {
        const event = {
            preventDefault() { },
            target: {
                value: 3
            }
        }
        const ratingInput = screen.getByTestId("rating");
        fireEvent.change(ratingInput, event)

    })


    it('should call handleChange for description field', () => {
        const event = {
            preventDefault() { },
            target: {
                value: "description"
            }
        }
        const descInput = screen.getByTestId("description");
        fireEvent.change(descInput, event)

    })

    it('shoudld call onSubmit on form', () => {
        const jsdomAlert = window.alert;  // remember the jsdom alert
        window.alert = () => { };  // provide an empty implementation for window.alert

        const descInput = screen.getByTestId("productAdd-form");
        fireEvent.submit(descInput)
        window.alert = jsdomAlert;  // restore the jsdom alert

    })

})




