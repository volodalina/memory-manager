export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const START_OFFSET_PROCESS = 'START_OFFSET_PROCESS';
export const END_OFFSET_PROCESS = 'END_OFFSET_PROCESS';
export const ACTIVE_OFFSET_PROCESS = 'ACTIVE_OFFSET_PROCESS';
export const RESIZE_SLIDER = 'RESIZE_SLIDER';

export function nextSlide(section, position) {
  return {type: NEXT_SLIDE, section, position}
}
export function previousSlide(section) {
  return {type: PREVIOUS_SLIDE, section}
}

export function startOffsetProcess(pointerDrag, initialPointerX) {
  return {type: START_OFFSET_PROCESS, pointerDrag, initialPointerX}
}
export function endOffsetProcess(pointerDrag) {
  return {type: END_OFFSET_PROCESS, pointerDrag}
}
export function activeOffsetProcess(currentPointerX, initialPointerX) {
  let difX = initialPointerX - currentPointerX;
  return {type: ACTIVE_OFFSET_PROCESS, currentPointerX, difX}
}

export function resizeSlider() {
  return {type: RESIZE_SLIDER}
}
