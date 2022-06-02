import React from "react";
import { render,screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./button"

describe("when rendered with `onClick` prop", () => {
    it("should render the button", () => {
      render(
        <Button 
          onClick={() => {}} />
         );
      expect(
        screen.getByRole("button")
      ).toBeInTheDocument();
    });
  });



// describe("when the button is pressed", () => {
//   it("should call the `onClick` callback", () => {
//     const onClick = jest.fn();
//     render(
//       <Button 
//       onClick={onClick} />
//     );
    
//     fireEvent.click(screen.getByRole("button"));
//     expect(onClick).toHaveBeenCalledWith(
//       "Waves sent to Test Name!");
//   });
// });
