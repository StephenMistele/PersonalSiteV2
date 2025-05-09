/**
 * Smoothly scrolls to the element with the given ID
 * @param id The ID of the element to scroll to (without the # prefix)
 */
export const smoothScrollTo = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
