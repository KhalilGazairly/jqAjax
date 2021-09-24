$(function () {
	$("#myModal").on("shown.bs.modal", function () {
		$("#myInput").trigger("focus");
	});

	$("#singinModel").on("shown.bs.modal", function () {
		$("#myInput").trigger("focus");
	});

	// --------------- Get Movies ---------------------
	$.get(
		"https://api.themoviedb.org/3/trending/movies/day?api_key=446f27784db127c689ca6845a41ad142",
		function (data) {
			dataItem = data.results.slice(0, 10);
			galleryData = data.results.slice(0, 8);
			console.log(data);
			$.each(dataItem, function (index, val) {
				console.log(dataItem[index]);

				$("#item").append(`
				<div id="movie" class="pt-5 col-xl-2 col-lg-3 col-md-5 col-sm-6 col-6">
				<img class="w-100" src="http://image.tmdb.org/t/p/w500/${val.poster_path}" />
				    <h3  >${val.title}</h3>
				</div>`);
			});

			$.each(galleryData, function (i, value) {
				$(".gallery-images").append(
					`<img src="http://image.tmdb.org/t/p/w500/${value.poster_path}" width="22%" data-id="1"> `
				);
			});
		}
	);
});
