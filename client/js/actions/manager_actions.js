export const CHANGE_POSITION_CONTAINER = 'CHANGE_POSITION_CONTAINER';
export const ADD_SECTION = 'ADD_SECTION';


export function changePositionContainer(section, position) {
  return {type: CHANGE_POSITION_CONTAINER, section, position}
}
export function addSection(section) {
  return {type: ADD_SECTION, section}
}
