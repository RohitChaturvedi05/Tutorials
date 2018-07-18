require.config({
	paths: {
		jquery: "libs/jquery"
	}
});




require(["renderer"], function (renderer) {

	renderer.attachEvent();
	renderer.renderList();

});

