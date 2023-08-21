export function dropDownMenu(trigger, dropdownContent) {
	return trigger.addEventListener("click", function () {
		dropdownContent.classList.toggle("active");
	});
}