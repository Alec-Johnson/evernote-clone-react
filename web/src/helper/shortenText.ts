export const shortenText = (text: string, number = 30) => {
	return text.length > number ? `${text.substring(0, number)}...` : text;
};
