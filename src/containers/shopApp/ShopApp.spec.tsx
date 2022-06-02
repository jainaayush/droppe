import { ShopApp } from "./shop-app";
import React from "react";
import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import * as ReactDOM from "react-dom";
import Droppe from "../../images/droppe-logo.png"
import DoctorImg from "../../images/img1.png"
import LabImg from "../../images/img2.png"
describe("Initial render with fields", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ShopApp />, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove()
    })

    it("Render correctly check", () => {
        const logo = screen.getByTestId('droppeLogo');
        const doctorImg = screen.getByTestId('doctorsImg');
        const labImg = screen.getByTestId('labImg');

        expect(logo).toHaveAttribute('src', Droppe)
        expect(logo).toHaveAttribute('alt', 'Droppe')
        expect(doctorImg).toHaveAttribute('src', DoctorImg)
        expect(doctorImg).toHaveAttribute('alt', 'Doctors')
        expect(labImg).toHaveAttribute('src', LabImg)
        expect(labImg).toHaveAttribute('alt', 'Lab')
        expect(screen.getByText('Total products: 0')).toBeVisible()
        expect(screen.getByText('Number of favorites: 0')).toBeVisible()
        expect(screen.getByTestId("button").textContent).toBe('Send product proposal')
    })

})