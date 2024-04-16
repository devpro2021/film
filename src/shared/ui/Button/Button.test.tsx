import { Button } from "@shared/ui/Button/Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("render TEST Button", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });
});
