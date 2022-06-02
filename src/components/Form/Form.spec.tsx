import Form from "./form";
import React from "react";
import { render, screen  } from "@testing-library/react";
import * as ReactDOM from "react-dom";

describe("", ()=> {
    let container : HTMLDivElement;

    beforeEach(()=>{
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Form on-submit={function (payload: { title: string; description: string; price: string; rate: string; }): void {
            throw new Error("Function not implemented.");
        } } />, container)
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container.remove()
    })

    it("Render correctly check",()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        expect(container.querySelector("[data-test='productAdd-form']")).toBeInTheDocument();
        expect(container.querySelector("[data-test='title']")?.getAttribute('name')).toBe('title');
        expect(container.querySelector("[data-test='price']")?.getAttribute('name')).toBe('price');
        expect(container.querySelector("[data-test='rating']")?.getAttribute('name')).toBe('rating');
        expect(container.querySelector("[data-test='description']")?.getAttribute('name')).toBe('description');
        expect(screen.getByText('Add a product')).toBeVisible()
        expect(screen.getByText('Product title: *')).toBeVisible()
        expect(screen.getByText('Product details: *')).toBeVisible()
        
        
    })

})