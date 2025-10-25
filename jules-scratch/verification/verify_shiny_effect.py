
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:8000")

    # Wait for the grid to be populated
    page.wait_for_selector("[data-pokemon-id='151']")

    # Use evaluate to force a pokemon to be shiny, reveal it, and open the modal
    page.evaluate("""() => {
        const bulbasaur = pokemonData.find(p => p.id === 1);
        if (bulbasaur) {
            bulbasaur.isShiny = true;
            const tile = document.querySelector("[data-pokemon-id='1']");
            revealPokemon(bulbasaur, tile);
            displayPokemonModal(bulbasaur);
        }
    }""")

    # Wait for the modal to be visible
    page.wait_for_selector("#pokedex-modal", state="visible")

    # Take a screenshot of the pokemon image
    image_element = page.locator("#pokemon-image")
    image_element.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
