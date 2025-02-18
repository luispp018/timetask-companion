import { describe, test, expect, vi } from "vitest";
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import TimerPage from "../timerpage";
import { BrowserRouter } from "react-router-dom";

vi.useFakeTimers();

describe("TimerPage Component", () => {
  test("should start the timer, switch from work to break, show notification, stop, start, and reset", async () => {
    render(
      <BrowserRouter>
        <TimerPage />
      </BrowserRouter>
    );

    // Start the timer
    const startButton = screen.getByText("Start");
    fireEvent.click(startButton);
    
    // Advance timer to when it reaches 0 (work → break)
    act(() => {
      vi.advanceTimersByTime(6 * 1000); // Fast-forward past work period
    });

    // Check if mode changed to 'Break'
    screen.debug();
    expect(screen.getByText("Break")).toBeInTheDocument();

    // Check if notification appears
    expect(screen.getByText("Time for a break!")).toBeInTheDocument();

    // Stop the timer
    const pauseButton = screen.getByText("Pause");
    fireEvent.click(pauseButton);
    expect(screen.getByText("Start")).toBeInTheDocument(); // Ensures timer is paused

    // Start the timer again
    fireEvent.click(startButton);
    expect(screen.getByText("Pause")).toBeInTheDocument();

    // Reset the timer
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    // Check if timer reset correctly
    expect(screen.getByText("5:00")).toBeInTheDocument(); // Reset to default work time
  });
});
