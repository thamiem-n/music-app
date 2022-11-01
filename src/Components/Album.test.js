/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Album from './Album'


describe("Album component", () => {

    beforeEach(() => {
        render(<Album album={["test1", "test2"]}  />)
    })

    it("Displays all albums", () => {
        const albumHeader = screen.getByText("Albums:")
        expect(albumHeader).toBeInTheDocument();
        expect(albumHeader.textContent).toBe("Albums:");
    })

    it("Displays all albums", () => {
        const main = screen.getByRole("main")
        // console.log("#################",main.children.length);
        expect(main).toBeInTheDocument();
        expect(main.children.length).toBe(2);
    })

    it("Displays correct list", () => {
        const list = screen.getAllByRole("list")
        expect(list[0]).toBeInTheDocument();
        expect(list[1]).toBeInTheDocument();
        expect(list[0].textContent).toBe("test1");
        expect(list[1].textContent).toBe("test2");
    })

    it("updates the like/dislike state", async () => {
        const button = screen.getByText("Like")
        expect(button).toBeInTheDocument();
        expect(button.textContent).toBe("Like")
        expect(button.style.color).toBe("green")

        await userEvent.click(button);

        expect(button.textContent).toBe("Dislike")
        expect(button.style.color).toBe("red")
    })

    it("add a new album", async () => {
        const input = screen.getByRole("input")
        const button = screen.getByText("submit")

        expect(input).toBeInTheDocument();
        expect(input.textContent).toBe("");

        expect(button).toBeInTheDocument();
        expect(button.textContent).toBe("submit")


        // await userEvent.type("test")
        // await userEvent.click(button);

        
    })


})