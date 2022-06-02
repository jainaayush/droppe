import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./button"

describe("when rendered with `onClick` prop", () => {
  it("should render the button", () => {
    render(
      <Button
        children={""}
        onClick={() => { }} />
    );
    expect(screen.getByRole("button")
    ).toBeInTheDocument();
  });
});
