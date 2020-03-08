/*
Functions so that WSAD moves player's sprite around on the map
    Function to make so that when player's sprite state isMoving = true;
        animates it
        activates randomizing battles function

Last saved state
Currently playing owned state = Last saved state (items, monsters, placement) + newly acquired 
    monsters & items, current level location
    -Equippable items include a property of {equipped: {true or false}}

Function for when a player opens start menu
    Load from last checkpoint
    Save (if we have time; otherwise, just save checkpoints. OR you can save, but no matter what, 
        your start POSITION is at the beginning of the map, but new items and monsters are saved)

Function for when a player opens character menu
    Menu with all equipable items in inventory; equ
    Menu with all usable items in inventory

Function so that when a player is walking around on the field they get random battle encounters
    Random encounters should be more likely the more the player has been walking

Function to make it so that when a battle starts, switch to the battle screen & ADD BATTLE STATE
    Display player's equipped monsters & BATTLE MENU for items
        Show player and player's monsters sprites (top 3) vs attacking monsters
        Player turn first - 
            MENU: 
                player attacks or casts spells, then player's monsters attack
                When it is a monster's turn, they have their own skills/attacks
                If an enemy monster has low enough health, the player can try to capture it
            Then enemy monsters attack; 
                Newly captured monsters are added to the monster list (kind of like a pokedex)
*/