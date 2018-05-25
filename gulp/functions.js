/**
 * Validate if there is end bar
 */
String.prototype.trainlingSlash = function() {
	return this.match(/\/+$/) === null ? this + '/' : this.split('').join('');
};

/**
 * REPLACE '/' TO '\'
 */
String.prototype.backSlash = function() {
	return this.split('/').join('\\');
};
