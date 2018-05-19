export function toggleMenu(bool) {
    return {
        type: 'TOGGLE_MENU',
        payload: !bool
    }
}